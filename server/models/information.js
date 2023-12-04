const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
  info_id: Number,
  info_title: String,
  info_desc: String,
  info_link: String,
  info_category_id: Number,
  createdAt: Date,
});

module.exports = mongoose.model('Information', informationSchema);
