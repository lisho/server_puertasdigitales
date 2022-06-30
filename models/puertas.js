

module.exports = (sequelize, type) => {

    const Puerta = sequelize.define("puerta", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        titulo: type.STRING,
        descripcion: type.TEXT,
        proceso: type.TEXT,
        foto: type.STRING,
        video: type.STRING
              
    })
   
    return Puerta
}

