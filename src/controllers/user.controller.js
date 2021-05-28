import UserModel from '../models/user.model'
const UserController = {};

UserController.getListUsers = async(req, res) => {
    res.json({ message: "getAllUsers" });
}

UserController.getUser = async(req, res) => {
    res.json({ message: "getAUser" });
}

UserController.createUser = async(req, res) => {
    res.json({ message: "Create a new user" });
}

UserController.updateUSer = async(req, res) => {
    res.json({ message: "Updated user" });
}

UserController.deleteUser = async(req, res) => {
    res.json({ message: "Deleted user" });
}

export default UserController;