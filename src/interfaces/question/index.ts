import { TemplateInterface } from 'interfaces/template';
import { GetQueryInterface } from 'interfaces';

export interface QuestionInterface {
  id?: string;
  content: string;
  question_topic: string;
  template_id: string;
  created_at?: any;
  updated_at?: any;

  template?: TemplateInterface;
  _count?: {};
}

export interface QuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  question_topic?: string;
  template_id?: string;
}
