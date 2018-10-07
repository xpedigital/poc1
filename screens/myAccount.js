import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions,Image, TouchableOpacity, FlatList  } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default class MyAccount extends React.Component {

  state = {
      data: [
        {id: '0', title: 'Account'},
        {id: '1', title: 'Order History'},
        {id: '2', title: 'Sent Cards'},
        {id: '3', title: 'Help'},
        {id: '4', title: 'About EmanCards'},
        {id: '4', title: 'Like Us'},
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
