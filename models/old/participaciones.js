module.exports = (sequelize, type) => {

    return sequelize.define("participacion", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sesion_id: type.STRING,
        ciudadano_id: type.STRING,
       
    })
}