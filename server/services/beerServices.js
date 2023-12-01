const Beer = require("../models/Beer");

async function getAllBeersType(beerType) {
  return await Beer.find({ type: beerType });
}

async function getAllBeers() {
  return await Beer.find({});
}

async function getBeerById(id) {
  return await Beer.findById(id);
}

async function editBeer(id, data) {
  const beer = await Beer.findById(id);

  if (!beer) {
    throw new Error("Beer not found");
  }

  beer.name = data.name;
  beer.material = data.material;
  beer.country = data.country;
  beer.price = data.price;
  beer.imgUrl = data.imgUrl;
  beer.description = data.description;
  beer.type = data.type;

  await beer.save();
}

async function createBeer(data) {
  await Beer.create(data);
}

async function delById(id) {
  const beer = await Beer.findById(id);

  if (!beer) {
    throw new Error("Beer not found");
  }
  await Beer.findByIdAndDelete(id);
}

module.exports = {
  getAllBeersType,
  getAllBeers,
  getBeerById,
  editBeer,
  createBeer,
  delById,
};
