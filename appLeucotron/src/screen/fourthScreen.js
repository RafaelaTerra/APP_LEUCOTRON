/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react'
import { Container } from 'native-base'
import {
    StyleSheet,
    Image,
    View,
    ScrollView
} from 'react-native'

import TelaBebidas from './screenBebidas'
import { SearchBar } from 'react-native-elements';
listaDeBebidas = []
export default class QuartaTela extends Component {
    static busca = ""

    state = {
        search: '',
        digitando: false
    };
    Rest(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }
    componentWillMount() {

        listaDeBebidas = []


        const bebida1 = { "name": "Água natural", "ingredients": "600 ml", "price": 8.00 }
        const bebida2 = { "name": "Água gaseificada", "ingredients": "600 ml", "price": 8.00 }
        const bebida3 = { "name": "Coca-Cola", "ingredients": "350 ml", "price": 15.00 }
        const bebida4 = { "name": "Guaraná", "ingredients": "350 ml", "price": 13.00 }
        const bebida5 = { "name": "Tequila Fizz", "ingredients": "Dose: Tequila e limão", "price": 10.00 }
        const bebida6 = { "name": "Hi Fi", "ingredients": "Drink: Vodka e suco de laranja", "price": 9.00 }
        const bebida7 = { "name": "Suco Natural", "ingredients": "Limão, laranja e abacaxi", "price": 12.00 }
        const bebida8 = { "name": "Cerveja", "ingredients": "Skol, Brahma e budweiser - 1L", "price": 18.00 }
        const bebida9 = { "name": "Whisky", "ingredients": "500 ml", "price": 105.00 }

        listaDeBebidas.push(bebida1)
        listaDeBebidas.push(bebida2)
        listaDeBebidas.push(bebida3)
        listaDeBebidas.push(bebida4)
        listaDeBebidas.push(bebida5)
        listaDeBebidas.push(bebida6)
        listaDeBebidas.push(bebida7)
        listaDeBebidas.push(bebida8)
        listaDeBebidas.push(bebida9)


        listaDeBebidas.sort(this.Rest)

    }
    updateSearch = search => {
        this.setState({ search });
        this.setState({ digitando: true })
        QuartaTela.busca =  this.state.search
        this.forceUpdate();
    }
    AjudaSenhor() {
        this.state.digitando = false
    }
    render() {
        const { search } = this.state;
        return (
            <View style={{ flex: 1 }}>

                <Container style={styles.container}>
                <SearchBar
                        placeholder="Pesquisa rápida"
                        onChangeText={this.updateSearch}
                        value={search}
                        onClear={this.AjudaSenhor()}

                    /></Container>

                <View style={{
                    flex: 6, backgroundColor: 'white'
                }}>
                    <ScrollView>
                        {listaDeBebidas.map(function (item) {
                            return (
                                <View style={{flex:1}}>
                                {
                                   item.name.indexOf(QuartaTela.busca) >=0 && (

                                    <TelaBebidas item={item} />)
                                }
                                </View>
                              
                            )
                        })}
                    </ScrollView>
                </View>


            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor: '#EFAB1F'
    }
})

