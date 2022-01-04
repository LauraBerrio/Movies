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
        templateCard.querySelector('img').setAttribute('alt', name);
        templateCard.querySelector('a').textContent = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
        //modal(id);


    })
    movie.appendChild(fragment);

}
function modal(id) {
    let aifon = id;

}







