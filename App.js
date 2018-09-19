import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Lista from './src/Lista';
import Receita from './src/ReceitaItem';

const Navegacao = createStackNavigator({
  ListaScreen:{
    screen: Lista
  },
  ReceitaScreen:{
    screen: Receita
  }
},{})

export default Navegacao;