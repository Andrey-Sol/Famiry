import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { MOVIES } from '../../../shared/const/fake-films.const';
import { IMovie } from '../../../shared/models/movie.model';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Card, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly movies$: Observable<IMovie[]> = of(MOVIES).pipe(delay(100));
}
