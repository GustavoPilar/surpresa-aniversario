import { Component, OnInit } from "@angular/core";
import pageSettings from "../../core/page-settings";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  //#region Fields
  pageSettings = pageSettings;

  public loginForm!: FormGroup;

  public hint: boolean = false;

  public wrong: boolean = false;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {
    this.pageSettings.showMenu = false;
  }
  //#endregion

  //#region OnInit
  public ngOnInit(): void {
    this.initForm();
  }
  //#endregion

  //#region Members :: initForm()

  /**
   * @description Cria o formulário para o login
   * @returns {void} Vazio
   */
  public initForm(): void {
    this.loginForm = this.formBuilder.group({
      password: [null, Validators.required]
    });
  }

  /**
   * @description Informa se o formulário é válido
   * @true => Válido e pode salvar
   * @false => Inválido e não pode salvar
   * @returns {boolean} Valor booleano
   */
  public canSubmit(): boolean {
    if (!this.loginForm)
      return false;

    return this.loginForm.valid;
  }

  /**
   * @description Mostra a dica para a senha secreta
   * @returns {void} Vazio
   */
  public showHint(): void {
    this.hint = true;
  }

  /**
   * @description Verifica se a senha está correta e navega para a página home
   * @returns {void} Vazio
   */
  public navigateToHome(): void {
    let answer: string = this.loginForm.get('password')?.value;

    if (answer != null && answer.toLocaleLowerCase() === "chocolate") {
      this.router.navigate(["home"]);
    }
    else {
      this.wrong = true;
    }
  }

  //#endregion

}
