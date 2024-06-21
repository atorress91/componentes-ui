export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  badge: string;
  badgeClass: string;
  submenu: RouteInfo[];
}
