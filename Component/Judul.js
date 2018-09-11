import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return (
			<Text style = {hani.judul}>{this.props.judul}</Text>
			)
	}
}
const hani = {
	judul : {
		color : 'black',
		fontSize : 50,
		fontWeight : 'bold',
		backgroundColor : 'white',
	}
}
export default Judul;