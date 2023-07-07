import { HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end

@Injectable({
  providedIn: 'root'
})
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: UsersService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();

    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

      // for Node.js Express back-end
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];