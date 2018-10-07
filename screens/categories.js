import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions,Image, TouchableOpacity, FlatList  } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Categories extends React.Component {

  state = {
      data: [
        {id: '0', title: 'Salaam'},
        {id: '1', title: 'JazakaAllah'},
        {id: '2', title: 'Eid/Rimadan'},
        {id: '3', title: 'Hijri Year'},
        {id: '4', title: 'Mabrook'},
        {id: '5', title: 'Iqtibas'},
        {id: '6', title: 'Eid/Rimadan'},
        {id: '7', title: 'Hijri Year'},
        {id: '8', title: 'Mabrook'},
        {id: '9', title: 'Iqtibas'},
      ]
  }
  
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <Header/>

        <ScrollView >
            <FlatList
              data= {this.state.data}
              keyExtractor= { (item) => item.id }
              renderItem={({item, index}) => <View style={[styles.flatlistWrapper, (index % 2 == 0) ? styles.listOdd : styles.listEven ]}  key={item.id}><Text style={styles.flatlist} >{item.title}</Text></View>}
            />
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
  flatlistWrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 18,
    width: width,
  },
  flatlist:{
    alignItems:'center',
    justifyContent: 'center',
    color:'#ffffff',
    fontFamily: 'IHateComicSans',
    fontSize: 22,
  },
  listEven:{
    backgroundColor: '#ef4d26',
  },
  listOdd:{
    backgroundColor: '#41bfad',
  }
  
});
