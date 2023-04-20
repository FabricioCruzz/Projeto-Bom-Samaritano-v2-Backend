const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async prodData => {
  await prisma.productStock.create({
    data: {
      product: prodData.product,
      productType: prodData.productType,
      amount: prodData.amount
    }
  })
  return;
};

const getAll = async () => {
  return await prisma.productStock.findMany();
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
