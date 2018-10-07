import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions,Image, TouchableOpacity  } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default class CardView extends React.Component {
  render() {

    const { navigation } = this.props;
    const itemImage = navigation.getParam('image', require('../assets/images/DefaultCard.png'));
    return (
      <View style={styles.container}>

        <Header/>

        <ScrollView>
            <View style={styles.itemRow}>
                <Image style={styles.CardItem} resizeMode='contain' source={JSON.stringify(itemImage)}/>
            </View>
            <View style={styles.itemRow}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CardEdit',{image: itemImage})} activeOpacity={0.7}>
                    <Text style={styles.button}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={0.7}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

      </View>
    );
  }
}

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#dfdce3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardItem:{
      width: width/2,
      height: height/2.5,
      marginBottom:30,
  },
  itemRow:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex:1,
  },
  button:{
    backgroundColor: '#f04d25',
    paddingHorizontal: 40,
    paddingVertical: 7,
    fontFamily: 'IHateComicSans',
    fontSize: 22,
    color: '#ffffff',
    margin: 10,
    borderRadius: 8,
  }  
});
