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
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO items (idCategory1, item) VALUES (?, ?)',
          [categoryId, name],
          (_, { insertId }) => {
            console.log('Item insertado correctamente');
            resolve(insertId);
          },
          (error) => {
            console.log('Error al insertar el item:', error);
            reject(error);
          }
        );
      });
    });
  }

	getAllItems() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM items',
          [],
          (_, { rows }) => {
            console.log('Obtención de items exitosa');
            resolve(rows._array);
          },
          (error) => {
            console.log('Error al obtener los items:', error);
            reject(error);
          }
        );
      });
    });
  }

	static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM items WHERE id = ?',
          [itemId],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              console.log('Item eliminado correctamente');
              resolve();
            } else {
              console.log('No se encontró ningún item con el ID especificado');
              reject();
            }
          },
          (error) => {
            console.log('Error al eliminar el item:', error);
            reject(error);
          }
        );
      });
    });
  }
}

export const itemService = new ItemService();
