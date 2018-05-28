import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settingService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  changColor(theme: string, link: any) {
    this.aplicarCheck(link);
    this._settingService.applyTheme(theme);
  }

  aplicarCheck(link: any) {
    const selectores: any =  document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  colocarCheck() {
    const selectores: any =  document.getElementsByClassName('selector');
    const theme = this._settingService.settings.theme;
    for (const ref of selectores) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }

}
}
