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
            const res = await axios.post("http://localhost:3005/api/mascotas/crear", dataForm)

            obtenerMascotas()

        } catch(error) {

        }

    }


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

    const actualizarMascota = async (dataForm) => {

        const formMascota = {

            mascotaId: dataForm._id,
            raza: dataForm.raza

        }

        const res = await axios.post("http://localhost:3005/api/mascotas/actualizar", formMascota)

        obtenerMascotas()

    }

    const eliminarMascota = async (dataForm) => {

        const formMascota = {
            mascotaId: dataForm._id
        }

        const res = await axios.post("http://localhost:3005/api/mascotas/eliminar", formMascota)

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