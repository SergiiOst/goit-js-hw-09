import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form");r.addEventListener("input",n);r.addEventListener("submit",l);o();const a={email:"",message:""};function n(e){const t=e.target.name;a[t]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))}function o(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:t,message:m}=r.elements;t.value=e.email,m.value=e.message}function s(){const e=a.email.trim(),t=a.message.trim();return e!==""&&t!==""}function l(e){if(e.preventDefault(),!s()){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),r.reset()}
//# sourceMappingURL=commonHelpers2.js.map
