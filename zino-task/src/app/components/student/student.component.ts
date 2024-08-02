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

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.authService.getTeacherRequests().subscribe(
      response => {
        this.requests = response.requests;
      },
      error => {
        console.error('Error loading requests', error);
      }
    );
  }

  respondToRequest(requestId: number, response: string) {
    this.authService.respondToTeacherRequest(requestId, response).subscribe(
      res => {
        console.log('Response sent successfully', res);
        this.loadRequests();
      },
      error => {
        console.error('Error responding to request', error);
      }
    );
  }
}
