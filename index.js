import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="46105341-e9731a626d926c92deaafdc0d",g="https://pixabay.com/api/";function h(t,o=1,n=12){const s=`${g}?key=${m}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()})}function p(t){const o=document.querySelector(".gallery"),n=t.map(s=>y(s)).join("");o.innerHTML=n,b()}function y({webformatURL:t,largeImageURL:o,tags:n,likes:s,views:e,comments:r,downloads:i}){return`
  <div class="container">
    <a href="${o}" class="gallery-item">
      <img src="${t}" alt="${n}" loading="lazy" />
      <div class="info">
        <p class="subtitle"><b>Likes</b> ${s}</p>
        <p class="subtitle"><b>Views</b> ${e}</p>
        <p class="subtitle"><b>Comments</b> ${r}</p>
        <p class="subtitle"><b>Downloads</b> ${i}</p>
      </div>
    </a>
    </div>
  `}function b(){new f(".gallery a").refresh()}function L(){const t=document.querySelector(".gallery");t.innerHTML=""}const $=document.getElementById("search-form"),u=document.querySelector(".loader");let d=1,c="";$.addEventListener("submit",S);function S(t){if(t.preventDefault(),c=t.target.elements.searchQuery.value.trim(),!c){a.warning({title:"Warning",message:"Please enter a search query"});return}L(),d=1,q()}function q(){v(),h(c,d).then(t=>{if(l(),t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t.hits),a.success({title:"Success",message:`Found ${t.totalHits} images`})}).catch(t=>{l(),a.error({title:"Error",message:t.message})})}function v(){u.style.display="block"}function l(){u.style.display="none"}
//# sourceMappingURL=index.js.map
