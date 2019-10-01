import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png')

class Icone extends Component {
    render() {
      // this.props.escolha
      // this.props.jogador

      if(this.props.escolha === 'Pedra'){
        return(
          <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.icone} source={imgPedra} />
          </View>
          
        );        

      } else if (this.props.escolha === 'Papel'){
       return(
        <View style={styles.icone}>
        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
        <Image style={styles.icone} source={imgPapel} />
        </View>
        
      );   


      } else if (this.props.escolha === 'Tesoura'){
        return(
          <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image style={styles.icone} source={imgTesoura} />
          </View>          
        );   

    } else { // não é necessário ter esse else pois ja é implicito.
      return false;
    }
   }    
  }

  const styles = StyleSheet.create({
    icone: {
      alignItems: 'center',
      marginBottom: 20
    },
    txtJogador:  {
     fontSize: 25,
     alignItems: 'center',
     fontWeight: 'bold',
     marginBottom: 10,
    }
});

export default Icone;
