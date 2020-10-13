import { Device } from 'src/app/shared/models';

export interface DeviceDialogDataModel {
  devices: Device[];
  selectedDevices: Device[];
}
