import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  value: string = '';

  @Output() controlValue: EventEmitter<string> = new EventEmitter<string>();

  onValueChange() {
    this.controlValue.emit(this.value);
  }
}
