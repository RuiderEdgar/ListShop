import { StyleSheet } from "react-native";

export default Modalstyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2b2b2b'
	},
	input: {
		width: '80%',
		height: 40,
		borderWidth: 1,
		borderColor: 'gray',
		marginBottom: 10,
		paddingHorizontal: 10,
		backgroundColor: '#F5F5F5'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '80%'
	},
	buttonCancel: {
		backgroundColor: '#FF7F7F'
	},
	buttonAdd: {
		backgroundColor: '#008000'
	}
});
