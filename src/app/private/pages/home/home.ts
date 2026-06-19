import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';
import { IMovie } from '../../../shared/models/movie.model';
import { delay, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { StoreService } from '../../../shared/services/store.service';

@Component({
  selector: 'app-home',
  imports: [Card, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private _store: StoreService = inject(StoreService);

  protected readonly movies$: Observable<IMovie[]> = this._store.movies$.pipe(delay(100));

  ngOnInit(): void {}
}
