import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AuthComponent} from './auth.component';

const authRoutes: Routes = [
  {path: '', component: AuthComponent}
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes),
    SharedModule
  ]
})
export class AuthModule {}
