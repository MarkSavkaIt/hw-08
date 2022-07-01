import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const listElements = galleryItems
  .map(item => {
    let str = `<div class="gallery__item"> <a class="gallery__link" href="${item.original}" ><img src="${item.preview}" alt="${item.description}" data-source="${item.original}" /></a> </div>`;

    return str;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', listElements);

let ligthBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'data-source',
  captionDelay: 250,
});
ligthBox.on('show.simplelightbox');
