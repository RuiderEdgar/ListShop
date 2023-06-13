import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import trash from '../../assets/icons/basura.png';
import ItemStyles from './ListItems.module'


export const ListItem = ({ item, handleDeleteItem, itemId }) => {
	const [isChecked, setChecked] = useState(false);

	return (
		<View style={ItemStyles.container}>
			<View style={ItemStyles.checkBoxContainer}>
				<CheckBox checked={isChecked} onPress={() => setChecked(!isChecked)} />
				<Text>{item}</Text>
			</View>
			<View style={ItemStyles.pressableContainer}>
				<Pressable onPress={() => handleDeleteItem(itemId)}>
					<Image style={ItemStyles.image} source={trash} />
				</Pressable>
			</View>
		</View>
	);
};