import { Component } from '@angular/core';
import { IMenu, MENU_CONST } from '../../../shared/const/menu-items.const';
import { NavButton } from '../../../shared/components/nav-button/nav-button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [NavButton, RouterLinkActive, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  protected readonly navLinks: IMenu[] = MENU_CONST;
}
