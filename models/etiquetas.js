

module.exports = (sequelize, type) => {

    return sequelize.define("etiqueta", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        etiqueta: type.STRING,
        descripcion: type.TEXT,
              
    })

}

