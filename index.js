import{a as g,S as y,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="55026716-4dbe0fcfc8dcb0cc6e29137c8",L="https://pixabay.com/api/";let c=1;const b=document.querySelector(".btn-footer");b.addEventListener("click",async()=>{c+=1;try{const r=await u(query,c);renderImages(r.hits)}catch(r){console.error(r)}});async function u(r,o){try{return(await g.get(L,{params:{key:h,lang:"ru",q:r,image_type:"photo",orientation:"horizontal",page:o}})).data}catch(n){throw console.error("Error fetching images:",n),n}}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),w=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const o=r.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:s,comments:p,downloads:m})=>`
<li class="gallery-item">
<a href="${i}">
<img src="${n}" alt="${e}" />

<div class="info">
<p>Likes ${t}</p>
<p>Views ${s}</p>
<p>Comments ${p}</p>
<p>Downloads ${m}</p>
</div>

</a>
</li>`).join("");d.insertAdjacentHTML("beforeend",o),w.refresh()}function S(){d.innerHTML=""}function q(){f.classList.add("visible")}function $(){f.classList.remove("visible")}const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.search.value.trim();o&&(S(),q(),u(o).then(n=>{if(n.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(n.hits)}).catch(()=>{a.error({message:"Something went wrong",position:"topRight"})}).finally(()=>{$()}),l.reset())});
//# sourceMappingURL=index.js.map
