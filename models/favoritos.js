

module.exports = (sequelize, type) => {

    const Favorito = sequelize.define("favorito", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        /* puntuacion: type.INTEGER,
        observaciones: type.STRING, */
    

    })
   
    return Favorito
}

