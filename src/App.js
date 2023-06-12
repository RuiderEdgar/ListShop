import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { setupDataBase } from './bootstrap/setupDatabase.bootstrap';
import { Header } from './components/Header/Header';
import { CategoryHeader } from './components/CategoryHeader/CategoryHeader';
import { categoryService } from './shared/globals/services/db/category.service';
import { itemService } from './shared/globals/services/db/item.service';

export default function App() {
	const [categories, setCategories] = useState([])
	const [change, setChange] = useState(false)

	//implementacion database
	useEffect(() => {
		//create tables
		setupDataBase();
	}, [])

	useEffect(() => {
		// Obtener las categorías iniciales al cargar la aplicación
		categoryService.getAllCategories(categories => {
			setCategories(categories);
		});
	}, []);

	useEffect(() => {
		// Configurar el watcher para actualizar las categorías cuando haya cambios en la base de datos
		categoryService.watchCategories(categories => {
			setCategories(categories);
		});
	}, [change])


	//todo
	// categoryService.getAllCategories(categories => {
	// 	console.log('Categorías:', categories);
	// });
	// console.log("categories: ", categories)

	const addCategory = (inputCategory) => {
		categoryService.insertCategory(inputCategory)
		setChange(!change)
	}

	const deleteCategory = categoryId => {
		categoryService.deleteCategory(categoryId);
		setChange(!change);
	};

	const handleAddItem = (category, newItem) => {
		itemService.insertItem(category, newItem);
	};

	const handleDeleteItem = (category, deleteItem) => {
		itemService.deleteItem(category, deleteItem);
	};

	const showCategories = () => {
		return categories.map(categoryI => {
			return (
				<CategoryHeader
					id={categoryI.id} // Pasar el ID como prop
					category={categoryI.name}
					key={categoryI.name} // Usar el ID como clave única
					handleAddItem={handleAddItem}
					handleDeleteItem={handleDeleteItem}
					deleteCategory={deleteCategory}
				/>
			);
		});
	};



  return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar style="dark" />
				<ScrollView>
					<Header addCategory={addCategory}/>
					{categories && showCategories()}
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#F5F5F5'
		// alignItems: 'center',
		// justifyContent: 'center',
	}
});
