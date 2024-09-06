import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeEsCL from '@angular/common/locales/es-CL';
import {registerLocaleData} from '@angular/common';

//PAra declarar los idiomas que se van a usar en local
// registerLocaleData(localeEsHN);
// registerLocaleData(localeEsCL);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID, useValue: localeEsCL
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
