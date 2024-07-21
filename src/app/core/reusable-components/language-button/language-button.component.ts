import { Component } from '@angular/core';
import { GlobalFunctionsService } from '../../services/global-functions.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.scss',
  standalone: true,
  imports: [TranslateModule,CommonModule]
})
export class LanguageButtonComponent {
  language_buttons = [
    { label: 'LANGUAGE_BUTTONS.ARABIC', code: 'ar', img: '../../../../assets/imgs/sa-flag.png' },
    { label: 'LANGUAGE_BUTTONS.ENGLISH', code: 'en', img: '../../../../assets/imgs/english.png' },
  ]
  constructor(public global: GlobalFunctionsService) { }

  setLanguage(language: any) {
    this.global.setLanguage(language.code)
  }
}
