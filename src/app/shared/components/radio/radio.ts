import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Radio),
      multi: true,
    },
  ],
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
})
export class Radio implements ControlValueAccessor {
  name = input<string>('');
  title = input<string>('');
  value = input<number>(0); // Добавляем значение, которое будет передаваться в форму
  // localValue = signal<number>(0);

  private currentValue: number | null = null; // Текущее значение формы
  disabled: boolean = false;

  private onChange: (value: number | null) => void = () => {}; // Изменяем тип
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.currentValue = value; // Сохраняем значение из формы
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn; // Сохраняем callback
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn; // Сохраняем callback
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.currentValue = this.value(); // Берем значение из input signal
      this.onChange(this.currentValue); // ПЕРЕДАЕМ в форму
      this.onTouched(); // Отмечаем как touched
    }
  }

  // Метод для проверки, выбрана ли эта радио-кнопка
  isChecked(): boolean {
    return this.currentValue === this.value();
  }
}
