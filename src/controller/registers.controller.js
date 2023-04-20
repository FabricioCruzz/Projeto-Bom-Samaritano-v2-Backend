const service = require("../service/registers.service");

const create = async (req, res) => {
  //Create
};

const getAll = async (req, res) => {
  await res.send("Hello World From Controller");
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
