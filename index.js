import{a as p,i as a}from"./assets/vendor-9nDNoJKP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const y="46105341-e9731a626d926c92deaafdc0d",g="https://pixabay.com/api/";async function h(e,o=1){try{return(await p.get(g,{params:{key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}catch{throw new Error("Error fetching images")}}function b(e){const o=document.querySelector(".gallery"),n=e.map(s=>`
      <div class="container">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="subtitle">
            <b>Likes:</b> ${s.likes}
          </p>
          <p class="subtitle">
            <b>Views:</b> ${s.views}
          </p>
          <p class="subtitle">
            <b>Comments:</b> ${s.comments}
          </p>
          <p class="subtitle">
            <b>Downloads:</b> ${s.downloads}
          </p>
        </div>
      </div>
    `).join("");o.insertAdjacentHTML("beforeend",n)}function L(){const e=document.querySelector(".gallery");e.innerHTML=""}const v=document.getElementById("search-form"),f=document.querySelector(".loader"),d=document.querySelector(".load-more");let i=1,l="";v.addEventListener("submit",w);d.addEventListener("click",E);function w(e){if(e.preventDefault(),l=e.target.elements.searchQuery.value.trim(),!l){a.warning({title:"Warning",message:"Please enter a search query"});return}L(),i=1,d.classList.add("hidden"),m()}function m(){q(),h(l,i).then(e=>{if(u(),e.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(e.hits),a.success({title:"Success",message:`Found ${e.totalHits} images`}),i===1&&d.classList.remove("hidden")}).catch(e=>{u(),a.error({title:"Error",message:e.message})})}function E(){i+=1,m()}function q(){f.style.display="block"}function u(){f.style.display="none"}
//# sourceMappingURL=index.js.map
