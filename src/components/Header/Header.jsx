import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomModal } from '../Modal/Modal';
import { Logo } from './Header.module';

export const Header = ({ addCategory }) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={Logo.container}>
			<View style={Logo.buttonContainer}>
				<Pressable onPress={toggleModal}>
					<Ionicons name="add-circle-outline" size={30} color="white" />
				</Pressable>
			</View>
			<Text style={Logo.text}>ListShop</Text>

			<CustomModal visible={isModalVisible} onClose={toggleModal} key={'item'} addCategory={addCategory} />
		</View>
	);
};
