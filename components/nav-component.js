class NavBar extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
      <style>
        a {
          text-decoration: none;
          color: #F2F2F2;
          white-space: nowrap;
        }

        a:hover {
            background-color: #F2F2F2;
            color: #1A1A1A;
        }

        #nav-container {
          display: none;
        }

        @media(min-width: 768px) {
          #nav-container {
            display: flex;
            gap: 0.5rem;
          }
        }
      </style>
      <nav id="nav-container">
        | <a class="nav-item" data-path="index.html">Home</a>
        | <a class="nav-item" data-path="projects.html">Projects</a>
        | <a class="nav-item" data-path="dsa.html">DSA</a>
        | <a class="nav-item" data-path="writing.html">Writing</a>
        | <a class="nav-item" href="https://github.com/josh-peters-99">GitHub<span class="external-arrow">&#8594;</span></a>
        |
      </nav>
      `;

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));

      const isDev = location.hostname === "localhost" || location.hostname === "127.0.0.1";
      const basePath = isDev ? "/" : "/portfolio-site/";

      shadow.querySelectorAll('a[data-path]').forEach(link => {
        const path = link.getAttribute('data-path');
        link.setAttribute('href', basePath + path);
      });
    }
  }
customElements.define('nav-bar', NavBar);
