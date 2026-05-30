import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { InputField } from '../../shared/components/input-field/input-field';
import { PasswordInput } from '../../shared/components/password-input/password-input';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [InputField, PasswordInput, Button],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
