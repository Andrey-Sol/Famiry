import {
  Component,
  forwardRef,
  input,
  Input as Input_,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true,
    },
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input implements ControlValueAccessor {
  prefixIconUrl = input<string | null>(null);
  postfixIconUrl = input<string | null>(null);
  type = input<'text' | 'email'>('text');
  placeholder = input('');

  @Input_() disabled = false;

  private value = '';
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
}
