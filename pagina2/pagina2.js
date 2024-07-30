
const container = document.getElementById('container');

const title = document.createElement('h1');
title.textContent = 'JUAN D';
container.appendChild(title);

const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

const image1 = document.createElement('img');
image1.src = 'img/imagen1.png';
image1.alt = 'Imagen 1';
image1.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/'});
imageContainer.appendChild(image1);

const image2 = document.createElement('img');
image2.src = 'img/imagen2.png';
image2.addEventListener('click', () => {
    window.location.href = 'https://www3.animeflv.net/'});
image2.alt = 'Imagen 2';
imageContainer.appendChild(image2);

container.appendChild(imageContainer);

const button = document.createElement('button');
button.addEventListener('click', () => {
    window.location.href = 'https://www3.animeflv.net/'});
button.textContent = 'clic aquí';

container.appendChild(button);
