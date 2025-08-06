class NavMobile extends HTMLElement {
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

        #mobile-menu-open {
            display: flex;
            font-size: xxx-large;
        }

        #mobile-menu-close {
            display: flex;
            justify-content: end;
            font-size: xxx-large;
        }

        #mobile-nav-container {
            margin-top: 3em;
            display: flex;
            flex-direction: column;
            gap: 3em;
            align-items: center;
        }

        .side-panel {
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 250px;
            background-color: #1A1A1A;
            padding: 2rem;
            box-shadow: 2px 0 5px rgba(0,0,0,0.5);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 1000;
        }

        .side-panel.show {
            transform: translateX(0);
        }

        .side-panel.hidden {
            display: none;
        }

        @media(min-width: 768px) {
            #mobile-menu-open {
            display: none;
            }
        }
    </style>

    <div id="mobile-menu-open">&#9776;</div>

    <div id="side-panel" class="side-panel hidden">
        <div id="mobile-menu-close">&#10005;</div>
        <nav id="mobile-nav-container">
            <a class="nav-item" href="index.html">Home</a>
            <a class="nav-item" href="projects.html">Projects</a>
            <a class="nav-item" href="dsa.html">DSA</a>
            <a class="nav-item" href="writing.html">Writing</a>
            <a class="nav-item" href="https://github.com/josh-peters-99">GitHub</a>
        </nav>
    </div>
    `;

    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    const openBtn = shadow.getElementById('mobile-menu-open');
    const closeBtn = shadow.getElementById('mobile-menu-close');
    const sidePanel = shadow.getElementById('side-panel');

    openBtn.addEventListener('click', () => {
      sidePanel.classList.add('show');
      sidePanel.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      sidePanel.classList.remove('show');
      setTimeout(() => {
        sidePanel.classList.add('hidden');
      }, 300);
    });
  }
}

customElements.define('nav-mobile', NavMobile);
