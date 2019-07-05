import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  movie;

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService) {}

  ngOnInit() {
    this.router.params.subscribe(params => { 
      console.log('get movie id', params);

      this.movieService.movie(params.id).subscribe(data => {
        console.log('Obtenemos detalle pelicula', data);

        this.movie = data;
      });
    });
  }

}
