import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum EPasswordInputIcons {
  Opened = 'icons/eye-opened.svg',
  Closed = 'icons/eye-closed.svg',
}

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-input.html',
  styleUrl: './password-input.scss',
})
export class PasswordInput {
  disabled: boolean = false;
  type: 'password' | 'text' = 'password';
  buttonIcon = EPasswordInputIcons.Closed;

  value: string = '';

  @Output() controlValue: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.controlValue.emit(this.value);
  }

  onButtonToggleClick(): void {
    if (this.type === 'password') {
      this.type = 'text';
      this.buttonIcon = EPasswordInputIcons.Opened;
    } else {
      this.type = 'password';
      this.buttonIcon = EPasswordInputIcons.Closed;
    }
  }
}
