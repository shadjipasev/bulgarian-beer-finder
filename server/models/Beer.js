const { Schema, model } = require("mongoose");

const beerSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  type: { type: String, required: true },
  picUrl: { type: String, required: true },
  validFrom: { type: Date, required: true },
  validUntil: { type: Date, require: true },
});

const Beer = model("Beer", beerSchema);

module.exports = Beer;
