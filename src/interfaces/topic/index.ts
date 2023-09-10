import { QuestionGenerationInterface } from 'interfaces/question-generation';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TopicInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  question_generation?: QuestionGenerationInterface[];
  organization?: OrganizationInterface;
  _count?: {
    question_generation?: number;
  };
}

export interface TopicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
