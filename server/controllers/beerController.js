const {
  createBeer,
  getAllBeers,
  getAllBeersType,
  getBeerById,
  editBeer,
  delById,
} = require("../services/beerServices");

const beerController = require("express").Router();

beerController.get("/", async (req, res) => {
  const allBeers = await getAllBeers();
  res.json(allBeers);
});

beerController.post("/create", async (req, res) => {
  const data = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    type: req.body.type,
    imgUrl: req.body.imgUrl,
    country: req.body.country,
  };

  try {
    await createBeer(data);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

beerController.get("/:type", async (req, res) => {
  const beerType = req.params.type;
  const beers = await getAllBeersType(beerType);
  return beers;
});

beerController.get("/details/:id", async (req, res) => {
  const beerId = req.params.id;
  const beer = await getBeerById(beerId);
  return beer;
});

beerController.get("/delete/:id", async (req, res) => {
  const beerId = req.params.id;
  await delById(beerId);
});

beerController.put("/edit/:id", async (req, res) => {
  const beerId = req.params.id;
  const data = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    type: req.body.type,
    imgUrl: req.body.imgUrl,
    country: req.body.country,
  };

  try {
    await editBeer(beerId, data);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = beerController;
