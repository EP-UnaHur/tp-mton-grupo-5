exports.validaSchema = (schema) => {
    return async (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly: false})
        if (result.error) {
            return res.status(400).json({
                errores: result.error.details.map(error => ({error : error.message}) )
            })
        }
        next()
    }
}

