import { Mongoose } from 'mongoose';
import TodoModel from '../models/todo.model';

const TodoService = require('../services/todo.service');
const TodoController = {};

TodoController.getAllTodos = async(req, res) => {
    res.json({
        message: 'No data in database'
    })

    // try {
    //     const todos = await TodoService.getAll();
    //     if (todos) {
    //         res.status(200).json({
    //             message: todos,
    //         });
    //     } else {
    //         res.json({
    //             message: 'No data',
    //         })
    //     }

    // } catch (error) {
    //     res.status(400).json({
    //         message: error,
    //     });
    // }
};

TodoController.getTodo = async(req, res) => {
    console.log('something');
    try {
        const id = req.params.id;
        const todo = await TodoService.get(id);
        res.status(200).json({
            message: "get a todo",
        })

    } catch (error) {
        res.status(400).json({
            message: 'eoorrrrrror',
        });
    }
}

TodoController.createTodo = async(req, res) => {
    try {
        const newTodo = new TodoModel({
            title: req.body.title,
            content: req.body.content,
        });
        await TodoService.create(newTodo)
            .then((newTodo) => {
                res.status(200).json({
                    message: newTodo,
                })
            })
            .catch((err) => {
                res.json({
                    message: "Error when create",
                    error: err
                })
            })

    } catch (error) {
        res.status(500).json({
            message: "can't create",
            error: error,
        });
    }
}

export default TodoController;