import mongoose, { Schema } from 'mongoose';

interface IUser {
    email: string;
    password: string;
    id: string;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String }
});

export default mongoose.model('User', userSchema);