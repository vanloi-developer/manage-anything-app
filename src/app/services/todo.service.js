import TodoModel from '../models/todo.model';

const TodoService = {};

TodoService.getAll = async() => {
    return await TodoModel.find({});
}
TodoService.get = async(id) => {
    return await TodoModel.findById(id, (err, doc) => {
        if (!err) return doc;
        return err;
    });
}

TodoService.create = async(newTodo) => {
    return await newTodo.save();
};

TodoService.update = async(_id, doc) => {
    let updated = {
        title: doc.title,
        content: doc.content
    };

    return await TodoModel.findOneAndUpdate({ _id }, updated);
}

TodoService.delete = async(id) => {
    return await TodoModel.findOneAndRemove({ _id: id });
}


export default TodoService;