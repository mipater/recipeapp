import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './routers/home/home.component';
import {UsersComponent} from './routers/users/users.component';
import {UserComponent} from './routers/users/user/user.component';
import {ServersComponent} from './routers/servers/servers.component';
import {ServerComponent} from './routers/servers/server/server.component';
import {EditServerComponent} from './routers/servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './routers/page-not-found/page-not-found.component';
import {AuthGuard} from './auth.guard.service';
import {CanDeactivateGuard} from './routers/servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './routers/error-page/error-page.component';
import {ServerResolverService} from './routers/servers/server/server-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

