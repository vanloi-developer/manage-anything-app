import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = Schema({
    name: String,
    username: String,
    password: String,
})

const UserModel = mongoose.model('Users', UserSchema, 'users');

export default UserModel;