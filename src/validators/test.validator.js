const Joi = require('joi');

class TestValidator{

    verifyPost = () => Joi.object().keys({
        name: Joi.string().required(),
        edad: Joi.number()
    })
}

module.exports = new TestValidator();