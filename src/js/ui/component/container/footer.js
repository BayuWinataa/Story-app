import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';
import Socmed from '../icon/socmed';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FooterApp extends LitWithoutShadowDom {
	constructor() {
		super();
		updateWhenLocaleChanges(this);
	}

	render() {
		return html`
			<footer class="home-footer1">
				<div class="home-container2">
					<span class="home-logo2">BAYU STORY</span>
					<span class="home-text"> ${msg(`© 2025 BAYU STORY`)} </span>	
				</div>
				<div class="home-separator"></div>
				<div class="home-container3">
					<socmed-component class="home-icon-group1"></socmed-component>
				</div>
			</footer>
		`;
	}
}

customElements.define('footer-component', FooterApp);
