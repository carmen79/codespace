import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.movieTheaters().subscribe(
      (data: {pages: number, total_results: number, total_page: number, results: any[]}) => {
      this.movies = data.results
     });

      }

      messageEmitted(event) {
        console.log(event);
      }
    }
