import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Menu } from '../components/menu/menu';
import { IGenre } from '../../shared/const/genres.const';
import { Title } from '@angular/platform-browser';
import { delay, Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { StoreService } from '../../shared/services/store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, Menu, AsyncPipe],
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

  ngOnInit(): void {
    this._router.events.pipe(
      delay(100),
      tap((event) => {
        if (event instanceof NavigationEnd) {
          this.title = this._titleService.getTitle();
        }
      }),
      takeUntilDestroyed(this._destroyRef),
    );
  }
}
