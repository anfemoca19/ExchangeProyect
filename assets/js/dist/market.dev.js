"use strict";

// Conexion a la api para hacer el listado de las criptos
function cargarDatos() {
  var API_KEY = '850c7ee3-2f87-4d1c-86c5-4a7a84e48661';
  var apiUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=".concat(API_KEY);
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data.data;
  })["catch"](function (error) {
    console.error('Error al cargar los datos:', error);
    return [];
  });
} // function cargarDatosEnTabla(data) {
//   const cryptoTableBody = document.getElementById('cryptoTableBody');
// Función para filtrar y mostrar los datos en la tabla


function filtrarYMostrarDatos(data, filtro) {
  // Filtrar las criptomonedas basadas en el valor del filtro
  var criptomonedasFiltradas = data.filter(function (crypto) {
    return crypto.name.toLowerCase().includes(filtro) || crypto.symbol.toLowerCase().includes(filtro);
  }); // Obtener la referencia al cuerpo de la tabla

  var cryptoTableBody = document.getElementById('cryptoTableBody'); // Limpiar la tabla

  cryptoTableBody.innerHTML = ''; // Agregar las criptomonedas filtradas a la tabla

  criptomonedasFiltradas.forEach(function (crypto) {
    var row = document.createElement('tr');
    row.innerHTML = "\n    <td>".concat(crypto.cmc_rank, "</td>\n    <td>").concat(crypto.name, "</td>\n    <td>").concat(crypto.symbol, "</td>\n    <td>").concat(crypto.quote.USD.price.toFixed(2), "</td>\n    <td>").concat(crypto.circulating_supply.toLocaleString(), "</td>\n    ");
    cryptoTableBody.appendChild(row);
  });
} // Obtener el input de búsqueda


var searchInput = document.getElementById('searchInput'); // Agregar un evento de escucha al input de búsqueda en tiempo real

searchInput.addEventListener('input', function () {
  // Obtener el valor del input de búsqueda
  var filtro = searchInput.value.toLowerCase(); // Cargar los datos y luego filtrar y mostrar en tiempo real

  cargarDatos().then(function (data) {
    return filtrarYMostrarDatos(data, filtro);
  });
}); // Cargar y mostrar datos por defecto al cargar la página

cargarDatos().then(function (data) {
  return filtrarYMostrarDatos(data, '');
}); // validar coneccion de la wallet

var validaConnection = function validaConnection() {
  var btn_connect = document.getElementById('btn-connet');
  var nombre = localStorage.getItem('nombre');

  if (!nombre) {
    btn_connect.style.display = none;
  }
};