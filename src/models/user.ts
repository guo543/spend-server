import mongoose, { Schema } from 'mongoose';

interface IUser {
    email: String;
    password: String;
    id: String;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String }
});

export default mongoose.model('User', userSchema);