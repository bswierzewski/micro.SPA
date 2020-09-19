import { ITabListFormData } from 'src/app/shared/components/tab-list-form';

export class DeviceComponent implements ITabListFormData {
  id: number;
  name: string;
  icon: string;
  categoryId?: number;
}
