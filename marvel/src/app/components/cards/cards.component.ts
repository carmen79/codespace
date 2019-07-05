import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() movie;
  //comunicación de hijo a padre
  @Output() message = new EventEmitter<string>();


  constructor( private router: Router) { }

  ngOnInit() {
    console.log (this.movie);
  }
  emitToMyFather(){
    //emitir un mensaje al padre

    this.message.emit(`Pagina de movie ${this.movie.id} emitida`);
    this.router.navigate(['profile', this.movie.id]);
  }

}
