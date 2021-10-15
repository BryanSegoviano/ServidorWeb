const express = require('express');
const router = express.Router();


router
 .get('/', (req, res) => {
  res.download('archivosPrueba/foto.jpg')
 })
 .post('/', (req, res) => {
  res.download('archivosPrueba/archivoPrueba')
 });

module.exports = router;
