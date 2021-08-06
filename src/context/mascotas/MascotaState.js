import React, { useReducer } from 'react'
import MascotaContex from './MascotaContex'
import MascotaReducer from './MascotaReducer'
import axios from 'axios'

const MascotaState = (props) => {

    const inicialState = {
        mascotas: [
            {
                id: 0,
                raza: 'Bulldog'
            }
        ]
    }

    const [ globalState, dispatch ] = useReducer(MascotaReducer, inicialState)

    const obtenerMascotas = async () => {

        try {

            const res = await axios.get('http://localhost:3005/api/mascotas')

            const mascotasActualizadas = res.data

            console.log(mascotasActualizadas)

            dispatch({
                type: "OBTENER_MASCOTAS",
                payload: mascotasActualizadas
            })

        } catch(error) {

        }

    }

    return (
        <MascotaContex.Provider
            value={{
                mascotas: globalState.mascotas,
                obtenerMascotas
            }}
        >
            {props.children}
        </MascotaContex.Provider>
    )



}

export default MascotaState