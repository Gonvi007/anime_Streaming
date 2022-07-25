let resuladosBusqueda=[];

fetch("https://ghibliapi.herokuapp.com/films",{
})
.then((response)=>response.json())
.then((data)=>{
    resuladosBusqueda = data;
    dibujar(resuladosBusqueda);
})

const buscar = (evt) =>{
    let nombre = evt.currentTarget.value;

    let filtrados = resuladosBusqueda.filter(function(resultado){
        return resultado.title.toLowerCase().includes(nombre.toLowerCase());
    });

    dibujar(filtrados);

}

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
const dibujar = (peliculas) => {
    document.querySelector("#resultadoPelicula").innerHTML="";
    
    peliculas.forEach(pelicula => {
        /* Lectura de cada personaje */
        let div = document.createElement("div");
        div.classList.add("column", "is-3");

        div.innerHTML += `  <div class="card" data-id="${pelicula.id}">
                                <div class="card-image">
                                    <figure class="image is-3by5">
                                    <img src="${pelicula.image}" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p><b>${pelicula.title}</b></p>
                                    <p><b>${pelicula.original_title}</b></p>
    
                                    <p>${pelicula.description}</p>
                                </div>

                            </div>`;

    document.querySelector("#resultadoPelicula").append(div);
    });

}

document.querySelector("#busqueda").addEventListener("keyup", buscar);