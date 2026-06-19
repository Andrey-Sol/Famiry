import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Menu } from '../components/menu/menu';
import { GENRES, IGenre } from '../../shared/const/genres.const';
import { Title } from '@angular/platform-browser';
import { delay, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, Menu],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class PrivateLayout implements OnInit {
  genres: IGenre[] = GENRES;
  title = '';

  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _titleService = inject(Title);
  private _destroyRef = inject(DestroyRef);

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
