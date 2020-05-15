"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const express = require('express');
const app = (0, _express.default)();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send({
    message: 'Hola mundo'
  });
});
app.listen(PORT, () => {
  console.log("corriendo en el puerto: ", PORT);
});