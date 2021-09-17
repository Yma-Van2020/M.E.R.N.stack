
const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.post('/api/authors/create', AuthorController.createAuthor)
    app.get('/api/authors/:id', AuthorController.getAuthor)
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}