import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-rating',
  imports: [NgOptimizedImage],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
})
export class Rating {
  // Для настройки используем параметры
  @Input() value: number | undefined = 0; // например 4.3
  @Input() max = 5; // количество звёзд
  @Input() readonly = true; // если false — можно кликать
  @Output() valueChange = new EventEmitter<number>(); // сообщаем родительскому компоненту об измнении рейтинга пользователем

  // Количество звезд - количество элементов в коллекции
  stars(): number[] {
    return Array.from({ length: this.max }, (_, i) => i);
  }

  onClick(i: number, event: Event) {}

  onMove(i: number, event: Event) {}
}
