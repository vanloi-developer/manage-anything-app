const apiRoute = require('./router');
const todoRoute = require('./todo.router');
const useRoute = require('./user.router');

function route(app) {
    app.use('/api', apiRoute.default);
    app.use('/todo', todoRoute.default);
    app.use('/user', useRoute.default);

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello Mr Lợi.',
            content: 'App is in development stage',
            status: 'Coding',
        });
    });
}

export default route;