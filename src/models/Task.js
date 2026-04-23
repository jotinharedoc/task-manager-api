const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: ''
    },
    completed: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: null
    },
    priority: {
      type: String,
      enum: ['baixa', 'media', 'alta'],
      default: 'media'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Task', taskSchema);