import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
// import { InputField } from '../../shared/components/input-field/input-field';
import { PasswordInput } from '../../shared/components/password-input/password-input';
import { Input } from '../../shared/components/input/input';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Input, PasswordInput, Button],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
