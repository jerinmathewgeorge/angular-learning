import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LayoutInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    const commonUrl = 'http://localhost:3000/'
    let req = request.clone({url:commonUrl+request.url});
    return next.handle(req);
  }
}
