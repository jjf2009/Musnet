const mongoose =  require('mongoose');

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true,
    },
    category:  {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    }
  }, {
    timestamps: true,
  });

  const Music = mongoose.model('Music', musicSchema);

  module.exports = Music;
