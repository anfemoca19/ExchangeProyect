

// Conexion a la api para hacer el listado de las criptos
function cargarDatos () {
  const API_KEY =  '850c7ee3-2f87-4d1c-86c5-4a7a84e48661'
  const apiUrl =`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`;

  return fetch(apiUrl)
  .then(response => response.json())
  .then(data => data.data)
  .catch(error => {
    console.error('Error al cargar los datos:', error);
    return [];
  });
}



// function cargarDatosEnTabla(data) {

//   const cryptoTableBody = document.getElementById('cryptoTableBody');



// Función para filtrar y mostrar los datos en la tabla
function filtrarYMostrarDatos(data, filtro) {
  // Filtrar las criptomonedas basadas en el valor del filtro
  const criptomonedasFiltradas = data.filter(crypto => {
    return crypto.name.toLowerCase().includes(filtro) || crypto.symbol.toLowerCase().includes(filtro);
  });

  // Obtener la referencia al cuerpo de la tabla
  const cryptoTableBody = document.getElementById('cryptoTableBody');
  // Limpiar la tabla
  cryptoTableBody.innerHTML = '';

  // Agregar las criptomonedas filtradas a la tabla
  criptomonedasFiltradas.forEach(crypto => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${crypto.cmc_rank}</td>
    <td>${crypto.name}</td>
    <td>${crypto.symbol}</td>
    <td>${crypto.quote.USD.price.toFixed(2)}</td>
    <td>${crypto.circulating_supply.toLocaleString()}</td>
    `;
    cryptoTableBody.appendChild(row);
  });
}



// Obtener el input de búsqueda
const searchInput = document.getElementById('searchInput');

// Agregar un evento de escucha al input de búsqueda en tiempo real
searchInput.addEventListener('input', function () {
  // Obtener el valor del input de búsqueda
  const filtro = searchInput.value.toLowerCase();

  // Cargar los datos y luego filtrar y mostrar en tiempo real
  cargarDatos()
    .then(data => filtrarYMostrarDatos(data, filtro));
});








// Cargar y mostrar datos por defecto al cargar la página
cargarDatos()
  .then(data => filtrarYMostrarDatos(data, ''));