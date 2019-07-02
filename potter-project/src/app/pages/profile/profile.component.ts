import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  constructor(private _route: ActivatedRoute) { 
    this._route.params.subscribe( data =>{
     this.id = data.id;
    });
  }
  ngOnInit() {
  }

}
