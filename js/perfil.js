        /* JavaScript do MENU HAMBURGER*/
          function clickMenu() {
            if (itens.style.display == 'block') {
              itens.style.display = 'none'
            } else {
              itens.style.display = 'block'
            }

          }

          function clickMenu() {
             let menu = document.getElementById('itens');
             menu.classList.toggle('aberto');
            }

      /* --- 3. MENU HAMBURGER --- */

      const btnMenu = document.getElementById('btnMenu');
      const btnFechar = document.getElementById('btnFechar');
      const menuLateral = document.getElementById('menuLateral');

      if (btnMenu && btnFechar && menuLateral) {
      
        btnMenu.addEventListener('click', () => {
          menuLateral.classList.add('menu-aberto');
        });

      
        btnFechar.addEventListener('click', () => {
          menuLateral.classList.remove('menu-aberto');
        });

       
        menuLateral.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            menuLateral.classList.remove('menu-aberto');
          });
        });
      }