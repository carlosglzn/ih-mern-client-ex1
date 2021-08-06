import React, {useState, useEffect, useContext} from 'react'
// import axios from 'axios' // UN POSTMAN
import ProyectoContext from '../context/proyectos/ProyectoContex'

export default function Proyectos() {

    const context = useContext(ProyectoContext)

    const { proyectos, darkMode, obtenerProyectos } = context

    

    return (
        <div>
            Hola soy todos los proyectos del backend :D


            {
                proyectos.map((e, index) => {
                    return(
                        <p key={index}>{e.nombre}</p>
                    )
                })
            }

            <p>Dark Mode: {
                darkMode ? 'Activado' : 'Apagado'
            }</p>

            <button onClick={() => {obtenerProyectos()}}>
                Obtener Proyectos de base de datos
            </button>
        </div>
    )
}
