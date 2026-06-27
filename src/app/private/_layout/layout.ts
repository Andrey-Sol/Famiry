import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Menu } from '../components/menu/menu';
import { GENRES, IGenre } from '../../shared/const/genres.const';
import { Title } from '@angular/platform-browser';
import { debounceTime, delay, Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StoreService } from '../../shared/services/store.service';
import { AsyncPipe } from '@angular/common';
import { Input } from '../../shared/components/input/input';
import { Radio } from '../../shared/components/radio/radio';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, Menu, AsyncPipe, Input, Radio, ReactiveFormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class PrivateLayout implements OnInit {
  private _router = inject(Router);
  private _titleService = inject(Title);
  private _store: StoreService = inject(StoreService);
  private _destroyRef = inject(DestroyRef);

  genres$: Observable<IGenre[]> = this._store.genres$.pipe(delay(100));
  title = '';
  isSearch = false;

  searchForm = new FormGroup({
    search: new FormControl()
  })

  genreSelect = new FormGroup({
    genre: new FormControl(0),
  });

  ngOnInit(): void {
    this._setFormValueToStore();
    this._setGenreValueToStore();
    this._router.events
      .pipe(
        delay(100),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            this.title = this._titleService.getTitle();
          }
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();

    this._store.updateData({ genres: GENRES });

    this.searchForm.controls['search'].valueChanges.pipe(
      tap(() => (
        this.isSearch = true
      )),
      takeUntilDestroyed(this._destroyRef),
    ).subscribe();

    this._store.filters$.pipe(
      tap((value) => this._store.setValue('filters', value)),
      takeUntilDestroyed(this._destroyRef),
    );
  }

  private _setGenreValueToStore(): void {
    this.genreSelect.controls['genre'].valueChanges
      .pipe(
        debounceTime(500),
        tap((value) => this._store.updateData({ filters: { genre: value } })),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }

  private _setFormValueToStore(): void {
    this.searchForm.controls['search'].valueChanges
      .pipe(
        debounceTime(500),
        tap((value) => this._store.updateData({ filters: { name: value } })),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
