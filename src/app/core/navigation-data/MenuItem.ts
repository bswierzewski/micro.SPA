import { MenuItem, MenuGroup } from '../../shared/components/menu-button/models';

export let MenuGroups: MenuGroup[] = [
  {
    group: 'Home',
    icon: 'fas fa-home',
    items: [
      { path: '/home', title: 'Home', icon: 'fas fa-home' },
      { path: '/home/dashboard', title: 'Dashboard', icon: 'fas fa-clipboard-check' },
      { path: '/home/devices', title: 'Devices', icon: 'fas fa-mobile-alt' },
    ] as MenuItem[],
  },
  {
    group: 'Settings',
    icon: 'fas fa-cogs',
    items: [
      {
        path: '/settings/devices',
        title: 'Devices',
        icon: 'fas fa-microchip',
      },
      {
        path: '/settings/versions',
        title: 'Versions',
        icon: 'fas fa-info-circle',
      },
      {
        path: '/settings/information/kinds',
        title: 'Information',
        icon: 'fas fa-cogs',
      },
    ] as MenuItem[],
  },
  {
    group: 'Admin',
    icon: 'fas fa-user-cog',
    roles: ['Admin'],
    items: [
      {
        path: '/admin/users',
        title: 'Users',
        icon: 'fas fa-users',
      },
      {
        path: '/admin/roles',
        title: 'Roles',
        icon: 'fas fa-user-tag',
      },
    ] as MenuItem[],
  },
];
