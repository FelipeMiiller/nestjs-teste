import { Document } from 'mongoose';

export interface MunicipioModel extends Document {
  id: number;
  name: string;
}
