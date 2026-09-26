(function(){
  const page = document.body.dataset.page;
  if (!page) return;

  const get=(obj,path)=>path.split('.').reduce((o,k)=>o&&o[k]!==undefined?o[k]:undefined,obj);
  const text=(sel,val)=>{ const el=document.querySelector(sel); if(el && val!==undefined && val!==null) el.textContent=val; };
  const texts=(sel,vals)=>{ document.querySelectorAll(sel).forEach((el,i)=>{ if(vals[i]!==undefined) el.textContent=vals[i]; }); };
  const src=(sel,val)=>{ const el=document.querySelector(sel); if(el && val){ el.src=val; } };
  const bg=(sel,val)=>{ const el=document.querySelector(sel); if(el && val){ el.style.backgroundImage=`url('${val}')`; } };
  const href=(sel,val)=>{ document.querySelectorAll(sel).forEach(el=>{ if(val) el.href=val; }); };

  function applyGlobal(g){
    window.KRIMO_GLOBAL=g||{};
    document.querySelectorAll('.site-header .btn').forEach(el=>{ if(g.booking_label) el.textContent=g.booking_label; if(g.booking_url) el.href=g.booking_url; });
  }

  function applyHome(d){
    text('.hero .eyebrow',d.hero.eyebrow); text('.hero h1',d.hero.title); text('.hero p',d.hero.text); bg('.hero',d.hero.image);
    text('.section.alt .section-title h2',d.doors.title); text('.section.alt .section-title p',d.doors.subtitle);
    const doorCards=document.querySelectorAll('.section.alt .cards-3 .card');
    [['precis',0],['accompagnement',1],['formation',2]].forEach(([k,i])=>{ const c=doorCards[i]; if(c){ c.querySelector('h3').textContent=d.doors[k].title; c.querySelector('p').textContent=d.doors[k].text; }});
    const method=document.querySelector('.split'); if(method){ text('.split .kicker',d.method.kicker); text('.split h2',d.method.title); const ps=method.querySelectorAll('p'); if(ps[0]) ps[0].textContent=d.method.p1; if(ps[1]) ps[1].textContent=d.method.p2; bg('.split-media',d.method.image); }
    const titles=document.querySelectorAll('.section.alt .section-title.left'); if(titles[0]){ const k=titles[0].querySelector('.kicker'); const h=titles[0].querySelector('h2'); if(k)k.textContent=d.approaches.kicker; if(h)h.textContent=d.approaches.title; }
    const cards=document.querySelectorAll('.approach-card');
    ['kinesio','emotion','reboutement','bioenergie'].forEach((k,i)=>{ const c=cards[i], x=d.approaches[k]; if(c&&x){ const im=c.querySelector('img'); if(im&&x.image)im.src=x.image; c.querySelector('h3').textContent=x.title; c.querySelector('p').textContent=x.text; }});
    const qSection=[...document.querySelectorAll('.section')].find(s=>s.querySelector('.quote')); if(qSection){ const h=qSection.querySelector('.section-title h2'); const p=qSection.querySelector('.quote p'); const sm=qSection.querySelector('.quote small'); if(h)h.textContent=d.testimonial.title; if(p)p.textContent=d.testimonial.quote; if(sm)sm.textContent=d.testimonial.author; }
    const cta=document.querySelector('.cta-band'); if(cta){ const h=cta.querySelector('h2'),p=cta.querySelector('p'); if(h)h.textContent=d.cta.title;if(p)p.textContent=d.cta.text; if(d.cta.image)cta.style.backgroundImage=`url('${d.cta.image}')`; }
  }

  function applySeances(d){
    text('.page-hero .eyebrow',d.hero.eyebrow); text('.page-hero h1',d.hero.title); text('.page-hero p',d.hero.text); bg('.page-hero',d.hero.image);
    const rows=document.querySelectorAll('.service-row'); ['kinesiologie','emotion','reboutement','bioenergie'].forEach((k,i)=>{ const r=rows[i],x=d[k]; if(r&&x){ const im=r.querySelector('img'); if(im&&x.image)im.src=x.image; const h=r.querySelector('h3'),p=r.querySelector('p'),pr=r.querySelector('.price'); if(h)h.textContent=x.title;if(p)p.textContent=x.text;if(pr)pr.textContent=x.price; }});
    text('.info-box h3',d.info.title); text('.info-box p',d.info.text);
    const cta=document.querySelector('.cta-band'); if(cta){ const h=cta.querySelector('h2'),p=cta.querySelector('p');if(h)h.textContent=d.cta.title;if(p)p.textContent=d.cta.text;if(d.cta.image)cta.style.backgroundImage=`url('${d.cta.image}')`; }
  }

  function applyAccompagnements(d){
    text('.page-hero .eyebrow',d.hero.eyebrow); text('.page-hero h1',d.hero.title); text('.page-hero p',d.hero.text); bg('.page-hero',d.hero.image);
    const top=document.querySelector('.section.compact .section-title'); if(top){ const h=top.querySelector('h2'),p=top.querySelector('p');if(h)h.textContent=d.intro.title;if(p)p.textContent=d.intro.text; }
    const steps=document.querySelectorAll('.step'); ['one','two','three','four'].forEach((k,i)=>{ const s=steps[i]; if(s){ const h=s.querySelector('h3'),p=s.querySelector('p'); if(h)h.textContent=d.steps[k+'_title'];if(p)p.textContent=d.steps[k+'_text']; }});
    const alt=document.querySelector('.section.alt'); if(alt){ const k=alt.querySelector('.section-title .kicker'),h=alt.querySelector('.section-title h2'),p=alt.querySelector('.section-title p');if(k)k.textContent=d.plans_intro.kicker;if(h)h.textContent=d.plans_intro.title;if(p)p.textContent=d.plans_intro.text; }
    const plans=document.querySelectorAll('.plan'); ['plan1','plan2','plan3'].forEach((k,i)=>{const p=plans[i],x=d[k];if(p&&x){const kick=p.querySelector('.kicker'),h=p.querySelector('h3'),s=p.querySelector('.sessions'),pr=p.querySelector('.price'),lis=p.querySelectorAll('li');if(kick)kick.textContent=x.kicker;if(h)h.textContent=x.title;if(s)s.textContent=x.sessions;if(pr)pr.textContent=x.price;[x.item1,x.item2,x.item3].forEach((v,j)=>{if(lis[j])lis[j].textContent=v;});}});
    const custom=document.querySelector('.split.reverse'); if(custom){ const kick=custom.querySelector('.kicker'),h=custom.querySelector('h2'),ps=custom.querySelectorAll('p'),m=custom.querySelector('.split-media');if(kick)kick.textContent=d.custom.kicker;if(h)h.textContent=d.custom.title;if(ps[0])ps[0].textContent=d.custom.p1;if(ps[1])ps[1].textContent=d.custom.p2;if(m&&d.custom.image)m.style.backgroundImage=`url('${d.custom.image}')`; }
    const sage=document.querySelector('.section.sage'); if(sage){ const h=sage.querySelector('.section-title h2');if(h)h.textContent=d.practical.title;const cards=sage.querySelectorAll('.card');[['one',0],['two',1],['three',2]].forEach(([k,i])=>{const c=cards[i];if(c){const hh=c.querySelector('h3'),pp=c.querySelector('p');if(hh)hh.textContent=d.practical[k+'_title'];if(pp)pp.textContent=d.practical[k+'_text'];}}); }
    const cta=document.querySelector('.cta-band');if(cta){const h=cta.querySelector('h2'),p=cta.querySelector('p');if(h)h.textContent=d.cta.title;if(p)p.textContent=d.cta.text;if(d.cta.image)cta.style.backgroundImage=`url('${d.cta.image}')`;}
  }

  function applyFormations(d){
    text('.page-hero .eyebrow',d.hero.eyebrow); text('.page-hero h1',d.hero.title); text('.page-hero p',d.hero.text); bg('.page-hero',d.hero.image);
    const intro=document.querySelector('.section.compact .section-title');if(intro){const h=intro.querySelector('h2'),p=intro.querySelector('p');if(h)h.textContent=d.intro.title;if(p)p.textContent=d.intro.text;}
    const feats=document.querySelectorAll('.section.compact .cards-4 .card');['feature1','feature2','feature3','feature4'].forEach((k,i)=>{const c=feats[i],x=d[k];if(c&&x){const h=c.querySelector('h3'),p=c.querySelector('p');if(h)h.textContent=x.title;if(p)p.textContent=x.text;}});
    const sectionTitles=document.querySelectorAll('.section-title.left'); if(sectionTitles[0]){const k=sectionTitles[0].querySelector('.kicker'),h=sectionTitles[0].querySelector('h2');if(k)k.textContent=d.workshops.kicker;if(h)h.textContent=d.workshops.title;} if(sectionTitles[1]){const k=sectionTitles[1].querySelector('.kicker'),h=sectionTitles[1].querySelector('h2');if(k)k.textContent=d.courses.kicker;if(h)h.textContent=d.courses.title;}
    const cards=document.querySelectorAll('.training-card');['training1','training2','training3','training4'].forEach((k,i)=>{const c=cards[i],x=d[k];if(c&&x){const im=c.querySelector('img'),h=c.querySelector('h3'),p=c.querySelector('p'),pr=c.querySelector('.price');if(im&&x.image)im.src=x.image;if(h)h.textContent=x.title;if(p)p.textContent=x.text;if(pr)pr.textContent=x.price;}});
    const cta=document.querySelector('.cta-band');if(cta){const h=cta.querySelector('h2'),p=cta.querySelector('p');if(h)h.textContent=d.cta.title;if(p)p.textContent=d.cta.text;if(d.cta.image)cta.style.backgroundImage=`url('${d.cta.image}')`;}
  }

  function applyApropos(d){
    text('.page-hero .eyebrow',d.hero.eyebrow); text('.page-hero h1',d.hero.title); text('.page-hero p',d.hero.text); bg('.page-hero',d.hero.image);
    const grid=document.querySelector('.about-grid');if(grid){const left=grid.children[0];const ks=left.querySelectorAll('.kicker'),hs=left.querySelectorAll('h2'),ps=left.querySelectorAll('p');if(ks[0])ks[0].textContent=d.story.kicker;if(hs[0])hs[0].textContent=d.story.title;if(ps[0])ps[0].textContent=d.story.p1;if(ps[1])ps[1].textContent=d.story.p2;if(ps[2])ps[2].textContent=d.story.p3;if(ks[1])ks[1].textContent=d.vision.kicker;if(hs[1])hs[1].textContent=d.vision.title;if(ps[3])ps[3].textContent=d.vision.text;const portrait=grid.querySelector('.portrait-placeholder');if(portrait&&d.story.portrait){portrait.style.backgroundImage=`url('${d.story.portrait}')`;portrait.style.backgroundSize='cover';portrait.style.backgroundPosition='center';portrait.classList.add('has-image');}}
    const vals=[...document.querySelectorAll('.section.alt .value b')]; [d.values.one,d.values.two,d.values.three,d.values.four].forEach((v,i)=>{if(vals[i])vals[i].textContent=v;}); text('.section.alt .section-title h2',d.values.title);
    const practical=[...document.querySelectorAll('.section')].find(s=>s.querySelector('.cards-3') && !s.classList.contains('alt'));if(practical){const h=practical.querySelector('.section-title h2');if(h)h.textContent=d.practical.title;const cards=practical.querySelectorAll('.card');[['one',0],['two',1],['three',2]].forEach(([k,i])=>{const c=cards[i];if(c){const hh=c.querySelector('h3'),pp=c.querySelector('p');if(hh)hh.textContent=d.practical[k+'_title'];if(pp)pp.textContent=d.practical[k+'_text'];}});}
  }

  function applyContact(d){
    text('.page-hero .eyebrow',d.hero.eyebrow); text('.page-hero h1',d.hero.title); text('.page-hero p',d.hero.text); bg('.page-hero',d.hero.image);
    const card=document.querySelector('.contact-card');if(card){const h=card.querySelector('h3');if(h)h.textContent=d.info.title;const lines=card.querySelectorAll('.contact-line');
      if(lines[0]) lines[0].innerHTML=`<strong>${d.info.address_label}</strong><br>${d.info.address}<br><span class="notice">${d.info.address_note}</span>`;
      if(lines[1]) lines[1].innerHTML=`<strong>${d.info.phone_label}</strong><br>${d.info.phone||''}${d.info.phone_note?`<span class="notice">${d.info.phone_note}</span>`:''}`;
      if(lines[2]) lines[2].innerHTML=`<strong>${d.info.email_label}</strong><br>${d.info.email}`;
      if(lines[3]) lines[3].innerHTML=`<strong>${d.info.booking_label}</strong><br><span class="notice">${d.info.booking_note}</span>`;
    }
    const st=document.querySelector('.contact-grid .section-title');if(st){const h=st.querySelector('h2'),p=st.querySelector('p');if(h)h.textContent=d.form.title;if(p)p.textContent=d.form.text;}
    const labels=document.querySelectorAll('.form label');if(labels[0])labels[0].textContent=d.form.name_label;if(labels[1])labels[1].textContent=d.form.email_label;if(labels[2])labels[2].textContent=d.form.message_label;const b=document.querySelector('.form button');if(b)b.textContent=d.form.button;
    window.KRIMO_CONTACT=d.info;
  }

  Promise.all([
    fetch('content/global.json',{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({})),
    fetch(`content/${page}.json`,{cache:'no-store'}).then(r=>r.ok?r.json():null).catch(()=>null)
  ]).then(([g,d])=>{
    applyGlobal(g);
    if(!d) return;
    window.KRIMO_CONTENT=d;
    ({home:applyHome,seances:applySeances,accompagnements:applyAccompagnements,formations:applyFormations,apropos:applyApropos,contact:applyContact}[page]||(()=>{}))(d);
  });
})();
