import { TopicInterface } from 'interfaces/topic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QuestionGenerationInterface {
  id?: string;
  number_of_questions: number;
  topic_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  topic?: TopicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface QuestionGenerationGetQueryInterface extends GetQueryInterface {
  id?: string;
  topic_id?: string;
  user_id?: string;
}
