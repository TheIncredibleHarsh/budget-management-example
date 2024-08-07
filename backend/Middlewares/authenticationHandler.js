const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err){
                 res.sendStatus(403);
            }
            req.userId = user['sub']
            next()
        })
    } else {
        res.sendStatus(401);
    }
}

module.exports = {
    authenticate
}