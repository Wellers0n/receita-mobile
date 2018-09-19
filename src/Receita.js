import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Receita extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ReceitaScreen', {data: this.props.data})}>
                <View style={styles.container}>
                    <Image resizeMode={'contain'} style={styles.img} source={{uri: this.props.data.imagem}}  />
                    <View style={styles.containerText}>
                        <Text style={styles.nome}>{this.props.data.nome}</Text>
                        <Text>{this.props.data.rendimento} porçoes - {this.props.data.preparo} minutos</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: 140,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img:{
        width: 120,
        height: 120,
        margin: 10,
        borderRadius: 100,
    },
    containerText:{
        flexDirection: 'column',
        flex:1,
        height: 120,
        justifyContent: 'center',
        margin: 5,
    },
    nome:{
        fontWeight: 'bold',
        fontSize: 17,
    }
});