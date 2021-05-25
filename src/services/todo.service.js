const TodoModel = require('../models/todo.model');

const TodoService = {}

TodoService.getAll = async() => {
    return await TodoModel.find({});
}

TodoService.get = async(id) => {
    return await TodoModel.findById(id);
}

TodoService.create = async(newTodo) => {
    return await newTodo.save(newTodo);
};