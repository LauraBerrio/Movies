import { peliculas } from '../peliculas/peliculas.js'
const movie = document.getElementById('movies');

const fragment = document.createDocumentFragment();
crearTitulo();
document.addEventListener('DOMContentLoaded', () => {
    cargarMovie();

});

function crearTitulo() {
    const film = document.getElementById('movies');

    const titulo = document.createElement('h3');
    titulo.textContent = 'ESTRENOS';
    film.appendChild(titulo);
}

function cargarMovie() {
    const templateCard = document.getElementById('template-card').content;
    peliculas.forEach(pelicula => {
        const { id, name, image } = pelicula;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);        
        templateCard.querySelector('img').setAttribute('id', id);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
        

    })
    movie.appendChild(fragment);

}
movie.addEventListener('click', (e) => {
    const detalle = document.getElementById('detalle');
    detalle.innerHTML='';
    
    detalle.style.display = 'inline-block'
       
    
    if (e.target.classList.contains('mostrar')) {

        let ainfo = e.target.id;
        
        peliculas.forEach(item => {
            const { id, name, duracion, pais, director, sinopsis, image } = item;
            if (ainfo == id) {
                console.log(ainfo)
                detalle.innerHTML += `                
                    <div class="px-3 mt-2 text-center bg">
                        <img src="${image}" alt="" class="img w-50 rounded mx-auto d-block">
                        <h1>${name}</h1>
                        <p>${sinopsis}</p>
                        <h6>${director}</h6>
                        <h6 id="pais">${pais}</h6>
                        <h6 id="duracion">${duracion}}</h6>
                    </div>

                </div>                    
            `
            }
           
        })
    }
})










