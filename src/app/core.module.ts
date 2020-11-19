import {NgModule} from '@angular/core';
import {AccountService} from './shared/account.service';
import {LoggingService} from './shared/logging.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {ServersService} from './routers/servers/servers.service';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth.guard.service';
import {CanDeactivateGuard} from './routers/servers/edit-server/can-deactivate-guard.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {LoggingInterceptorService} from './http/http01/logging.interceptor.service';

@NgModule({
  providers: [
    AccountService, LoggingService, ShoppingListService,
    ServersService, AccountService, AuthService, AuthGuard, CanDeactivateGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ]
})
export class CoreModule {

}
