const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  codigoPessoa: {
    type: Number
  },
  salario: {
    type: Number
  },
  data: {
    type: Date
  },
  codigoDepatamento: {
    type: Number
  }
});

module.exports = mongoose.model("folhaSalarial", schema);
