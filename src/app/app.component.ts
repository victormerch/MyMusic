import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  
  title:string = 'MyMusic';
  name:string = "Victor MV";
  age:number = 18;
  relationShip:undefined = undefined;
  datum:any = "Este tipo de datos puede contener cualquier tipo de dato"

}
