import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuService } from '../../services/utils/menu.service';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {

  //#region Fields

  public items!: MenuItem[];

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService
  ) {}
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.items = this.menuService.GetAll();
  }
  //#endregion

}
