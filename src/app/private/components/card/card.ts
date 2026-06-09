import { Component, Input } from '@angular/core';
import { IMovie } from '../../../shared/models/movie.model';
import { NgOptimizedImage } from '@angular/common';
import { Rating } from '../rating/rating';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage, Rating],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() movie: IMovie | null = null;
}
