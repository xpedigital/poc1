import React from 'react';
import { StyleSheet, View,Dimensions,Image,} from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
    <View style={styles.header}>
      <View style={styles.shape}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../assets/images/logo.png')}/>
    </View>
    );
  }
}

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shape: {
    paddingTop:20,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width/2 + 30,
    borderRightWidth: width/2 + 30,
    borderBottomWidth: 140,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#f6b62f',
    transform: [
      {rotate: '180deg'}
    ],
  },
  logo:{
    position: 'absolute',
    bottom: 50,
    width: 170,
  }
});
