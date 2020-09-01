import { SideMenuItem } from '../../navigation/sidebar/Models/SideMenuItem';

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
      path: '/admin/devices_information',
      title: 'Information',
      icon: 'settings',
    },
    { path: '', title: 'Logout', icon: 'exit_to_app' },
  ] as SideMenuItem[],

  HomeNavMenuItems: [
    { path: '/home', title: 'Home', icon: 'home' },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
    { path: '/admin', title: 'Admin', icon: 'admin_panel_settings' },
    { path: '', title: 'Logout', icon: 'exit_to_app' },
  ] as SideMenuItem[],
};
