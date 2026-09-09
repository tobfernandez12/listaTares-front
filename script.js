const tareaInput = document.getElementById("tarea")
const infoInput = document.getElementById("info")
const agregar = document.getElementById("agregarButton")

const contador = document.getElementById("contador")
const listaTareas = document.getElementById("listaTareas")
const noTareas = document.getElementById("noTareas")

const botonesFiltro = document.querySelectorAll(".filter")
//aca me traigo las cosas del index mediante la id.

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

let filtroActual = "todas";

//AGREGAR TAREAS==================================================
agregar.addEventListener("click", function() {

    const nombre = tareaInput.value.trim();
    const descripcion = infoInput.value.trim();

    if (nombre === "") {
        alert("Escribí una tarea");
        return;
    }

    //creamos una nueva tarea
    const nuevaTarea = {
        id: Date.now(),
        nombre: nombre,
        descripcion: descripcion,
        terminada: false
    };

    tareas.push(nuevaTarea);
    //Guardamos las tareas
    guardarTareas();

    //limpiamos los inputs
    tareaInput.value = "";
    infoInput.value = "";

    mostrarTareas();
});
//================================================================

//GUARDAR TAREAS==================================================
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}
//================================================================

//MOSTRAR TAREAS==================================================
function mostrarTareas() {
    listaTareas.innerHTML = "";

    //elegimos cual tarea queremos mostrar
    let tareasMostrar = tareas;

    if (filtroActual === "pendientes") {
        tareasMostrar = tareas.filter(function (tarea) {
            return tarea.terminada === false;
        });
    }

    if (filtroActual === "terminadas") {
        tareasMostrar = tareas.filter(function (tarea){
            return tarea.terminada === true;
        });
    }

    //mostramos u ocultamos el mensaje
    if (tareasMostrar.length === 0) {
        noTareas.style.display = "block";
    } else {
        noTareas.style.display = "none";
    }

    //creamos cada tarea
    tareasMostrar.forEach(function (tarea) {
        const div = document.createElement("div");
        div.classList.add("tarea");
        if (tarea.terminada) {
            div.classList.add("terminada");
        }

        div.innerHTML = `
            <h3 class="nombreTarea" >${tarea.nombre}</h3>
            <p class="infoTarea" >${tarea.descripcion}</p>
            <div class="botones">
                <button onClick="terminarTarea(${tarea.id})">
                    ${tarea.terminada ? "Desmarcar" : "Terminar"}
                </button>

                <button onClick="eliminarTarea(${tarea.id})">
                    Eliminar
                </button>
            </div>
        `;
        listaTareas.appendChild(div);
    });

    actualizarContador();
}
//================================================================

//TERMINAR TAREA===================================================
function terminarTarea(id) {
    tareas.forEach(function (tarea) {
        if (tarea.id === id) {
            tarea.terminada = !tarea.terminada;
        }
    });
    guardarTareas();
    mostrarTareas();
}
//================================================================

//ELIMINAR TAREA===================================================
function eliminarTarea(id) {
    tareas = tareas.filter(function (tarea) {
        return tarea.id !== id;
    });
    guardarTareas();
    mostrarTareas();
}
//================================================================

//CONTADOR========================================================
function actualizarContador() {
    const pendientes = tareas.filter(function (tarea) {
        return tarea.terminada === false;
    });

    contador.textContent = pendientes.length + " tareas pendientes";
}
//================================================================

//FILTROS=========================================================
botonesFiltro.forEach(function (boton) {
    boton.addEventListener("click", function (){
        filtroActual = boton.dataset.filter;
        //cambiamos el boton activo
        botonesFiltro.forEach(function (otroBoton) {
            otroBoton.classList.remove("active");
        });
        boton.classList.add("active");

        mostrarTareas();
    });

});
//================================================================
//Mostramos todas las tareas al abrir la página
mostrarTareas();