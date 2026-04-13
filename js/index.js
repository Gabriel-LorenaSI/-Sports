// Posição do Mapa e Zoom
  var map = L.map('map').setView([-22.508, -44.092], 14);

  // OpenStreetMap
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  // Skin de Pin
  const pinFutebol = L.icon ({
    iconUrl: "img/pins/pinFutebol.png",
    iconSize: [27, 36]
  });

  const pinBasquete = L.icon ({
    iconUrl: "img/pins/pinBasquete.png",
    iconSize: [27, 36]
  });

  const pinKart = L.icon ({
    iconUrl: "img/pins/pinKart.png",
    iconSize: [27, 36]
  });

  const pinTenis = L.icon ({
    iconUrl: "img/pins/pinTenis.png",
    iconSize: [27, 36]
  });

  const pinVolei = L.icon ({
    iconUrl: "img/pins/pinVolei.png",
    iconSize: [27, 36]
  });

  const pinSkate = L.icon ({
    iconUrl: "img/pins/pinSkate.png",
    iconSize: [27, 36]
  });

  // Pins no Mapa
  var estadio = L.marker([-22.508, -44.097], {icon: pinFutebol}).addTo(map);
  estadio.bindPopup("<h3>Estádio Municipal General Sylvio Raulino de Oliveira</h3> <p>Endereço: R. Quinhentos E Quarenta e Cinco, s/n - Jardim Paraíba, Volta Redonda - RJ, 27215-500");

  var kartodromo = L.marker([-22.502, -44.084], {icon: pinKart}).addTo(map);
  
  var voleiJuliao = L.marker([-22.504, -44.071], {icon: pinVolei}).addTo(map);

  var skatePedra = L.marker([-22.537, -44.075], {icon: pinSkate}).addTo(map);

  var tenisETPC = L.marker([-22.524, -44.101], {icon: pinTenis}).addTo(map);

  var bsqtLrnjal = L.marker([-22.514, -44.094], {icon: pinBasquete}).addTo(map);

 
// ==========================================
// LÓGICA DO MENU HAMBÚRGUER (MOBILE/TABLET)
// ==========================================
const btnMenu = document.getElementById('btnMenu');
const btnFechar = document.getElementById('btnFechar');
const menuLateral = document.getElementById('menuLateral');

if (btnMenu && btnFechar && menuLateral) {
  // Abre o menu
  btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('menu-aberto');
  });

  // Fecha o menu no botão (X)
  btnFechar.addEventListener('click', () => {
    menuLateral.classList.remove('menu-aberto');
  });

  // Fecha o menu caso clique em algum link (útil para Single Page)
  menuLateral.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuLateral.classList.remove('menu-aberto');
    });
  });
}

// Carrossel
const listaModalidades = document.querySelector(".modalidades-lista");
const btnSetaEsquerda = document.querySelector(".seta-esquerda");
const btnSetaDireita = document.querySelector(".seta-direita");

if (listaModalidades && btnSetaEsquerda && btnSetaDireita) {
btnSetaDireita.addEventListener("click", () => {
  const ultimoItem = listaModalidades.lastElementChild;
  listaModalidades.insertBefore(ultimoItem, listaModalidades.firstElementChild);
});

btnSetaEsquerda.addEventListener("click", () => {
  const primeiroItem = listaModalidades.firstElementChild;
  listaModalidades.appendChild(primeiroItem);
});
}

const itensModalidade = document.querySelectorAll(".item-modalidade");

if (itensModalidade.length > 0) {
  itensModalidade.forEach((item) => {
    item.addEventListener("click", () => {
      itensModalidade.forEach((outroItem) => {
        outroItem.classList.remove("ativo");
      });

      item.classList.add("ativo");
    });
  });
}