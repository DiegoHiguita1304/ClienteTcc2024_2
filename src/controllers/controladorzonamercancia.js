let botonRegistar=document.getElementById("botonregistar")

let idZona = document.getElementById("idzona");
let nombreZona = document.getElementById("nombrezona");
let capacidadMaximaVolumen = document.getElementById("capacidadmaximavolumen");
let capacidadMaximaPeso = document.getElementById("capacidadmaximapeso");
let capacidadVolumenOcupado = document.getElementById("capacidadvolumenocupado");
let capacidadPesoOcupado = document.getElementById("capacidadpesoocupado");

// Detectar evento de clic en el formulario
botonRegistar.addEventListener("click", function(evento) {
    evento.preventDefault();
    let objetoZona = {
        "idZona": idzona.value,
        "nombreZona": nombreZona.value,
        "capacidadMaximaVolumen": capacidadMaximaVolumen.value,
        "capacidadMaximaPeso": capacidadMaximaPeso.value,
        "capacidadVolumenOcupado": capacidadVolumenOcupado.value,
        "capacidadPesoOcupado": capacidadPesoOcupado.value
    };

    console.log(objetoZona);
    // Llamado al API
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
});
