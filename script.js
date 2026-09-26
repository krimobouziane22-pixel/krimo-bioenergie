document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.nav-toggle'); const menu=document.querySelector('.menu');
 if(btn&&menu) btn.addEventListener('click',()=>menu.classList.toggle('open'));
 document.querySelectorAll('[data-mail]').forEach(form=>{
   form.addEventListener('submit',e=>{
     e.preventDefault();
     const data=new FormData(form);
     const subject=encodeURIComponent('Demande via le site Krimo Bioénergie');
     const body=encodeURIComponent(`Nom : ${data.get('nom')||''}\nEmail : ${data.get('email')||''}\n\n${data.get('message')||''}`);
     const target=(window.KRIMO_CONTACT&&window.KRIMO_CONTACT.email)||(window.KRIMO_GLOBAL&&window.KRIMO_GLOBAL.email)||'contact@krimo-bioenergie.com';
     window.location.href=`mailto:${target}?subject=${subject}&body=${body}`;
   });
 });
});
