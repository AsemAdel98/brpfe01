import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GlobalFunctionsService } from '../../../../../core/services/global-functions.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  @Output() nextPage = new EventEmitter<any>();
  @Input() registrationForm!: FormGroup;
  @Input() verificationForm!: FormGroup;

  passwordFieldType: string = 'password';
  countries = [
    { code: '+996', flag: '../../../../../../assets/imgs/sa-flag.png' },
    { code: '+20', flag: '../../../../../../assets/imgs/Egypt_flag.png' },
  ];;
  selectedCountry = this.countries[0];
  phoneNumber!: string;
  countdown: number = 60;
  countdownMessage!: string;
  phoneNumberDisplay!: string;

  constructor(public global: GlobalFunctionsService) { }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  selectCountry(country: any): void {
    this.selectedCountry = country;
  }

  updatePhoneNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    const phoneValue = input.value;
    this.registrationForm.get('phone')?.setValue(this.selectedCountry.code + phoneValue);
    const phone = this.registrationForm.get('phone')?.value;
    this.phoneNumberDisplay = this.formatPhoneNumber(phone);
  }


  startCountdown(): void {
    setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.countdown = 60;
      }
      this.countdownMessage = `The code will be sent again within ${this.countdown} seconds`;
    }, 1000);
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value && !/^\d$/.test(input.value)) {
      input.value = '';
      return;
    }
    if (input.value.length >= 1) {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
      }
    }
  }


  formatPhoneNumber(phone: string): string {
    if (phone && phone.length >= 10) {
      const maskedPart = phone.slice(0, -2).replace(/./g, '*');
      const lastTwoDigits = phone.slice(-2);
      return `${maskedPart}${lastTwoDigits}`;
    }
    return phone;
  }

  getRegistrationValue(): void {
    this.nextPage.emit();
    console.log(this.registrationForm.value);
    const verificationCode = `${this.verificationForm.get('code1')?.value}${this.verificationForm.get('code2')?.value}${this.verificationForm.get('code3')?.value}${this.verificationForm.get('code4')?.value}`;
    console.log('Verification code:', verificationCode);
  }
}
