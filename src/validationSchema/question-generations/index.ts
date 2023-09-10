import * as yup from 'yup';

export const questionGenerationValidationSchema = yup.object().shape({
  number_of_questions: yup.number().integer().required(),
  topic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
