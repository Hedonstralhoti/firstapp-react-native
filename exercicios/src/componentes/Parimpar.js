import React from 'react'
import { View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num){
    if(num % 2 == 0) {
        return <Text style={Padrao.ex}>Par</Text>
    } else {
        return <Text style={Padrao.ex}>Impar</Text>
    }
}

export default function (props){
    return <View>
        {parOuImpar(props.numero)}
    </View>
}