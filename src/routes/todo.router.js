import express from 'express';
import TodoController from '../controllers/todo.controller';

const router = express.Router();

//
router.get('/', TodoController.getAllTodos);

router.get('/:id', TodoController.getTodo);

router.post('/', TodoController.createTodo);

// router.put('/:id', TodoController.updateTodo);

// router.delete('/:id', TodoController.deleteTodo);

export default router;