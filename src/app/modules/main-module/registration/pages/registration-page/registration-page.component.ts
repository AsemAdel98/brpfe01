import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  successRegistrations: boolean = false;
  registrationValues:any
  businessInfoValues:any
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  registrationValue(value: any) {
    this.successRegistrations = value.isSuccess;
    this.registrationValues = value.value
  }
  perviosPage(value: any) {
    this.successRegistrations = value.isSuccess
  }
  businessInfoValue(value: any) {
    this.businessInfoValues = value;
  }
}
