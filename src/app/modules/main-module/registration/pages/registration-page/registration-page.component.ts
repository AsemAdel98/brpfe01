import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent implements OnInit {
  next_page: boolean = true;
  registrationForm!: FormGroup;
  verificationForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      first_name: [null, [Validators.required, Validators.minLength(3)]],
      last_name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      privacy_policy: [null, Validators.required],

      business_type: [null, Validators.required],
      business_types: [null, Validators.required],
      governorate: [null, Validators.required],
      district: [null, Validators.required],
      how_know_us: [null, Validators.required],
      isCurrentlyUsing: ['no', Validators.required],
    });
    this.verificationForm = this.fb.group({
      code1: [null, [Validators.required, Validators.maxLength(1)]],
      code2: [null, [Validators.required, Validators.maxLength(1)]],
      code3: [null, [Validators.required, Validators.maxLength(1)]],
      code4: [null, [Validators.required, Validators.maxLength(1)]],
    });
  }


  next(value:any): void {
    this.next_page =false;
  }
  pervious(value:any): void {
    this.next_page =true;
  }


}
