import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path:'', //TODO:localhost:4200/ Componente de prueba
    component: ExampleComponent
  },
  {
    path:'prueba', //TODO:localhost:4200/prueba Componente de prueba
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
