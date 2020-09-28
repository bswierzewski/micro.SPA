import { Category } from './Category';

export class DeviceComponent {
  id: number;
  name: string;
  icon: string;
  categoryId?: number;
  category?: Category;
}
