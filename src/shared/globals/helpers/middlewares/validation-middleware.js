import { categorySchema } from "../schemas/category.schema";

class ValidationsMiddleware {
	validateCategory(inputCategory) {
		const { error } = categorySchema.validate({ nameCategory: inputCategory });
		if (error) {
			throw new Error(error.details[0].message);
		}
	}

	validateItem (inputItem) {
		const { error } = itemSchema.validate({ item: inputItem });
		if (error) {
			throw new Error(error.details[0].message);
		}
	}
}

export const validationsMiddleware = new ValidationsMiddleware();