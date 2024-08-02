import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

interface AuthResponse {
  user: User;
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getStudentView(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/student-view`, { headers });
  }

  getTeacherView(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/teacher-view`, { headers });
  }

  searchStudents(query: string) {
    return this.http.get<any>(`/api/search-students?query=${query}`);
  }
  
  sendTeacherRequest(studentId: number) {
    return this.http.post<any>('/api/send-teacher-request', { student_id: studentId });
  }
  
  getTeacherRequests() {
    return this.http.get<any>('/api/teacher-requests');
  }
  
  respondToTeacherRequest(requestId: number, response: string) {
    return this.http.post<any>('/api/respond-teacher-request', { request_id: requestId, response: response });
  }
  
}
