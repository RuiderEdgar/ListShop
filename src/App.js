import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './components/Header/Header';
import { CategoryHeader } from './components/CategoryHeader/CategoryHeader';
import { fakeData } from './fakeData/fakeData';

export default function App() {
	const [data, setData] = useState([])
	const [categories, setCategories] = useState([])

	const addCategory = (inputCategory) => {
		const newCategory = {category: inputCategory};
		setCategories([...categories, newCategory])
	}

	const deleteCategory = (inputCategory) => {
		const updateCategories = categories.filter(category => category.category !== inputCategory)
		setData(updateCategories)
	}

	const handleAddItem = (category, newItem) => {
		// Buscar la categoría correspondiente en fakeData
		const updatedData = data.map(categoryObj => {
			if (categoryObj.category === category) {
				// Agregar el nuevo item a la lista de items de la categoría
				categoryObj.items.push(newItem);
			}
			return categoryObj;
		});

		// Actualizar el estado con los datos actualizados
		setData(updatedData);
	};

	const handleDeleteItem = (category, deleteItem) => {
		const updatedData = data.map(categoryIndex => {
			if (categoryIndex.category === category) {
				const items = categoryIndex.items.filter(item => item !== deleteItem);
				return { ...categoryIndex, items: items };
			}
			return categoryIndex;
		});
		setData(updatedData);
	};

	useEffect(() => {
		setData(fakeData)
	}, [fakeData])

// console.log('Datos: ', data)
// const updatedData = data.filter(ci => ci.category !== 'Frutas');
// console.log('Update Datos: ', updatedData);


	const showCategories = () => {
		return (
			data.map(category => {
				return (
					<CategoryHeader
						category={category.category}
						items={category.items}
						key={category.category}
						handleAddItem={handleAddItem}
						handleDeleteItem={handleDeleteItem}
					/>
				);
			})
		)
	}

  return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar style="dark" />
				<Header/>
				{data && showCategories()}
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
