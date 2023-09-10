import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createQuestionGeneration } from 'apiSdk/question-generations';
import { questionGenerationValidationSchema } from 'validationSchema/question-generations';
import { TopicInterface } from 'interfaces/topic';
import { UserInterface } from 'interfaces/user';
import { getTopics } from 'apiSdk/topics';
import { getUsers } from 'apiSdk/users';
import { QuestionGenerationInterface } from 'interfaces/question-generation';

function QuestionGenerationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: QuestionGenerationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createQuestionGeneration(values);
      resetForm();
      router.push('/question-generations');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<QuestionGenerationInterface>({
    initialValues: {
      number_of_questions: 0,
      topic_id: (router.query.topic_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: questionGenerationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Question Generations',
              link: '/question-generations',
            },
            {
              label: 'Create Question Generation',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Question Generation
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Number Of Questions"
            formControlProps={{
              id: 'number_of_questions',
              isInvalid: !!formik.errors?.number_of_questions,
            }}
            name="number_of_questions"
            error={formik.errors?.number_of_questions}
            value={formik.values?.number_of_questions}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('number_of_questions', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<TopicInterface>
            formik={formik}
            name={'topic_id'}
            label={'Select Topic'}
            placeholder={'Select Topic'}
            fetcher={getTopics}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/question-generations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'question_generation',
    operation: AccessOperationEnum.CREATE,
  }),
)(QuestionGenerationCreatePage);
