(function(e){if(e.search[1]==="/"){var t=e.search.slice(1).split("&").map(function(n){return n.replace(/~and~/g,"&")}).join("?");window.history.replaceState(null,null,e.pathname.slice(0,-1)+t+e.hash)}})(window.location);function a(){const e=document.querySelector(".menu-toggle"),t=document.querySelector(".nav-links");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("active");const n=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",(!n).toString())})}a();document.addEventListener("astro:after-swap",a);
