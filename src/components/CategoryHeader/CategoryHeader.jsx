import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ListItem } from '../ListItems/ListItems'
import {CustomModal} from '../Modal/Modal';
import add from '../../assets/icons/add.png'
import { TitleCategory } from './CategoryHeader.module'

export const CategoryHeader = ({ category, items, handleAddItem, handleDeleteItem }) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
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
					<Text style={TitleCategory.text}>{category}</Text>
					<Pressable style={TitleCategory.button} onPress={toggleModal}>
						<Image style={TitleCategory.image} source={add} />
					</Pressable>
				</View>
			</LinearGradient>
			<View>{items && showItems()}</View>

			<CustomModal visible={isModalVisible} onClose={toggleModal} handleAddItem={handleAddItem} category={category} />
		</View>
	);
};
