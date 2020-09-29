import { DeviceForList } from 'src/app/shared/models';

export interface DeviceDialogDataModel {
  devices: DeviceForList[];
  selectedDevices: DeviceForList[];
}
