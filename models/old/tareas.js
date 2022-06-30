module.exports = (sequelize, type) => {

    return sequelize.define("tarea", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tarea: type.STRING,
        descripcion: type.STRING,
       
    })
}