import { IAdminDeviceInformation } from 'src/app/shared/components/admin-device-information/IAdminDeviceInformation';

export class Category implements IAdminDeviceInformation {
  id: number;
  name: string;
  iconName: string;
  deviceComponents: number[];
}
