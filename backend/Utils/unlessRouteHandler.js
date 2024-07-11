const unless = (pathList, middleware) => {
    
    return (req, res, next) => {
        if(pathList.includes(req.path)){
            return next();
        } else {
            return middleware(req, res, next);
        }
    }
}

module.exports = unless