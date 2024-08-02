import { HttpInterceptorFn } from '@angular/common/http';

export const corsInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization'
    }
  });

  // Pass the cloned request instead of the original request to the next handler.
  return next(clonedRequest);
};
