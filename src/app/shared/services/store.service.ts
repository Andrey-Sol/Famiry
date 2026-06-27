import { IGenre } from '../const/genres.const';
import { IMovie } from '../models/movie.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface IAppStore {
  genres: IGenre[];
  movies: IMovie[];
  favorites: IMovie[];

  filters: {
    name: string;
    genre: number | null;
    from: number | null;
    to: number | null;
    // sort: 'genre' | 'name' | 'rating';
    sort: string;
  };
}

export const STORE_DEFAULT_VALUE = {
  genres: [],
  movies: [],
  favorites: [],

  filters: {
    name: '',
    genre: null,
    from: null,
    to: null,
    sort: 'name',
  },
};

@Injectable({ providedIn: 'root' })
export class StoreService {
  private readonly storeSubject = new BehaviorSubject<IAppStore>({
    ...STORE_DEFAULT_VALUE,
  });

  readonly movies$ = this.storeSubject.pipe(map((state) => state.movies));

  readonly favorites$ = this.storeSubject.pipe(map((state) => state.favorites));

  readonly genres$ = this.storeSubject.pipe(map((state) => state.genres));

  readonly filters$ = this.storeSubject.pipe(map((state) => state.filters));

  public setValue<K extends keyof IAppStore>(key: K, value: IAppStore[K]): void {
    this.storeSubject.next({
      ...this.storeSubject.getValue(),
      [key]: value,
    });
  }

  public updateData(data: any): void {
    const updatedData: IAppStore = { ...this.storeSubject.value, ...data };
    this.storeSubject.next(updatedData);
  }
}
