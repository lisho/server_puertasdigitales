module.exports = (sequelize, type) => {

    return sequelize.define("cita", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: type.DATE,
/*         hora: type.DATE, */
       /*  sesion_id: type.INTEGER,
        punto_atencion_id: type.INTEGER,
        estado_cita_id: type.INTEGER,
        ciudadano_id: type.INTEGER, */

    })
}