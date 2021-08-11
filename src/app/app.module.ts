import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SubMenusService } from './services/sub-menus.service';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentAccountComponent } from './current-account/current-account.component';
import { PhoneNumberValidatorDirective } from './validators/phone-number-validator.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    HomeComponent,
    MenuComponent,
    CurrentAccountComponent,
    PhoneNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SubMenusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
