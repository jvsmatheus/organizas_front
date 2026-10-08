import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonContent, IonInput, IonItem, IonList, IonToast } from '@ionic/angular';
import { finalize } from 'rxjs';
import { AuthService } from './services/auth.service.ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonToast,
    ReactiveFormsModule
  ],
})
export class LoginComponent {
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly authService: AuthService = inject(AuthService);

  protected showPassword: boolean = false;
  protected isLoading: boolean = false;
  protected openToast: boolean = false;

  protected loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.minLength(10),
      Validators.required
    ])
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.controls["email"].value, this.loginForm.controls["password"].value)
      .pipe(finalize(() => this.changeDetector.detectChanges))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this.openToast = true;
          console.log(err);
        }
      });
  }
}
