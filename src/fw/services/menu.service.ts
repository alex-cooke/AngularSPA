import { MenuItem } from './MenuItem';
import { Injectable } from '@angular/core';


@Injectable()
export class MenuService {

  items: Array<MenuItem>;
  isVertical: boolean = false;
  showingLeftSideMenu: boolean = false;

  toggleLeftSideMenu(): void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

}
