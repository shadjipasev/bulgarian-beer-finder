const Cart = require("../models/Cart");
const { getBeerById } = require("./beerServices");

async function addToCart(beerId, userId) {
  const cart = await Cart.findOne({ user: userId });
  const beer = await getBeerById(beerId);

  const beerInCart = await Cart.findOne({ beers: beerId });
  if (beerInCart) {
    console.log("beer is in cart already");
    throw new Error("Beer is already in cart");
  }

  //   console.log("cartSize");
  cart.beers.push(beer);
  cart.totalPrice += beer.price;

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

async function emptyCart(userId) {
  const cart = await Cart.findOne({ user: userId });

  cart.beers = [];

  await cart.save();
}

module.exports = {
  getAllCartItems,
  createCart,
  addToCart,
  emptyCart,
};
