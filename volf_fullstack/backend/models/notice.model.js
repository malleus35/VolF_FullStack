const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema(
  {
    title: {type: String, required: true},
	  article: {type: String, required: true},
	  author: {type: String, required: true},
  },
  {timestamps: true},
);

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
