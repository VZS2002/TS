(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{var e;null===(e=document.getElementById("reg"))||void 0===e||e.addEventListener("click",(e=>{let t=document.getElementById("felhasznalonev").value;t.length>30||t.length<6?document.getElementById("hibaf").textContent="A felhasználónév 6 és 30 karakter közötti hosszúságú lehet":document.getElementById("hibaf").textContent=" ",(t.includes("&")||t.includes("=")||t.includes("&")||t.includes("_")||t.includes("'")||t.includes("-")||t.includes("+")||t.includes(","))&&(document.getElementById("hibaf").textContent="A felhasználónév nem engedélyezett karaktert tartalmaz.")}))}))})();