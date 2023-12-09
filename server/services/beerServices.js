const Beer = require("../models/Beer");

async function getAllBeersType(beerType) {
  return await Beer.find({ type: beerType });
}

async function getAllBeers() {
  return await Beer.find({});
}

async function getBeerById(id) {
  const beer = await Beer.findById(id);
  return beer;
}

async function editBeer(id, data) {
  const beer = await Beer.findById(id);

  if (!beer) {
    throw new Error("Beer not found");
  }

  beer.name = data.name;
  beer.price = data.price;
  beer.quantity = data.quantity;
  beer.type = data.type;
  beer.imgUrl = data.imgUrl;
  beer.description = data.description;

  await beer.save();
}

async function createBeer(data) {
  return await Beer.create(data);
}

async function delById(id) {
  const beer = await Beer.findById(id);
  // console.log(beer)
  if (!beer) {
    throw new Error("Beer not found");
  }
  const res = await Beer.findByIdAndDelete(id);
  console.log("Delete" + res);
}

module.exports = {
  getAllBeersType,
  getAllBeers,
  getBeerById,
  editBeer,
  createBeer,
  delById,
};
