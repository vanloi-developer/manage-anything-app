import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
})

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;