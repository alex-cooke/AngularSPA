import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuService } from './services/menu.service';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenService } from './services/screen.service';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { NgModule } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ScreenBelowLargeDirective } from "./directives/screen-below-large.directive";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
