import { Component } from '@angular/core';
import { IMovie } from '../../../shared/models/movie.model';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';
import { Card } from '../../components/card/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [Card, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  favorites: IMovie[] = FAVORITES;
}
