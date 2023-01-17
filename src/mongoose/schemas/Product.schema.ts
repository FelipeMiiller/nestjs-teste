import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    status: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    deleted_at: {
      type: Date,
    },
  },
  { timestamps: true },
);
