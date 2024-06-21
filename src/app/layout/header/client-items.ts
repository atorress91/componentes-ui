import { RouteInfo } from "./header.metadata";

export const ClientRoutes: RouteInfo[] = [

  {
    path: '/app/home',
    title: 'Home',
    icon: 'bi-house-door',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [
      {
        path: '',
        title: 'Opcion1',
        icon: 'bi-house-door',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        submenu: [],
      },
      {
        path: '',
        title: 'Opcion2',
        icon: 'bi-house-door',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        submenu: [],
      }
    ],
  },
  {
    path: '/app/invoices',
    title: 'Productos',
    icon: 'bi-cart',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: '/app/products',
    title: 'Home',
    icon: '',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },

]
