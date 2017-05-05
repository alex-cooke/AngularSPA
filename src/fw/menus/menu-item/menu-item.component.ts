import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../services/MenuItem';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  
  @Input()
  item: MenuItem;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
