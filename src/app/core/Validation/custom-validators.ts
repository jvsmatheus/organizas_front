import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static hasNumber: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) return null;
        const hasNum = /\d/.test(control.value);
        return hasNum ? null : { noNumber: true }
    }

    static hasNonAlphanumeric: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) return null;
        const hasNonAlphanumeric = /[^a-zA-Z0-9]/.test(control.value);
        return hasNonAlphanumeric ? null : { noNonAlphanumeric: true }
    }

    static passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordMismatch: true };
    };
}