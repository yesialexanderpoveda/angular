import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import {MenuComponent} from './components/menu/menu.component'
import { RemoveComponent } from './components/remove/remove.component';
import { UpdateComponent } from './components/update/update.component';
const routes: Routes = [

{
 path: '',
 component: MenuComponent,
 children: [
  {
    path: '',
    component: CreateComponent
  },
  
  {
    path: 'create',
    component: CreateComponent
  },

  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'remove',
    component: RemoveComponent
  }
 ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
