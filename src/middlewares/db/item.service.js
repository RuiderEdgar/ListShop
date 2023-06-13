import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

class ItemService {
	createItemsTable() {
		db.transaction(tx => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS items
				(id INTEGER PRIMARY KEY AUTOINCREMENT not null,
				idCategory1 INTEGER,
				item TEXT not null,
				FOREIGN KEY (idCategory1) REFERENCES category (idCategory))`,
				[],
				() => {
					console.log('Tabla "items" creada exitosamente');
				},
				(_, error) => {
					console.log('Error al crear la tabla "items":', error);
				}
			);
		});
	}

	insertItem(categoryId, name) {
		try {
			db.transaction(tx => {
				tx.executeSql(
					`INSERT INTO items (idCategory1, item) VALUES (?, ?)`,
					[categoryId, name],
					() => {
						console.log('Item isertado correctamente en la tabla "items"');
					},
					(_, error) => {
						console.log('Error al insertar el item en la tabla "items":', error);
					}
				);
			});
		} catch (error) {
			console.log('Error en insertItem:', error);
		}
	}

	getItemsByCategory(category, callback) {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT * FROM items WHERE idCategory1 = ?',
				[category],
				(_, { rows }) => {
					const items = rows._array.map(row => row.item);
					callback(items);
				},
				(_, error) => {
					console.log('Error al obtener los items por categoría:', error);
					callback([]);
				}
			);
		});
	}

	getAllItems(callback) {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT id, item, idCategory1 FROM items',
				[],
				(_, { rows }) => {
					console.log('Obtención de items exitosa');
					const items = rows._array.map(row => ({
						id: row.id,
						item: row.item,
						idCategory1: row.idCategory1
					}));
					callback(items);
				},
				(_, error) => {
					console.log('Error al obtener los items:', error);
					callback(null, error);
				}
			);
		});
	}

	watchItems(callback) {
		db.transaction(tx => {
			tx.executeSql(
				'SELECT id, item, idCategory1 FROM items',
				[],
				(_, { rows }) => {
					console.log('Obtención de items exitosa');
					const items = rows._array.map(row => ({
						id: row.id,
						item: row.item,
						idCategory1: row.idCategory1
					}));
					callback(items);
				},
				error => {
					console.log('Error al obtener los items:', error);
					callback(null, error);
				}
			);
		});
	}

	deleteItem(itemId) {
		db.transaction(tx => {
			tx.executeSql(
				'DELETE FROM items WHERE id = ?',
				[itemId],
				(_, { rowsAffected }) => {
					if (rowsAffected > 0) {
						console.log('Item eliminado correctamente');
					} else {
						console.log('No se encontró ningún item con el ID especificado');
					}
				},
				error => {
					console.log('Error al eliminar el item:', error);
				}
			);
		});
	}
}

export const itemService = new ItemService();
