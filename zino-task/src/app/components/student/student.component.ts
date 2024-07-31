import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  message = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getStudentView().subscribe(
      (response) => this.message = response.message,
      (error) => console.error('Error loading student view', error)
    );
  }
}
