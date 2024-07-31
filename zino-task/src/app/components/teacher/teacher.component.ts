import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  message = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getTeacherView().subscribe(
      (response) => this.message = response.message,
      (error) => console.error('Error loading teacher view', error)
    );
  }
}
