import{a as b,S as v,i as c}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const w="55026716-4dbe0fcfc8dcb0cc6e29137c8",S="https://pixabay.com/api/";async function p(r,o=1){try{return(await b.get(S,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",page:o,lang:"ru",per_page:12}})).data}catch(i){throw console.error("Error fetching images:",i),i}}const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){const o=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:h,downloads:L})=>`
<li class="gallery-item">
  <a href="${a}">
    <img src="${i}" alt="${e}" />
    <div class="info">
      <p>Likes ${t}</p>
      <p>Views ${s}</p>
      <p>Comments ${h}</p>
      <p>Downloads ${L}</p>
    </div>
  </a>
</li>`).join("");f.insertAdjacentHTML("beforeend",o),q.refresh()}function $(){f.innerHTML=""}function g(){d.classList.add("visible")}function y(){d.classList.remove("visible")}const u=document.querySelector(".form"),E=document.querySelector(".btn-footer");let l=1,n="";u.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements.search.value.trim(),!!n){l=1,$(),g();try{const o=await p(n,l);if(o.hits.length===0){c.warning({message:"Немає результатів для цього запиту",position:"topRight"});return}m(o.hits)}catch{c.error({message:"Помилка запиту",position:"topRight"})}finally{y()}u.reset()}});E.addEventListener("click",async()=>{if(n){l+=1,g();try{const r=await p(n,l);if(r.hits.length===0){c.info({message:"Більше картинок немає",position:"topRight"});return}m(r.hits)}catch{c.error({message:"Помилка запиту",position:"topRight"})}finally{y()}}});
//# sourceMappingURL=index.js.map
