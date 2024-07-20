const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res, next) => {
    const {email, password} = req.body
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    let user = {
        email: email,
        encryptedPassword: encryptedPassword,
        passwordSalt: salt,
    }
    await prisma.user.create({
        data: user
    });
    res.sendStatus(200)

}

const userLogin = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        }
    });

    bcrypt.compare(password, user.encryptedPassword, (err, result) => {
        if(err) {
            next(err);
        }
        if (result) {
            let token = jwt.sign(generateJwtPayload(user), process.env.JWT_SECRET)
            res.status(200).json({token: token});
        } else {
            res.sendStatus(403);
        }
            
    });
}

const generateJwtPayload = (user) => {
    return {
        exp: Math.floor(Date.now() / 1000) + (5 * 24 * 60 * 60),
        iat: new Date().getTime(),
        jti: crypto.randomUUID(),
        aud: ["all"],
        iss: 'budget-demo',
        sub: user.id,
        context: {
            user: {
                key: user.email
            } 
        }
    }
}

module.exports = {
    userRegister,
    userLogin
}