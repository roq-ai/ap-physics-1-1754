import { TemplateInterface } from 'interfaces/template';
import { TopicInterface } from 'interfaces/topic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  template?: TemplateInterface[];
  topic?: TopicInterface[];
  user?: UserInterface;
  _count?: {
    template?: number;
    topic?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
