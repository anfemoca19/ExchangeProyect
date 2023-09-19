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
}); // close modal

document.getElementById("closeModal").addEventListener('click', function () {
  modal.style.display = 'none';
}); // Coneccion wallet

document.getElementById('connectWallet').addEventListener('click', function () {
  localStorage.setItem('metamask', 'true');
  var btn_connect = document.getElementById('btn-connet');
  btn_connect.style.display = none;
});