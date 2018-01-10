import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfileComponent } from './profile/profile.component';
import { DocumentComponent } from './document/document.component';
import { MessageComponent } from './message/message.component';

const appRoutes: Routes = [
{
    path: '',
    component : AuthenticationComponent
  },
{
    path: 'accueil',
    component : AccueilComponent
  },
{
   path: 'profile',
   component : ProfileComponent
},
{
   path: 'document',
   component : DocumentComponent
},
{
   path: 'message',
   component : MessageComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FooterComponent,
    MenuComponent,
    RegisterComponent,
    AccueilComponent,
    ProfileComponent,
    DocumentComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
