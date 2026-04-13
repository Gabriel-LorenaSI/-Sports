document.addEventListener("DOMContentLoaded", function () {
  const trilho = document.getElementById("tema-toggle");
  const body = document.body;

  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    body.classList.add("dark");
    if (trilho) {
      trilho.classList.add("ativo");
    }
  }

  if (trilho) {
    trilho.addEventListener("click", function () {
      body.classList.toggle("dark");
      trilho.classList.toggle("ativo");

      if (body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
      } else {
        localStorage.setItem("tema", "light");
      }
    });
  }
});