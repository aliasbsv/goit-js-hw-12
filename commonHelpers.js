import{S as f,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function g(e){const s="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44394312-8b8108d4f3ae97cbc0f498bf3",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${o}?${i}`;return fetch(t).then(r=>r.json())}function d(e){return`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>

        <ul class="property">
          <li class="property__item">
            <p class="property__name">Likes</p>
            <p class="item-prop__quantity">${e.likes}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Views</p>
            <p class="item-prop__quantity">${e.views}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Comments</p>
            <p class="item-prop__quantity">${e.comments}</p>
          </li>
          <li class="property__item">
            <p class="property__name">Downloads</p>
            <p class="item-prop__quantity">${e.downloads}</p>
          </li>
        </ul>
      </li>`}function y(e){return e.map(d).join(`
`)}function h(e){e.classList.remove("hidden")}function _(e){e.classList.add("hidden")}const l="/goit-js-hw-12/assets/err-40fa32d5.svg",c=document.querySelector(".search-form"),p=document.querySelector(".gallery"),m=document.querySelector(".loader");let u=new f(".gallery-link",{captionsData:"alt",captionDelay:250});u.on("error.simplelightbox",function(e){console.log(e)});c.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.query.value.trim();s&&(h(m),g(s).then(o=>{if(o.hits.length===0)p.innerHTML="",n.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"12",messageLineHeight:"24",iconUrl:l,messageColor:"#ffffff",backgroundColor:"#b51b1b",position:"topRight",theme:"dark",timeout:2e3});else{const i=y(o.hits);p.innerHTML=i,u.refresh()}}).catch(o=>{console.log("Error",o),n.show({class:"izt-toast-message",message:"There was an error loading images. Try again later!",messageSize:"12",messageLineHeight:"24",iconUrl:l,messageColor:"#ffffff",backgroundColor:"#b51b1b",position:"topRight",theme:"dark",timeout:2e3})}).finally(()=>{_(m),c.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
