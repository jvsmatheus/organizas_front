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
    email: new FormControl<string>('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl<string>('', [
      CustomValidators.hasNumber,
      CustomValidators.hasNonAlphanumeric,
      Validators.minLength(10),
      Validators.maxLength(255),
      Validators.required
    ]),
    confirmPassword: new FormControl<string>('', [
      Validators.required
    ])
  }, {
    validators: CustomValidators.passwordMatchValidator
  });

  onSubmit(): void {
    // if (this.registerForm.invalid) {
    //   this.registerForm.markAllAsTouched();
    //   return;
    // }

    console.log(this.registerForm);
  }

  get emailIsValid(): boolean {
    return this.registerForm.controls["email"].touched && this.registerForm.controls["email"].hasError("email");
  }

  get passwordHasNum(): boolean {
    return this.registerForm.controls["password"].touched && this.registerForm.controls["password"].hasError("noNumber"); 
  }

  get passwordHasNonAlphanumeric(): boolean {
    return this.registerForm.controls["password"].touched && this.registerForm.controls["password"].hasError("noNonAlphanumeric"); 
  }

  get passwordHasValidLength(): boolean {
    return this.registerForm.controls["password"].touched && this.registerForm.controls["password"].hasError("minlength")
      || this.registerForm.controls["password"].touched && this.registerForm.controls["password"].hasError("maxlength"); 
  }

  get confirmPasswordMatch(): boolean {
    return this.registerForm.hasError("passwordMismatch")
  }
}
