import { Component, OnInit } from '@angular/core';
import { PotterService } from '../../servicies/potter.service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Character[];

  constructor(private potterService: PotterService) { }

  ngOnInit() {
    this.potterService.characters().subscribe(( characters: Character[]) => this.characters = characters)

  }

}
