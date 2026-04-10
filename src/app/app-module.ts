import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import CustomPreset from './core/primeng-settings';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,

    // PrimeNG
    InputTextModule,
    ButtonModule,
    MessageModule,
    ToastModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),

    // PrimeNG
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      },
    }),
    MessageService
  ],
  bootstrap: [App],
})
export class AppModule {}
