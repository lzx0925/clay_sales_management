// models/PurchaseRecord.js
const mongoose = require('mongoose');

const purchaseRecordSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    }
  ],
  depositAmount: {
    type: Number,
    default: 0,
  },
  isFullyPaid: {
    type: Boolean,
    default: false,
  },
  note: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('PurchaseRecord', purchaseRecordSchema);
