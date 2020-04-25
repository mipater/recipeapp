import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectivesComponent} from './directives/directives.component';
import {BasicHighlightDirective} from './directives/basic-highlight/basic-highlight.directive';
import {BetterHightlightDirective} from './directives/better-highlights/better-hightlight.directive';
import {UnlessDirective} from './directives/unless.directive';
import {DropdownDirective} from './shared/dropdown.directive';
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
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './observables/user/user.component';
import { PageNotFoundComponent } from './routers/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth.guard.service';
import {CanDeactivateGuard} from './routers/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './routers/error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsComponent } from './forms/forms.component';
import { FormsExerciseComponent } from './forms/forms-exercise/forms-exercise.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHightlightDirective,
    UnlessDirective,
    DropdownDirective,
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
    RecipeStartComponent,
    RecipeEditComponent,
    ObservablesComponent,
    HomeComponent,
    UserComponent,
    FormsComponent,
    FormsExerciseComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountService, LoggingService, ShoppingListService,
    ServersService, AccountService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
