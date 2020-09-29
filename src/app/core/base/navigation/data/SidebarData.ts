import { SideMenuItem } from '.';

export let SidebarData = {
  AdminNavMenuItems: [
    { path: '/portal', title: 'Portal', icon: 'home' },
    {
      path: '/admin/devices',
      title: 'Devices',
      icon: 'perm_device_information',
    },
    {
      path: '/admin/versions',
      title: 'Versions',
      icon: 'admin_panel_settings',
    },
    {
      path: '/admin/information/kinds',
      title: 'Information',
      icon: 'settings',
    },
  ] as SideMenuItem[],

  HomeNavMenuItems: [
    { path: '/home', title: 'Home', icon: 'home' },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
    { path: '/admin', title: 'Admin', icon: 'admin_panel_settings' },
  ] as SideMenuItem[],
};
