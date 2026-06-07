import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../components/menu/menu';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, Menu],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class PrivateLayout {}
