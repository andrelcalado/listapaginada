var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var header = require('../../keys/headers'); // object with the access token and header parameters
var baseURL = "https://www.orulo.com.br/api/v2/buildings"

// Rota para recuperação dos imóveis na Api da Órulo
router.get('/', function (req, res, next) {
  fetch(
    baseURL, {
      method: 'GET',
      headers: header
    })
    .then(res => res.json()) // Não tendi daqui
    .then(data => {
        res.json(data);
    }).catch(e=> console.log(e)); // pra cá
});

module.exports = router;
