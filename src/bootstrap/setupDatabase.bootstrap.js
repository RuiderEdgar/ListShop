import { categoryService } from '../shared/globals/services/db/category.service';
import { itemService } from '../shared/globals/services/db/item.service';

export const setupDataBase = () => {
	// Crea la tabla Category si no existe
	categoryService.createCategoriesTable();

	// Crea la tabla Item si no existe
	itemService.createItemsTable();

}