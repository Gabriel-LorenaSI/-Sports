     function mascaraLogin(input) {
        let v = input.value;

        // Verifica se tem alguma letra ou @ (característica de E-mail)
        if (v.match(/[a-zA-Z@]/)) {
          input.setAttribute("maxlength", "100");
          return;
        }

        // Se chegou aqui, é porque SÓ tem números (ou símbolos de CPF)
        input.setAttribute("maxlength", "14");

        // Aplica a máscara de CPF padrão
        v = v.replace(/\D/g, ""); 
        v = v.replace(/(\d{3})(\d)/, "$1.$2"); 
        v = v.replace(/(\d{3})(\d)/, "$1.$2"); 
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

        input.value = v;
      }

      // --- AS FUNÇÕES ABAIXO AGORA ESTÃO FORA DA MASCARA (Correto) ---

      function validarLogin(input) {
        let valor = input.value;
        let spanErro = document.getElementById("mensagemErro");
        
        // 1. Verifica se está vazio
        if (valor === "") {
            removerErro(input, spanErro);
            return;
        }

        // 2. Validação de CPF
        let isCPF = valor.length === 14;

        // 3. Validação de E-mail
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isEmail = regexEmail.test(valor);

        // 4. Lógica Final
        if (isCPF || isEmail) {
          removerErro(input, spanErro);
        } else {
          mostrarErro(input, spanErro);
        }
      }

      function mostrarErro(input, span) {
        input.classList.add("input-invalido");
        span.style.display = "block";
      }

      function removerErro(input, span) {
        input.classList.remove("input-invalido");
        span.style.display = "none";
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