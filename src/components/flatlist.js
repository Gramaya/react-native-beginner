import React, { Component } from 'react';
import {  View, Text, FlatList} from 'react-native';

export default class FlatListComponent extends Component {
  render() {
    let data = [{
        key : 'fawaiq123',
        nama : 'Yukcoding'
    },{
        key : 'ruridev23',
        nama : 'RR Studio Dev'
    }]

    return (
      <View>
        <Text> List Nama - Nama Anggota Gramaya </Text>
        
        <FlatList
            data={data}
            renderItem={({item}) => {
                return (
                    <Text>{item.nama}</Text>
                )
            }}/>
      </View>
    );
  }
}
