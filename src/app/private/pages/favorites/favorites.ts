import { Component, inject, OnInit } from '@angular/core';
import { IMovie } from '../../../shared/models/movie.model';
import { Card } from '../../components/card/card';
import { RouterLink } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { StoreService } from '../../../shared/services/store.service';

@Component({
  selector: 'app-favorites',
  imports: [Card, RouterLink, AsyncPipe],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites implements OnInit {
  private _store: StoreService = inject(StoreService);

  protected readonly favorites$: Observable<IMovie[]> = this._store.favorites$.pipe(delay(100));

  ngOnInit(): void {}
}
