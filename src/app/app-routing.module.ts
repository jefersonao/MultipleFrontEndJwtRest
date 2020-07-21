import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {ClientesComponent} from './clientes/clientes.component'
import {ClienteListComponent} from './clientes/cliente-list/cliente-list.component'
import {ClienteComponent} from './clientes/cliente/cliente.component'
import {ClienteSearchComponent} from './clientes/cliente-search/cliente-search.component'


export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'Home' }
  },
 
  {
    path: 'api/Cliente/remove',
    component: ClienteListComponent,
    data: { title: 'Remove' }
  },
  {
    path: 'api/Cliente/add',
    component: ClienteComponent,
    data: { title: 'Add ' }
  },
  
  {
  path:'api/Cliente/GetById',
  component:ClienteSearchComponent,
  data:{title: 'Search'}  
}
 
];

@NgModule({
  exports: []
})
export class AppRoutingModule { 
  
}
