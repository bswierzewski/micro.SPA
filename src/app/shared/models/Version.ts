import { Kind, DeviceComponent } from './';

export class Version {
  id?: number;
  created?: Date;
  name: string;
  major: number;
  minor: number;
  patch: number;
  kindId?: number;
  kind?: Kind;
  componentId?: number;
  Component?: DeviceComponent;
  fileData?: File;
}
