import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule,  FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  credentials = { email: '', password: '' };
  errorMessage!:string 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(response => {
      localStorage.setItem('token', response.access_token);
      console.log('Login successful', response);
  
      // Extract the user's role from the response
      const userRoles = response.user.roles.map((role: any) => role.name);
  
      if (userRoles.includes('student')) {
        this.router.navigate(['/student']);
      } else if (userRoles.includes('teacher')) {
        this.router.navigate(['/teacher']);
      } else {
        console.error('Unknown role:', userRoles);
        // Optionally navigate to a default route
      }
    }, error => {
      console.error('Login failed', error);
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
