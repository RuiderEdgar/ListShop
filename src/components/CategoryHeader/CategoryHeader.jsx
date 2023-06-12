import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ListItem } from '../ListItems/ListItems'
import {CustomModal} from '../Modal/Modal';
import add from '../../assets/icons/add.png'
import trash from '../../assets/icons/basura.png'
import { TitleCategory } from './CategoryHeader.module'

export const CategoryHeader = ({ id, category, items, handleAddItem, handleDeleteItem, deleteCategory }) => {
	const [isModalVisible, setModalVisible] = useState(false);
// console.log(category)
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	const removeCategory = () => {
		deleteCategory(id);
	};

	const showItems = () => {
		return items.map(item => {
			return <ListItem item={item} key={item} category={category} handleDeleteItem={handleDeleteItem} />;
		});
	};

	return (
		<View>
			<LinearGradient colors={['#2eb872', '#04472d']} style={TitleCategory.background}>
				<View style={TitleCategory.rowContainer}>
					<View style={TitleCategory.textContainer}>
						<Text style={TitleCategory.text}>{category}</Text>
					</View>
					<View style={TitleCategory.buttonsContainer}>
						{/* Trash Category Button */}
						<Pressable style={TitleCategory.buttonTrash} onPress={removeCategory}>
							<Image style={TitleCategory.image} source={trash} />
						</Pressable>
						{/* Add item Button */}
						<Pressable onPress={toggleModal}>
							<Image style={TitleCategory.image} source={add} />
						</Pressable>
					</View>
				</View>
			</LinearGradient>
			<View>{items && showItems()}</View>

			<CustomModal
				visible={isModalVisible}
				onClose={toggleModal}
				handleAddItem={handleAddItem}
				category={category}
				key={'item'}
			/>
		</View>
	);
};
