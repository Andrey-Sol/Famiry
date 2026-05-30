import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/button/button';
import { InputField } from './shared/components/input-field/input-field';
import { PasswordInput } from './shared/components/password-input/password-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, InputField, PasswordInput],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Famiry');

  data: string = ''
  password: string = ''

  showData(event: string): void {
    this.data = event;
  }

  showPassword(event: string): void {
    this.password = event;
  }
}
