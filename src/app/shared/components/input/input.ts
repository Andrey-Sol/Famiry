import { Component, output, OutputEmitterRef } from '@angular/core';
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
  controlValue: OutputEmitterRef<string> = output();

  onValueChange() {
    this.controlValue.emit(this.value);
  }
}
