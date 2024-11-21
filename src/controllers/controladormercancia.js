import { registrarMercancia } from "../services/servicioRegistrarMercancia.js";
import { consultarMercancia } from "../services/servicioConsultarMercancia.js";


let botonRegistroMercancia = document.getElementById('botonRegistroMercancia');
let pesoMercancia = document.getElementById('pesomercancia');
let volumenMercancia = document.getElementById('volumenmercancia');
let nombreMercancia = document.getElementById('nombremercancia');
let tipoDestinatarioMercancia = document.getElementById('tipodestinatariomercancia');
let departamentoMercancia = document.getElementById('departamentomercancia');
let ciudadMercancia = document.getElementById('ciudadmercancia');
let nombreDestinatarioMercancia = document.getElementById('nombredestinatariomercancia');
let direccionMercancia = document.getElementById('direccionmercancia');
let fechaIngresoMercancia = document.getElementById('fechaingresomercancia');
let fechaSalidaMercancia = document.getElementById('fechasalidamercancia');
let nombreZonaMercancia = document.getElementById('nombreZona');
let idBodega = 0;


document.getElementById('bodega').addEventListener('change', function () {
    idBodega = this.value;
    console.log("ID de la bodega seleccionada:", idBodega)

});


//detectar evento click en el boton de registro de mercancia

botonRegistroMercancia.addEventListener('click', function (evento) {
    evento.preventDefault();
    let objetoMercancia = {
        peso: pesoMercancia.value,
        volumen: volumenMercancia.value,
        nombre: nombreMercancia.value,
        tipoDestinatario: tipoDestinatarioMercancia.value,
        departamento: departamentoMercancia.value,
        ciudad: ciudadMercancia.value,
        nombreDestinatario: nombreDestinatarioMercancia.value,
        direccion: direccionMercancia.value,
        fechaIngreso: fechaIngresoMercancia.value,
        fechaSalida: fechaSalidaMercancia.value,
        nombreZona: nombreZonaMercancia.value,
        zonaBodega: {
            idZona: idBodega
        }
    }

    //Llmando a la API
    try {
        if (objetoMercancia.peso === "" || objetoMercancia.volumen === "" || objetoMercancia.nombre === "" || objetoMercancia.tipoDestinatario === "" || objetoMercancia.departamento === "" || objetoMercancia.ciudad === "" || objetoMercancia.nombreDestinatario === "" || objetoMercancia.direccion === "" || objetoMercancia.fechaIngreso === "" || objetoMercancia.fechaSalida === "" || objetoMercancia.zonaBodega.nombreZona === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor llene todos los campos!"
            });
            return;
        }
        console.log("Objeto mercancia:", objetoMercancia);
        registrarMercancia(objetoMercancia)
            .then(function (respuesta) {
                if (respuesta) {
                    Swal.fire({
                        title: "Buen trabajo!",
                        text: "Mercancía registrada exitosamente",
                        icon: "success"
                    });
                }
            });
    } catch (error) {
        console.log(error)
    }

});


let filatabla = document.getElementById('filatabla');

consultarMercancia()
    .then(function (respuesta) {
        console.log("La respuesta de mercancía es: ", respuesta);
        if (Array.isArray(respuesta)) {
            respuesta.forEach(function (mercancia) {

                // Verificar la propiedad nombreZona directamente en el objeto mercancia
                console.log("Zona Bodega:", mercancia.nombreZona); // Ver para depuración

                let fila = document.createElement('tr');

                let columna1 = document.createElement('td');
                columna1.textContent = mercancia.nombre;

                let columna2 = document.createElement('td');
                columna2.textContent = mercancia.volumen;

                let columna3 = document.createElement('td');
                columna3.textContent = mercancia.peso;

                let columna4 = document.createElement('td');
                columna4.textContent = mercancia.ciudad;

                let columna5 = document.createElement('td');
                columna5.textContent = mercancia.direccion;

                let columna6 = document.createElement('td');
                columna6.textContent = mercancia.fechaIngreso;

                let columna7 = document.createElement('td');

                // Acceder directamente a nombreZona, ya que está en el objeto mercancia
                if (mercancia.nombreZona) {
                    columna7.textContent = mercancia.nombreZona;  // Mostrar la zona correcta
                } else {
                    columna7.textContent = 'Zona desconocida'; // Si no está, muestra el mensaje
                }

                fila.appendChild(columna1);
                fila.appendChild(columna2);
                fila.appendChild(columna3);
                fila.appendChild(columna4);
                fila.appendChild(columna5);
                fila.appendChild(columna6);
                fila.appendChild(columna7);
                filatabla.appendChild(fila);
            });
        }
    })
    .catch(function(error) {
        console.error("Error al consultar mercancías:", error);
    });





