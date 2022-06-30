module.exports = (sequelize, type) => {

    return sequelize.define("estado_cita", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado: type.STRING,
        descripcion: type.STRING,
       
    })
}