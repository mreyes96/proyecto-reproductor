// Definición del objeto Cancion
function Cancion(nombre, artista, año, duracion, genero, imagen) {
    this.nombre = nombre;
    this.artista = artista;
    this.año = año;
    this.duracion = duracion;
    this.genero = genero;
    this.imagen = imagen;
}

// Creación de las canciones con los datos proporcionados
var canciones = [
    new Cancion("Tu no eres para mi", "Fanny Lu", 2008, "2:48", "Pop", "tuno.jpg"),
    new Cancion("Mientras me curo del corazón", "Karol G", 2023, "2:30", "Regueton", "bonito.jpg"),
    new Cancion("Ausencia", "Hector Lavoe", 1997, "3:10", "Salsa", "ausencia.jpg"),
    new Cancion("Humanos en Marte", "Chayanne", 2018, "2:50", "Pop", "humanos.jpg"),
    new Cancion("Flowers", "Miley Cyrus", 2023, "3:28", "Pop", "flowers.jpg"),
    new Cancion("Mujer Amante", "Rata Blanca", 1990, "4:52", "Rock", "mujeramante.jpg"),
    new Cancion("Bellakeo", "Peso Pluma & Anitta", 2023, "3:18", "Regueton", "mujeramante.jpg"),
    new Cancion("Auto Rojo", "Vilma Palma", 1990, "5:02", "Rock", "mujeramante.jpg")
];

document.addEventListener("DOMContentLoaded", function() {
    var buscarBtn = document.getElementById("buscar");

    buscarBtn.addEventListener("click", function() {
        var busquedaCancion = document.getElementById("busqueda-cancion").value.toLowerCase();
        var busquedaArtista = document.getElementById("busqueda-artista").value.toLowerCase();
        var busquedaGenero = document.getElementById("busqueda-genero").value.toLowerCase();

        var resultadosBusqueda = buscarCanciones(busquedaCancion, busquedaArtista, busquedaGenero);

        mostrarResultados(resultadosBusqueda);
    });
});

// Función para buscar canciones que coincidan con los criterios de búsqueda
function buscarCanciones(nombre, artista, genero) {
    return canciones.filter(function(cancion) {
        return cancion.nombre.toLowerCase().includes(nombre) &&
               cancion.artista.toLowerCase().includes(artista) &&
               cancion.genero.toLowerCase().includes(genero);
    });
}

// Función para mostrar los resultados de búsqueda en la página
function mostrarResultados(resultados) {
    var resultadosElement = document.getElementById("resultados-busqueda");
    resultadosElement.innerHTML = ""; // Limpiar resultados anteriores

    resultados.forEach(function(cancion) {
        var listItem = document.createElement("li");
        listItem.textContent = cancion.nombre + " - " + cancion.artista;
        resultadosElement.appendChild(listItem);
    });
}


// Mostrar los datos de cada canción
console.log("Canción:", tuNoEresParaMi.nombre);
console.log("Artista:", tuNoEresParaMi.artista);
console.log("Año:", tuNoEresParaMi.año);
console.log("Duración:", tuNoEresParaMi.duracion);
console.log("Género:", tuNoEresParaMi.genero);
console.log("Imagen:", tuNoEresParaMi.imagen);
console.log("\n");

console.log("Canción:", mientrasMeCuroDelCorazon.nombre);
console.log("Artista:", mientrasMeCuroDelCorazon.artista);
console.log("Año:", mientrasMeCuroDelCorazon.año);
console.log("Duración:", mientrasMeCuroDelCorazon.duracion);
console.log("Género:", mientrasMeCuroDelCorazon.genero);
console.log("Imagen:", mientrasMeCuroDelCorazon.imagen);
console.log("\n");

console.log("Canción:", ausencia.nombre);
console.log("Artista:", ausencia.artista);
console.log("Año:", ausencia.año);
console.log("Duración:", ausencia.duracion);
console.log("Género:", ausencia.genero);
console.log("Imagen:", ausencia.imagen);
console.log("\n");

console.log("Canción:", humanosEnMarte.nombre);
console.log("Artista:", humanosEnMarte.artista);
console.log("Año:", humanosEnMarte.año);
console.log("Duración:", humanosEnMarte.duracion);
console.log("Género:", humanosEnMarte.genero);
console.log("Imagen:", humanosEnMarte.imagen);

console.log("Canción:", flowers.nombre);
console.log("Artista:", flowers.artista);
console.log("Año:", flowers.año);
console.log("Duración:", flowers.duracion);
console.log("Género:", flowers.genero);
console.log("Imagen:", flowers.imagen);

console.log("Canción:", mujeramante.nombre);
console.log("Artista:", mujeramante.artista);
console.log("Año:", mujeramante.año);
console.log("Duración:", mujeramante.duracion);
console.log("Género:", mujeramante.genero);
console.log("Imagen:", mujeramante.imagen);

console.log("Canción:", bellakeo.nombre);
console.log("Artista:", bellakeo.artista);
console.log("Año:", bellakeo.año);
console.log("Duración:", bellakeo.duracion);
console.log("Género:", bellakeo.genero);
console.log("Imagen:", bellakeo.imagen);

console.log("Canción:", autorojo.nombre);
console.log("Artista:", autorojo.artista);
console.log("Año:", autorojo.año);
console.log("Duración:", autorojo.duracion);
console.log("Género:", autorojo.genero);
console.log("Imagen:", autorojo.imagen);

document.addEventListener("DOMContentLoaded", function() {
    var botonesReproducir = document.querySelectorAll('.reproducir-btn'); 
    var botonesPausar = document.querySelectorAll('.pausar-btn');
    var botonesAdelantar = document.querySelectorAll('.adelantar-btn');
    var botonesRetroceder = document.querySelectorAll('.retroceder-btn');
    var botonesMute = document.querySelectorAll('.mute-btn');
    var listaCanciones = document.querySelectorAll('.cancion');
    var cancionActualIndex = 0;

    // Función para reproducir la siguiente canción
    function reproducirSiguienteCancion() {
        listaCanciones[cancionActualIndex].querySelector('audio').pause();
        cancionActualIndex = (cancionActualIndex + 1) % listaCanciones.length; // Obtener el índice de la siguiente canción
        listaCanciones[cancionActualIndex].querySelector('audio').play();
    }

    // Event listeners para cada botón
    botonesReproducir.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var audio = boton.closest('.cancion').querySelector('audio');
            audio.play();
            boton.classList.add('active');
        });
    });
    
    botonesPausar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var audio = boton.closest('.cancion').querySelector('audio');
            audio.pause();
            boton.classList.add('active');
        });
    });
    
    botonesAdelantar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var audio = boton.closest('.cancion').querySelector('audio');
            audio.currentTime += 10;
            boton.classList.add('active');
        });
    });
    
    botonesRetroceder.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var audio = boton.closest('.cancion').querySelector('audio');
            audio.currentTime -= 10;
            boton.classList.add('active');
        });
    });
    
    botonesMute.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var audio = boton.closest('.cancion').querySelector('audio');
            audio.muted = !audio.muted;
            boton.classList.toggle('active', audio.muted);
        });
    });

    // Reiniciar la lista de reproducción al finalizar una canción
    listaCanciones.forEach(function(cancion, index) {
        cancion.querySelector('audio').addEventListener('ended', function() {
            if (index === cancionActualIndex) {
                reproducirSiguienteCancion();
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var playlist = []; // Lista de reproducción

    // Función para renderizar la lista de reproducción
    function renderizarPlaylist() {
        var playlistElement = document.getElementById("playlist");
        playlistElement.innerHTML = ""; // Limpiar lista antes de volver a renderizar

        // Iterar sobre cada canción en la lista de reproducción y crear elementos de lista
        playlist.forEach(function(cancion, index) {
            var listItem = document.createElement("li");
            listItem.textContent = cancion.nombre + " - " + cancion.artista;
            listItem.dataset.index = index; // Almacenar el índice de la canción en el atributo data-index
            playlistElement.appendChild(listItem);
        });
    }

    // Función para agregar una canción a la lista de reproducción
    function agregarCancion(nombre, artista) {
        var cancion = new Cancion(nombre, artista); // Crear instancia de Cancion
        playlist.push(cancion); // Agregar canción a la lista de reproducción
        renderizarPlaylist(); // Renderizar la lista de reproducción actualizada
    }

    // Función para eliminar una canción de la lista de reproducción
    function eliminarCancion(index) {
        playlist.splice(index, 1); // Eliminar canción del array de la lista de reproducción
        renderizarPlaylist(); // Renderizar la lista de reproducción actualizada
    }

    // Event listener para el botón "Agregar Canción"
    document.getElementById("agregar-cancion").addEventListener("click", function() {
        var nombre = document.getElementById("cancion-nombre").value;
        var artista = document.getElementById("cancion-artista").value;
        if (nombre && artista) { // Verificar si se ingresó nombre y artista
            agregarCancion(nombre, artista);
            // Limpiar los campos de entrada después de agregar la canción
            document.getElementById("cancion-nombre").value = "";
            document.getElementById("cancion-artista").value = "";
        } else {
            alert("Por favor ingrese el nombre y el artista de la canción.");
        }
    });

    // Event listener para el botón "Eliminar Canción"
    document.getElementById("eliminar-cancion").addEventListener("click", function() {
        var index = parseInt(prompt("Ingrese el índice de la canción que desea eliminar:"));
        if (!isNaN(index) && index >= 0 && index < playlist.length) {
            eliminarCancion(index);
        } else {
            alert("Ingrese un índice válido.");
        }
    });

    // Llamada inicial para renderizar la lista de reproducción
    renderizarPlaylist();
});

document.addEventListener("DOMContentLoaded", function() {
    // Suponiendo que 'canciones' es tu array de canciones ya definido

    // Función para agregar canciones a las listas de reproducción por género
    function agregarCancionesAListas() {
        canciones.forEach(cancion => {
            const listItem = document.createElement("li");
            listItem.textContent = `${cancion.nombre} - ${cancion.artista}`;
            listItem.classList.add('cancion-item');
            document.querySelector(`#${cancion.genero.toLowerCase()}-playlist .songs-list`).appendChild(listItem);
        });
    }

    agregarCancionesAListas();
});
    // Funcionalidad de los botones
    document.addEventListener('DOMContentLoaded', function() {
        var playlist = document.getElementById('pop-playlist');
        var audio = playlist.querySelector('.audio-player');
        var playButton = playlist.querySelector('.play');
        var pauseButton = playlist.querySelector('.pause');
        var nextButton = playlist.querySelector('.next');
    
        playButton.addEventListener('click', function() {
            audio.play();
        });
    
        pauseButton.addEventListener('click', function() {
            audio.pause();
        });
    
        nextButton.addEventListener('click', function() {
            // Lógica para reproducir la siguiente canción
            var sources = audio.getElementsByTagName('source');
            var currentSource = audio.src;
            for (var i = 0; i < sources.length; i++) {
                if (sources[i].src === currentSource) {
                    var nextIndex = (i + 1) % sources.length;
                    audio.src = sources[nextIndex].src;
                    audio.play();
                    break;
                }
            }
        });
    });