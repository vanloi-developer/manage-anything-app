const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = Schema({
    title: String,
    content: String,
});

const TodoModel = mongoose.model('Todos', TodoSchema, 'todos');

export default TodoModel;