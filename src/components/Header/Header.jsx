import React from 'react'
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import { Logo } from './Header.module';

export const Header = () => {
  return (
		<View style={Logo.container}>
			<Text style={Logo.text}>ListShop</Text>
		</View>
	);
}