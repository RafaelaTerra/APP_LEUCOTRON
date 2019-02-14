/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react'
import {
    Container,
    Separator,
    ListItem
} from 'native-base'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native'



export default class RestauranteApp extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 6 }}>

                <Container style={styles.container}></Container>
                <View style={{
                    flex: 5, backgroundColor: 'white', justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 200, height: 250, marginTop: 200 , margin : 80
                    }}
                        source={require('../img/rafa.png')} />
                    <View styles={{ }}>
                        <Collapse styles={{}}>
                            <CollapseHeader styles={{ }}>
                                <Separator bordered>
                                    <Text style={{fontsize: 45, color: '#278FB1',  justifyContent: 'center' ,fontWeight: 'bold' }}>Cardápio</Text>
                                </Separator>
                            </CollapseHeader>
                            <CollapseBody>

                                <ListItem >
                                    <Text  style={{ fontsize: 35,color: '#278FB1' ,fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('SegundaTela')}>Salgados</Text>

                                </ListItem>

                                <ListItem >
                                    <Text style={{ fontsize: 35,color: '#278FB1' ,fontWeight: 'bold' }}  onPress={() => this.props.navigation.navigate('TerceiraTela')}>Sobremesas</Text>

                                </ListItem>

                                <ListItem >
                                    <Text style={{ fontsize: 35,color: '#278FB1' ,fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('QuartaTela')}>Bebidas</Text>

                                </ListItem>

                            </CollapseBody>

                        </Collapse>
                    </View>

                    <View style={{
                    flex: 5, backgroundColor: 'white', justifyContent: 'center',
                    alignItems: 'center'
                }}>
                 </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFAB1F',
        justifyContent: 'center',
        alignItems:'center',
       
    }
})

