import { Kind, Version, DeviceComponent, Category, Address } from './';

export class Device {
  id: number;
  created?: Date;
  name: string;
  icon?: string;
  address?: Address;
  kind?: Kind;
  category?: Category;
  component?: DeviceComponent;
  version?: Version;
}
