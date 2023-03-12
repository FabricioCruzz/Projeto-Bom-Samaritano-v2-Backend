const express = require('express');
const router = require('./router/pbs.router.js');

const PORT = 8087;
const app = express();

app.use(express.json());
app.use('api/v1/pbs', router);

app.listen(PORT, () =>
  console.log(
    `Server up on ${PORT}. To open access http://localhost:8087/api/v1/pbs`
  )
);
