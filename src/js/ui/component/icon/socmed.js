import LitWithoutShadowDom from '../../../base/LitWithoutShadowDom';
import { html } from 'lit';

class SocmedLogoApp extends LitWithoutShadowDom {
	constructor() {
		super();
	}

	render() {
		return html`
			<i class="bi bi-instagram home-icon"></i>
			<i class="bi bi-facebook home-icon"></i>
			<i class="bi bi-twitter-x home-icon"></i>
			<i class="bi bi-linkedin home-icon"></i>
			<i class="bi bi-youtube home-icon"></i>
			<i class="bi bi-whatsapp home-icon"></i>
			<i class="bi bi-telegram home-icon"></i>
		`;
	}
}
  
customElements.define('socmed-component', SocmedLogoApp);