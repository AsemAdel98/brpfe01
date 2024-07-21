import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {
  currentLanguage: string | undefined;
  constructor(
    public translate: TranslateService,
  ) {
    this.initializeLanguageSettings();
  }


  private initializeLanguageSettings() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'ar') {
      document.documentElement.classList.add('arabic');
      document.documentElement.classList.remove('english');
      document.documentElement.dir = "rtl";
      this.currentLanguage = 'ar';
    } else {
      document.documentElement.classList.add('english');
      document.documentElement.classList.remove('arabic');
      document.documentElement.dir = "ltr";
      this.currentLanguage = 'en';
    }
    this.translate.use(this.currentLanguage);
  }

  public setLanguage(language: any) {
    localStorage.setItem('language', language);
    this.translate?.use(language);
    this.currentLanguage = language;
    if (localStorage.getItem('language') === 'ar') {
      document.documentElement.classList.add('arabic');
      document.documentElement.classList.remove('english');
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.classList.add('english');
      document.documentElement.classList.remove('arabic');
      document.documentElement.dir = "ltr";
    }
  }

}
