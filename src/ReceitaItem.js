import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import ReceitaResumo from './ReceitaResumo';
import ReceitaIngrediente from './ReceitaIngrediente';
import ReceitaModo from './ReceitaModo'

const Tabs = createBottomTabNavigator({
    ReceitaResumoScreen:{
        screen: ReceitaResumo,
    },
    ReceitaIngredienteScreen:{
        screen: ReceitaIngrediente,
    },
    ReceitaModoScreen:{
        screen: ReceitaModo,
    }
},{
    animationEnabled:true,
    tabBarOptions:{
        showIcon:false,
        style:{
            backgroundColor: '#EEEEEE',
        },
        labelStyle:{
            fontSize:14,
            height: 47,
            lineHeight: 47,
        },
        activeTintColor: '#333333',
        inactiveTintColor: '#cccccc'
    }
});

export default class ReceitaItem extends React.Component{
    constructor(props){
        super(props);
        this.state;
    }
    static navigationOptions = {
        title: 'Receita',
        header: null
    } 

    render(){
        return(
            <View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
                        <Image resizeMode={'contain'} source={require('../assets/images/back.png')} style={styles.img} />
                    </TouchableOpacity>
                </View>
                <Image resizeMode={'cover'} source={{uri:this.props.navigation.state.params.data.imagem}} style={styles.banner} />
                <Tabs />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
    },
    backButton:{
      width:40,
      height:40,
      margin: 7,
      zIndex: 99,
      backgroundColor: 'black',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    img:{
        height:25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center'

    },
    banner:{
        marginTop: -78,
        height: 190,
    },
    textoTeste:{
        backgroundColor: 'red',
        zIndex: 1111,
    }
});