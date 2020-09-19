import { ITabListFormData } from 'src/app/shared/components/tab-list-form';

export class Kind implements ITabListFormData {
  id: number;
  created: Date;
  name: string;
  icon: string;
}
