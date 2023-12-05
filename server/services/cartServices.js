const Cart = require("../models/Cart");
const { getBeerById } = require("./beerServices");

async function addToCart(beerId, userId) {
  const cart = await Cart.findOne({ user: userId });
  const beer = await getToolById(beerId);

  //   console.log("cartSize");
  cart.beers.push(beer);
  cart.beerPrice += beer.price;

  await cart.save();
}

async function getAllCartItems(userId) {
  const cart = await Cart.findOne({ user: userId }).populate("beers");
  console.log(cart.beers);
  return cart.beers;
}

async function createCart(beerId, userId) {
  const beer = await getBeerById(beerId);

  console.log("Inside createCart function");
  console.log(beer);

  await Cart.create({
    user: userId,
    beers: beerId,
    totalPrice: beer.price,
  });
}

module.exports = {
  getAllCartItems,
  createCart,
  addToCart,
};
