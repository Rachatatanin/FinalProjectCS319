const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
})

mongoose.connect('mongodb+srv://rachatatani:SMfrdecbooHrcmfq@cluster0.46insu0.mongodb.net/?retryWrites=true&w=majority', )
    .then(() => console.log('connection successfully'))
    .catch(err => console.log(err));

app.listen(8080, () => {console.log('Server running on port 8080')});