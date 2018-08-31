import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return (
			<Text style = {hani.judul}>BIODATA</Text>
			)
	}
}
const hani = {
	judul : {
		color : 'white',
		fontSize : 50,
		fontWeight : 'bold',
		backgroundColor : 'black',
	}
}
export default Judul;