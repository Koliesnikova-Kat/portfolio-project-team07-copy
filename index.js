import{A as f,S as w,N as v,K as y,M as h,a as S,i as b,v as g}from"./assets/vendor-DPig85Bb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const k=document.querySelector(".navigation-menu-btn"),a=document.querySelector(".menu-list"),q=document.querySelector(".burger-btn"),l=document.querySelector(".backdrop-menu"),C=document.querySelector(".close-btn"),M=document.querySelector(".backdrop-order-btn-link"),N=document.querySelector(".backdrop-menu-list");k.addEventListener("click",L);q.addEventListener("click",T);C.addEventListener("click",d);a.addEventListener("click",L);M.addEventListener("click",d);N.addEventListener("click",d);l.addEventListener("click",d);document.body.addEventListener("click",o=>{!a.classList.contains("visually-hidden")&&!o.target.classList.contains("navigation-menu-btn")&&L()});const O=new KeyframeEffect(a,[{opacity:"0"},{opacity:"1"}],{duration:1e3}),A=new KeyframeEffect(a,[{opacity:"1"},{opacity:"0"}],{duration:500}),B=new Animation(O,document.timeline),x=new Animation(A,document.timeline);document.addEventListener("keydown",o=>{o.key==="Escape"&&!a.classList.contains("is-open")&&d()});function L(){if(a.classList.contains("visually-hidden")){B.play(),a.classList.remove("visually-hidden");return}x.play(),setTimeout(()=>{a.classList.add("visually-hidden")},500)}function T(){l.classList.add("is-open"),l.classList.remove("is-closed"),document.body.style.overflow="hidden"}function d(){l.classList.remove("is-open"),l.classList.add("is-closed"),document.body.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{new f(".about-me-acc",{duration:500,showMultiple:!0,collapse:!0,elementClass:"about-me-acc-el",triggerClass:"about-me-acc-el-trigger",panelClass:"about-me-acc-el-descr-frame",openOnInit:[0]}),document.querySelectorAll(".about-me-acc-el-trigger").forEach(o=>{o.addEventListener("click",e=>{const n=o.closest(".about-me-acc-el"),s=n.querySelector(".arr-down"),t=n.querySelector(".arr-up");s&&t&&(s.classList.contains("is-hidden")?(s.classList.remove("is-hidden"),t.classList.add("is-hidden")):(s.classList.add("is-hidden"),t.classList.remove("is-hidden")))})}),new w(".about-me-swiper",{modules:[v,y,h],direction:"horizontal",loop:!0,navigation:{nextEl:".about-me-swiper-btn-next"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{0:{slidesPerView:2,width:260},768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}})});new w(".project-swiper-container",{modules:[v,y],navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"},keyboard:{enabled:!0}});new f(".faq-accordion-container-1",{showMultiple:!0,collapse:!0});new f(".faq-accordion-container-2",{showMultiple:!0,collapse:!0});const I=document.querySelectorAll(".coversPicturesContainer"),P=document.querySelector(".coversMainContainer");let m=!1;window.addEventListener("scroll",()=>{m||(window.requestAnimationFrame(()=>{V(),m=!1}),m=!0)});function V(){j(K(P))}function j(o){I.forEach(e=>{e.classList.toggle("slideOn",o)})}function K(o){const e=o.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)&&e.left<(window.innerWidth||document.documentElement.clientWidth)}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("reviews-list"),e=document.getElementById("error-message"),n=s=>{b.error({title:"Error",message:s||"Not found",position:"topRight"})};S.get("https://portfolio-js.b.goit.study/api/reviews").then(s=>{const t=s.data;if(t.length===0)throw new Error("Not found");const i=t.map(r=>`
        <li class="swiper-slide slide-reviews">
          <div class="review">
            <img src="${r.avatar_url}" alt="Avatar of ${r.author}" class="review-avatar"/>
            <h3 class="author-name">${r.author}</h3>
            <p class="author-review">${r.review}</p>
          </div>
        </li>
      `).join("");o.innerHTML=i,new w(".reviews-container",{modules:[v,y,h],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,on:{reachBeginning:function(){document.querySelector(".custom-prev").classList.add("swiper-button-disabled")},reachEnd:function(){document.querySelector(".custom-next").classList.add("swiper-button-disabled")},fromEdge:function(){document.querySelector(".custom-prev").classList.remove("swiper-button-disabled"),document.querySelector(".custom-next").classList.remove("swiper-button-disabled")}}})}).catch(s=>{n(s.message),e&&e.classList.remove("hidden"),o.innerHTML=""})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".wt-form"),e=document.querySelector(".wt-input-js"),n=document.querySelector(".message-input"),s=document.querySelector(".modal"),t=document.querySelector(".btn-close-modal");if(!o||!e||!n||!s||!t){console.error("One or more required elements are missing.");return}e.addEventListener("input",()=>{const c=e.value,u=g.isEmail(c);c===""?(n.textContent="",n.className="message-input",e.classList.remove("error","success")):u?(n.textContent="Success!",n.className="message-input success",e.classList.add("success"),e.classList.remove("error")):(n.textContent="Invalid email, try again",n.className="message-input error",e.classList.add("error"),e.classList.remove("success"))}),o.addEventListener("submit",async c=>{c.preventDefault();const u=e.value;if(!g.isEmail(u)){n.textContent="Invalid email, try again",n.className="message-input error",e.classList.add("error"),e.classList.remove("success");return}try{if(!(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,comment:o.querySelector('input[type="text"]').value})})).ok)throw new Error("Network response was not ok.");o.reset(),n.textContent="",n.className="message-input",e.classList.remove("error","success"),i()}catch{b.error({title:"Error",message:"Something went wrong. Please try again."})}});function i(){s&&(s.classList.add("active"),document.body.classList.add("no-scroll"))}function r(){s&&(s.classList.remove("active"),document.body.classList.remove("no-scroll"))}t&&t.addEventListener("click",r),s&&s.addEventListener("click",c=>{c.target===s&&r()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&s&&r()})});const p=document.querySelector(".backToTopBtn");window.addEventListener("scroll",()=>{window.scrollY>1800?p.classList.add("show"):p.classList.remove("show")});p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
