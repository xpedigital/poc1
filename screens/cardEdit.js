import React from 'react';
import { TouchableHighlight,Modal, StyleSheet, Text, View, ScrollView, Dimensions,Image, TouchableOpacity, TextInput  } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default class CardEdit extends React.Component {

  state = {
      text: '',
      editmode: false,
      modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  back(){
    if(this.state.editmode && this.state.text != ''){
      this.setModalVisible(true);
    }
    else{
      this.props.navigation.goBack()
    }
  }

  render() {

    const { navigation } = this.props;
    const itemImage = navigation.getParam('image', require('../assets/images/DefaultCard.png'));

    return (
      <View style={styles.container}>

        <Modal  
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          >
          <View style={styles.model}>
            <View style={styles.modelInner}>
                <View style={styles.modelTextWrapper}>
                  <Text style={styles.modelText}>Are you sure you want to go back!</Text>
                </View>
                <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)} activeOpacity={0.7}>
                    <Text style={styles.button}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={0.7}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <ScrollView>
            <View style={styles.itemRow}>
                <Image style={styles.CardItem} resizeMode='contain' source={JSON.stringify(itemImage)}/>
            </View>
            <View style={styles.itemRow}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text, editmode: true})}
                value={this.state.text}
                multiline = {true}
                numberOfLines = {4}
                underlineColorAndroid="transparent"
                placeholder="Enter Message"
                placeholderTextColor="#8b8d90"
              />
            </View>
            <View style={styles.itemRow}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CardPreview', {image: itemImage})} activeOpacity={0.7}>
                    <Text style={styles.button}>Preview</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.back()} activeOpacity={0.7}>
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
    paddingTop: 30,
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
    flexWrap: 'wrap',
    flex:1,
  },
  button:{
    backgroundColor: '#f04d25',
    paddingHorizontal: 40,
    paddingVertical: 7,
    fontFamily: 'IHateComicSans',
    fontSize: 22,
    color: '#ffffff',
    margin: 6,
    borderRadius: 8,
  },
  input:{
    height: 150,
    width: width/1.3,
    borderWidth: 0,
    borderRadius: 8,
    padding:10,
    marginBottom:15,
    backgroundColor: '#ffffff',
    color: '#8b8d90',
    fontFamily: 'IHateComicSans',
    fontSize: 18,
    justifyContent: 'flex-start',
  },

  model: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modelInner:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    width: width/1.1,
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modelTextWrapper:{
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 50,
  },
  modelText:{
    fontFamily: 'IHateComicSans',
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
