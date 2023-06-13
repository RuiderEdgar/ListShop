import Joi from "joi";

const categorySchema = Joi.object().keys({
	nameCategory: Joi.string().required().message({
		'string.base': 'nameCategory must be of type string',
		'string.empty': 'nameCategory is a required field'
	}),
})

export {categorySchema};