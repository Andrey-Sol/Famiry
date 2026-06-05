import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { INavConst, NAV_CONST } from '../../shared/const/menu-items.const';
import { NavButton } from '../../shared/components/nav-button/nav-button';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, NavButton, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class PrivateLayout {
  navLinks: INavConst[] = NAV_CONST;
}
