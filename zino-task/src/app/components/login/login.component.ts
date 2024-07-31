import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule,  FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.access_token);
        const userRole = response.user.roles[0].name;
        if (userRole === 'student') {
          this.router.navigate(['/student-view']);
        } else if (userRole === 'teacher') {
          this.router.navigate(['/teacher-view']);
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
