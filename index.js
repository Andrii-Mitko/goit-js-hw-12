import{a as d,S as m,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="55026716-4dbe0fcfc8dcb0cc6e29137c8",y="https://pixabay.com/api/";async function h(i,r){try{return(await d.get(y,{params:{key:g,lang:"ru",q:i,image_type:"photo",orientation:"horizontal",page:r}})).data}catch(o){throw console.error("Error fetching images:",o),o}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`
<li class="gallery-item">
<a href="${n}">
<img src="${o}" alt="${e}" />

<div class="info">
<p>Likes ${t}</p>
<p>Views ${s}</p>
<p>Comments ${f}</p>
<p>Downloads ${p}</p>
</div>

</a>
</li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){l.innerHTML=""}function v(){u.classList.add("visible")}function S(){u.classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.search.value.trim();r&&(w(),v(),h(r).then(o=>{if(o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{a.error({message:"Something went wrong",position:"topRight"})}).finally(()=>{S()}),c.reset())});
//# sourceMappingURL=index.js.map
