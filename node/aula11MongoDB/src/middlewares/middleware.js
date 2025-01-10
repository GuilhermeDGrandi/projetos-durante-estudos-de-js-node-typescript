exports.middlewareGlobal = (req, res, next)=> {
    res.locals.umaVariavelLocal = 'Variavel local'
    next();
}
exports.outroMiddlewareGlobal = (req, res, next)=> {
    console.log('segundo middleware')
    next();
}

exports.checkCsrfError = (error, req, res, next) =>{
    if(error && error.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken= req.csrfToken()
    next();
}
