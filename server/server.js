const express = require('express');
const mongoose = require('mongoose');
const informationRouter = require('./routes/informationRouter');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 8080;

mongoose.Promise = global.Promise;

app.use(express.json()); // Parse JSON request bodies

app.use('/', indexRouter);
app.use('/informations', informationRouter);

mongoose
  .connect('mongodb+srv://rachatatani:SMfrdecbooHrcmfq@cluster0.46insu0.mongodb.net/information?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));