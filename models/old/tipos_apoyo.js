module.exports = (sequelize, type) => {

    return sequelize.define("tipo_apoyo", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        apoyo: type.STRING,
        descripcion: type.STRING,
       
    })
}