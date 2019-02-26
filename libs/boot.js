module.exports = app => {
    const PORT = app.get('port')
    app.db.sequelize.sync().done(() => {
        app.listen(PORT, () => {
            console.log(`Servidor iniciado - http://localhost:${PORT}`)
        })
    })
}