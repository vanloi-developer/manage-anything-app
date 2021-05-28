import UserModel from '../models/user.model'

const UserService = {};

UserSerVice.getAll = async() => {
    return await UserModel.find({});
}

UserService.get = async(id) => {
    return await UserModel.findOne({ id });
}

UserService.create = async(newUser) => {
    return await newUser.save();
}

UserService.update = async(_id, doc) => {
    let updated = {
        name: doc.name,
        password: doc.password,
    }
    return await UserModel.findOneAndUpdate({ _id }, updated);
}

UserService.delete = async(_id) => {
    return await UserModel.findOneAndRemove({ _id })
}

export default UserService;