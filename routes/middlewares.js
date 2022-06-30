const checkToken = (req, res, next) => {

    const jwt = require('jwt-simple')   
    console.log(req.headers)
    if (!req.headers["user-token"]) { 
        return res.json({error: "Necesitas incluir el user-token en las cabeceras"})
    }
    
    const userToken = req.headers["user-token"];    
    let payload = {};

    try {
        payload = jwt.decode(userToken, "frase secreta");
    } catch (error) {
        return res.json({error: "El token es incorrecto"});
    }

    if (payload.expiredAt < Date.now) {
        return res.json({error: "El token ha exirado"});
    }

    req.usuarioId =payload.id;

    next();
}

module.exports = {
    checkToken : checkToken
}