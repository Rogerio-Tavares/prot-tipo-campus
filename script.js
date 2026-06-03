const sectors = [
  {
    id: 1, name: "Biblioteca",
    emoji: "📚", bg: "#e8eff8", color: "#1a4f8a",
    mapsLink: "https://maps.app.goo.gl/MRhLXy6bJ3bVGxHe9?g_st=iw"
  },
  {
    id: 2, name: "UINFOR",
    emoji: "💻", bg: "#e8eff8", color: "#1a4f8a",
    mapsLink: "https://maps.app.goo.gl/PgY9vYw9RyCKbzCX9?g_st=iw"
  },
  {
    id: 3, name: "CETEP",
    emoji: "🏫", bg: "#e8eff8", color: "#1a4f8a",
    mapsLink: "https://maps.app.goo.gl/jKeSiWnyuymdCfnW6?g_st=iw",
  },
  {
    id: 4, name: "Lab. de Solos",
    emoji: "🌍", bg: "#e6f2ea", color: "#2e6b3e",
    mapsLink: "https://maps.app.goo.gl/VaVuPpTc8Xxs8naA6?g_st=iw"
  },
  {
    id: 5, name: "Antiga Reitoria",
    emoji: "👥", bg: "#e6f2ea", color: "#2e6b3e",
    mapsLink: "https://maps.app.goo.gl/hw5oDcpRH94o4UXDA?g_st=iw"
  },
  {
    id: 6, name: "Almoxarifado",
    emoji: "📦", bg: "#e6f2ea", color: "#2e6b3e",
    mapsLink: "https://maps.app.goo.gl/gXofGqXHkMusNLUz9?g_st=iw"
  },
  {
    id: 7, name: "Prefeitura de campus",
    emoji: "🏛️", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/FMpJU6eq5pS3HuPa9?g_st=iw"
  },
  {
    id: 8, name: "Luisão",
    emoji: "🏫", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/EruhgNuXwCcxva5B8?g_st=iw"
  },
  {
    id: 9, name: "Módulo Amélia Barreto",
    emoji: "🔬", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/GReT2ya1QDGMxXWR6?g_st=iw"
  },
  {
    id: 10, name: "CEUAS",
    emoji: "🏥", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/aiAWWk6RibUhrTvL8?g_st=iw"
  },
  {
    id: 11, name: "Academia",
    emoji: "🏋️", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/DGVCkQ1b1LM6tsgu7?g_st=iw"
  },
  {
    id: 12, name: "Acadêmico",
    emoji: "📚", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/vbaetrWurEFfe9NQ7?g_st=iw"
  },
  {
    id: 13, name: "Quiosque",
    emoji: "🍟", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/fFWUZjjw1HnHNWVf8?g_st=iw"
  },
  {
    id: 14, name: "Módulo I",
    emoji: "🏫", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/1FK7AFrsNvQh5h619?g_st=iw"
  },
  {
    id: 15, name: "Módulo II",
    emoji: "🏫", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/UDrSXkRWQxmke4gQ8?g_st=iw"
  },
  {
    id: 16, name: "Quadra",
    emoji: "🏀", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/Ejg276rnnoj3PR8g8?g_st=iw"
  },
  {
    id: 17, name: "Estação Metereológica",
    emoji: "🌥️", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/vhyRKQSSv2N93LWk9?g_st=iw"
  },
    {
    id: 18, name: "Viveiro",
    emoji: "🍀", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/Qejp6tZrkH6TMcX46?g_st=iw"
  },
  {
    id: 19, name: "Módulo de Psicologia",
    emoji: "🧑‍⚕️", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/8su88YHPi9H1SRj3A?g_st=iw"
  },
  {
    id: 20, name: "Módulo de Engenharia Florestal",
    emoji: "🌲", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/jKaP2g24kN8ecVTg8?g_st=iw"
  },
  {
    id: 21, name: "RU - Restaurante Universitário",
    emoji: "🍲", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/WQPmfRPC49fua7ma9?g_st=iw"
  },
  {
    id: 22, name: "Módulo de Medicina",
    emoji: "🩺", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/NaLr88K5RC8evJ3WA?g_st=iw"
  },
  {
    id: 23, name: "Reitoria",
    emoji: "👨‍💼", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/ootw5r6X1HevbqG77?g_st=iw"
  },
  {
    id: 24, name: "Lab. de Água",
    emoji: "💧", bg: "#fdf0d8", color: "#8a5a0a",
    mapsLink: "https://maps.app.goo.gl/ESbuSjFvx7roMtYk9?g_st=iw"
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
