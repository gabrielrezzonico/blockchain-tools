import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcodesComponent } from './opcodes/opcodes.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  {path: '', component: UnitsComponent},
  {path: 'opcodes', component: OpcodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }