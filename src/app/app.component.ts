import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'mark';
  arrayNumber = [1,2,3,4,5,6,7,8,9,10];
  number = Math.PI;
  salary = 3000.40;
  percent =  0.50;

  promise = new Promise((callback,status)=>{
    setTimeout( ()=>callback('Llego la data'),3000 );
  });
  date = new Date();
  capitalize = 'hOla mE llamo Carlos';
  video = 'abiFOBNhNJQ';
  name = 'Carlos Estarita';
  visible = true;
}
