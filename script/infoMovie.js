import { peliculas } from "../peliculas/peliculas.js";



const detalle = document.getElementById('detalle');
const templateCard = document.getElementById('template-card');
const fragment = document.createDocumentFragment();


switch (ainfo) {
    case 1:

        peliculas.forEach(item => {
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
        break;
}
switch (ainfo) {
    case 2:

        peliculas.forEach(item => {
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
        break;
}
switch (ainfo) {
    case 3:

        peliculas.forEach(item => {
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
        break;
}
switch (ainfo) {
    case 4:

        peliculas.forEach(item => {
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
        break;
}
switch (ainfo) {
    case 5:

        peliculas.forEach(item => {
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
        break;
}
switch (ainfo) {
    case 6:

        peliculas.forEach(item => {
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
        break;
}
switch (ainfo) {
    case 7:

        peliculas.forEach(item => {
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
        break;
}




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