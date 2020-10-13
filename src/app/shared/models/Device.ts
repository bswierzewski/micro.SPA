import { Kind, Version, DeviceComponent, Category, Address } from './';

export class Device {
  id: number;
  name: string;
  icon?: string;
  created?: Date;
  addressId?: number;
  address?: Address;
  kindId?: number;
  kind?: Kind;
  categoryId?: number;
  category?: Category;
  component?: DeviceComponent;
  componentId?: number;
  versionId?: number;
  version?: Version;
  isAutoUpdate?: boolean;
}
