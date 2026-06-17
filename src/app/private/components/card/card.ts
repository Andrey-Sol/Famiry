import { Component, input, InputSignal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Rating } from '../rating/rating';
import { IMovie } from '../../../shared/models/movie.model';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage, Rating],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  movie: InputSignal<IMovie | undefined> = input();
}
