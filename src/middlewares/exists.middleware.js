exports.existsById = (Model) => {
    return async (req,res,next) => {
        const id = req.params.id
        const item = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular)
        if (!item) {
            return res.status(404).json({
                msg: `${modelName} con id ${id} no existe`
            })
        }
        next()
    }
}
