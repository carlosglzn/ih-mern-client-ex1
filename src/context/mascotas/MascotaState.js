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

    const crearMascota = async (dataForm) => {

        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/api/mascotas/crear`, dataForm)

            obtenerMascotas()

        } catch(error) {

        }

    }


    const obtenerMascotas = async () => {

        try {

            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/mascotas`)

            const mascotasActualizadas = res.data

            console.log(mascotasActualizadas)

            dispatch({
                type: "OBTENER_MASCOTAS",
                payload: mascotasActualizadas
            })

        } catch(error) {

        }

    }

    const actualizarMascota = async (dataForm) => {

        const formMascota = {

            mascotaId: dataForm._id,
            raza: dataForm.raza

        }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/mascotas/actualizar`, formMascota)

        obtenerMascotas()

    }

    const eliminarMascota = async (dataForm) => {

        const formMascota = {
            mascotaId: dataForm._id
        }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/mascotas/eliminar`, formMascota)

        obtenerMascotas()

    }

    return (
        <MascotaContex.Provider
            value={{
                mascotas: globalState.mascotas,
                obtenerMascotas,
                crearMascota,
                actualizarMascota,
                eliminarMascota
            }}
        >
            {props.children}
        </MascotaContex.Provider>
    )



}

export default MascotaState