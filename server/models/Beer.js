const { Schema, model, Types } = require("mongoose");

const beerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
  type: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
});

const Beer = model("Beer", beerSchema);

module.exports = Beer;
