import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpContactoComponent } from './emp-contacto/emp-contacto.component';
import { EmpProductosComponent } from './emp-productos/emp-productos.component';
import { ProductoListComponent } from './producto-list/producto-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: EmpProductosComponent
  },
  {
    path: 'contacto',
    component: EmpContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
