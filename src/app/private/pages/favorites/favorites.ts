import { Component } from '@angular/core';
import { IMovie } from '../../../shared/models/movie.model';
import { FAVORITES } from '../../../shared/const/fake-favorites.const';
import { Card } from '../../components/card/card';
import { RouterLink } from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [Card, RouterLink, AsyncPipe],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  protected readonly favorites$: Observable<IMovie[]> = of(FAVORITES).pipe(delay(100));
}
