
          /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Component/Judul';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Judul/>
        <Text style={styles.welcome}>Hellooooo!</Text>        
        <Text style={styles.instructions}>Nama   : Hanifa Wahyu Listiyani</Text>
        <Text style={styles.instructions}>No        :  15</Text>
        <Text style={styles.instructions}>Kelas   : XI RPL 1</Text>
        <Image style = {{ width : 300, height : 300 }}
        source={require('./tataifa.jpg')}
        />     
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'black'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    fontSize : 18,
    textAlign: 'left',
    color: 'white',
    marginBottom: 5,
  },
});
