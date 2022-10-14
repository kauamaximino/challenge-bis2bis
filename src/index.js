const express = require('express');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index.routes');

const app = express();
require('dotenv').config();

app.use(express.json());

//index de todas as rotas do projeto
app.use(indexRoutes);

mongoose.connect(
  process.env.MONGO_URL,
)
  .then(() => console.log(`Connected to MongoDB, port ${process.env.PORT}`),
    app.listen(process.env.PORT),
)
  .catch((error) => console.log(error));
