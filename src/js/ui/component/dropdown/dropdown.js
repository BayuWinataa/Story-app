import { html } from 'lit';
import { allLocales } from '../../../../generated/locale-codes';
import { updateWhenLocaleChanges } from '@lit/localize';
import { getLocale, localeNames, setLocaleFromUrl } from '../../../localization/localization';
import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';

class LocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this._menu = null; 
  }

  render() {
    return html`
      <button class="btn btn-primary btn-sm dropdown-toogle show" aria-expanded="true" data-bs-toggle="dropdown" type="button" @click=${this._localeChanged}>
        <div class="dropdown-menu" @click=${this._menuClicked}> 
          ${allLocales.map((locale) => {
            return html`
              <a class="dropdown-item" href="#" value=${locale} ?selected=${locale === getLocale()}>
                ${localeNames[locale]}
              </a>
            `;
          })}
        </div>
        <span>${localeNames[getLocale()]}</span> 
      </button>
    `;
  }

  _localeChanged(event) {
    const newLocale = event.target.getAttribute('value');
    if (allLocales.includes(newLocale)) { 
      if (newLocale !== getLocale()) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', newLocale);

        window.history.pushState(null, '', url.toString());
        setLocaleFromUrl();
      }
    }
  }

  _menuClicked(event) { 
    this._menu = event.currentTarget;
  }

  toggle() { 
    if (this._menu) {
      const instance = Dropdown.getInstance(this._menu);
      if (instance) {
        instance.toggle();
      }
    }
  }
}

customElements.define('locale-picker', LocalePicker);