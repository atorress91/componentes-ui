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
    submenu: [],
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
    path: '/admin/products',
    title: 'Mis Facturas',
    icon: 'bi-receipt',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
  {
    path: '/admin/collection',
    title: 'Mi Colección',
    icon: 'bi-collection',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    submenu: [],
  },
];
