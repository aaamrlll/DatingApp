import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  {path: 'value', component: ValueComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'value'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
