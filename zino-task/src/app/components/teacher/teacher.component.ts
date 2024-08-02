import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  searchQuery: string = '';
  students: any[] = [];

  constructor(private authService: AuthService) {}

  searchStudents() {
    if (this.searchQuery.trim()) {
      this.authService.searchStudents(this.searchQuery).subscribe(
        response => {
          this.students = response.students;
        },
        error => {
          console.error('Error searching students', error);
        }
      );
    } else {
      this.students = [];
    }
  }

  sendRequest(studentId: number) {
    this.authService.sendTeacherRequest(studentId).subscribe(
      response => {
        console.log('Request sent successfully', response);
      },
      error => {
        console.error('Error sending request', error);
      }
    );
  }
}
