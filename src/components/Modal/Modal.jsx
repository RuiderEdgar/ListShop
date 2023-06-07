import React, { useState } from 'react';
import { Modal, View, TextInput, Button } from 'react-native';
import ModalStyles from './Modal.module';

export const CustomModal = ({ visible, onClose, handleAddItem, category }) => {
	const [inputValue, setInputValue] = useState('');

	const onSubmit = () => {
		handleAddItem(category, inputValue)
	}

	const handleModalSubmit = () => {
		if (inputValue.trim() !== '') {
			onSubmit();
			setInputValue('');
			onClose();
		}
	};

	return (
		<Modal visible={visible} onRequestClose={onClose}>
			<View style={ModalStyles.container}>
				<TextInput
					style={ModalStyles.input}
					placeholder="Enter an item"
					value={inputValue}
					onChangeText={setInputValue}
				/>
				<View style={ModalStyles.buttonContainer}>
					<Button title="Cancel" onPress={onClose} color="#FF7F7F" />
					<Button title="Add" onPress={handleModalSubmit} color="#008000" />
				</View>
			</View>
		</Modal>
	);
};