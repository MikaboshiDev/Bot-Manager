import mongoose from 'mongoose';
import { IUser } from '../../global';

const model = new mongoose.Schema({
  username: { type: String, default: '' },
  user_id: { type: Number, unique: true },
  email: { type: String, default: '' },
  products: { type: Array, default: [] },
  warnings: { type: Number, default: 0 },
  banned: { type: Boolean, default: false },
  data_guild: [
    {
      username: { type: String, default: '' },
      user_id: { type: Number, unique: true },
      sansions: { type: Array, default: [] },
      commands: { type: Array, default: [] },
    },
  ],
});

export default mongoose.model<IUser>('model', model);
