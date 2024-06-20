import { getImages } from "./js/pixabay-api";
import { hideLoader, imageTemplate, imagesTemplate, showLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iconClose from './img/err.svg';

const formEl = document.querySelector('.search-form');
const ulEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

    let simpleGallery = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
        captionDelay: 250,
    });
    simpleGallery.on('error.simplelightbox', function (e) {
    console.log(e); 
});

formEl.addEventListener('submit', e => { 
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
      
    if (!query) {
    return;
    }
    
    showLoader(loader);

    getImages(query)
        .then(data => {
            if (data.hits.length === 0) {
                ulEl.innerHTML = '';

            iziToast.show({
            class: 'izt-toast-message',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageSize: '12',
            messageLineHeight: '24',
            iconUrl: iconClose,
            messageColor: '#ffffff',
            backgroundColor: '#b51b1b',
            position: 'topRight',
            theme: 'dark',
            timeout: 2000
          });
        }
            else {
            const markup = imagesTemplate(data.hits);
            ulEl.innerHTML = markup;
            simpleGallery.refresh();
            /* Обновляем галерею, вызов refresh() гарантирует,
            что все элементы будут включены в галерею */
                }     
            })
            .catch(err => {
                console.log("Error", err);
                iziToast.show({
                class: 'izt-toast-message',
                message: 'There was an error loading images. Try again later!',
                messageSize: '12',
                messageLineHeight: '24',
                iconUrl: iconClose,
                messageColor: '#ffffff',
                backgroundColor: '#b51b1b',
                position: 'topRight',
                theme: 'dark',
                timeout: 2000
            });
            })
        .finally(() => {
            hideLoader(loader);
                formEl.reset();
             });
});
