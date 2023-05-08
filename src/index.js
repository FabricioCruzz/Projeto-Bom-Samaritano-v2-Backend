const express = require("express");
const regRouter = require("./router/registers.route");
const productsRouter = require("./router/products.route");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const PORT = 8087;
  const app = express();

  app.use(express.json());
  app.use("/api/v1/pbs/registers", regRouter);
  app.use("/api/v1/pbs/products", productsRouter);

  app.listen(PORT, () =>
    console.log(
      `Server up on ${PORT}. To open access http://localhost:8087/api/v1/pbs`
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
