import { Component, signal } from '@angular/core';
import pageSettings from "./core/page-settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  //#region Field
  pageSettings = pageSettings;
  //#endregion

  //#region Constructor
  constructor() {
  }
  //#endregion

  //#region Members

  //#endregion
}
