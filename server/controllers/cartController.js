const Cart = require("../models/Cart");
const {
  createCart,
  addToCart,
  getAllCartItems,
} = require("../services/cartServices");
const { decodeToken } = require("../services/userServices");

const cartController = require("express").Router();

cartController.get("/get", async (req, res) => {
  const userPayload = decodeToken(req.token);
  const userId = userPayload._id;

  const cart = await getAllCartItems(userId);

  res.json(cart);
  res.end();
});

cartController.post("/add/:id", async (req, res) => {
  //   console.log("work: 1 | beerController/cart/add:id");
  const beerId = req.params.id;
  const userPayload = decodeToken(req.token);
  const userId = userPayload._id;

  let cart = await Cart.findOne({ user: userId });
  let beersId = [];

  try {
    if (cart) {
      console.log("There is cart created!");
      for (let b of cart.beers) {
        beersId.push(b.toString());
      }

      if (beersId.indexOf(beerId) !== -1) {
        return res.status(400).json({
          message: "Beer is already in your cart",
        });
      }
    } else {
      await createCart(beerId, userId);
      console.log("Cart should be created!");
    }

    await addToCart(beerId, userPayload._id);
    cart = await Cart.findOne({ user: userId });
    if (cart.beers.length == 0) {
      res.json({
        message: "Cart is empty for now",
      });
    }
    res.status(200).json({
      message: "Beer added to cart!",
      data: cart.beers,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Something went wrong, please try again.",
    });
  }
});
