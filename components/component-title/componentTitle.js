class componentTitle extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style>
                h1{
                    color:red;
                    font-size:2.5rem;
                    line-height:48px;
                }
            </style>
            <h1>${this.getAttribute('title')}</h1>
            <p>${this.getAttribute('text')}</p>
        `;
    }
}

window.customElements.define('component-title', componentTitle);