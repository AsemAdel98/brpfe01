import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessInfoComponent } from './components/business-info/business-info.component';
import { LanguageButtonComponent } from '../../../core/reusable-components/language-button/language-button.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RegistrationPageComponent,
    RegistrationFormComponent,
    BusinessInfoComponent
  ],
  imports: [
    CommonModule,
    LanguageButtonComponent,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forChild(),
  ]
})
export class RegistrationModule { }
