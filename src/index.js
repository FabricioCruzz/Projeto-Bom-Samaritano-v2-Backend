const express = require('express');
const regRouter = require('./router/registers.route')
const productsRouter = require('./router/products.route')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const PORT = 8087;
const app = express();

app.use(express.json());
app.use('/api/v1/pbs/registers', regRouter);
app.use('/api/v1/pbs/products', productsRouter);

app.listen(PORT, () =>
  console.log(
    `Server up on ${PORT}. To open access http://localhost:8087/api/v1/pbs`
  )
);
async function main() {
  // ... you will write your Prisma Client queries here
  
  
  // await prisma.productStock.create({
  //   data: {
  //     product: 'Feijão',
  //     productType: 'KG',
  //     amount: 20,
  //   },
  // })

  // const allProducts = await prisma.productStock.findMany()
  // console.dir(allProducts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

