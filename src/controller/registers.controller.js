const service = require("../service/registers.service");

const create = async (req, res) => {
  //Create
};

const getAllRegisters = async (req, res) => {
  await res.send("Hello World From Controller");
};

const getRegisterById = async (req, res) => {};

const update = async (req, res) => {};

const remove = async (req, res) => {};

module.exports = {
  create,
  getAllRegisters,
  getRegisterById,
  update,
  remove,
};
