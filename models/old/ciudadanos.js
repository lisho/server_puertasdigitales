
module.exports = (sequelize, type) => {
    return sequelize.define("ciudadano", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        apellidos: type.STRING,
        dni: type.STRING,
        direccion: type.STRING,
        cp: type.STRING,
        telefono: type.STRING,
        email: type.STRING,
        observaciones: type.STRING

    })
}