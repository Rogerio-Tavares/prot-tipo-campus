const sectors = [
  {
    id: 1, name: "Biblioteca",
    emoji: "📚", bg: "#e8eff8", color: "#1a4f8a",
    mapsLink: "https://maps.app.goo.gl/MRhLXy6bJ3bVGxHe9?g_st=iw"
  },
  {
    id: 2, name: "Lab. de Informática",
    emoji: "💻", bg: "#e8eff8", color: "#1a4f8a",
    mapsLink: "https://maps.app.goo.gl/informatica"
  },
  {
    id: 3, name: "Salas de Aula",
    emoji: "🏫", bg: "#e8eff8", color: "#1a4f8a",
    mapsLink: "https://maps.app.goo.gl/salas",
  },
  {
    id: 4, name: "Secretaria Acadêmica",
    emoji: "📋", bg: "#e6f2ea", color: "#2e6b3e",
    mapsLink: "https://maps.app.goo.gl/secretaria"
  },
  {
    id: 5, name: "Recursos Humanos",
    emoji: "👥", bg: "#e6f2ea", color: "#2e6b3e",
    mapsLink: "https://maps.app.goo.gl/rh"
  },
  {
    id: 6, name: "Setor Financeiro",
    emoji: "💰", bg: "#e6f2ea", color: "#2e6b3e",
    mapsLink: "https://maps.app.goo.gl/financeiro"
  },
  {
    id: 7, name: "Restaurante Universitário",
    emoji: "🍽️", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/restaurante"
  },
  {
    id: 8, name: "Estacionamento",
    emoji: "🅿️", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/estacionamento"
  },
  {
    id: 9, name: "Quadras Esportivas",
    emoji: "🏀", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/quadras"
  }
];

let currentFilter = 'todos';
let currentSearch = '';
let openId = null;

// Não mexer
function getFiltered() {
  return sectors.filter(s => {
    const matchType = currentFilter === 'todos' || s.type === currentFilter;
    const matchSearch = !currentSearch || s.name.toLowerCase().includes(currentSearch) || s.typeLabel.toLowerCase().includes(currentSearch);
    return matchType && matchSearch;
  });
}

function render() {
  const grid = document.getElementById('sectorsGrid');
  const empty = document.getElementById('emptyMsg');
  const filtered = getFiltered();
  grid.innerHTML = '';
  if (!filtered.length) { empty.classList.add('show'); return; }
  empty.classList.remove('show');
  filtered.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'sector-card' + (openId === s.id ? ' active' : '');
    card.style.animationDelay = (i * 0.04) + 's';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Ver detalhes de ' + s.name);
    card.innerHTML = `
      <div class="card-icon" style="background:${s.bg};">${s.emoji}</div>
      <div class="card-name">${s.name}</div>

    `;
    card.onclick = () => openDetail(s);
    card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') openDetail(s); };
    grid.appendChild(card);
  });
}

function openDetail(s) {
  openId = s.id;
  render();

  document.getElementById('sheetIcon').innerHTML = s.emoji;
  document.getElementById('sheetIcon').style.background = s.bg;
  document.getElementById('sheetIcon').style.fontSize = '26px';
  document.getElementById('sheetTitle').textContent = s.name;

  // Aqui o conteúdo do sheet é inserido.
  // Também o mapa.
  document.getElementById('sheetBody').innerHTML = `
    
    <div class="map-block">
      <a class="map-link" href="${s.mapsLink}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;display:block;">
        <div class="map-placeholder">
          <span class="map-icon">🗺️</span>
          <p>Localização</p>
          <div style="margin-top:12px;">
            <button style="background:var(--accent);color:#fff;border:none;padding:8px 12px;border-radius:10px;cursor:pointer;">Abrir no Google Maps</button>
          </div>
        </div>
      </a>
    </div>`;

  document.getElementById('overlay').classList.add('open');
  document.getElementById('sheet').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Responsável por fechar o painel de detealhes do setor.
function closeSheet() {
  openId = null;
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('sheet').classList.remove('open');
  document.body.style.overflow = '';
  render();
}

let startY = 0;
const sheet = document.getElementById('sheet');
sheet.addEventListener('touchstart', e => { startY = e.touches[0].clientY; });
sheet.addEventListener('touchend', e => {
  if (e.changedTouches[0].clientY - startY > 80) closeSheet();
});

render();
