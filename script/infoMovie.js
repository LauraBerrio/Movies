import { peliculas } from '../peliculas/peliculas.js'
// let film = localStorage.getItem('peliculas');


const detalle = document.getElementById('detalle');
const templateCard = document.getElementById('template').content;
const fragment = document.createDocumentFragment();

peliculas.forEach(movie => {
    let ainfo = movie.id;
    
    //let ainfo = peliculas.filter(peli => peli.id === 1)
    if (ainfo === 1) {        

        peliculas.forEach(item => {
            const { name, duracion, pais, director, sinopsis, image } = item;
            console.log(item)
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
        console.log(fragment)
    }

    else if (ainfo === 2) {
        
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
    else if (ainfo === 3) {
        
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
    else if (ainfo === 4) {
        
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
    else if (ainfo === 5) {
        
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
    else if (ainfo === 6) {
        
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
    else {
        
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