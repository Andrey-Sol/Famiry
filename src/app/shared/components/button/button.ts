import {
  Component,
  input,
  output,
  OutputEmitterRef,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  disabled = input(false);
  btnClick: OutputEmitterRef<void> = output();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
