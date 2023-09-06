import {Component} from '@angular/core';
import {AccountService} from '../services/signup.service'
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    errorMessage: string | null = null;
    email: string = '';
    primEmail!: FormGroup;

    constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) {
        this.primEmail = this.formBuilder.group({
            username: ['', Validators.required],
            primaryEmail: ['', [Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            password1: ['', Validators.required],
            password2: ['', Validators.required]
        });
    }

    signup(username: string, email: string, password1: string, password2: string) {
        this.errorMessage = null;
        this.accountService.signup(username, email, password1, password2)
            .subscribe(
                response => {
                    // Handle successful signup
                    console.log('Signup successful:', response);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.error('Signup error:', error);
                    if (error.status === 400) {
                        this.errorMessage = error.error;
                    } else {
                        this.errorMessage = 'An error occurred during signup. Please try again.';
                    }
                }
            );
    }
}
