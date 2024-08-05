const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { parse } = require("path");

const userRegister = async (req, res, next) => {
    const {email, password} = req.body
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    let [firstName, lastName] = email.split('@')[0].split('.');
    if(!lastName){
        lastName = firstName
    }
    const phoneNumber = Math.floor(Math.random() * 10000000000);
    let user = {
        email: email,
        encryptedPassword: encryptedPassword,
        passwordSalt: salt,
    }
    const createdUser = await prisma.user.create({
        data: user
    });

    const userProfile = await prisma.userProfile.create({
        data: {
            userId: createdUser.id,
            firstName: firstName,
            phoneNumber: phoneNumber.toString(),
            lastName: lastName,
            email: email
        }
    });

    await prisma.user.update({
        where: {
            id: createdUser.id
        },
        data: {
            userProfileId: userProfile.id,
            // userProfile: userProfile
        }
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
            res.status(200).json({token: token, userId: user.id});
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

const getUserProfile = async (req, res, next) => {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    const userProfile = await prisma.userProfile.findUnique({
        where: {
            id: user.userProfileId
        }
    });
    res.status(200).json({userProfile});
}

const updateUserProfile = async (req, res, next) => {
    const userProfileId = parseInt(req.params.userProfileId)
    console.log(req.body)
    const userProfile = await prisma.userProfile.update({
        where: {
            id: userProfileId
        },
        data: {
            firstName: req.body.userProfile.firstName,
            lastName: req.body.userProfile.lastName,
            phoneNumber: req.body.userProfile.phoneNumber,
            email: req.body.userProfile.email
        }
    });
    res.status(200).json({userProfile});
}

module.exports = {
    userRegister,
    userLogin,
    getUserProfile,
    updateUserProfile
}