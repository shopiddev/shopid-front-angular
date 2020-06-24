import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AddnewComponent } from './addnew/addnew.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [


  { path: 'addnew', component: AddnewComponent , canActivate:[AuthService]},



];


@NgModule({
  declarations: [
    AppComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
