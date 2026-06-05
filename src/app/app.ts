import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicLayout } from './public/_layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PublicLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Famiry');
}
