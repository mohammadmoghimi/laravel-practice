import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  requests: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getTeacherRequests();
  }

  getTeacherRequests() {
    this.authService.getTeacherRequests().subscribe(
      response => {
        this.requests = response.requests;
      },
      error => {
        console.error('Error fetching teacher requests', error);
      }
    );
  }

  respondToRequest(requestId: number, status: string) {
    this.authService.respondToTeacherRequest(requestId, status).subscribe(
      response => {
        console.log('Request response sent successfully', response);
        this.getTeacherRequests(); // Refresh the list after responding
      },
      error => {
        console.error('Error responding to request', error);
      }
    );
  }
}
