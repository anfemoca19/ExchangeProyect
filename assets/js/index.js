

// Contador de me gusta
 let likeCount= 0 
  let isLiked = false

// DOM 
const likeButton = document.getElementById("likeButton")
const likeCountElement = document.getElementById("likeCount");
const likeIcon =  document.getElementById("likeImg");


// clic
let likeClicked= () => {
  debugger
  if (!isLiked) {
    likeCount++;
    likeCountElement.textContent = `${likeCount} `;
    likeIcon.src = './assets/img/heart.svg'; // Cambia la imagen a corazón lleno
    isLiked = true;
  }
};



// BtnEmpezar

document.getElementById("ready").addEventListener("click", function() {
  window.location.href = "market.html";
});


