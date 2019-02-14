/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react'
import { Container } from 'native-base'
import {
    StyleSheet,
    Image,
    View
} from 'react-native'



export default class BebidasLista extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
       <View>
           <Text>{}</Text>
           <Text>Frango c/ catupiry </Text>
           <Text>R$ 2.50 </Text>


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

