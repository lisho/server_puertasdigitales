

module.exports = (sequelize, type) => {

    return sequelize.define("etiquetaTipo", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        tipo: type.STRING,
        descripcion: type.TEXT,
        color: type.TEXT 
              
    })

}

