import { Device } from 'src/app/modules/models/Device';

export interface DeviceDialogDataModel {
  devices: Device[];
  selectedDevices: Device[];
}
