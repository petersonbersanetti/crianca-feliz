import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/Auth/auth-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    MatRadioModule, 
    MatDatepickerModule, 
    MatIconModule, 
    ReactiveFormsModule, MatButtonModule, MatCardModule
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isRegister = false;

  constructor(public authService: AuthService) {}

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handleRegister() {
    console.log("register ", this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe({
      next: (response) => {
        if (this.isBrowser()) {
          localStorage.setItem("jwt", response.jwt);
        }
        this.authService.getUserProfile().subscribe();
        console.log("Signup success", response);
      },
      error: (error) => {
        console.error("Signup error", error);
      }
    });
  }

  handleLogin() {
    console.log("login  ", this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (this.isBrowser()) {
          localStorage.setItem("jwt", response.jwt);
        }
        this.authService.getUserProfile().subscribe();
        console.log("Login success", response);
      },
      error: (error) => {
        console.error("Login error", error);
      }
    });
  }

  togglePanel() {
    this.isRegister = !this.isRegister;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
