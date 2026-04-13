 /* --- 1. MÁSCARAS (Formata enquanto digita) --- */
      function aplicarMascara(input, tipo) {
        let v = input.value;

        if (tipo === "cpf") {
          input.setAttribute("maxlength", "14");
          v = v.replace(/\D/g, "");
          v = v.replace(/(\d{3})(\d)/, "$1.$2");
          v = v.replace(/(\d{3})(\d)/, "$1.$2");
          v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
          input.value = v;
        }

        if (tipo === "nome") {
          // Remove números e símbolos
          v = v.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
          input.value = v;
        }

        if (tipo === "data") {
          input.setAttribute("maxlength", "10");
          v = v.replace(/\D/g, "");
          v = v.replace(/(\d{2})(\d)/, "$1/$2");
          v = v.replace(/(\d{2})(\d)/, "$1/$2");
          input.value = v;
        }
      }

      /* --- 2. VALIDAÇÕES (Verifica ao sair do campo) --- */

      function validarNome(input) {
        let span = input.nextElementSibling;
        if (input.value.length < 3) {
          mostrarErro(input, span);
        } else {
          removerErro(input, span);
        }
      }

      function validarCPF(input) {
        let span = input.nextElementSibling;
        // Verifica tamanho (14 contando pontos e traço)
        if (input.value.length !== 14) {
          mostrarErro(input, span);
        } else {
          removerErro(input, span);
        }
      }

      function validarEmail(input) {
        let span = input.nextElementSibling;
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(input.value)) {
          mostrarErro(input, span);
        } else {
          removerErro(input, span);
        }
      }

      // VALIDAÇÃO DE SENHA FORTE
      function validarSenha(input) {
        let span = document.getElementById("erroSenha");
        let v = input.value;

        // Regex explicada:
        // (?=.*[a-z]) -> Pelo menos uma minúscula
        // (?=.*[A-Z]) -> Pelo menos uma maiúscula
        // (?=.*[0-9]) -> Pelo menos um número
        // (?=.*[^a-zA-Z0-9]) -> Pelo menos um símbolo
        // .{8,}       -> Mínimo 8 caracteres
        let regexSenha =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

        if (!regexSenha.test(v)) {
          mostrarErro(input, span);
        } else {
          removerErro(input, span);
        }
      }

      function validarConfirmarSenha(input) {
        let span = input.nextElementSibling;
        let senhaPrincipal = document.getElementById("senhaInput").value;

        if (input.value !== senhaPrincipal || input.value === "") {
          mostrarErro(input, span);
        } else {
          removerErro(input, span);
        }
      }

      /* --- FUNÇÕES AUXILIARES --- */
      function mostrarErro(input, span) {
        input.classList.add("input-invalido");
        span.style.display = "block";
      }

      function removerErro(input, span) {
        input.classList.remove("input-invalido");
        span.style.display = "none";
      }