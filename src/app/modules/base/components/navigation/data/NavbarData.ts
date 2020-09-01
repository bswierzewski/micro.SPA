import { NavMenuItem } from '../../navigation/navbar/Models/NavMenuItem';

export let NavbarData = {
  admin: {
    AdminNavMenuItems: [
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
        path: '/admin/devices_information',
        title: 'Information',
        icon: 'settings',
      },
    ] as NavMenuItem[],
    AdminNavExpandedMenuItems: [
      { path: '/home', title: 'Home', icon: 'home' },
      {
        path: '',
        title: 'Logout',
        icon: 'exit_to_app',
      },
    ] as NavMenuItem[],
  },

  home: {
    HomeNavMenuItems: [
      { path: '/home', title: 'Home', icon: 'home' },
      { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
      { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
    ] as NavMenuItem[],
    HomeNavExpandedMenuItems: [
      { path: '/admin', title: 'Admin', icon: 'admin_panel_settings' },
      { path: '', title: 'Logout', icon: 'exit_to_app' },
    ] as NavMenuItem[],
  },
};
