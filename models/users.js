

module.exports = (sequelize, type) => {

    const User = sequelize.define("user", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        email: type.STRING,
        username: type.STRING,
        password: type.STRING,
        rol: type.STRING,
        avatar: type.STRING,
        cp: type.STRING,
        
    })
   
    return User
}

