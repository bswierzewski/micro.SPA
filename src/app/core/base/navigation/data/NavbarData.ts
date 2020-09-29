import { NavMenuItem } from '.';

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
        path: '/admin/information/kinds',
        title: 'Information',
        icon: 'settings',
      },
    ] as NavMenuItem[],
    AdminNavExpandedMenuItems: [{ path: '/home', title: 'Home', icon: 'home' }] as NavMenuItem[],
  },

  home: {
    HomeNavMenuItems: [
      { path: '/home', title: 'Home', icon: 'home' },
      { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
      { path: '/devices', title: 'Devices', icon: 'perm_device_information' },
    ] as NavMenuItem[],
    HomeNavExpandedMenuItems: [{ path: '/admin', title: 'Admin', icon: 'admin_panel_settings' }] as NavMenuItem[],
  },
};
