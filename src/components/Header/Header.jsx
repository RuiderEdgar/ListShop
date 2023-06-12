import React, {useState} from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import { CustomModal } from '../Modal/Modal';
import { Logo } from './Header.module';
import add from '../../assets/icons/add.png';

export const Header = ({addCategory}) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

  return (
		<View style={Logo.container}>
			<View style={Logo.buttonContainer}>
				<Pressable onPress={toggleModal}>
					<Image style={Logo.image} source={add} />
				</Pressable>
			</View>
			<Text style={Logo.text}>ListShop</Text>

			<CustomModal
				visible={isModalVisible}
				onClose={toggleModal}
				key={'item'}
				addCategory={addCategory}
			/>
		</View>
	);
}