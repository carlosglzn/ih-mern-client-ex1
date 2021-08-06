export default (globalState, action) => {

    switch(action.type) {

        case "OBTENER_MASCOTAS":
            return {
                ...globalState,
                mascotas: action.payload
            }

        default:
            return globalState    
    }
}