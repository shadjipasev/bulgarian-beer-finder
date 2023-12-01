const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  beers: [{ type: Types.ObjectId, ref: "Beer" }],
  totalPrice: { type: Number, default: 0 },
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
