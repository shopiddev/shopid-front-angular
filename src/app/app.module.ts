import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AddnewComponent } from './addnew/addnew.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const appRoutes: Routes = [


  { path: 'addnew', component: AddnewComponent , canActivate:[AuthService]},
  
  { path: 'login', component: LoginComponent},

  { path: 'signup', component: SignUpComponent},


];

export function createTranslateLoader(http: HttpClient) {
 return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    AddnewComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
	TranslateModule.forRoot({
		loader: {
		provide: TranslateLoader,
		useFactory: createTranslateLoader,
		deps: [HttpClient]
		}
	}),
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
