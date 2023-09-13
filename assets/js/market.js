

// Conexion a la api para hacer el listado de las criptos

const API_KEY =  '850c7ee3-2f87-4d1c-86c5-4a7a84e48661'
const apiUrl =`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`;



function cargarDatosEnTabla(data) {

  const cryptoTableBody = document.getElementById('cryptoTableBody');

  // Limpia cualquier contenido previo en la tabla
  cryptoTableBody.innerHTML = '';

  // Itera a través de las criptomonedas y crea filas en la tabla
  data.forEach(crypto => {
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



function api () {
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => cargarDatosEnTabla(data.data))
  .catch(error => console.error('Error al cargar los datos:', error));
}


api();