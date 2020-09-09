import { IAdminDeviceInformation } from '../../admin/pages/information/admin-device-information/IAdminDeviceInformation';
export interface Kind extends IAdminDeviceInformation {
  id: number;
  created: Date;
  name: string;
  photoUrl: string;
}
