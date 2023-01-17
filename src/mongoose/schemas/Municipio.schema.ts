import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const MunicipioSchema = new Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true },
);
