exports.validaSchema = (schema) => {
    return async (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly: false}) // para que se devuelvan todos los errores y no frene en el 1ero
        if (result.error) {
            return res.status(400).json({
                errores: result.error.details.map(error => ({error : error.message}) )
            })
        }
        next()
    }
}

