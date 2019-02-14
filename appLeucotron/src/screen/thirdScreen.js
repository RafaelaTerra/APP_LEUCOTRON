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
import TelaDoces from './screenDoces'
import { SearchBar } from 'react-native-elements';

listaDeDoces = []

export default class TerceiraTela extends Component {
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
        listaDeDoces = []


        const doce1 = { "name": "Doce de leite", "ingredients": "Leite e coco", "price": 5.00 }
        const doce2 = { "name": "Pavê de chocolate", "ingredients": "Leite condensado e chocolate", "price": 8.50 }
        const doce3 = { "name": "Torta de morango", "ingredients": "Morango, leite e leite condensado", "price": 5.00 }
        const doce4 = { "name": "Torta de pêssego", "ingredients": "Pêssego, leite e leite condensado", "price": 9.00 }
        const doce5 = { "name": "Gelatina cremosa", "ingredients": "Sabores variados", "price": 15.00 }
        const doce6 = { "name": "Sorvete de chocolate", "ingredients": "Chocolate e leite", "price": 9.00 }
        const doce7 = { "name": "Flã tricolor", "ingredients": "Leite de coco, leite condensado e  Nesquik sabor morango", "price": 18.00 }
        const doce8 = { "name": "Creme bombom de morango", "ingredients": "Leite condensado, chocolate meio amargo e  morangos", "price": 20.00 }
        const doce9 = { "name": "Creme de chocolate, baunilha e cupuaçu", "ingredients": "Essência de baunilha e chocolate meio amargo", "price": 15.00 }

        listaDeDoces.push(doce1)
        listaDeDoces.push(doce2)
        listaDeDoces.push(doce3)
        listaDeDoces.push(doce4)
        listaDeDoces.push(doce5)
        listaDeDoces.push(doce6)
        listaDeDoces.push(doce7)
        listaDeDoces.push(doce8)
        listaDeDoces.push(doce9)


        listaDeDoces.sort(this.Rest)

    }
    updateSearch = search => {
        this.setState({ search });
        this.setState({ digitando: true })
        TerceiraTela.busca = this.state.search
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

                    />
                </Container>
                <View style={{
                    flex: 6, backgroundColor: 'white'
                }}>
                    <ScrollView>
                        {listaDeDoces.map(function (item) {
                            return (
                                <View style={{ flex: 1 }}>
                                    {
                                        item.name.indexOf(TerceiraTela.busca) >= 0 && (

                                            <TelaDoces item={item} />
                                    )}
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
        backgroundColor: 'gray'
    }
})

