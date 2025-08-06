class Footer extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
      footer {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10rem 3rem 10rem 3rem;
      }
    </style>
    <footer>
      <p>&#169; 2025 Josh Peters</p>
    </footer>
    `;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('footer-component', Footer);
