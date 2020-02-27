import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import {BasicHighlightDirective} from './directives/basic-highlight/basic-highlight.directive';
import { BetterHightlightDirective } from './directives/better-highlights/better-hightlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import {DropdownDirective} from './shared/dropdown.directive';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { ServicesComponent } from './services/services.component';
import {AccountService} from './shared/account.service';
import {LoggingService} from './shared/logging.service';

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
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
