import mongoose from "mongoose";
import currency from "currency.js";

const Schema = mongoose.Schema;

// Define custom Currency type
class Currency extends mongoose.SchemaType {
  constructor(path, options) {
    super(path, options, 'Currency');
  }

  // Casting logic
  cast(val) {
    if (typeof val === 'number') {
      return val;  // already in cents
    }
    if (typeof val === 'string') {
      // Convert USD string to number in cents
      return Math.round(currency(val, { fromCents: false }).value * 100);
    }
    throw new Error('Currency: invalid value');
  }
}

// Registering our custom type in Mongoose
mongoose.Schema.Types.Currency = Currency;

const SalesSchema = new Schema(
  {
    retail_price: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    list_price: {
      type: Currency,
      get: (v) => (v / 100).toFixed(2),
    },
    buy_link:{
        type:String,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
      },
    ], 
    accessID: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Access",
        },
      ], 
 
  },
  { timestamps: true }  // Removed { toJSON: { getters: true } }
);

const Sales = mongoose.model("Sales", SalesSchema);
export default Sales;