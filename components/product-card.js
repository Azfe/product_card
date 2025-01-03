class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ["img", "title", "price", "description", "collection"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img") {
        this.img = newVal;
        }
        if (attr === "title") {
        this.title = newVal;
        }
        if (attr === "price") {
        this.price = newVal;
        }
        if (attr === "description") {
        this.description = newVal;
        }
        if (attr === "collection") {
        this.collection = newVal;
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <main class="container">
            <section class="imgBox">
                <img src="${
                    this.img
                }" alt="Zapatos deportivos para correr color azul"/>
            </section>
            <section class="details">
                <div class="content">
                    <h2>${this.title} <span>${this.collection}</span></h2>
                    <p>${this.description}</p>
                    <h3>${this.price}</h3>
                    <button>Comprar</button>
                </div>
            </section>
        </main>
        ${this.getStyles()}
        `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("product-card", productCard);