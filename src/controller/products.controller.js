const service = require("../service/products.service");

const create = async (req, res) => {
  await service.create(req.body);
  res.status(201).send('Product created successfully!');
};

const getAll = async (req, res) => {
  const response = await service.getAll();
  res.send(response);
};

const getById = async (req, res) => {};

const update = async (req, res) => {};

const remove = async (req, res) => {};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
