import{a as g,S as w,i as q}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";async function h(e,s=1){const d={key:"44394312-8b8108d4f3ae97cbc0f498bf3",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};try{return(await g.get("",{params:d})).data}catch(o){console.log(o)}}function v(e){return`<li class="gallery-item">
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
      </li>`}function y(e){return e.map(v).join(`
`)}function _(e){e.classList.remove("hidden")}function L(e){e.classList.add("hidden")}const T="/goit-js-hw-12/assets/err-40fa32d5.svg",b=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-more");let a=1,p="",u=0,f=new w(".gallery-link",{captionsData:"alt",captionDelay:250});f.on("error.simplelightbox",function(e){console.log(e)});function i(e){q.show({class:"izt-toast-message",message:e,messageSize:"12",messageLineHeight:"24",iconUrl:T,messageColor:"#ffffff",backgroundColor:"#b51b1b",position:"topRight",theme:"dark",timeout:2e3})}function S(){const e=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}async function E(){try{_(c);const e=await h(p,a);if(u=e.totalHits,e.hits.length===0)l.innerHTML="",i("Sorry, there are no images matching your search query. Please try again!");else{const s=y(e.hits);l.innerHTML=s,f.refresh(),e.hits.length<u?n.classList.remove("hidden"):(n.classList.add("hidden"),i("We're sorry, but you've reached the end of search results."))}}catch(e){console.log("Error",e),i("There was an error loading images. Try again later!")}finally{L(c),b.reset()}}b.addEventListener("submit",e=>{e.preventDefault(),p=e.target.elements.query.value.trim(),a=1,p&&(n.classList.add("hidden"),E())});n.addEventListener("click",async()=>{a+=1;try{_(c);const e=await h(p,a),s=y(e.hits);l.insertAdjacentHTML("beforeend",s),f.refresh(),S(),a*15>=u&&(n.classList.add("hidden"),i("We're sorry, but you've reached the end of search results."))}catch(e){console.log("Error",e),i("There was an error loading images. Try again later!")}finally{L(c)}});
//# sourceMappingURL=commonHelpers.js.map
