"use strict";

var validaConnection = function validaConnection() {
  // Uso de local stroage para obtener la coneccion de la wallet
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

validaConnection();