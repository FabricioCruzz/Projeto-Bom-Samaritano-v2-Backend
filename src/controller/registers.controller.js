const service = require("../service/registers.service");

const create = async (req, res) => {
  await service.create(req.body);
  res.status(201).send("Register created successfully!");
};

const getAllRegisters = async (_req, res) => {
  const response = await service.getAllRegisters();
  res.send(response);
};

const getRegisterById = async (req, res) => {
  const registerId = parseInt(req.params.id, 10);
  res.send(await service.getRegisterById(registerId));
};

const update = async (req, res) => {};

const remove = async (req, res) => {
  const registerId = parseInt(req.params.id, 10);
  await service.remove(registerId);
  res.status(204).send("");
};

module.exports = {
  create,
  getAllRegisters,
  getRegisterById,
  update,
  remove,
};
