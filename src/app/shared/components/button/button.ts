import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() disabled: boolean = false;
  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();

  onBtnClick(): void {
    this.btnClick.emit();
  };
}
