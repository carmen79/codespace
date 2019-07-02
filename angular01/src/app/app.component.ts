import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name = 'Carmen Bueno Vigo';
 image = 'https://concepto.de/wp-content/uploads/2018/08/verano1-e1535637769656.jpg';
 isRed = true;

 changeColorRed() {
  this.isRed = !this.isRed;
 }
}


