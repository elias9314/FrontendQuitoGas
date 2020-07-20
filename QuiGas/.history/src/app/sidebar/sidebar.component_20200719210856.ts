import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/cliente', title: 'Cliente',  icon: 'pe-7s-user', class: '' },
    { path: '/gas', title: 'Gas',  icon: 'pe-7s-note2', class: '' },
    { path: '/pedido', title: 'Pedido',  icon: 'pe-7s-note2', class: '' },
    { path: '/sucursal', title: 'Sucursal',  icon: 'pe-7s-note2', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
