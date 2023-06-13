import { StyleSheet } from 'react-native';

export const Logo = StyleSheet.create({
	container: {
		backgroundColor: '#0366D6',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 8,
		height: 32,
		width: '100%'
	},
	text: {
		flex: 1,
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttonContainer: {
		marginRight: 'auto'
	},
	image: {
		width: 22,
		height: 22
	}
});
