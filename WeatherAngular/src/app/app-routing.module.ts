import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  { path: 'san-jose', component: SanJoseComponent },
  { path: 'seattle', component: SeattleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
