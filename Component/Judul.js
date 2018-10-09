import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
			<Image source ={require('./batang.jpg')} style={{width: 200, height: 200}}/> 
			<Text style = {warna.ifa}> Selamat datang Ifa !! </Text>
			<Text style = {salon.hani} > Nama : Hanifa Wahyu Listiyani</Text>
			<Text style = {salon.hani} > Kelas : XI RPL 1 </Text>
			<Text style = {salon.hani} > SMK TELKOM Purwokerto</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "#68098F" onPress = {() => {this.redirect()}}/>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container : {
	flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#F3D5FF',
	}
});
const warna = {
	ifa  : {
		color : "#5B087E",
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	hani : {
		color : "#8B14BC",
		fontSize : 20,
	}
}