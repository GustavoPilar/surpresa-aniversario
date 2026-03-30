import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class MenuService {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor(
    private router: Router
  ) {

  }
  //#endregion

  //#region Members :: GetAll()

  /**
   * @description Cria o menu para Home e seus filhos
   * @returns {MenuItem} Item de menu
   */
  private createMenuHome(): MenuItem {
    let root: MenuItem = {
      label: "Home",
      command: () => this.navigateTo(""),
      icon: PrimeIcons.HOME
    }

    return root;
  }

  /**
   * @description Retorna todos os menus criados
   * @returns {MenuItem[]} Lista de itens de menu
   */
  public GetAll(): MenuItem[] {
    let all: MenuItem[] = [
      this.createMenuHome()
    ];

    return all;
  }

  //#endregion

  //#region Members 'Actions' :: NavigateTo()

  /**
   * @description Navega até a rota desejada
   * @param {string} target Rota alvo
   * @returns {void} Vazio
   */
  private navigateTo(target: string): void {
    this.router.navigate([target]);
  }

  //#endregion

}
