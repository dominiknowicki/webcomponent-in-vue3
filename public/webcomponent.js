class Webcomponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log('wc-webcomponent connectedCallback!!!');
        this.innerHTML = `${this.getAttribute('message')}`;
    }
    
}

window.customElements.define('wc-webcomponent', Webcomponent)