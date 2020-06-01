import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import Contador from './componentes/Contador'

export default createDrawerNavigator({

    Contador: {
        screen: () => <Contador numero={0} />
    },
    Parimpar: {
        screen: () => <Parimpar numero={30}/>,
        navigationOptions: { title: 'Par e Impar' } 
    },
    Simples: {
        screen: () => <Simples texto='Flexivel'/>
    }
}, { drawerWidth: 300 })