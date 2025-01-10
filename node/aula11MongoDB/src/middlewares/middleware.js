exports.middlewareGlobal = (req, res, next)=> {
    res.locals.umaVariavelLocal = 'Variavel local'
    next();
}
exports.outroMiddlewareGlobal = (req, res, next)=> {
    console.log('segundo middleware')
    next();
}

