import { Component } from '@angular/core';
import { Input } from '../../../shared/components/input/input';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [Input, PasswordInput, Button],
  templateUrl: './log-in.html',
  styleUrl: './log-in.scss',
})
export class LogIn {}
