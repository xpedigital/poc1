import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView, Dimensions,Image, TouchableOpacity  } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Home extends React.Component {

  state = {
    data: [
      {id: '0', title: 'Salaam', path: '../assets/images/cards/1.png'},
      {id: '1', title: 'JazakaAllah', path: '../assets/images/cards/2.png'},
      {id: '2', title: 'Eid/Rimadan', path: '../assets/images/cards/3.png'},
    ]
  }

  cards(){
    let cardsItem = 
      this.state.data.map((item,index)=>{
        let src = item.path;
      return <View><Text>{src}</Text>
        <Image style={styles.hehe} resizeMode='contain' source={require('../assets/images/logo.png')} /></View> 
      }) 
      return cardsItem;
  }

  

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <Header/>

        <ScrollView>
          <View style={styles.cardsWrapper}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/1.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/2.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/3.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/4.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/4.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/5.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/5.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/6.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/6.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/7.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/7.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/8.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/8.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/9.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/9.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/10.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/10.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/11.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/11.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CardView',{image: require('../assets/images/cards/12.png')})} activeOpacity={0.7}>
              <Image style={styles.cardImage} resizeMode='contain' source={require('../assets/images/cards/12.png')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#dfdce3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsWrapper:{
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 25,
    justifyContent: 'center'
  },
  card:{
    height: 110,
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eab8ac',
    marginHorizontal:8,
    marginBottom:25,
    padding: 10,
  },
  cardImage:{
    height: 110,
    width: 85,
    marginHorizontal:8,
    marginBottom:25,
  }
});
