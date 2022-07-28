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

};

const directorPeliculas = () => {
    let directordePeliculas = resuladosBusqueda.filter((directorPelicula) => {
        return directorPelicula.director == "Hayao Miyazaki";
    });
    dibujar(directordePeliculas);
}

const productorPeliculas = () => {
    let productordePeliculas = resuladosBusqueda.filter((productorPelicula) => {
        return productorPelicula.producer == "Toshio Suzuki";
    });
    dibujar(productordePeliculas);
}

const todito = () => {
    dibujar(resuladosBusqueda);
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
</div> 





    <div class="contenedor">
        <figure>
            <img src="./img/wallhaven-8xdk62.jpg" alt="imagen de Totoro">
            <div class="capa">
                <h3>Slee Dw</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minus labore explicabo! Optio!</p>
            </div>
        </figure>
    </div>



*/

// function dibujar () {}
const dibujar = (peliculas) => {
    document.querySelector("#resultadoPelicula").innerHTML="";
    
    peliculas.forEach(pelicula => {
        /* Lectura de cada personaje */
        let div = document.createElement("div");
        div.classList.add("column", "is-2");

        div.innerHTML += `  <div class="card" data-id="${pelicula.id}">
                                <div class="card-image">
                                    <figure class="image figureHover is-3by5">
                                    <img onmouseout="" src="${pelicula.image}" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="capa">
                                    <div class="card-content">
                                        <p><b>${pelicula.title}</b></p>
                                        <p><b>${pelicula.original_title}</b></p>

                                        <p>${pelicula.description}</p>
                                        
                                    </div>
                                </div>

                            </div>`;

    document.querySelector("#resultadoPelicula").append(div);
    });

}

document.querySelector("#busqueda").addEventListener("keyup", buscar);
document.querySelector("#toditos").addEventListener("click", todito);
document.querySelector("#director").addEventListener("click", directorPeliculas);
document.querySelector("#productores").addEventListener("click", productorPeliculas);



// let ordenZA = document.querySelector('#ordenAZ');

// ordenZA.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     document.querySelector("#container").value = "";
//     resuladosBusqueda.reverse();

//     dibujar(resuladosBusqueda);
// });

// let descripcionBtn = document.getElementById('descripcionBtn');
// let descripcionTexto = document.getElementById('descripcionTexto');

// descripcionBtn.addEventListener('click', toggleText);

// function toggleText() {
//     descripcionTexto.classList.toggle('show');
// }