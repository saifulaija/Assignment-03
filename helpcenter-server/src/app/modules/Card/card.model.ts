import { model, Schema } from 'mongoose';
import { TCard } from './card.interface';

const cardSchema = new Schema<TCard>({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


export const Card=model<TCard>("Card", cardSchema)
