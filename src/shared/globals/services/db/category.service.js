import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

class CategoryService {
	createCategoriesTable() {
		db.transaction(tx => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS category
				(idCategory INTEGER PRIMARY KEY AUTOINCREMENT not null,
				nameCategory TEXT not null)`,
				[],
				() => {
					console.log('Tabla "category" creada exitosamente');
				},
				(_, error) => {
					console.log('Error al crear la tabla "category":', error);
				}
			);
		});
	}

	insertCategory(inputCategory) {
		db.transaction(tx => {
			tx.executeSql(
				'INSERT INTO category (idCategory) VALUES (?)',
				[inputCategory],
				() => {
					console.log('Categoría insertada con éxito en la tabla "category"');
				},
				(_, error) => {
					console.log('Error al insertar la categoría en la tabla "category":', error);
				}
			);
		});
	}

	getAllCategories(callback) {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT * FROM category',
				[],
				(_, { rows }) => {
					const categories = rows._array.map(row => row.nameCategory);
					callback(categories);
				},
				(_, error) => {
					console.log('Error al obtener las categorías:', error);
					callback([]);
				}
			);
		});
	}

	deleteCategory(categoryId) {
		db.transaction(tx => {
			tx.executeSql(
				'DELETE FROM category WHERE id = ?',
				[categoryId],
				() => {
					console.log('Categoría eliminada con éxito de la tabla "categories"');
				},
				(_, error) => {
					console.log('Error al eliminar la categoría de la tabla "categories":', error);
				}
			);
		});
	}
}

export const categoryService = new CategoryService();