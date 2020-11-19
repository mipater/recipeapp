import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DirectivesComponent} from './directives/directives.component';
import {BasicHighlightDirective} from './directives/basic-highlight/basic-highlight.directive';
import {BetterHightlightDirective} from './directives/better-highlights/better-hightlight.directive';
import {UnlessDirective} from './directives/unless.directive';
import {AccountComponent} from './services/account/account.component';
import {NewAccountComponent} from './services/new-account/new-account.component';
import {ServicesComponent} from './services/services.component';
import {AccountService} from './shared/account.service';
import {LoggingService} from './shared/logging.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RoutersComponent} from './routers/routers.component';
import {HomeComponent} from './observables/home/home.component';
import {ServersComponent} from './routers/servers/servers.component';
import {UsersComponent} from './routers/users/users.component';
import {EditServerComponent} from './routers/servers/edit-server/edit-server.component';
import {ServerComponent} from './routers/servers/server/server.component';
import {ServersService} from './routers/servers/servers.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserComponent} from './observables/user/user.component';
import {PageNotFoundComponent} from './routers/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth.guard.service';
import {CanDeactivateGuard} from './routers/servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './routers/error-page/error-page.component';
import {ObservablesComponent} from './observables/observables.component';
import {FormsComponent} from './forms/forms.component';
import {FormsExerciseComponent} from './forms/forms-exercise/forms-exercise.component';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';
import {ReactiveFormExerciseComponent} from './forms/reactive-form/reactive-form-exercise/reactive-form-exercise.component';
import {PipesComponent} from './pipes/pipes.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {ReverseStrPipe} from './pipes/reverse-str.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {Http01Component} from './http/http01/http01.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {MessagesComponent} from './http/messages/messages.component';
import {LoggingInterceptorService} from './http/http01/logging.interceptor.service';
import {AuthComponent} from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHightlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ServicesComponent,
    RoutersComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservablesComponent,
    HomeComponent,
    UserComponent,
    FormsComponent,
    FormsExerciseComponent,
    ReactiveFormComponent,
    ReactiveFormExerciseComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReverseStrPipe,
    SortPipe,
    Http01Component,
    MessagesComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AccountService, LoggingService, ShoppingListService,
    ServersService, AccountService, AuthService, AuthGuard, CanDeactivateGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
