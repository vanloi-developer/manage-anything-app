const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
    title: String,
    content: String,
});

const TodoModel = model('Todos', TodoSchema);


export default TodoModel;