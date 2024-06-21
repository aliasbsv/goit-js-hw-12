//Functions for displaying interface elements.
export  function imageTemplate(el) {
  return `<li class="gallery-item">
        <a class="gallery-link" href="${el.largeImageURL}">
          <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
        </a>

        <ul class="property">
          <li class="property__item">
            <p class="property__name">Likes</p>
            <p class="item-prop__quantity">${el.likes}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Views</p>
            <p class="item-prop__quantity">${el.views}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Comments</p>
            <p class="item-prop__quantity">${el.comments}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Downloads</p>
            <p class="item-prop__quantity">${el.downloads}</p>
          </li>
        </ul>
      </li>`;
}

export function imagesTemplate(arr) { 
    return arr.map(imageTemplate).join('\n');
}


export function showLoader(loader) {
  loader.classList.remove('hidden');
}
 

export function hideLoader(loader) {
  loader.classList.add('hidden');
 }