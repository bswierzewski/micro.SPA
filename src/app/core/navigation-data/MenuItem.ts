export interface MenuItem {
  title: string;
  path: string;
  icon?: string;
}
export interface MenuGroup {
  group: string;
  icon: string;
  items: MenuItem[];
}

export let MenuGroups: MenuGroup[] = [
  {
    group: 'Home',
    icon: 'home',
    items: [
      { path: '/home', title: 'Home', icon: 'home' },
      { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
      { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
    ] as MenuItem[],
  },
  {
    group: 'Admin',
    icon: 'settings',
    items: [
      {
        path: '/admin/devices',
        title: 'Devices',
        icon: 'perm_device_information',
      },
      {
        path: '/admin/versions',
        title: 'Versions',
        icon: 'swap_vertical_circle',
      },
      {
        path: '/admin/information/kinds',
        title: 'Information',
        icon: 'settings',
      },
    ] as MenuItem[],
  },
];
