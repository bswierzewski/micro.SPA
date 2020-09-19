import { ITabListFormData } from 'src/app/shared/components/tab-list-form';

export class Category implements ITabListFormData {
  id: number;
  name: string;
  icon: string;
  deviceComponentIds: number[];
}
