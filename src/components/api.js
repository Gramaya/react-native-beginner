import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class APIComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data : {}
      };
    };
    
    getData() {
        let url = 'https://raw.githubusercontent.com/creativefull/cermai/master/package.json'

        fetch(url)
            .then((text) => text.json())
            .then((result) => {
                this.setState({
                    data : result
                })
            })
            .catch((e) => {
                alert("Terjadi Kesalahan Pada API")
            })
    }

    componentDidMount() {
        this.getData()
    }

  render() {
    return (
      <View>
        <Text> API Component </Text>
        
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}
