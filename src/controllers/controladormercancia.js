let botonRegistarMercancia=document.getElementById("botonmercancia")

let pesoMercancia=document.getElementById("pesomercancia")
let volumenMercancia=document.getElementById("volumenmercancia")
let nombreMercancia=document.getElementById("nombremercancia")
let tipoDestinatarioMercancia=document.getElementById("tipodestinatariomercancia")
let departamentoMercancia=document.getElementById("departamentomercancia")
let ciudadMercancia=document.getElementById("ciudadmercancia")
let nombreDestinatarioMercancia=document.getElementById("nombredestinatariomercancia")
let direccionMercancia=document.getElementById("direccionmercancia")
let fechaIngresoMercancia=document.getElementById("fechaingresomercancia")
let fechaSalidaMercancia=document.getElementById("fechasalidamercancia")

//dectectar evento de clic en el formulario 
botonRegistarMercancia.addEventListener("click",function(evento){
    evento.preventDefault()
    let objetoMercancia={
        "volumen":volumenMercancia.valu,
        "peso":pesoMercancia.valu,
        "nombre":nombreMercancia.valu,
        "tipoDestinatario":tipoDestinatarioMercancia.valu,
        "nombreDestinatario":nombreDestinatarioMercancia.valu,
        "departamento":departamentoMercancia.valu,
        "ciudad":ciudadMercancia.valu,
        "direccion":direccionMercancia.valu,
        "fechaIngreso": fechaIngresoMercancia.valu
    }

    console.log(objetoMercancia)
    //llamado al API
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    
})