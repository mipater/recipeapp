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
import {FormsModule} from '@angular/forms';
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
import {HomeComponent} from './routers/home/home.component';
import {ServersComponent} from './routers/servers/servers.component';
import {UsersComponent} from './routers/users/users.component';
import {EditServerComponent} from './routers/servers/edit-server/edit-server.component';
import {ServerComponent} from './routers/servers/server/server.component';
import {ServersService} from './routers/servers/servers.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './routers/users/user/user.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
  ]}
];

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
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountService, LoggingService, ShoppingListService, ServersService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
