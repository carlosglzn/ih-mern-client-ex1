import React, { useReducer } from 'react'
import ProyectoContext from './ProyectoContex'
import ProyectoReducer from './ProyectoReducer'
import axios from 'axios'

const ProyectoState = (props) => {

    // 1. ESTADO INICIAL
    // SIEMPRE HAGAN UN OBJETO

    const initialState = {
        proyectos: [
            {
                id: 0,
                nombre: "Arquitectura DESDE GLOBAL"
            }
        ]
    }

    // 2. DISPATCHING Y REDUCERS

    const [ globalState, dispatch ] = useReducer(ProyectoReducer, initialState)

    // 3. FUNCIONES
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES

    const obtenerProyectos = async () => {

        try {

            const respuesta = await axios.get('http://localhost:3005/api/proyectos')

            const proyectosActualizados = respuesta.data

            console.log(proyectosActualizados)

            dispatch({
                type: "OBTENER_PROYECTOS",
                payload: proyectosActualizados
            })

        } catch(error) {

        }
    }

    // 4. RETORNO DE ESTADO GLOBAL

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: globalState.proyectos,
                darkMode: true,
                obtenerProyectos
            }}
        >
            { props.children }
        </ProyectoContext.Provider>
    ) 

}

export default ProyectoState