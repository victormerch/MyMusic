import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path : '',//TODO: localhost:4200/
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)//La tuta raiz va a cargar el modulo home.module
  }
  
  // {
  //   path:'', //TODO:localhost:4200/ Componente de prueba
  //   component: ExampleComponent
  // },
  // {
  //   path:'prueba', //TODO:localhost:4200/prueba Componente de prueba
  //   component: ExampleComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
