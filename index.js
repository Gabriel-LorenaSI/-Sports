// Posição do Mapa e Zoom
  var map = L.map('map').setView([-22.508, -44.092], 13);

  // OpenStreetMap
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  // Skin do Mapa
  L.tileLayer.provider('Stadia.OSMBright').addTo(map);

  // Skin de Pin
  const pinFutebol = L.icon ({
    iconUrl: "/img/pins/pinFutebol.png",
    iconSize: [27, 36]
  });

  const pinBasquete = L.icon ({
    iconUrl: "/img/pins/pinBasquete.png",
    iconSize: [27, 36]
  });

  const pinKart = L.icon ({
    iconUrl: "/img/pins/pinKart.png",
    iconSize: [27, 36]
  });

  const pinTenis = L.icon ({
    iconUrl: "/img/pins/pinTenis.png",
    iconSize: [27, 36]
  });

  const pinVolei = L.icon ({
    iconUrl: "/img/pins/pinVolei.png",
    iconSize: [27, 36]
  });

  const pinSkate = L.icon ({
    iconUrl: "/img/pins/pinSkate.png",
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