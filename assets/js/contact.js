const validaConnection = () => {
 
  // Uso de local stroage para obtener la coneccion de la wallet
  let nombre = localStorage.getItem('metamask');
  let connectWallet = document.getElementById('connect-wallet')
  let btn_connect = document.getElementById('btn-connet')
  if(nombre ){
    connectWallet.style.display = "block"
    btn_connect.style.display = "none";
  }else{
    connectWallet.style.display = "none"
    btn_connect.style.display = "block";
  }
  
}
validaConnection()