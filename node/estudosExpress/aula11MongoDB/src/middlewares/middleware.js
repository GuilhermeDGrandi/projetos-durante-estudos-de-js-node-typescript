exports.middlewareGlobal = (req, res, next)=> {
    next();
}
exports.outroMiddlewareGlobal = (req, res, next)=> {
    console.log('segundo middleware')
    next();
}

