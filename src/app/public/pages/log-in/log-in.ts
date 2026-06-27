import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Input } from '../../../shared/components/input/input';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Button } from '../../../shared/components/button/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { email } from '@angular/forms/signals';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [Input, PasswordInput, Button, ReactiveFormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.scss',
})
export class LogIn implements OnInit, OnDestroy {
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public error: string | null = null;

  // onLoginClick(): void {
  //   this._authService
  //     .login$(this.form.controls.email.value, this.form.controls.password.value)
  //     .pipe(
  //       take(1),
  //       tap(() => this._router.navigate(['private'])),
  //       catchError((err) => {
  //         this.error = err;
  //         return of(err);
  //       }),
  //     )
  //     .subscribe();
  // }
  protected readonly email = email;

  formSub!: Subscription;
  formStatus!: Subscription;

  isFormValid = signal(false);

  ngOnInit(): void {
    this.formSub = this.form.valueChanges
      .pipe(filter((values) => values.email?.trim() !== '' && values.password?.trim() !== ''))
      .subscribe((filteredValues) => {
        console.log('Валидные данные формы:', filteredValues);
      });

    this.formStatus = this.form.statusChanges.subscribe(() => {
      this.updateFormStatus();
    });
    this.updateFormStatus();
  }

  private updateFormStatus() {
    if (this.form.valid) {
      this.isFormValid.set(true);
    } else {
      this.isFormValid.set(false);
    }
  }

  ngOnDestroy() {
    if (this.formSub) {
      this.formSub.unsubscribe();
    }
    if (this.formStatus) {
      this.formStatus.unsubscribe();
    }
  }
}
