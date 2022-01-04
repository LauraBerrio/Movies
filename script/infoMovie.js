import { peliculas } from '../peliculas/peliculas.js'
// let film = localStorage.getItem('peliculas');


const detalle = document.getElementById('detalle');
const templateCard = document.getElementById('template-card');
const fragment = document.createDocumentFragment();

peliculas.forEach(movie => {
    const { id } = movie;

    if (id === 1) {
        
        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;
            
            templateCard.querySelector('img').setAttribute('src', image);
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;
            
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
    }
    else if(id === 2) {

        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;

            templateCard.querySelector('img').setAttribute('src', image);            
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
        
    }
    else if(id === 3) {

        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;

            templateCard.querySelector('img').setAttribute('src', image);
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
        
    }
    else if(id === 4){

        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;

            templateCard.querySelector('img').setAttribute('src', image);
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
        
    }
    else if(id === 5) {

        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;

            templateCard.querySelector('img').setAttribute('src', image);
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
        
    }
    else if(id === 6) {

        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;

            templateCard.querySelector('img').setAttribute('src', image);
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
        
    }
    else  {
        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;

            templateCard.querySelector('img').setAttribute('src', image);
            templateCard.querySelector('h1').textContent = name;
            templateCard.querySelector('p').textContent = sinopsis;
            templateCard.querySelector('h6').textContent = director;
            templateCard.getElementById('pais').textContent = pais;
            templateCard.getElementById('duracion').textContent = duracion;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        })
        detalle.appendChild(fragment);
       
    }
})




/*detalle.forEach(item => {
    const { id, name, duracion, pais, director, sinopsis, image } = item;

    templateCard.querySelector('img').setAttribute('src', image);
    templateCard.querySelector('img').setAttribute('alt', name);
    templateCard.querySelector('img').dataset.id = id;
    templateCard.querySelector('h1').textContent = name;
    templateCard.querySelector('p').textContent = sinopsis;
    templateCard.querySelector('h6').textContent = director;
    templateCard.getElementById('pais').textContent = pais;
    templateCard.getElementById('duracion').textContent = duracion;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
})
detalle.appendChild(fragment);
} )*/