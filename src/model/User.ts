import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  email: string;
  password: string,
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
});


// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;
