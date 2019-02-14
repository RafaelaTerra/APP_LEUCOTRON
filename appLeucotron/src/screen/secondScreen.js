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
import TelaSalgados from './screenSalgados'
import { SearchBar } from 'react-native-elements';

listaDePratos = []

export default class SegundaTela extends Component {

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

        listaDePratos = []

        const prato1 = { "name": "Strognoff de carne", "ingredients": "Frango, molho, milho e batata palha", "price": 12.00 }
        const prato2 = { "name": "Arroz carreteiro", "ingredients": "Arroz, bacon e calabresa", "price": 8.00 }
        const prato3 = { "name": "Feijão Tropeiro", "ingredients": "Feijão, bacon e couve", "price": 5.00 }
        const prato4 = { "name": "Lasanha", "ingredients": "Macarrão, molho branco e molho vermelho", "price": 13.00 }
        const prato5 = { "name": "Salpicão", "ingredients": "Frango, batata palha, maionese e azeitona", "price": 15.00 }
        const prato6 = { "name": "Maionese caseira", "ingredients": "Maionese, milho, batata e azeitona", "price": 9.00 }
        const prato7 = { "name": "Feijoada", "ingredients": "Feijão preto, carne seca e bacon", "price": 18.00 } 
        const prato8 = { "name": "Escondidinho de carne moída", "ingredients": "Batata, carne moída, milho e molho branco", "price": 20.00 } 
        const prato9 = { "name": "Farofa", "ingredients": "Farofa, milho, bacon e carne seca", "price": 15.00 } 

        listaDePratos.push(prato1)
        listaDePratos.push(prato2)
        listaDePratos.push(prato3)
        listaDePratos.push(prato4)
        listaDePratos.push(prato5)
        listaDePratos.push(prato6)
        listaDePratos.push(prato7)
        listaDePratos.push(prato8)
        listaDePratos.push(prato9)




        listaDePratos.sort(this.Rest)

        

    }
    updateSearch = search => {
        this.setState({ search });
        this.setState({ digitando: true })
        SegundaTela.busca =  this.state.search
        this.forceUpdate();
    }
    AjudaSenhor() {
        this.state.digitando = false
    }
    render() {
        const { search } = this.state;

        return (
            <View style={{ flex: 1,backgroundColor: '#EFAB1F' }}>

                <Container style={styles.container }>

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
                        {listaDePratos.map(function (item) {
                            return (

                                <View style={{flex:1}}>
                                {
                                   item.name.indexOf(SegundaTela.busca) >=0 && (

                                    <TelaSalgados item={item} />) 
                                }
                                </View>

                            )
                        }
                        )}
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

