import { StyleSheet } from 'react-native';

export default ItemStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#F5F5F5'
	},
	checkBoxContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	pressableContainer: {
		marginRight: 10
	},
	text: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	},
	image: {
		width: 28,
		height: 28
	}
});
