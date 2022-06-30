module.exports = (sequelize, type) => {

    return sequelize.define("punto_atencion", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        punto_atencion: type.STRING,
        descripcion: type.STRING,
       
    })
}