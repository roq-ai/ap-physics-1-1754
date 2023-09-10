import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
  content: yup.string().required(),
  question_topic: yup.string().required(),
  template_id: yup.string().nullable().required(),
});
