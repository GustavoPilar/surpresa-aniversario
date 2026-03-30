import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  exports: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,

    MenubarModule
  ],
})
export class ComponentsModule {}
