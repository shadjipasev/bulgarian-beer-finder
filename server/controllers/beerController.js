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
  // console.log(req.body);

  const data = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    type: req.body.type,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
  };

  try {
    const beer = await createBeer(data);

    res.status(200);
    res.json(beer);
    res.end();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

beerController.get("/:type", async (req, res) => {
  const beerType = req.params.type;
  console.log(beerType);
  const beers = await getAllBeersType(beerType);
  res.json(beers);
});

beerController.get("/details/:id", async (req, res) => {
  const beerId = req.params.id;
  const beer = await getBeerById(beerId);
  // console.log(beer);
  res.status(200).json(beer);
  res.end();
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
    description: req.body.description,
  };

  try {
    const beer = await editBeer(beerId, data);
    res.status(200);
    res.json(beer);
    res.end();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = beerController;
