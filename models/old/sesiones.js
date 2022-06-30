module.exports = (sequelize, type) => {

    return sequelize.define("sesion", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        observaciones: type.STRING,
       
    })
}