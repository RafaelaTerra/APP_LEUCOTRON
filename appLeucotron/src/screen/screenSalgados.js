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
    Text
} from 'react-native'
import SalgadosLista from '../component/salgadosLista';


export default class TelaSalgados extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text  style={{color: '#278FB1'}}>{this.props.item.name}</Text>     
                <Text  style={{color: '#278FB1'}}>{this.props.item.ingredients}</Text>
                <Text  style={{color: '#278FB1'}}>{this.props.item.price}</Text>
                <View style={{height: 5, backgroundColor: '#EFAB1F'}}/>


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

