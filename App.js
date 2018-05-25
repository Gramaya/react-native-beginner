import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// COMPONENT GAWEAN DEWE
import Menu from "./src/components/menu";
// import Flex from "./src/components/flex";
import Form from './src/components/form'
import FlatList from './src/components/flatlist'
import API from './src/components/api'

export default class Apps extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      nama : 'Leon Chin Cha Hao'
    };
  };
  
  dipencet() {
    alert('Aduh Di Pencet')
  }

  gantiNamaDong() {
    this.setState({
      nama : 'Ruri Xi Pen Ja Hat'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize : 38, textAlign : 'center'}}> Component Pertama Saya </Text>
          <Text>{this.state.nama}</Text>
          
          <Button
            onPress={this.dipencet.bind(this)}
            title="PENCET SAYA DONG KAK"
            color="#089"/>
          
          <Button
            onPress={this.gantiNamaDong.bind(this)}
            title="GANTI NAMA RURI"
            color="#F80"/>

          {/* COMPONENT GAWEAN DEWE */}
          <Menu
            judul="IKI JUDUL MENUKU"/>

          <Form/>

          <FlatList/>

          <API/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#DFDFDF',
    padding: 10,
    flex: 1,
  }
})