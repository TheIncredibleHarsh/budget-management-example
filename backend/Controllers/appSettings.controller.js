const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAppSettings = async (req, res, next) => {
    try {
        const [categories, tags, user] = await prisma.$transaction([
            prisma.transactionCategory.findMany({
                where: {
                    userId: req.userId
                }
            }),
            prisma.tag.findMany({
                where: {
                    userId: req.userId
                }
            }),
            prisma.user.findUnique({
                where: {
                    id: req.userId
                }
            })
        ])
        
        const result = {
            currency: user.currency,
            categories: categories,
            tags: tags
        }
    
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

const updateCurrency = async (req, res, next) => {
    const { currency } = req.body;
    console.log(req.body)
    const user = await prisma.user.update({
        where: {
            id: req.userId
        },
        data: {
            currency: currency
        }
    });
    res.status(200).json(user);
}

const createCategory = async (req, res, next) => {
    const { categoryName } = req.body;
    const category = await prisma.transactionCategory.create({
        data: {
            name: categoryName,
            userId: req.userId
        }
    });
    res.status(200).json(category);
}

const deleteCategory = async (req, res, next) => {
    const { id } = req.params;
    const category = await prisma.category.delete({
        where: {
            id: id,
            userId: req.userId
        }
    });
    res.status(200).json(category);
}

const createTag = async (req, res, next) => {
    const { tagName } = req.body;
    const tag = await prisma.tag.create({
        data: {
            name: tagName,
            userId: req.userId
        }
    });
    res.status(200).json(tag);
}

const deleteTag = async (req, res, next) => {
    const { id } = req.params;
    const tag = await prisma.tag.delete({
        where: {
            id: id,
            userId: req.userId
        }
    });
    res.status(200).json(tag);
}

module.exports = {
    getAppSettings,
    updateCurrency,
    createCategory,
    deleteCategory,
    createTag,
    deleteTag
}