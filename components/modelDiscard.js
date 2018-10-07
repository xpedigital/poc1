import React from 'react';
import { Modal, StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput  } from 'react-native';


export default class ModelDiscard extends React.Component {

  state = {
      modalVisible: this.props.visible,
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

    const { navigation } = this.props.navigation;

    return (
        <Modal  
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          >
          <View style={styles.container}>
            <View style={styles.helper}>
              <View style={styles.itemRow}>
                <View style={styles.hehe}>
                  <Text>Are you sure you want to go back!</Text>
                </View>
                <TouchableOpacity onPress={() => !this.props.visible} activeOpacity={0.7}>
                    <Text style={styles.button}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={0.7}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    );
  }
}

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  itemRow:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex:1,
  },
  hehe:{
    width: width,
    alignItems: 'center',
  },
  helper:{
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
