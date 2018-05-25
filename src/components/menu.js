import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class MenuComponent extends Component {
  render() {
    let judul = this.props.judul
    return (
      <View>
        <Text>{"INI CONTOH JUDUL DARI COMPONENT LAIN " + judul}</Text>
      </View>
    );
  }
}