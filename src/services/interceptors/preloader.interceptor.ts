import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PreloaderService } from '../data/preloader.service';

@Injectable()
export class PreloaderInterceptor implements HttpInterceptor {

  constructor(private preloaderService: PreloaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.preloaderService.show();

    return next.handle(request).pipe(
      finalize(() => this.preloaderService.hide()),
    );
 }
}
