import { IAdminDeviceInformation } from '../../admin/pages/information/admin-device-information/IAdminDeviceInformation';

export interface DeviceComponent extends IAdminDeviceInformation {
  id: number;
  name: string;
  iconName: string;
  categoryId?: number;
}
