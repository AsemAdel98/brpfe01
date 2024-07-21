import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Governorates } from './Governorates ';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrl: './business-info.component.scss'
})
export class BusinessInfoComponent {
  @Output() perviousPage = new EventEmitter<boolean>();
  @Input() registrationForm!: FormGroup;
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
  selectedValues: string[] = [];
  selectedSocialValue = this.socialMedia[0];


  ngOnInit(): void {
    this.governorates = Governorates;
    for (const governorate of this.governorates) {
      this.governorateObj[governorate.id] = governorate;
    }
    this.registrationForm.get('how_know_us')?.setValue(this.selectedSocialValue.name);
  }


  selectSocialMedia(item: any): void {
    this.selectedSocialValue = item;
    this.registrationForm.get('how_know_us')?.setValue(item.name);

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
    this.registrationForm.get('business_types')?.setValue(this.selectedValues)
  }



  selectCountry(country: any): void {
    this.districts = this.governorateObj[country.value].Districts
  }


  getBusinessInfoValue(): void {
    console.log(this.registrationForm.value);
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload()
    }, 10000);
  }

}
