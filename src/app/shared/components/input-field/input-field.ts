import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  value: string = '';

  @Output() controlValue: EventEmitter<string> = new EventEmitter<string>();

  onValueChange() {
    this.controlValue.emit(this.value);
  };
}
