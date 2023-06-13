import Joi from 'joi';

const itemSchema = Joi.object().keys({
	item: Joi.string().required().message({
		'string.base': 'item must be of type string',
		'string.empty': 'item is a required field'
	})
});

export { itemSchema };
