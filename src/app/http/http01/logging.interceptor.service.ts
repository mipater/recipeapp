import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {MessageService} from '../messages/message.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingInterceptorService implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let message: string;

    return next.handle(req).pipe(tap(
      event => message = event instanceof HttpResponse ? 'succeded' : '',
      () => message = 'failed'
    ),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}" ${message} in ${elapsed} ms.`;
        this.messageService.add(msg);
      }));
  }
}
