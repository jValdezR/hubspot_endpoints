const {creatorValidator} = require("../validators/webhookcreator.validator");

class WebHookCreatorMiddleware {
    async creatorMiddleware(req, res, next) {
        try {
            await creatorValidator().validateAsync({...req.body});
                next();
        } catch (error) {
            res.status(406).json({details:error.details[0].message});
        }
    }
}

module.exports = new WebHookCreatorMiddleware();