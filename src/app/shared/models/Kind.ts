import { IAdminDeviceInformation } from 'src/app/shared/components/admin-device-information/IAdminDeviceInformation';

export class Kind implements IAdminDeviceInformation {
  id: number;
  created: Date;
  name: string;
  photoUrl: string;
}
