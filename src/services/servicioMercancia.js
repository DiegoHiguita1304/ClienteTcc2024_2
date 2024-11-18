export async function RegistarMercancia(datosMercancia){

    //1.PA ONDE VOY //URL DEL SERVICIO
    const URL="http://localhost:8080/soluciontcc/v1/mercancias"

    //2. QUE VAS HACER ALLA OME // CONFIGURO LA PETICION DE ENVIO 
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:datosMercancia
    }

    //3. ARRANQUE PS OME // LLAMO A LA PROMESA FETCH 
    let respuestaServidor=await fetch(URL,peticion)

    let respuestaFinal=await respuestaServidor.json()
    
    return respuestaFinal

}