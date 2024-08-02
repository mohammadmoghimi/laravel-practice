// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Add auth header with jwt if user is logged in and request is to the api url
//     const token = this.authService.getToken();
//     const isApiUrl = request.url.startsWith('http://localhost:8000/api');
//     if (token && isApiUrl) {
//       request = request.clone({
//         setHeaders: { Authorization: `Bearer ${token}` }
//       });
//     }

//     return next.handle(request);
//   }
// }
