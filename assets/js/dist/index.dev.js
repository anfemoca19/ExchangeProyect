"use strict";

// Contador de me gusta
var likeCount = 0;
var isLiked = false; // DOM 

var likeButton = document.querySelectorAll("likeButton");
var likeCountElement = document.getElementById("likeCount"); // clic

likeButton.forEach(function (button) {
  button.addEventListener("click", function () {
    // obtnemos los svg de los iconos
    var emptyHeart = likeButton.querySelector("svg:nth-child(1)");
    var fullHaert = likeButton.querySelector("svg:nth-child(2)");

    if (emptyHeart.style.display === "inherit") {
      emptyHeart.style.display = "none";
      fullHaert.style.display = "inherit";
      likeCount++;
      likeCountElement.textContent = "".concat(likeCount, " ");
      isLiked = true;
    } else {
      emptyHeart.style.display = "inherit";
      fullHaert.style.display = "none";
      likeCount--;
      likeCountElement.textContent = "".concat(likeCount, " ");
      isLiked = false;
    }
  });
}); // BtnEmpezar

document.getElementById("ready").addEventListener("click", function () {
  window.location.href = "market.html";
});
document.getElementById("buyNow").addEventListener("click", function () {
  window.location.href = "swap.html";
}); // Abrir el modal para conectar la wallet

var modal = document.getElementById("wallet-modal"); // open modal

document.getElementById("btn-connet").addEventListener('click', function () {
  modal.style.display = 'flex';
}); // closeModal

var btnCerrar = document.getElementById("closeModal");
btnCerrar.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
} // Coneccion wallet


document.getElementById('connectWallet').addEventListener('click', function () {
  localStorage.setItem('metamask', 'true');
  closeModal();
  var btn_connect = document.getElementById('btn-connet');
  btn_connect.style.display = "none";
  var connectWallet = document.getElementById('connect-wallet');
  connectWallet.style.display = "block";
}); // validar coneccion de la wallet

var validaConnection = function validaConnection() {
  // Uso de local stroage para obtener la coneccion de la wallet
  debugger;
  var nombre = localStorage.getItem('metamask');
  var connectWallet = document.getElementById('connect-wallet');
  var btn_connect = document.getElementById('btn-connet');

  if (nombre) {
    connectWallet.style.display = "block";
    btn_connect.style.display = "none";
  } else {
    connectWallet.style.display = "none";
    btn_connect.style.display = "block";
  }
};

function limpiarLocalStorage() {
  localStorage.clear(); // Esto eliminará todos los datos almacenados en Local Storage
} // Agregar un listener al evento beforeunload o unload
// window.addEventListener('beforeunload', limpiarLocalStorage);


validaConnection();