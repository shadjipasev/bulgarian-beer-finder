const Cart = require("../models/Cart");

async function getAllCartItems(userId) {
  const cart = await Cart.findOne({ user: userId }).populate("beers");
  console.log(cart.beers);
  return cart.beers;
}

async function createCart(beerId, userId) {
  const tool = await getToolById(beerId);

  console.log("Inside createCart function");
  console.log(tool);

  await Cart.create({
    user: userId,
    beers: beerId,
    totalPrice: beer.price,
  });
}

module.exports = {
  getAllCartItems,
};
