import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatButtonModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    ProductsComponent,
    UserProfileComponent,
    ContactUsComponent,
    LogOutComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    MatSidenavModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'products', component: ProductsComponent},
      {path: 'logout', component: LogOutComponent},
      {path: 'contact', component: ContactUsComponent},
      {path: 'profile', component: UserProfileComponent}
      ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
