import TodoModel from '../models/todo.model';
import TodoService from '../services/todo.service';
const TodoController = {};

TodoController.getAllTodos = async(req, res) => {

    const todos = await TodoService.getAll();

    if (todos) {
        res.status(200).json({
            message: todos,
        });
    } else {
        res.json({
            message: 'No data',
        })
    };
}
TodoController.getTodo = async(req, res) => {

    const id = req.params.id;
    const todo = await TodoService.get(id);
    if (todo) {
        res.status(200).json({
            message: todo,
        })
    }
}

TodoController.createTodo = async(req, res) => {

    const newTodo = new TodoModel({
        title: req.body.title,
        content: req.body.content,
    });

    if (newTodo) {
        await TodoService.create(newTodo)
            .then((newTodo) => {
                res.status(200).json({

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
}

export default TodoController;