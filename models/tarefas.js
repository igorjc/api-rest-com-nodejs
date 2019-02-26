module.exports = (sequelize, DataType) => {
    const Tarefas = sequelize.define('Tarefas', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }  
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Tarefas.belongsTo(models.Users)
            }
        }
    })

    return Tarefas
}