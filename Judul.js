import React , {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return(
			<Text style={hani.judul}>BIODATA</Text>
		)
	}
}
const hani = {
	judul : {
		color : '#f00',
		fontSize : 50,
		fontWeight : 'bold',
		backgroundColor : '#0f0'
	}
}
export default Judul;