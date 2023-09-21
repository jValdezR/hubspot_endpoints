const {verifyPost} = require("../validators/test.validator");

class TestMiddleware {
    async verifyPost(req, res, next) {
        try {
            await verifyPost().validateAsync({...req.body});
                next();
        } catch (error) {
            res.status(406).json({details:error.details[0].message});
        }
    }
}

module.exports = new TestMiddleware();