/* Limebridge Financial & Advisory Services — site script */
(function(){
  /* ---------- Social media ---------- */
  const SOCIAL = [
    {name:'LinkedIn',  url:'https://www.linkedin.com/company/lime-bridge-financial-and-advisory-services-n-v/', d:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'},
    {name:'Facebook',  url:'https://www.facebook.com/profile.php?id=61596467559797', d:'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'},
    {name:'Instagram', url:'https://www.instagram.com/limebridgefas/', d:'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'},
    {name:'WhatsApp',  url:'https://wa.me/5978184241', d:'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'}
  ];

  /* ---------- Photos ---------- */
  const HERO = [
    {src:'img/hero-a.jpg'},
    {src:'img/hero-b.jpg'},
    {src:'img/hero-c.jpg'},
    {src:'img/hero-d.jpg'},
    {src:'img/hero-e.jpg'},
    {src:'img/hero-f.jpg', pos:'50% 78%'}
  ];
  const POOLS = {
    tall:  ['img/detail-sculpture.jpg','img/detail-chandelier.jpg','img/waiting-area.jpg'],
    wideA: ['img/detail-paramaribo-art.jpg','img/detail-armchairs.jpg','img/detail-basket.jpg','img/detail-carved-bench.jpg'],
    wideB: ['img/detail-meeting-chairs.jpg','img/detail-driftwood.jpg','img/detail-vases.jpg','img/detail-plant.jpg','img/detail-cabinet.jpg']
  };
  const ALT = {nl:'Interieur van het Limebridge-kantoor', en:'Interior of the Limebridge office'};

  /* ---------- Pillars ---------- */
  const SQ = {
    1:[[0,24,8,1],[8,16,8,2],[16,8,8,3],[24,0,8,4]],
    2:[[0,0,14,1],[18,0,14,4],[0,18,14,2],[18,18,14,3]],
    3:[[6,6,20,4],[0,0,6,1],[26,26,6,1],[26,0,6,3]],
    4:[[0,0,8,1],[10,10,10,2],[22,22,10,3]],
    5:[[0,12,12,1],[20,12,12,2],[12,0,8,3],[12,24,8,4]],
    6:[[8,0,16,4],[0,18,12,1],[20,18,12,2]],
    7:[[0,0,6,1],[10,0,6,3],[20,10,6,2],[0,20,6,4],[26,26,6,1],[13,19,6,3],[26,0,6,4]],
    8:[[0,8,24,2],[26,0,6,3],[26,26,6,1]],
    9:[[0,0,12,2],[14,2,8,4],[2,14,8,3],[12,12,14,1],[27,27,5,3]]
  };
  const PILLARS = [
    {id:1, nl:'Corporate Finance & Bedrijfsfinanciering', en:'Corporate Finance & Business Financing',
      inl:'Kapitaal aantrekken en structureren voor groei.', ien:'Raising and structuring capital for growth.',
      s:[['Financieringsaanvragen en kredietdossiers','Financing applications and credit files'],['Bankpresentaties en investeerderspitches','Bank presentations and investor pitches'],['Bedrijfswaarderingen','Business valuations'],['Financiële modellen en kasstroomprognoses','Financial models and cash-flow forecasts'],['Herfinanciering en kapitaalstructuur','Refinancing and capital structure']]},
    {id:2, nl:'Accountancy, Finance & Control', en:'Accountancy, Finance & Control',
      inl:'Betrouwbare cijfers en grip op de bedrijfsvoering.', ien:'Reliable numbers and control over operations.',
      s:[['Inrichting van de financiële administratie','Setting up the financial administration'],['Begroting, forecasting en budgetbewaking','Budgeting, forecasting and budget control'],['Management- en periodieke rapportages','Management and periodic reporting'],['Jaarafsluiting en ondersteuning bij de audit','Year-end closing and audit support'],['Kostprijs- en margeanalyse','Cost-price and margin analysis']]},
    {id:3, nl:'Risk, Governance & Compliance', en:'Risk, Governance & Compliance', badge:true,
      inl:'Beheerste risico’s en verantwoord bestuur.', ien:'Controlled risk and accountable governance.',
      s:[['Verzekeringsadvies op maat voor verzekeraars','Tailored insurance advice for insurers',1],['Risicomanagementkaders en risicoanalyses','Risk management frameworks and assessments'],['Interne beheersing (AO/IC)','Internal control frameworks'],['Corporate governance en ondersteuning van RvC’s','Corporate governance and supervisory board support'],['Compliance- en AML/CFT-beleid','Compliance and AML/CFT policy']]},
    {id:4, nl:'Strategie & Managementadvies', en:'Strategy & Management Advisory',
      inl:'Richting kiezen en de organisatie daarop inrichten.', ien:'Setting direction and aligning the organisation.',
      s:[['Strategische planvorming','Strategic planning'],['Businessplannen en haalbaarheidsstudies','Business plans and feasibility studies'],['Organisatie- en procesverbetering','Organisational and process improvement'],['Herstructurering en turnaround','Restructuring and turnaround']]},
    {id:5, nl:'Investment & Transaction Advisory', en:'Investment & Transaction Advisory',
      inl:'Zorgvuldige besluiten bij investeringen en transacties.', ien:'Careful decisions on investments and transactions.',
      s:[['Financiële due diligence','Financial due diligence'],['Begeleiding bij fusies en overnames','Mergers and acquisitions support'],['Investeringsanalyse en -selectie','Investment analysis and selection'],['Joint ventures en partnerstructuren','Joint ventures and partnership structures']]},
    {id:6, nl:'Tax & Corporate Advisory', en:'Tax & Corporate Advisory',
      inl:'Een fiscaal en juridisch solide structuur.', ien:'A fiscally and legally sound structure.',
      s:[['Fiscale planning en structurering','Tax planning and structuring'],['Btw- en loonbelastingvraagstukken','VAT and payroll tax matters'],['Transfer pricing voor internationale groepen','Transfer pricing for international groups'],['Vennootschapsstructuren en corporate housekeeping','Corporate structures and corporate housekeeping']]},
    {id:7, nl:'Digital Finance & Data Analytics', en:'Digital Finance & Data Analytics',
      inl:'Technologie en data die de financiële functie versterken.', ien:'Technology and data that strengthen the finance function.',
      s:[['Dashboards en managementinformatie','Dashboards and management information'],['Automatisering van financiële processen','Automation of financial processes'],['Data-analyse en KPI-ontwikkeling','Data analysis and KPI design'],['Toepassing van AI in finance','Applying AI in finance'],['Selectie van ERP- en boekhoudsystemen','ERP and accounting system selection']]},
    {id:8, nl:'Executive Advisory, Interim Management & Training', en:'Executive Advisory, Interim Management & Training',
      inl:'Ervaring aan tafel, precies wanneer het nodig is.', ien:'Experience at the table, exactly when it is needed.',
      s:[['Interim CFO en controller','Interim CFO and controller'],['Klankbord voor directie en RvC','Sounding board for executives and boards'],['In-company trainingen finance en governance','In-company training in finance and governance'],['Programma’s financiële geletterdheid','Financial literacy programmes']]},
    {id:9, nl:'Verzekerings- en assurantieadvies', en:'Insurance Advisory',
      inl:'Specialistisch advies aan verzekeraars voor sterke producten, beheerste risico’s en een gezonde portefeuille.', ien:'Specialist advice to insurers for strong products, controlled risks and a healthy portfolio.',
      s:[['Productontwikkeling, premiestelling en polisvoorwaarden','Product development, pricing and policy wordings'],['Underwriting-advies voor complexe en technische risico’s','Underwriting advice for complex and technical risks'],['Herverzekeringsstructuur en -plaatsing','Reinsurance structure and placement'],['Portefeuille-, schade- en rendementsanalyse','Portfolio, claims and profitability analysis'],['Governance, risicobeheer en rapportage aan de toezichthouder','Governance, risk management and reporting to the regulator']]}
  ];

  let lang = 'nl';
  const $ = (s,r=document)=>r.querySelector(s);
  const el = (t,c,h)=>{const e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e;};
  const bi = (nl,en)=>`<span class="nl">${nl}</span><span class="en">${en}</span>`;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Pillars render */
  const pw = $('#pillars');
  PILLARS.forEach(p=>{
    const svg = '<svg viewBox="0 0 32 32" aria-hidden="true">'+SQ[p.id].map(([x,y,s,c])=>`<rect x="${x}" y="${y}" width="${s}" height="${s}" class="q${c}"/>`).join('')+'</svg>';
    const li = p.s.map(([a,b,h])=>`<li${h?' class="hl"':''}>${bi(a,b)}</li>`).join('');
    const c = el('article','pillar', `${p.badge?`<span class="badge">${bi('Ook voor verzekeraars','Also for insurers')}</span>`:''}${svg}<h3>${bi(p.nl,p.en)}</h3><p class="intro">${bi(p.inl,p.ien)}</p><ul>${li}</ul>`);
    pw.appendChild(c);
  });

  /* Subject select */
  const sel = $('#f-subj');
  const opts = [['general','Algemene vraag','General enquiry']].concat(PILLARS.map(p=>['p'+p.id,p.nl,p.en]));
  function fillSelect(){ const v=sel.value; sel.innerHTML=''; opts.forEach(([k,n,e])=>{ const o=document.createElement('option'); o.value=k; o.textContent= lang==='en'?e:n; sel.appendChild(o); }); if(v) sel.value=v; }
  fillSelect();

  /* Socials */
  function renderSocials(){
    const s=$('#socials'), f=$('#f-socials'); s.innerHTML=''; f.innerHTML='';
    SOCIAL.forEach(x=>{
      const a=el('a',null,`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${x.d}"/></svg>`);
      a.href=x.url; a.target='_blank'; a.rel='noopener'; a.title=x.name; a.setAttribute('aria-label', x.name);
      s.appendChild(a); f.appendChild(a.cloneNode(true));
    });
  }
  renderSocials();

  /* Rotators */
  const shuffle = a=>{ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; };
  const rotators=[];
  document.querySelectorAll('[data-pool]').forEach((box)=>{
    const pool = shuffle(POOLS[box.dataset.pool]);
    const imgs = pool.map((src,i)=>{ const im=new Image(); im.src=src; im.alt= i===0? ALT.nl : ''; im.loading= i===0?'eager':'lazy'; im.decoding='async'; if(i===0) im.classList.add('on'); box.appendChild(im); return im; });
    rotators.push({imgs, i:0});
  });
  let rt=0;
  if(!reduce) setInterval(()=>{ const r=rotators[rt % rotators.length]; rt++; if(r.imgs.length<2 || document.hidden) return; r.imgs[r.i].classList.remove('on'); r.i=(r.i+1)%r.imgs.length; r.imgs[r.i].classList.add('on'); }, 2600);

  /* Hero slideshow */
  const media=$('#hero-media'), dots=$('#hero-dots'), cnt=$('#hero-count'), pauseBtn=$('#hero-pause');
  const order=[HERO[0]].concat(shuffle(HERO.slice(1)));
  const slides=order.map((s,i)=>{ const im=new Image(); im.src=s.src; im.alt=''; im.decoding='async'; if(s.pos) im.style.objectPosition=s.pos; if(i===0) im.classList.add('on'); media.appendChild(im);
    const d=document.createElement('button'); d.type='button'; d.setAttribute('aria-label', (i+1)+' / '+order.length); if(i===0) d.classList.add('on'); d.addEventListener('click',()=>{ go(i); restart(); }); dots.appendChild(d); return im; });
  let cur=0, timer=null, paused=reduce;
  function label(){ cnt.textContent = String(cur+1).padStart(2,'0')+' / '+String(order.length).padStart(2,'0'); }
  function go(i){ slides[cur].classList.remove('on'); dots.children[cur].classList.remove('on'); cur=i; void slides[cur].offsetWidth; slides[cur].classList.add('on'); dots.children[cur].classList.add('on'); label(); }
  function restart(){ clearInterval(timer); if(!paused) timer=setInterval(()=>{ if(!document.hidden) go((cur+1)%slides.length); }, 6500); }
  function setPauseUI(){ pauseBtn.setAttribute('aria-pressed', paused?'true':'false'); pauseBtn.innerHTML = paused? bi('Afspelen','Play') : bi('Pauzeer','Pause'); }
  pauseBtn.addEventListener('click',()=>{ paused=!paused; setPauseUI(); restart(); });
  label(); setPauseUI(); restart();

  /* Language */
  function setLang(l){
    lang=l; document.body.dataset.lang=l; document.documentElement.lang=l;
    ['nl','en'].forEach(x=>$('#lang-'+x).setAttribute('aria-pressed', x===l?'true':'false'));
    document.querySelectorAll('.mosaic img.on').forEach(im=>im.alt=ALT[l]);
    $('nav.main').setAttribute('aria-label', l==='en'?'Main menu':'Hoofdmenu');
    label(); fillSelect();
    try{ localStorage.setItem('lb-lang', l); }catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  let saved=null; try{ saved=localStorage.getItem('lb-lang'); }catch(e){}
  if(location.hash==='#en') saved='en';
  setLang(saved==='en'?'en':'nl');

  /* Mobile menu */
  const mb=$('#menu-btn'), mn=$('#mobile-nav');
  mb.addEventListener('click',()=>{ const o=mn.hidden; mn.hidden=!o; mb.setAttribute('aria-expanded', o?'true':'false'); });
  mn.addEventListener('click',e=>{ if(e.target.closest('a')){ mn.hidden=true; mb.setAttribute('aria-expanded','false'); } });

  /* Copy buttons */
  document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>{
    const t=b.dataset.copy, orig=b.innerHTML;
    const done=()=>{ b.innerHTML=bi('Gekopieerd','Copied'); setTimeout(()=>b.innerHTML=orig,1600); };
    try{ navigator.clipboard.writeText(t).then(done).catch(()=>sel2(b)); }catch(e){ sel2(b); }
  }));
  function sel2(b){ const v=b.parentElement.querySelector('.v'); const r=document.createRange(); r.selectNodeContents(v); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }

  /* Legal overlays */
  let lastFocus=null;
  function openOv(id){ lastFocus=document.activeElement; const o=$('#ov-'+id); o.hidden=false; o.querySelector('[data-close]').focus(); }
  function closeOv(o){ o.hidden=true; if(lastFocus) lastFocus.focus(); }
  document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',e=>{ e.preventDefault(); openOv(b.dataset.open); }));
  document.querySelectorAll('.overlay').forEach(o=>{ o.addEventListener('click',e=>{ if(e.target===o || e.target.closest('[data-close]')) closeOv(o); }); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') document.querySelectorAll('.overlay:not([hidden])').forEach(closeOv); });

  /* Form */
  const FORM_ENDPOINT='https://formsubmit.co/ajax/info@limebridge.sr';
  const f=$('#cf');
  const msg={name:['Vul uw naam in.','Please enter your name.'], mail:['Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.sr.','Enter a valid email address, for example name@company.sr.'], msg:['Beschrijf kort uw vraag.','Briefly describe your question.'], ok:['Geef toestemming om uw aanvraag te kunnen verwerken.','Please give consent so we can process your request.']};
  const t=k=>msg[k][lang==='en'?1:0];
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const n=$('#f-name').value.trim(), m=$('#f-mail').value.trim(), q=$('#f-msg').value.trim(), ok=$('#f-ok').checked;
    const errs={name:!n, mail:!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m), msg:!q, ok:!ok};
    $('#e-name').textContent=errs.name?t('name'):''; $('#e-mail').textContent=errs.mail?t('mail'):''; $('#e-msg').textContent=errs.msg?t('msg'):''; $('#e-ok').textContent=errs.ok?t('ok'):'';
    const first=Object.keys(errs).find(k=>errs[k]);
    if(first){ ({name:'#f-name',mail:'#f-mail',msg:'#f-msg',ok:'#f-ok'})[first] && $(({name:'#f-name',mail:'#f-mail',msg:'#f-msg',ok:'#f-ok'})[first]).focus(); return; }
    const th=$('#thanks'), btn=f.querySelector('button[type="submit"]');
    const subj=sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : '';
    const safe=n.replace(/</g,'&lt;');
    btn.disabled=true; th.hidden=false;
    th.innerHTML = bi('Uw aanvraag wordt verzonden…','Sending your request…');
    fetch(FORM_ENDPOINT,{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        _subject:'Website-aanvraag Limebridge: '+subj,
        _template:'table', _captcha:'false', _honey:$('#f-hp').value,
        Naam:n, Organisatie:$('#f-org').value.trim(), email:m, Telefoon:$('#f-tel').value.trim(),
        Onderwerp:subj, Bericht:q
      })
    }).then(r=>r.json().then(d=>({ok:r.ok,d}))).then(({ok,d})=>{
      if(!ok || String(d.success)!=='true') throw new Error(d && d.message || 'send failed');
      th.innerHTML = bi(`Dank u, ${safe}. Uw aanvraag is verzonden; wij reageren binnen één werkdag.`, `Thank you, ${safe}. Your request has been sent; we respond within one business day.`);
      f.reset(); fillSelect();
    }).catch(()=>{
      th.innerHTML = bi('Het verzenden is niet gelukt. Probeer het opnieuw, of mail ons op info@limebridge.sr of bel (+597) 530185.','Sending failed. Please try again, or email info@limebridge.sr or call (+597) 530185.');
    }).finally(()=>{ btn.disabled=false; });
  });
})();
