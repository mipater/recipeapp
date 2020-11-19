import {NgModule} from '@angular/core';
import {DirectivesComponent} from './directives/directives.component';
import {BasicHighlightDirective} from './directives/basic-highlight/basic-highlight.directive';
import {BetterHightlightDirective} from './directives/better-highlights/better-hightlight.directive';
import {UnlessDirective} from './directives/unless.directive';
import {AccountComponent} from './services/account/account.component';
import {NewAccountComponent} from './services/new-account/new-account.component';
import {ServicesComponent} from './services/services.component';
import {RoutersComponent} from './routers/routers.component';
import {ServersComponent} from './routers/servers/servers.component';
import {UsersComponent} from './routers/users/users.component';
import {EditServerComponent} from './routers/servers/edit-server/edit-server.component';
import {ServerComponent} from './routers/servers/server/server.component';
import {PageNotFoundComponent} from './routers/page-not-found/page-not-found.component';
import {ErrorPageComponent} from './routers/error-page/error-page.component';
import {ObservablesComponent} from './observables/observables.component';
import {HomeComponent} from './observables/home/home.component';
import {UserComponent} from './observables/user/user.component';
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

@NgModule({
  declarations: [
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
    Http01Component
  ]
})
export class LessonsModule {

}
