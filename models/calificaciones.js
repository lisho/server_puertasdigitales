

module.exports = (sequelize, type) => {

    return sequelize.define("calificacion", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        puntuacion: type.INTEGER,
        observaciones: type.STRING,
    

    })
  }

