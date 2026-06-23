import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum EPasswordInputIcons {
  Opened = 'icons/eye-opened.svg',
  Closed = 'icons/eye-closed.svg',
}

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInput),
      multi: true,
    },
  ],
  templateUrl: './password-input.html',
  styleUrl: './password-input.scss',
})
export class PasswordInput implements ControlValueAccessor {
  disabled: boolean = false;
  type: 'password' | 'text' = 'password';
  buttonIcon = EPasswordInputIcons.Closed;

  value: string = '';
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
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
