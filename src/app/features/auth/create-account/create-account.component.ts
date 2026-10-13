import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CustomValidators } from '../../../core/Validation/custom-validators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  imports: [
    IonContent,
    ReactiveFormsModule,
    RouterLink
  ],
})
export class CreateAccountComponent {
  protected isLoading: boolean = false;

  protected registerForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    password: new FormControl<string>('', [
      CustomValidators.hasNumber,
      CustomValidators.hasNonAlphanumeric,
      Validators.minLength(10),
      Validators.required
    ]),
    confirmPassword: new FormControl<string>('', [
      CustomValidators.passwordMatchValidator,
      Validators.required
    ])
  });

  onSubmit(): void {
    // if (this.registerForm.invalid) {
    //   this.registerForm.markAllAsTouched();
    //   return;
    // }

    console.log(this.registerForm);
  }
}
