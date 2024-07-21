import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Governorates } from './Governorates ';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrl: './business-info.component.scss'
})
export class BusinessInfoComponent {
  @Output() perviousPage = new EventEmitter<boolean>();
  @Output() businessInfoFormValue = new EventEmitter<any>();
  @Input() registrationValues: any;
  governorates: any;
  selectedGovernorate: any;
  governorateObj: any = {};
  districts: any;
  isLoading:boolean = false;
  socialMedia = [
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter' },
    { name: 'Friend', icon: 'fa-solid fa-user-group' }
  ]

  businessTypes = [
    { id: 'checkbox1', value: 'Salon', label: 'Salon', icon: 'fa-solid fa-scissors' },
    { id: 'checkbox2', value: 'Gym', label: 'Gym', icon: 'fa-solid fa-dumbbell' },
    { id: 'checkbox3', value: 'Spa', label: 'Spa', icon: 'fa-solid fa-spa' },
    { id: 'checkbox4', value: 'Clinic', label: 'Clinic', icon: 'fa-solid fa-stethoscope' }
  ];
  businessInfoForm!: FormGroup;
  selectedValues: string[] = [];
  selectedSocialValue = this.socialMedia[0];

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initForm()
    this.governorates = Governorates;
    for (const governorate of this.governorates) {
      this.governorateObj[governorate.id] = governorate;
    }
  }


  selectSocialMedia(item: any): void {
    this.selectedSocialValue = item;
    this.businessInfoForm.get('how_know_us')?.setValue(item.name);

  }
  initForm() {
    this.businessInfoForm = this.fb.group({
      first_name: [this.registrationValues?.first_name, Validators.required],
      last_name: [this.registrationValues?.last_name, Validators.required],
      email: [this.registrationValues?.email, Validators.required],
      phone: [this.registrationValues?.phone, Validators.required],
      password: [this.registrationValues?.password, Validators.required],
      privacy_policy: [this.registrationValues?.privacy_policy, Validators.required],

      business_type: [null, Validators.required],
      business_types: [null, Validators.required],
      governorate: [null, Validators.required],
      district: [null, Validators.required],
      how_know_us: [null, Validators.required],
      isCurrentlyUsing: ['no', Validators.required],
    });
    this.businessInfoForm.get('how_know_us')?.setValue(this.selectedSocialValue.name);
  }

  onCheckboxChange(event: any) {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.selectedValues.push(checkbox.value);
    } else {
      const index = this.selectedValues.indexOf(checkbox.value);
      if (index > -1) {
        this.selectedValues.splice(index, 1);
      }
    }
    this.businessInfoForm.get('business_types')?.setValue(this.selectedValues)
  }



  selectCountry(country: any): void {
    this.districts = this.governorateObj[country.value].Districts
  }


  getBusinessInfoValue(): void {
    console.log(this.businessInfoForm.value);
    this.businessInfoFormValue.emit(this.businessInfoForm.value);
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload()
    }, 10000);
  }

}
