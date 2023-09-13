

// COnexion a la api para hacer el listado de las criptos


const API_KEY =  '850c7ee3-2f87-4d1c-86c5-4a7a84e48661'

function api () {

  fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=850c7ee3-2f87-4d1c-86c5-4a7a84e48661'
    )
  .then(res=>res.json)
  .then(datos=> {console.log(datos)});

}


api();