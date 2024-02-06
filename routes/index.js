const express = require('express');
const router = express.Router();
const product = require('../views/product.json');
const fs = require("fs");



/* GET home page. */
router.get('/', function(req, res, next) {
  const data = product
  res.render('index', {data});
});


router.get('/detail/:uuid', function(req, res, next) {
  const uuid = req.params.uuid
  const data = product
  const detailProduct = data.product
    .filter(item => item.uuid === uuid)
    .map(item => item.detail);
  res.render('detail', { data: detailProduct });
});




module.exports = router;
