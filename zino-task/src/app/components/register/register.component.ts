import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = { name: '', email: '', password: '', password_confirmation: '', role: 'student' };
  errorMessage!: string;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed', error);
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }
}
