import TodoModel from '../models/todo.model';
import TodoService from '../services/todo.service';
const TodoController = {};

// [GET] ['/todo'] Get list todos
TodoController.getAllTodos = async(req, res) => {

    await TodoService
        .getAll()
        .then(todos => res.status(200).json({ message: todos, }))
        .catch(err => res.status(404).json({ message: err }))


}

// [GET] ['/todo/:id'] Get a todo
TodoController.getTodo = async(req, res) => {

    const id = req.params.id;
    await TodoService
        .get(id)
        .then(data => { data ? res.status(200).json({ data }) : data })
        .catch(err => res.status(404).json({ message: err }))
}

// [POST] ['/todo'] Create a new todo
TodoController.createTodo = async(req, res) => {

    const newTodo = new TodoModel({
        title: req.body.title,
        content: req.body.content,
    });

    if (newTodo) {
        await TodoService.create(newTodo)
            .then((newTodo) => {
                res.status(201).json({

                    message: "Created a new todo",
                    newTodo
                })
            })
            .catch((err) => {
                res.status(401).json({
                    message: "Error when create",
                    error: err
                })
            })
    };
};

// [PUT] ['/todo/:id] Update a todo
TodoController.updateTodo = async(req, res) => {

    let _id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;
    let doc = {
        title: title,
        content: content
    };

    //No validated data

    await TodoService
        .update(_id, doc)
        .then(updated => res.status(201).json({ message: "Updated", updated }))
        .catch(err => res.status(403).json({ message: err }));
}

// [DELETE] ['/todo/:id'] Delete a todo
TodoController.deleteTodo = async(req, res) => {

    let _id = req.params.id;
    await TodoService
        .delete(_id)
        .then(data => res.status(200).json({ message: data }))
        .catch(err => res.status(401).json({ message: err }))
}



export default TodoController;