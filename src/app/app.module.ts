import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomepageComponent} from './homepage/homepage.component';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SignupComponent} from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import {NgOptimizedImage} from "@angular/common";


const appRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'createProfile/:data', component: CreateProfileComponent},
    {path: 'display-profile/:data', component: DisplayProfileComponent},
    {path: '', component: HomepageComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        SignupComponent,
        LoginComponent,
        NavbarComponent,
        CreateProfileComponent,
        DisplayProfileComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        NgOptimizedImage
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
