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
    icon: 'fas fa-home',
    items: [
      { path: '/home', title: 'Home', icon: 'fas fa-home' },
      { path: '/dashboard', title: 'Dashboard', icon: 'fas fa-clipboard-check' },
      { path: '/devices', title: 'Devices', icon: 'fas fa-mobile-alt' },
    ] as MenuItem[],
  },
  {
    group: 'Admin',
    icon: 'fas fa-user-cog',
    items: [
      {
        path: '/admin/devices',
        title: 'Devices',
        icon: 'fas fa-mobile-alt',
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
