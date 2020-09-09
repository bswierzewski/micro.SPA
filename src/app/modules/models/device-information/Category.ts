import { IAdminDeviceInformation } from '../../admin/pages/information/admin-device-information/IAdminDeviceInformation';
import { DeviceComponent } from './DeviceComponent';
export interface Category extends IAdminDeviceInformation {
  id: number;
  name: string;
  iconName: string;
  deviceComponents: DeviceComponent[];
}
