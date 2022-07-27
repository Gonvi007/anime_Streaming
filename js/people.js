
let buscar = document.querySelector('#personajes');
buscar = ("click" ,(evt) =>{
    let nombre = evt.currentTarget.value;

    let filtrados = resuladosBusqueda.filter(function(resultado){
        return resultado.title.toLowerCase().includes(nombre.toLowerCase());
    });

    dibujar(filtrados);

});

/* <div class="column is-3">
    <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
              <img src="https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Nombre</b></p>
            <p>ID</p>
            <p>Descripción</p>
        </div>

    </div>
</div> */

// function dibujar () {}
const dibujar = (personajes) => {
    document.querySelector("#resultadoPelicula").innerHTML="";
    
    personajes.forEach(personaje => {
        /* Lectura de cada personaje */
        let div = document.createElement("div");
        div.classList.add("column", "is-2");

        div.innerHTML += `  <div class="card" data-id="${personaje.id}">
                                <div class="card-content">
                                    <p><b>${personaje.name}</b></p>
                                    <p><b>${personaje.age}</b></p>
                                    <p><b>${personaje.eye_color}</b></p>
                                    <p><b>${personaje.hair_color}</b></p>    
                                </div>

                            </div>`;

    document.querySelector("#resultadoPelicula").append(div);
    });

}

document.querySelector("#busqueda").addEventListener("keyup", buscar);
document.querySelector("#director").addEventListener("click", director);




// let ordenZA = document.querySelector('#ordenAZ');

// ordenZA.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     document.querySelector("#container").value = "";
//     resuladosBusqueda.reverse();

//     dibujar(resuladosBusqueda);
// });