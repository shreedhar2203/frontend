import {Component} from '@angular/core';
import {AccountService} from "../services/signup.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    errorMessage: string | null = null;

    constructor(private authService: AccountService, private router: Router) {}

    login(username: string, password: string) {
        this.errorMessage = null;
        this.authService.login(username, password)
            .subscribe(
                response => {
                    console.log('LogIn successful:', response);
                    this.router.navigate(['/createProfile',username]);
                },
                error => {
                    console.error('LogIn error:', error);
                    if (error.status === 401) {
                        this.errorMessage = error;
                    } else {
                        this.errorMessage = 'An error occurred during Login. Please try again.';
                    }
                }
            );
    }
}
