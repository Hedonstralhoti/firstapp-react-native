import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'

export default createDrawerNavigator({

    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome= 'Miguel' sobrenome='Oliveira'/>
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano= {10}/>
    },
    Plataformas: {
        screen: () => <Plataformas/>
    },
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