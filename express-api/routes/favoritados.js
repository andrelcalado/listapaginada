var express = require('express');
var router = express.Router();
let idFavoritados = [];

// Rota para recuperação dos ids favoritados
router.get('/', function (req, res, next) {
  res.json(idFavoritados);
});

// Rota para registro dos favoritados
router.post('/add', async (req, res, next) => {
  idFavoritados.push(req.body);
  return res.status(201).json(idFavoritados);
});

// Rota para Remoção do Favoritado
router.delete('/remove/:id', async (req, res, next) => {
  let idReq = req.params.id;
  
  for (let i = 0; i < idFavoritados.length; i++) {
    // console.log(idFavoritados[i]);
    if (idFavoritados[i].id == idReq) {
      idFavoritados.splice(i,1)
    }
  }
  return res.status(201).json("Sucess");
});

module.exports = router;
