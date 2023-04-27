const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async productData => {
  await prisma.productStock.create({
    data: {
      product: productData.product,
      productType: productData.productType,
      amount: productData.amount
    }
  })
};

const getAllProdutcs = async () => {
  return await prisma.productStock.findMany();
};

const getProductById = async productId => {
  return await prisma.productStock.findUnique({
    where: {
      id_product: productId,
    },
  })
};

const update = async (productId, data) => {
  await prisma.productStock.update({
    where: {
      id_product: Number(productId),
    },
    data: {
      product: data.product,
      productType: data.productType,
      amount: data.amount,
    },
  })
};

const remove = async productId => {
  return await prisma.productStock.delete({
    where: {
      id_product: Number(productId),
    },
  })
};

module.exports = {
  create,
  getAllProdutcs,
  getProductById,
  update,
  remove,
};
