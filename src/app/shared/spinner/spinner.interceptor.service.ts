import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap, finalize, delay } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.visibility.emit(true);
    return next.handle(req)
      .pipe(
      delay(1000),
      finalize(() => this.spinnerService.notVisibility.emit(false))
      );
  }
}
