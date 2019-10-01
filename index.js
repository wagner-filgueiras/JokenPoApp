import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
 } from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class JokenPo extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      escolhaUsuario: '', 
      escolhaComputador: '', 
      resultado: ''}
  }

  jokenpo(escolhaUsuario) {
    // gerar numero aleatorio (0,1,2)
    let numAleatorio = Math.floor(Math.random() * 3);

    // substituir pelo texto o numeroAleatorio
    let escolhaComputador =   '';

    switch (numAleatorio){
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    let resultado = '';

    if (escolhaComputador === 'Pedra') {
      if(escolhaUsuario === 'Pedra') {
        resultado = 'Empatou...';
      }
      if (escolhaUsuario === 'Papel') {
        resultado = 'Você Venceu!';
      }
      if (escolhaUsuario === 'Tesoura') {
          resultado = 'Você Perdeu =(';
        }
    }
    if (escolhaComputador === 'Papel') {
      if (escolhaUsuario === 'Papel') {
        resultado = 'Empatou...';
      }
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você Venceu!';
      }
      if(escolhaUsuario === 'Pedra') {
          resultado = 'Você Perdeu =(';
        }
    }

    if (escolhaComputador === 'Tesoura') {
      if(escolhaUsuario === 'Tesoura') {
        resultado = 'Empatou...';
      }
      if(escolhaUsuario === 'Pedra') {
        resultado = 'Você Venceu!';
      }
      if(escolhaUsuario === 'Papel') {
          resultado = 'Você Perdeu =(';
        }
    }
    // função que altera o estado da variavel de acordo com o botao apertado
    this.setState({ escolhaUsuario : escolhaUsuario,  // tambem pode usar o atalho passando apenas um valor 
                    escolhaComputador : escolhaComputador, // usando atalho: *** escolhaComputador, *** 
                    resultado : resultado});
  }
 
  render () {    
    return (
      <View>
        
        <Topo/>
        
        <View style={styles.actionsPanel}>

        <View style={styles.btnEscolha}>
        <Button
        title= 'tesoura'
        onPress={() => {this.jokenpo('Tesoura'); }}
        />
        </View>

          <View style={styles.btnEscolha}>
        <Button
        title= 'pedra'
        onPress={() => {this.jokenpo('Pedra'); }} 
        />

      </View>
        
        <View style={styles.btnEscolha}>
        <Button
        title= 'papel'
        onPress={() => {this.jokenpo('Papel'); }}
        />
        </View>

        
      </View>

      <View style={styles.palco}>
        <Text style={styles.txtResult}>{this.state.resultado} </Text>

        <Icone escolha={this.state.escolhaUsuario} jogador='Miguel'/>
        <Icone escolha={this.state.escolhaComputador} jogador='Computador'/>        
      </View>            
        
      </View>    
      );
    }
  }

  

  const styles = StyleSheet.create({
    btnEscolha: {
      width: 90,
      borderRadius: 5,
    },
    actionsPanel: {
      marginTop: 20,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    palco: {
      alignItems: 'center',
      marginTop: 20,
    },
    txtResult: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'red',
      marginBottom: 20,
      height: 60,

    }
  });
  


AppRegistry.registerComponent('JokenPo', () => JokenPo);
