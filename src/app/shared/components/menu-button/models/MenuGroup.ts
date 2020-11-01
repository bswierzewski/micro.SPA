import { MenuItem } from './';

export interface MenuGroup {
  group: string;
  icon: string;
  path?: string;
  items?: MenuItem[];
  roles?: string[];
}
