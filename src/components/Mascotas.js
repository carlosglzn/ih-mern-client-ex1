import React, { useContext, useState, useEffect } from 'react'
import MascotaContext from '../context/mascotas/MascotaContex'

export default function Mascotas() {


    // 1. USE CONTEXT - ESTADO GLOBAÑ
    const ctxMascota = useContext(MascotaContext)

    const { 
        mascotas, 
        obtenerMascotas,
        crearMascota,
        actualizarMascota,
        eliminarMascota } = ctxMascota


    // 2. USESTATE - ESTADO LOCAL  
    
    const [ nuevaMascota, setNuevaMascota ] = useState({
        raza: ""
    })

    const [ modeEdicion, setModeEdicion ] = useState(false)

    // 3. USEEFECT

    useEffect(() => {

        obtenerMascotas()

    }, [])

    const handleChange = (event) => {

        event.preventDefault()

        setNuevaMascota({
            ...nuevaMascota,
            [event.target.name]: event.target.value
        })

    }

    const sendFormulario = (event) => {

        event.preventDefault()

        crearMascota(nuevaMascota)

        setNuevaMascota({
            raza: ""
        })

    }

    // MODO EDICIÓN

    const activeModoEdicion = (event, element) => {

        event.preventDefault()
        setModeEdicion(true)
        setNuevaMascota(element)

    }

    const editarMascota = (event) => {

        event.preventDefault()

        actualizarMascota(nuevaMascota)

        setModeEdicion(false)

        setNuevaMascota({
            raza: ""
        })

    }

    // BORRAR MASCOTA

    const borrarMascota = (event, element) => {

        event.preventDefault()
        eliminarMascota(element)

    }


    return (
        <div>
            
            <h1>Mascotas</h1>

            <hr />

            <form onSubmit={modeEdicion ?
                (e) => editarMascota(e) :
                (e) => sendFormulario(e)
            }>
                <input 
                    name="raza"
                    type="text"
                    value={nuevaMascota.raza}
                    onChange={(e) => { handleChange(e)}}
                />

                <button>
                    { modeEdicion ? "Editar Mascota" : "Crear Mascota"}
                </button>

            </form>

            {/* <button onClick={() => {obtenerMascotas()}}>
                Obtener Mascotas
            </button> */}

            {
                mascotas.length === 0 ?
                "No tengo mascotas"
                :
                mascotas.map((mascota, index) => {
                    return(
                        <div key={index}>

                            <p>{mascota.raza}</p>
                            <p>{mascota._id}</p>

                            <button onClick={(evento) => {activeModoEdicion(evento, mascota)}}>Editar</button>
                            <button onClick={(evento) => {borrarMascota(evento, mascota)}}>Borrar</button>

                        </div>
                    )
                })
            }
        </div>
    )
}
