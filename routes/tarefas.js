module.exports = app => {
    const Tarefas = app.db.models.Tarefas
    app.get('/tarefas', (req, res) => {
        Tarefas.findAll({}).then((tarefas) => {
            res.json({tarefas})
        })
    })
}