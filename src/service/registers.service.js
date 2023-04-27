const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {};

const getAllRegisters = async (req, res) => {};

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
