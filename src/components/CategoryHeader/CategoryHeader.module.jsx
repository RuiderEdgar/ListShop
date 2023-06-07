import { StyleSheet } from 'react-native';


export const TitleCategory = StyleSheet.create({
	container: {
		backgroundColor: '#F5F5F5',
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		minHeight: '20',
		paddingBottom: 5,
	},
	text: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	},
	background: {
		width: '100%',
		margin: 0,
		blurRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 5,
		paddingLeft: 6
	},
	rowContainer: {
  flexDirection: 'row',
  alignItems: 'center',
	},
	image: {
		width: 18,
		height: 18
	},
	button: {
		flex: 1,
    alignItems: 'flex-end',
		paddingRight: 6
	}
});
