import { Component, OnInit } from '@angular/core';
import { PotterService } from '../../servicies/potter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private potterService: PotterService) { }

  ngOnInit() {
    this.potterService.people();
  }

}
