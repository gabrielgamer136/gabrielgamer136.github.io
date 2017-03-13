document.querySelector(".menu-abrir").onclick = function() {
  document.documentElement.classList.add("menu-ativo");
  console.log("menu ativado");

};
document.querySelector(".menu-fechar").onclick = function() {
  document.documentElement.classList.remove("menu-ativo");
  console.log("menu desativado");
};
