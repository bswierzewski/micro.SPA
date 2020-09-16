import { IAdminDeviceInformation } from 'src/app/shared/components/admin-device-information/IAdminDeviceInformation';

export class DeviceComponent implements IAdminDeviceInformation {
  id: number;
  name: string;
  iconName: string;
  categoryId?: number;
}
