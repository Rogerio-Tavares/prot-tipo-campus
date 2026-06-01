const sectors = [
  {
    id: 1, name: "Biblioteca", type: "academico", typeLabel: "Acadêmico",
    emoji: "📚", bg: "#e8eff8", color: "#1a4f8a",
    desc: "Acervo com mais de 20 mil títulos, periódicos digitais, salas de estudo individuais e em grupo e espaço de leitura tranquila.",
    horario: "Seg–Sex: 7h–22h | Sáb: 8h–14h",
    responsavel: "Coordenação de Acervo",
    bloco: "Bloco B, Térreo",
    mapsLink: "https://maps.app.goo.gl/biblioteca",
    servicos: ["Empréstimo", "Pesquisa digital", "Salas de estudo", "Impressão"],
    rota: ["Entre pela portaria principal", "Siga em frente pela alameda central", "Vire à esquerda no Bloco B", "A biblioteca está no térreo à direita"]
  },
  {
    id: 2, name: "Lab. de Informática", type: "academico", typeLabel: "Acadêmico",
    emoji: "💻", bg: "#e8eff8", color: "#1a4f8a",
    desc: "60 computadores com acesso à internet, softwares de engenharia, design e programação. Disponível para aulas e uso livre.",
    horario: "Seg–Sex: 7h–21h",
    responsavel: "Depto. de TI",
    bloco: "Bloco C, 1º Andar",
    mapsLink: "https://maps.app.goo.gl/informatica",
    servicos: ["Computadores", "Softwares licenciados", "Impressão", "Suporte técnico"],
    rota: ["Entre pela portaria principal", "Siga pela alameda central e vire à direita", "Acesse o Bloco C", "Suba para o 1º andar, sala 101"]
  },
  {
    id: 3, name: "Salas de Aula", type: "academico", typeLabel: "Acadêmico",
    emoji: "🏫", bg: "#e8eff8", color: "#1a4f8a",
    desc: "24 salas climatizadas com capacidade de 30 a 60 alunos, equipadas com projetor, quadro branco e sistema de som.",
    horario: "Conforme grade curricular",
    responsavel: "Coordenação Acadêmica",
    bloco: "Blocos A, D e E",
    mapsLink: "https://maps.app.goo.gl/salas",
    servicos: ["Projetores", "Wi-Fi", "Ar-condicionado", "Acessibilidade"],
    rota: ["Consulte sua grade para identificar o bloco", "Blocos A e D ficam ao lado da portaria principal", "Bloco E fica ao fundo do campus, à esquerda"]
  },
  {
    id: 4, name: "Secretaria Acadêmica", type: "administrativo", typeLabel: "Administrativo",
    emoji: "📋", bg: "#e6f2ea", color: "#2e6b3e",
    desc: "Responsável por matrículas, histórico escolar, requerimentos, diplomas e demais documentos acadêmicos.",
    horario: "Seg–Sex: 8h–18h",
    responsavel: "Secretaria Geral",
    bloco: "Bloco A, Térreo",
    mapsLink: "https://maps.app.goo.gl/secretaria",
    servicos: ["Matrícula", "Histórico", "Requerimentos", "Diplomas", "Atestados"],
    rota: ["Entre pela portaria principal", "O Bloco A está logo à esquerda", "A secretaria é a primeira sala no térreo"]
  },
  {
    id: 5, name: "Recursos Humanos", type: "administrativo", typeLabel: "Administrativo",
    emoji: "👥", bg: "#e6f2ea", color: "#2e6b3e",
    desc: "Atendimento a servidores e colaboradores para questões trabalhistas, benefícios, férias e documentação funcional.",
    horario: "Seg–Sex: 8h–17h",
    responsavel: "Gerência de RH",
    bloco: "Bloco Administrativo, 2º Andar",
    mapsLink: "https://maps.app.goo.gl/rh",
    servicos: ["Contracheque", "Férias", "Benefícios", "Documentos"],
    rota: ["Pela portaria principal, siga à direita", "Acesse o Bloco Administrativo (placa indicativa)", "Suba para o 2º andar, sala 205"]
  },
  {
    id: 6, name: "Setor Financeiro", type: "administrativo", typeLabel: "Administrativo",
    emoji: "💰", bg: "#e6f2ea", color: "#2e6b3e",
    desc: "Responsável por boletos, pagamentos, bolsas e demais questões financeiras de alunos e fornecedores.",
    horario: "Seg–Sex: 9h–16h",
    responsavel: "Gerência Financeira",
    bloco: "Bloco Administrativo, 1º Andar",
    mapsLink: "https://maps.app.goo.gl/financeiro",
    servicos: ["Boletos", "Bolsas", "Financiamentos", "NF-e"],
    rota: ["Pela portaria principal, siga à direita", "Acesse o Bloco Administrativo", "No 1º andar, sala 110"]
  },
  {
    id: 7, name: "Restaurante Universitário", type: "servicos", typeLabel: "Serviços",
    emoji: "🍽️", bg: "#fdf0d8", color: "#8a5a0a",
    desc: "Refeitório com capacidade para 300 pessoas, servindo café da manhã, almoço e jantar com cardápio variado e opções vegetarianas.",
    horario: "Seg–Sex: 7h–20h | Sáb: 8h–14h",
    responsavel: "Gestão de Alimentação",
    bloco: "Área Central do Campus",
    mapsLink: "https://maps.app.goo.gl/restaurante",
    servicos: ["Café da manhã", "Almoço", "Jantar", "Vegetariano"],
    rota: ["Da portaria principal, siga a alameda central até o fim", "O restaurante está na área central", "Identificado com placa laranja"]
  },
  {
    id: 8, name: "Estacionamento", type: "servicos", typeLabel: "Serviços",
    emoji: "🅿️", bg: "#fdf0d8", color: "#8a5a0a",
    desc: "Estacionamento coberto com 200 vagas para carros e 80 para motos. Acesso mediante cadastro prévio ou pagamento na cancela.",
    horario: "24 horas",
    responsavel: "Portaria e Segurança",
    bloco: "Entrada Lateral (Rua B)",
    mapsLink: "https://maps.app.goo.gl/estacionamento",
    servicos: ["Carros", "Motos", "Acesso 24h", "Câmeras"],
    rota: ["Não entre pela portaria principal", "Acesse pela Rua B — entrada lateral, à direita do campus", "A cancela de acesso fica logo na entrada"]
  },
  {
    id: 9, name: "Quadras Esportivas", type: "servicos", typeLabel: "Serviços",
    emoji: "🏀", bg: "#fdf0d8", color: "#8a5a0a",
    desc: "Duas quadras poliesportivas cobertas e uma quadra de areia para vôlei. Agendamento disponível pelo portal do aluno.",
    horario: "Seg–Sáb: 7h–21h",
    responsavel: "Coord. de Esportes",
    bloco: "Área Esportiva (fundo do campus)",
    mapsLink: "https://maps.app.goo.gl/quadras",
    servicos: ["Basquete", "Vôlei", "Futsal", "Agendamento"],
    rota: ["Da portaria principal, siga toda a alameda central", "Ao fundo do campus, vire à esquerda", "As quadras ficam no fim do caminho, à direita"]
  }
];

// Filtro para determinar o setor.
 // *Ver como referenciar no projeto*
const LABELS = {
  todos: 'Todos os setores',
  academico: 'Setores Acadêmicos',
  administrativo: 'Setores Administrativos',
  servicos: 'Serviços'
};

let currentFilter = 'todos';
let currentSearch = '';
let openId = null;

function setFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sectionTitle').textContent = LABELS[f];
  render();
}

function filterSectors() {
  currentSearch = document.getElementById('searchInput').value.toLowerCase();
  render();
}

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
      <div class="card-type">${s.typeLabel}</div>
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
  document.getElementById('sheetSubtitle').textContent = s.typeLabel + ' · ' + s.bloco;

  const stepsHTML = s.rota.map((r, i) => {
    const connector = i < s.rota.length - 1
      ? `<div class="step-connector"></div>`
      : '';
    return `
      <div class="route-step">
        <div>
          <div class="step-num">${i+1}</div>
          ${connector}
        </div>
        <div class="step-text">${r}</div>
      </div>
    `;
  }).join('');

  document.getElementById('sheetBody').innerHTML = `
    <p class="desc">${s.desc}</p>

    <div class="info-block">
      <div class="info-block-title">Informações</div>
      <div class="info-row"><span class="icon">🕐</span><div><span class="label">Horário:</span>${s.horario}</div></div>
      <div class="info-row"><span class="icon">👤</span><div><span class="label">Responsável:</span>${s.responsavel}</div></div>
      <div class="info-row"><span class="icon">📍</span><div><span class="label">Localização:</span>${s.bloco}</div></div>
    </div>

    <div class="info-block">
      <div class="info-block-title">Serviços disponíveis</div>
      <div class="tags">
        ${s.servicos.map(sv => `<span class="tag">${sv}</span>`).join('')}
      </div>
    </div>

    <div class="map-block">
      <a class="map-link" href="${s.mapsLink}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;display:block;">
        <div class="map-placeholder">
          <span class="map-icon">🗺️</span>
          <p>Mapa do campus</p>
          <small>Substitua por <code>&lt;img src="mapa.jpg"&gt;</code></small>
          <div style="margin-top:12px;">
            <button style="background:var(--accent);color:#fff;border:none;padding:8px 12px;border-radius:10px;cursor:pointer;">Abrir no Google Maps</button>
          </div>
        </div>
      </a>
    </div>

    <div class="route-title">Como chegar</div>
    ${stepsHTML}
    <div style="height:1rem;"></div>
  `;

  document.getElementById('overlay').classList.add('open');
  document.getElementById('sheet').classList.add('open');
  document.body.style.overflow = 'hidden';
}

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
