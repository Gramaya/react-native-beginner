import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class FlexComponent extends Component {
  render() {
    return (
      <View style={{flex : 1, flexDirection : 'row'}}>
        <View style={{flex :1, backgroundColor : 'red'}}></View>
        <View style={{flex :2, backgroundColor : 'blue'}}></View>
        <View style={{flex :3, backgroundColor : 'green'}}></View>
      </View>
    );
  }
}
