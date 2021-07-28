module.exports = (app) => {
    const example = require('../controllers/example.js');

    app.post('/example', example.someFunction);
}