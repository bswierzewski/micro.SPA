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
    group: 'Admin',
    icon: 'fas fa-user-cog',
    items: [
      {
        path: '/admin/devices',
        title: 'Devices',
        icon: 'fas fa-microchip',
      },
      {
        path: '/admin/versions',
        title: 'Versions',
        icon: 'fas fa-info-circle',
      },
      {
        path: '/admin/information/kinds',
        title: 'Information',
        icon: 'fas fa-cogs',
      },
    ] as MenuItem[],
  },
];
