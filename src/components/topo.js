import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

const imagemLogo = require('../../imgs/jokenpo.png');

class Topo extends Component{
    render() {
      return (
        <View>
          <Image source={imagemLogo}></Image>
        </View>
      );
    }
  }

export default Topo;
