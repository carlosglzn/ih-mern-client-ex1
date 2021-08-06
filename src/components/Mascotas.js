import React, { useContext } from 'react'
import MascotaContext from '../context/mascotas/MascotaContex'

export default function Mascotas() {

    const ctxMascota = useContext(MascotaContext)

    const { mascotas, obtenerMascotas } = ctxMascota

    return (
        <div>
            {
                mascotas.map((mascota, index) => {
                    return(
                        <p key={index}>Razas: {mascota.raza}</p>
                    )
                })
            }
            <button onClick={() => {obtenerMascotas()}}>
                Obtener Mascotas
            </button>
        </div>
    )
}
