import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { emptyScreen } from './EmptyCategoriesScreen.module';

export const EmptyCategoriesScreen = () => (
	<View style={emptyScreen.container}>
		<Ionicons name="add-circle-outline" size={64} color="gray" />
		<Text style={emptyScreen.message}>Presione el icono + para añadir una nueva categoría</Text>
		<Text style={emptyScreen.message}>En la esquina superior izquierda</Text>
	</View>
);
