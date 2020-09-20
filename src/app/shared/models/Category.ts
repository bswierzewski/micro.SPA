import { ITabListFormData } from 'src/app/shared/components/tab-list-form';
import { DeviceComponent } from './DeviceComponent';

export class Category implements ITabListFormData {
  id: number;
  name: string;
  icon: string;
  deviceComponentIds: number[];
}
