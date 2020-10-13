import { DeviceComponent } from './DeviceComponent';

export class Category {
  id: number;
  name: string;
  icon: string;
  componentIds: number[];
  components: DeviceComponent[];
}
