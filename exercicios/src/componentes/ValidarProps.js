import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

//Uma função arrow por natureza não possui nome, a seguir
//vou dar nome a minha função arrow, criando uma constante "ValidarProps"
//
//{props.label} e {props.ano + 2000} vou receber 
const ValidarProps = props => 
    <Text style={{fontSize: 35}}>
        {props.label} 
        {props.ano + 2000}
    </Text>

//Agora irei validar que caso eu não receba o label, o valor assumo será "Ano:"
ValidarProps.defaultProps = {
    label: 'Ano: '
}
//Aqui utilizando o PropTypes, validar se o valor ano é numerico
// e is required que ele precisa ser preenchido para a função retornar
ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}
export default ValidarProps