import { Device } from 'src/app/shared/models/Device';

export interface DeviceDialogDataModel {
  devices: Device[];
  selectedDevices: Device[];
}
