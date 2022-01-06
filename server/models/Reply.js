const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({

  userFrom: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  commentFrom: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  },
  replyContent: {
    type: String
  },
  replyWriter: {
    type: String
  }
}, { timestamps: true});

const Reply = mongoose.model('Reply', replySchema);
module.exports = { Reply }
