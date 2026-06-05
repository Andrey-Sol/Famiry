export interface INavConst {
  text: string;
  iconUrl: string;
  iconUrlActive: string;
  link: string;
  id: number;
}

export const NAV_CONST: INavConst[] = [
  {
    text: 'Главная',
    iconUrl: 'icons/home.svg',
    iconUrlActive: 'icons/home-active.svg',
    link: '/private/home',
    id: 0,
  },
  {
    text: 'Избранное',
    iconUrl: 'icons/favorites.svg',
    iconUrlActive: 'icons/favorites-active.svg',
    link: '/private/favorites',
    id: 1,
  },
];
