import React, { Component } from 'react';
import {  View, Text, TextInput} from 'react-native';

export default class FormComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nama : '',
         alamat : ''
      };
    };
    
    inputanNama(text) {
        this.setState({
            nama : text
        })
    }
  render() {
    return (
      <View>
        <Text> Nama </Text>
        <TextInput
            placeholder="SILAHKAN MASUKAN NAMA ANDA SEJUJURNYA"
            onChangeText={(text) => this.inputanNama(text)}/>

        <Text> Alamat </Text>
        <TextInput
            placeholder="SILAHKAN MASUKAN ALAMAT ANDA SELENGKAPNYA"
            onChangeText={(alamat) => {
                this.setState({ alamat })
            }}
            multiline={true}/>
      </View>
    );
  }
}
