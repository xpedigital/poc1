import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

export default class Footer extends React.Component {
  render() {
      /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props.navigation;
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={{ alignItems: 'center',flex: 1,}} onPress={() => this.props.navigation.navigate('Home')} activeOpacity={0.7}>
                <Image style={{width: 50, height: 60}} resizeMode='contain'  source={require('../assets/images/Icon_home.png')}/>
                <Text style={styles.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center',flex: 1,}} onPress={() => this.props.navigation.navigate('Categories')} activeOpacity={0.7}>
                <Image style={{width: 50, height: 60}} resizeMode='contain'  source={require('../assets/images/Icon_cat.png')}/>
                <Text style={styles.footerText}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center',flex: 1,}} onPress={() => this.props.navigation.navigate('MyAccount')} activeOpacity={0.7}>
                <Image style={{width: 50, height: 60}} resizeMode='contain'  source={require('../assets/images/Icon_account.png')}/>
                <Text style={styles.footerText}>My Account</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  footer:{
    width: '100%',
    height: 90,
    backgroundColor: '#f6b62f',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderTopColor: '#000000',
    borderStyle: 'solid',
    borderTopWidth: 2,
  },
  footerText:{
    fontFamily: 'IHateComicSans',
    fontSize: 20,
  },
});
