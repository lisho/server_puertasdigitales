module.exports = (sequelize, type) => {
    
    return sequelize.define("apoyo", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        /* user_id: type.INTEGER,
        sesion_id: type.INTEGER,
        tipo_apoyo_id: type.INTEGER,
        participacion_id: type.INTEGER */

    })
}