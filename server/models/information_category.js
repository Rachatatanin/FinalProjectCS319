const mongoose = require('mongoose');

const information_categorySchema = new mongoose.Schema({
  info_category_id: Number,
  info_category_name: String,
});

module.exports = mongoose.model('Information_category', information_categorySchema);
