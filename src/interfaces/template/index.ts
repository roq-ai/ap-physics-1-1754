import { QuestionInterface } from 'interfaces/question';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TemplateInterface {
  id?: string;
  name: string;
  content: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  question?: QuestionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    question?: number;
  };
}

export interface TemplateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  organization_id?: string;
}
