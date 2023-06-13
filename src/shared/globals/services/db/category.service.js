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
		try {
			db.transaction(tx => {
				tx.executeSql(
					'INSERT INTO category (nameCategory) VALUES (?)',
					[inputCategory],
					() => {
						console.log('Categoría insertada con éxito en la tabla "category"');
					},
					(_, error) => {
						console.log('Error al insertar la categoría en la tabla "category":', error);
					}
				);
			});
		} catch (error) {
			console.log('Error en insertCategory:', error);
		}
	}

	watchCategories = callback => {
		db.transaction(
			tx => {
				tx.executeSql(
					'SELECT * FROM category',
					[],
					(_, { rows }) => {
						const categories = rows._array.map(row => ({
							id: row.idCategory,
							name: row.nameCategory
						}));
						callback(categories);
					},
					(_, error) => {
						console.log('Error al obtener las categorías:', error);
						callback([]);
					}
				);
			},
			null,
			() => {
				// Se ejecuta cuando hay cambios en la base de datos
				db.transaction(tx => {
					tx.executeSql(
						'SELECT * FROM category',
						[],
						(_, { rows }) => {
							const categories = rows._array.map(row => ({
								id: row.idCategory,
								name: row.nameCategory
							}));
							callback(categories);
						},
						(_, error) => {
							console.log('Error al obtener las categorías:', error);
							callback([]);
						}
					);
				});
			}
		);
	};

	getAllCategories(callback) {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT idCategory, nameCategory FROM category',
				[],
				(_, { rows }) => {
					const categories = rows._array.map(row => ({
						id: row.idCategory,
						name: row.nameCategory
					}));
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
				'DELETE FROM category WHERE idCategory = ?',
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

	deleteItemsByCategoryId = categoryId => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM items WHERE idCategory1 = ?',
        [categoryId],
        () => {
          console.log('Items eliminados correctamente');
          resolve();
        },
        error => {
          console.log('Error al eliminar los items:', error);
          reject(error);
        }
      );
    });
  });
};

}

export const categoryService = new CategoryService();
