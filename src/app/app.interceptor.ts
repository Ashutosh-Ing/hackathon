import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';
import { AuthService } from './auth/auth.service';
//import 'rxjs/add/operator/do';
//import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  authService:  AuthService; 

  constructor(authService: AuthService){
    this.authService = authService;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) {      
    if(this.authService.token){
        let request = req.clone({
            setHeaders: {
              Authorization: this.authService.token
            }
          });
    }    

    return next.handle(req);
  }
}

