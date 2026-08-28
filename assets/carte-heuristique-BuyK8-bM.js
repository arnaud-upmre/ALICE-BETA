import{a as e,t}from"./pk-pmtiles-CPj5r37E.js";function n(n){return n.innerHTML=`<style>.metro-zone {
      color-scheme: light;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      --ink: #344054;
      --muted: #7a8390;
      --canvas: #f1f2f7;
      --border: #dce2ea;
      --line-295: #ef985f;
      --line-301: #6f9ed7;
      --line-272: #2fa9a5;
    }
    .metro-zone * { box-sizing: border-box; }
    .metro-zone { margin: 0; min-height: 100%; }
    body { color: var(--ink); background: var(--canvas); }
    .metro-zone button, .metro-zone a { font: inherit; }
    .page { width: min(100% - 24px, 2200px); margin: 12px auto 22px; }
    .topbar {
      display: flex; align-items: center; justify-content: space-between; gap: 18px;
      padding: 12px 16px; border: 1px solid var(--border); border-radius: 16px; background: rgba(255,255,255,.9);
    }
    .title strong { display: block; font-size: 16px; }
    .title span { display: block; margin-top: 2px; color: var(--muted); font-size: 12px; }
    .back, .tool {
      border: 1px solid var(--border); border-radius: 10px; padding: 8px 12px;
      color: var(--ink); background: #fff; text-decoration: none; font-size: 12px; font-weight: 800; cursor: pointer;
    }
    .toolbar { display: flex; align-items: center; gap: 10px; min-height: 48px; }
    .toolbar label { display: inline-flex; align-items: center; gap: 7px; color: var(--muted); font-size: 12px; font-weight: 700; }
    .toolbar input { margin: 0; accent-color: var(--line-295); }
    .hint { margin-left: auto; color: var(--muted); font-size: 12px; }
    .map-shell {
      height: min(80vh, 1080px); min-height: 680px; overflow: hidden;
      border: 1px solid var(--border); border-radius: 18px; cursor: grab;
      background-color: var(--canvas);
      background-image: linear-gradient(rgba(110,125,145,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(110,125,145,.045) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    .map-shell.is-panning { cursor: grabbing; }
    #mindmap { display: block; width: 100%; height: 100%; touch-action: none; }
    .branch { fill: none; stroke-width: 7; stroke-linecap: round; stroke-linejoin: round; opacity: .92; }
    .line-295 { stroke: var(--line-295); }
    .line-301 { stroke: var(--line-301); }
    .line-272 { stroke: var(--line-272); }
    .connector { fill: none; stroke: var(--line-272); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 10 10; opacity: .8; }
    .station { cursor: move; }
    .station-dot { fill: #fff; stroke-width: 4; }
    .station.satellite .station-dot { stroke-width: 3; }
    .station.satellite .station-label { font-size: 17px; font-weight: 650; }
    .sat-stem { stroke-width: 2.5; stroke-linecap: round; opacity: .7; }
    .station.line-295 .sat-stem { stroke: var(--line-295); }
    .station.line-301 .sat-stem { stroke: var(--line-301); }
    .station.line-272 .sat-stem { stroke: var(--line-272); }
    .station.line-295 .station-dot { stroke: var(--line-295); }
    .station.line-301 .station-dot { stroke: var(--line-301); }
    .station.line-272 .station-dot { stroke: var(--line-272); }
    .station.is-sst .station-dot { stroke: #e3313c; stroke-width: 6; }
    .station.is-sst .station-label { fill: #3f4650; font-size: 26px; font-weight: 800; }
    .station-label {
      fill: #535b66; font-size: 22px; font-weight: 600; text-anchor: middle; pointer-events: none;
      paint-order: stroke; stroke: var(--canvas); stroke-width: 9px; stroke-linejoin: round;
    }
    .station-sat {
      fill: #49658f; font-size: 15px; font-weight: 800; text-anchor: middle; pointer-events: none;
      paint-order: stroke; stroke: var(--canvas); stroke-width: 7px;
    }
    .hub { cursor: move; }
    .hub .hub-title {
      fill: #303640; font-size: 32px; font-weight: 850; text-anchor: middle;
      paint-order: stroke; stroke: var(--canvas); stroke-width: 10px; stroke-linejoin: round;
    }
    .hub.junction .hub-title { font-size: 32px; }
    .hub.junction circle {
      fill: #fff; stroke: var(--line-272); stroke-width: 7;
      filter: drop-shadow(0 5px 9px rgba(35,110,108,.16));
    }
    .hub.junction.root-junction circle { stroke: #536b8d; }
    .error { fill: #8b929b; font-size: 20px; text-anchor: middle; }
    @media (max-width: 700px) {
      .page { width: calc(100% - 12px); margin-top: 6px; }
      .topbar { align-items: flex-start; }
      .title strong { font-size: 13px; }
      .back { padding: 7px 9px; font-size: 11px; }
      .hint { display: none; }
      .map-shell { min-height: 600px; }
    }</style>
<div class="page">
  <div class="metro-toolbar">
    <button class="tool" id="resetLayout" type="button">Réinitialiser la vue</button>
    <button class="tool" id="defaultView" type="button" hidden>Affichage par défaut</button>
    <label><input id="showSats" type="checkbox">Afficher les SAT</label>
    <span class="hint" id="summary">Chargement des postes…</span>
  </div>
  <main class="map-shell" id="mapShell">
    <svg id="mindmap" role="img" aria-label="Carte heuristique des lignes ferroviaires" viewBox="0 80 3700 1920" preserveAspectRatio="xMidYMid meet">
      <g id="world"><g id="branches"></g><g id="stations"></g></g>
    </svg>
  </main>
</div>`,n.insertAdjacentHTML(`afterbegin`,`<style>.line-267 { stroke: #8d6ac8; } .station.line-267 .station-dot { stroke: #8d6ac8; } .station.line-267 .sat-stem { stroke: #8d6ac8; } .line-212 { stroke: #c65a8d; } .station.line-212 .station-dot { stroke: #c65a8d; } .station.line-212 .sat-stem { stroke: #c65a8d; } #metroZone .station-label { font-size: 40px !important; font-weight: 500; } #metroZone .station.satellite .station-label { font-size: 34px !important; font-weight: 525; } #metroZone .station-sat { font-size: 30px !important; font-weight: 525; } #metroZone .station.is-sst .station-label { font-size: 48px !important; } #metroZone .station.is-junction .station-dot { stroke-width: 7; } #metroZone .station.is-junction .station-label { font-size: 46px !important; font-weight: 600; } #metroZone .independent-connector { fill: none; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 12 12; opacity: .8; } #metroZone .hub .hub-title, #metroZone .hub.junction .hub-title { font-size: 54px !important; font-weight: 650 !important; }</style>`),n.querySelector(`.metro-toolbar`)?.remove(),n.insertAdjacentHTML(`afterbegin`,`<style>.station .sat-stem, .station .station-dot { stroke: var(--node-line-color); }</style>`),n.insertAdjacentHTML(`beforeend`,`<style>
    #metroZone .station,
    #metroZone .hub {
      cursor: inherit;
    }

    #metroZone .sat-family-marker {
      stroke: var(--canvas);
      stroke-width: 2.5;
      pointer-events: none;
    }

    #metroZone .station.satellite .station-sat {
      paint-order: stroke;
      stroke: var(--canvas);
      stroke-width: 7px;
      pointer-events: auto;
      cursor: help;
    }

    #metroZone .station.satellite {
      cursor: help;
      outline: none;
    }

    #metroZone.satellites-hidden .sat-only-branch {
      display: none;
    }

    #metroZone.satellites-hidden .station.satellite {
      display: none;
    }

    #metroZone.satellites-hidden .map-shell.vue-ligne .station.satellite {
      display: inline;
    }

    #metroZone.satellites-hidden .map-shell.vue-ligne .station.satellite .sat-stem,
    #metroZone.satellites-hidden .map-shell.vue-ligne .station.satellite .sat-family-marker,
    #metroZone.satellites-hidden .map-shell.vue-ligne .station.satellite .station-sat {
      display: none;
    }

    #metroZone.satellites-hidden .station-label.sat-family-label {
      fill: #535b66 !important;
    }

    #metroZone.satellites-hidden .hub-title.sat-family-label {
      fill: #303640 !important;
    }

    #metroZone .station.satellite.is-sat-hover .sat-family-marker,
    #metroZone .is-sat-parent-highlight .sat-family-marker {
      filter: drop-shadow(0 0 8px currentColor);
      stroke-width: 4;
      transform: scale(1.55);
      transform-box: fill-box;
      transform-origin: center;
    }

    #metroZone .sat-tooltip {
      position: absolute;
      z-index: 8;
      max-width: 330px;
      padding: 8px 11px;
      border: 1px solid rgba(71, 85, 105, .2);
      border-radius: 9px;
      color: #fff;
      background: rgba(30, 41, 59, .96);
      box-shadow: 0 8px 24px rgba(15, 23, 42, .2);
      font-size: 13px;
      font-weight: 800;
      line-height: 1.25;
      pointer-events: none;
      opacity: 0;
      transform: translateY(4px);
      transition: opacity .1s ease, transform .1s ease;
    }

    #metroZone .map-shell {
      position: relative;
    }

    #metroZone .sat-tooltip.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    body {
      color: var(--text);
      background: var(--bg);
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: var(--alice-page-glow-dark), var(--bg);
      }

      #metroZone {
        color-scheme: dark;
        --ink: var(--alice-text-dark, #eff6ff);
        --muted: var(--alice-muted-dark, #9fb0c3);
        --canvas: #07111f !important;
        --border: rgba(148, 163, 184, 0.24);
        --metro-surface: #101b2d;
        --metro-grid: rgba(148, 163, 184, 0.075);
        --metro-label: #dce8f8;
        --metro-label-strong: #f8fbff;
        --metro-sat-label: #a9cfff;
        --metro-danger: #fb7185;
      }

      #metroZone .page {
        color: var(--ink);
      }

      #metroZone .map-shell {
        background-color: var(--canvas);
        background-image:
          linear-gradient(var(--metro-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--metro-grid) 1px, transparent 1px);
        border-color: var(--border);
        box-shadow:
          0 22px 48px rgba(0, 0, 0, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.035);
      }

      #metroZone .station-dot,
      #metroZone .hub.junction circle {
        fill: var(--metro-surface);
      }

      #metroZone .station-label {
        fill: var(--metro-label);
        stroke: var(--canvas);
      }

      #metroZone .station.is-sst .station-dot {
        stroke: var(--metro-danger);
      }

      #metroZone .station.is-sst .station-label,
      #metroZone .hub .hub-title {
        fill: var(--metro-label-strong);
        stroke: var(--canvas);
      }

      #metroZone .station-sat {
        fill: var(--metro-sat-label);
        stroke: var(--canvas);
      }

      #metroZone .station-sat,
      #metroZone .sat-family-label,
      #metroZone .station.is-sst .station-label {
        paint-order: stroke fill;
        stroke: rgba(255, 255, 255, .52) !important;
        stroke-width: 1.35px !important;
        filter: none;
      }

      #metroZone.satellites-hidden .station-label.sat-family-label {
        fill: var(--metro-label) !important;
      }

      #metroZone.satellites-hidden .hub-title.sat-family-label {
        fill: var(--metro-label-strong) !important;
      }

      #metroZone .hub.junction.root-junction circle {
        stroke: #a5b4c8;
      }

      #metroZone .error {
        fill: var(--muted);
      }
    }

    #metroZone .station.is-sst .station-dot {
      stroke: #e3313c;
      stroke-width: 7px;
    }

    #metroZone .station.is-sst .station-label {
      fill: #e3313c !important;
      font-size: 50px !important;
      font-weight: 600;
    }
  </style>`),(()=>{let r=`295000`,i=`301000`,a=`301306`,o=`304000`,s=`314000`,c=`311000`,l=`272000`,u=`267000`,d=`212000`,f=Object.freeze({width:4e3,lineStart:90,lineEnd:3900,cardStart:35,cardEnd:3965,cardLineOffset:560,cardHeight:1100,cardGap:60,baseEdgeSpace:110,satEdgeStep:90,maxEdgeSpace:430}),p={[r]:[`Curie|SSP|SAT2`,`Curie|SSP`,`Coulogne|SP`,`Coulogne|SP|SAT1`,`Nortkerque|P`,`Audruicq|L`,`Saint Omer|L|SAT3`,`Saint Omer|L`,`Saint Omer|L|SAT2`,`Saint Omer|L|SAT1`,`Arques|P`,`Haute Loge|SSP`,`Strazeele|SP|SAT1`,`Strazeele|SP`,`Strazeele|SP|SAT2`,`Steenwerck|SSP`,`Armentières|SS`,`Lambersart|SSP|SAT2`,`Lambersart|SSP`,`Lambersart|SSP|SAT1`,`La madeleine|L|SAT2`,`La madeleine|L`,`La madeleine|L|SAT1`],[i]:[`Dunkerque|SSPA`,`Coudekerque|SST|SAT1`,`Coudekerque|SST`,`Esquelbecq|SS`,`Arneke|SSP`,`Cassel|S|SAT2`,`Volck Veld|SP`,`Hazebrouck|SSPA`,`Thiennes|SP`,`Lillers|SSP`,`Bethune|SSP`,`Bethune|A`,`Bethune SUD|SS`,`Verquigneul|SST`,`Bollaert|SSP`,`Lens|A`,`Lens|Atelier`,`Bailleul Sir Bethoult|SP`],[a]:[`Coudekerque|SST|SAT2`],[o]:[`Grande Synthe IA2|A`,`PE4 Pondereux|A`,`Puyt Houck|SSPA`,`Bif puyt houck ouest|L`,`PE5 Mardyck|A`,`PE3 Bif Coupvent|A`,`Bourbourg|S`,`Gravelines|L|SAT1`,`Gravelines|L`,`Gravelines|L|SAT2`,`Gravelines|L|SAT3`,`Bif coulogne|L`],[s]:`Curie|SSP|SAT4.Curie|SSP|SAT3.Curie|SSP|SAT1.Coulogne|SP|SAT2.Riviere|SSPA.Riviere|SSPA|SAT1.Coquelles|L|SAT4.Coquelles|L|SAT5.Coquelles|L.Coquelles|L|SAT3.Coquelles|L|SAT2.Coquelles|L|SAT1.Rue verte|L|SAT5.Rue verte|L|SAT4.Rue verte|L|SAT3.Rue verte|L.Rue verte|L|SAT2.Rue verte|L|SAT1.Pays Blanc|P|SAT2.Moulin|S|SAT1.Tricat|SP.Caffiers|L|SAT2.Caffiers|L|SAT1.Caffiers|L.Marquise|SSP|SAT2.Marquise|SSP|SAT1.Marquise|SSP.Hauteville|SSPA`.split(`.`),[c]:[`Hauteville|SSPA|SAT3`,`Hauteville|SSPA|SAT2`,`Hauteville|SSPA|SAT1`,`Pont de briques|SST|SAT1`,`Pont de briques|SST`,`Dannes|SSP`,`Etaples|SSP`,`Etaples|SSP|SAT2`,`Etaples|SSP|SAT1`,`Rang|SSP`],[l]:`Lille Gare|SSPA.Fives|SSPA|SAT6.Fives|SSPA|SAT3.Fives|SSPA|SAT2.Saint Sauveur|L.Fives|SSPA.Fives|SSPA|SAT1.Saint Sauveur|A.Ronchin|P|SAT1.Ronchin|P.Wattignies|SP.Templemars|L.Seclin|L.Harponlieu|L-A.Ostricourt|SSP.Douai|SSPA.Saint Eloi|SSP.Saint Eloi|SSP|SAT1.Roeux|SP.Fampoux|S|SAT I16.Fampoux|S|SAT I21.Arras|SSPA.Mercatel|SP|SAT3.Boisleux|SSP|SAT1.Boisleux|SSP.Boisleux|SSP|SAT2.Achiet|SST.Achiet|SST|SAT1.Aveluy|SP.Aveluy|SP|SAT.Mericourt|SSP.Corbie|SS.Lamotte|SST.Longueau|SA.Ailly sur Noye|SSP.La Faloise|SP.Gannes|SST.Saint Just|SSP`.split(`.`),[u]:[`Fives|SSPA|SAT5`,`Lesquin|SP`,`Lesquin|SP|SAT1`,`Orchies|SP`,`Beuvrage|SSP`,`Valenciennes|SS`,`Valenciennes|A`,`Faubourg|SSP`,`Maing|SST`,`Le Quesnoy|SSP`,`Berlaimont|SP`,`Leval|SP`,`Avesnes|SSP`,`Fourmies|SST`],[d]:[`Hirson|SSPA`,`Aouste|SP`]},m=p,h=Object.keys(p),g={[r]:`#ef985f`,[i]:`#6f9ed7`,[a]:`#d85f8f`,[o]:`#e0b72f`,[s]:`#3f8f6b`,[c]:`#5167a5`,[l]:`#2fa9a5`,[u]:`#8d6ac8`,[d]:`#c65a8d`},_=[`#d97706`,`#64748b`,`#dc5a78`,`#198b67`,`#7c5cc4`,`#3f7fbf`],v=`#e3313c`,y=[`#c94d1d`,`#c9911d`,`#adc91d`,`#66c91d`,`#2ac91d`,`#1dc963`,`#1dc9a4`,`#1db2c9`,`#1d75c9`,`#1d2ac9`,`#631dc9`,`#a41dc9`,`#c91d91`,`#c91d66`,`#64748b`],ee=2400,b=document.getElementById(`mindmap`),te=document.getElementById(`world`),ne=document.getElementById(`branches`),x=document.getElementById(`stations`),S=document.getElementById(`mapShell`),C=document.getElementById(`showSats`),re=document.getElementById(`summary`),w=document.createElement(`div`);w.className=`sat-tooltip`,w.setAttribute(`role`,`tooltip`),S.append(w);let T=document.createElement(`div`);T.className=`sat-tooltip`,T.setAttribute(`role`,`tooltip`),S.append(T),b.setAttribute(`viewBox`,`-320 80 4820 2250`),C.checked=!1,n.classList.add(`satellites-hidden`);let E={id:`hub-hazebrouck`,name:`Hazebrouck`,x:1600,y:900,hub:!0},D={[r]:[],[i]:[],[a]:[],[o]:[],[s]:[],[c]:[],[l]:[],[u]:[],[d]:[]},O=[],k=[],A=null,ie=[],j=new Set,ae=new Map,M=null,N=`condense`,oe=`asc`,se=`numero`,P=null,ce=new Map,F=null,I=null,le=0,L=new Map,R=null,z={x:0,y:0,k:1},B=e=>String(e??``).trim(),V=e=>B(e).toLocaleLowerCase(`fr`),H=e=>B(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`),U=(e,t,n)=>[V(e),V(t),V(n)].filter(Boolean).join(`|`),ue=e=>{let t=B(e).replace(/\D+/g,``);return t?t.padStart(6,`0`):``},W=e=>g[e]||_[Math.max(0,h.indexOf(e))%_.length],G=e=>e.sat!==``,K=e=>D[e]||[],de=e=>K(e),q=e=>U(e.name,e.type,``),fe=(e,t,n)=>U(e,t,n),pe=e=>{if(!Number.isFinite(e))return``;let t=Math.round(e*1e3);return`PK ${t<0?`-`:``}${Math.floor(Math.abs(t)/1e3)}+${String(Math.abs(t)%1e3).padStart(3,`0`)}`},me=([e,t],[n,r])=>{let i=e=>e*Math.PI/180,a=i(r-t),o=i(n-e),s=Math.sin(a/2)**2+Math.cos(i(t))*Math.cos(i(r))*Math.sin(o/2)**2;return 6371e3*2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))},he=(e,t)=>{if(e.length<2||!t.every(Number.isFinite))return null;let n=null;for(let r=1;r<e.length;r+=1){let i=e[r-1],a=e[r],o=(t[1]+i.point[1]+a.point[1])/3,s=Math.cos(o*Math.PI/180)*111320,c=111320,l=(a.point[0]-i.point[0])*s,u=(a.point[1]-i.point[1])*c,d=l*l+u*u;if(!d)continue;let f=((t[0]-i.point[0])*s*l+(t[1]-i.point[1])*c*u)/d;if(f<-2||f>3)continue;let p=[i.point[0]+(a.point[0]-i.point[0])*f,i.point[1]+(a.point[1]-i.point[1])*f],m=me(t,p);m>120||n&&m>=n.distance||(n={distance:m,pk:i.pk+(a.pk-i.pk)*f})}return n?.pk??null},ge=e=>Object.values(D).flat().filter(t=>!G(t)&&q(t)===q(e)),_e=e=>{if(!G(e))return!1;let t=ge(e);return!t.length||Math.min(...t.map(t=>Math.hypot(t.x-e.x,t.y-e.y)))>600},ve=e=>_e(e)?[e.name,e.type,e.sat].filter(Boolean).join(` `):e.sat,J=e=>{if(V(e.type)===`sst`)return v;let t=q(e);if(ae.has(t))return ae.get(t);let n=0;for(let e=0;e<t.length;e+=1)n=n*31+t.charCodeAt(e)>>>0;return y[n%y.length]},ye=(e,t)=>{let n=e=>[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16)),[r,i,a]=n(e),[o,s,c]=n(t);return Math.hypot(r-o,i-s,a-c)},be=e=>{let[t,n,r]=[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16)/255),i=Math.max(t,n,r),a=i-Math.min(t,n,r);return a?((i===t?(n-r)/a%6:i===n?(r-t)/a+2:(t-n)/a+4)*60+360)%360:0},xe=(e,t)=>{let n=Math.abs(be(e)-be(t));return Math.min(n,360-n)};function Se(){let e=Object.values(D).flat(),t=new Map,n=new Map,r=(e,t)=>{!e||!t||e===t||(n.has(e)||n.set(e,new Set),n.has(t)||n.set(t,new Set),n.get(e).add(t),n.get(t).add(e))};Object.values(D).forEach(e=>{let t=e.map(q).filter(e=>j.has(e)).filter((e,t,n)=>e!==n[t-1]);t.slice(1).forEach((e,n)=>r(t[n],e))}),e.forEach(e=>{let n=q(e);if(!j.has(n))return;let r=t.get(n);(!r||!G(e)&&G(r))&&t.set(n,e)});let i=[...t.entries()],a=new Map,o=new Map(y.map(e=>[e,0]));i.filter(([,e])=>V(e.type)===`sst`).forEach(([e])=>a.set(e,v));let s=([,e])=>i.filter(([,t])=>t!==e&&Math.hypot(t.x-e.x,t.y-e.y)<ee).length;i.filter(([,e])=>V(e.type)!==`sst`).sort((e,t)=>(n.get(t[0])?.size||0)-(n.get(e[0])?.size||0)||s(t)-s(e)).forEach(([e,t])=>{let r=e=>i.flatMap(([n,r])=>{let i=a.get(n);return!i||Math.hypot(r.x-t.x,r.y-t.y)>=e?[]:[i]}),s=[...n.get(e)||[]].map(e=>a.get(e)).filter(Boolean),c=r(1600),l=r(ee),u=[...new Set([...s,...c])],d=y.reduce((e,t)=>{let n=l.includes(t),r=u.includes(t),i=u.length?Math.min(...u.map(e=>xe(t,e))):180,a=l.length?Math.min(...l.map(e=>xe(t,e))):180,s=l.length?Math.min(...l.map(e=>ye(t,e))):260,c=(r?-0x38d7ea4c68000:0)+(n?-1e6:0)+i*1e9+a*1e4+s*10-(o.get(t)||0)*20;return!e||c>e.score?{color:t,score:c}:e},null).color;a.set(e,d),o.set(d,(o.get(d)||0)+1)}),ae=a}let Ce=e=>e.lineCode===r&&V(e.name)===`curie`&&V(e.type)===`ssp`&&V(e.sat)===`sat2`,Y=e=>!P||e===E||e.lineCode===P,we=e=>e.lineCode===i&&!G(e)&&V(e.name)===`dunkerque`,X=e=>e.lineCode===l&&!G(e)&&[`lille gare`,`arras`].includes(V(e.name)),Z=e=>{let t=V(e.type)===`sst`&&!G(e);if(G(e)){let t=_e(e)?[[e.name,e.type].filter(Boolean).join(` `),e.sat]:[e.sat];return Math.max(96,Math.max(...t.map(e=>B(e).length))*21+40)}let n=t?24:19.5;return Math.max(t?215:170,[e.name,e.type].filter(Boolean).join(` `).length*n+36)},Te=(e,t)=>(Z(e)+Z(t))/2+24;function Ee(e,t){let n=(m[t]||[]).map(e=>({key:B(typeof e==`object`&&e?e.key:e),sourceLine:typeof e==`object`&&e&&ue(e.source_line)||t})),r=new Map((e.features||[]).flatMap(e=>{let t=e.properties||{},n=ue(t.numero_ligne);return!n||B(t.SAT)?[]:[[U(t.nom,t.type,``),n]]})),i=new Map;return(e.features||[]).forEach(e=>{let t=e.properties||{},n=e.geometry?.type===`Point`?e.geometry.coordinates:[],a=B(t.nom),o=B(t.type),s=B(t.SAT),c=U(a,o,s),l=ue(t.numero_ligne)||(s?r.get(U(a,o,``)):``);if(!l||!c)return;let u=`${l}:${c}`;i.has(u)||i.set(u,{name:a,type:o,sat:s,key:c,sourceLine:l,longitude:Number(n[0]),latitude:Number(n[1])})}),n.flatMap(({key:e,sourceLine:n})=>{let r=V(e),a=i.get(`${n}:${r}`);return a?[{id:`${t}:${n}:${r}`,lineCode:t,sourceLine:n,name:a.name,type:a.type,sat:a.sat,key:r,longitude:a.longitude,latitude:a.latitude,x:0,y:0}]:[]})}function De(){let e=K(r),t=K(i),n=Math.max(1,e.findIndex(e=>V(e.name)===`strazeele`)),f=t.findIndex(e=>V(e.name)===`hazebrouck`),p=t[f];p&&(E.detailNodeId=p.id,E.type=p.type,E.sourceLine=p.sourceLine,E.lineCode=p.lineCode);let m=new Set([r,i,a,o,s,c,l,u,d]),g=h.filter(e=>!m.has(e));O=[{id:`295-left`,lineCode:r,side:-1,y:1560,nodes:e.slice(0,n).reverse()},{id:`295-right`,lineCode:r,side:1,y:240,nodes:e.slice(n)},{id:`301-left`,lineCode:i,side:-1,y:240,nodes:t.slice(0,f).reverse()},{id:`301-right`,lineCode:i,side:1,y:1560,nodes:t.slice(f+1)},{id:`301306-coudekerque`,lineCode:a,satelliteOnly:!0,nodes:K(a)},{id:`304-independent`,lineCode:o,independent:!0,nodes:K(o)},{id:`314-boulogne`,lineCode:s,independent314:!0,nodes:K(s)},{id:`311-rang`,lineCode:c,continuation311:!0,nodes:K(c)},{id:`267-down`,lineCode:u,vertical:!0,nodes:K(u)},{id:`212-down`,lineCode:d,vertical:!0,continuationOf:u,nodes:K(d)},...g.map((e,t)=>({id:`extra-${e}`,lineCode:e,side:t%2?1:-1,extra:!0,extraIndex:t,nodes:K(e)}))],k=K(l),ie=K(u),j=new Set(Object.values(D).flat().filter(G).map(q))}async function Oe(){let[e,n]=await Promise.all([fetch(`./appareils.geojson`,{cache:`no-store`}).then(e=>e.ok?e.json():null),t(`./pk.pmtiles`).catch(()=>null)]),r=new Map;(e?.features||[]).forEach(e=>{let t=e.properties||{},n=fe(t.nom,t.type,t.SAT);r.set(n,(r.get(n)||0)+1)});let i=new Map;(n?.features||[]).forEach(e=>{let t=ue(e.properties?.code_ligne),n=e.geometry?.type===`Point`?e.geometry.coordinates:[],r=Number(e.properties?.pk);!t||!Number.isFinite(r)||!Number.isFinite(Number(n[0]))||!Number.isFinite(Number(n[1]))||(i.has(t)||i.set(t,[]),i.get(t).push({pk:r,point:[Number(n[0]),Number(n[1])]}))}),i.forEach(e=>e.sort((e,t)=>e.pk-t.pk)),ce=new Map(Object.values(D).flat().map(e=>{let t=r.get(fe(e.name,e.type,e.sat))||0,n=he(i.get(e.sourceLine)||[],[e.longitude,e.latitude]);return[e.id,{nombreAppareils:t,pk:pe(n)}]}))}function ke(e,t){if(!e.length)return;let n=t.slice(1).map(([e,n],r)=>Math.hypot(e-t[r][0],n-t[r][1])),r=n.reduce((e,t)=>e+t,0),i=e.slice(1).map(()=>1),a=i.reduce((e,t)=>e+t,0)||1,o=0;e.forEach((e,s)=>{s>0&&(o+=i[s-1]);let c=r*o/a,l=0,u=!1;for(let r=0;r<n.length;r+=1){if(c<=l+n[r]||r===n.length-1){let i=(c-l)/Math.max(1,n[r]);e.x=t[r][0]+(t[r+1][0]-t[r][0])*i,e.y=t[r][1]+(t[r+1][1]-t[r][1])*i,e.pathDistance=c,e.labelMode=Math.abs(t[r+1][0]-t[r][0])>=Math.abs(t[r+1][1]-t[r][1])?s%2?`below`:`above`:s%2?`right`:`left`,u=!0;break}l+=n[r]}if(!u){let i=t.length-1,a=(c-r)/Math.max(1,n[n.length-1]);e.x=t[i][0]+(t[i][0]-t[i-1][0])*a,e.y=t[i][1]+(t[i][1]-t[i-1][1])*a,e.labelMode=Math.abs(t[i][0]-t[i-1][0])>=Math.abs(t[i][1]-t[i-1][1])?s%2?`below`:`above`:s%2?`right`:`left`}})}function Ae(e,t=null){e.forEach((n,r)=>{if(!G(n))return;let i=r-1,a=r+1;for(;i>=0&&G(e[i]);)--i;for(;a<e.length&&G(e[a]);)a+=1;let o=i>=0?e[i]:t,s=e[a],c=1,l=0;if(o&&s){let e=i>=0?i:-1,t=(r-e)/(a-e);n.x=o.x+(s.x-o.x)*t,n.y=o.y+(s.y-o.y)*t,c=s.x-o.x,l=s.y-o.y}else if(o){let t=i-1;for(;t>=0&&G(e[t]);)--t;let a=e[t];c=o.x-(a?.x??o.x-90),l=o.y-(a?.y??o.y);let s=Math.hypot(c,l)||1,u=54*(r-i);n.x=o.x+c/s*u,n.y=o.y+l/s*u}else if(s){let t=a+1;for(;t<e.length&&G(e[t]);)t+=1;let i=e[t];c=(i?.x??s.x+90)-s.x,l=(i?.y??s.y)-s.y;let o=Math.hypot(c,l)||1,u=54*(a-r);n.x=s.x-c/o*u,n.y=s.y-l/o*u}let u=e.slice(0,r+1).filter(G).length;n.labelMode=Math.abs(c)>=Math.abs(l)?u%2?`below`:`above`:u%2?`right`:`left`})}function je(){if(!A)return;let{start:e,end:t,points:n}=A,r=k.indexOf(e),i=k.indexOf(t);if(r<0||i<=r)return;let a=k.slice(r+1,i).filter(G);if(A.roundedCorner){let e=n.slice(1).map(([e,t],r)=>Math.hypot(e-n[r][0],t-n[r][1])),t=[0];e.forEach(e=>t.push(t[t.length-1]+e));let o=t[t.length-1],s=r=>{let i=Math.min(o,Math.max(0,r)),a=0;for(;a<e.length-1&&t[a+1]<i;)a+=1;let s=(i-t[a])/Math.max(1,e[a]);return{x:n[a][0]+(n[a+1][0]-n[a][0])*s,y:n[a][1]+(n[a+1][1]-n[a][1])*s}};a.forEach((e,t)=>{let n=k.indexOf(e),a=n-1,c=n+1;for(;a>=r&&G(k[a]);)--a;for(;c<=i&&G(k[c]);)c+=1;let l=k[a],u=k[c];if(!l||!u)return;let d=(n-a)/(c-a),f=l.pathDistance+(u.pathDistance-l.pathDistance)*d,p=s(f),m=s(Math.max(0,f-3)),h=s(Math.min(o,f+3));e.x=p.x,e.y=p.y,e.labelMode=Math.abs(h.x-m.x)>=Math.abs(h.y-m.y)?t%2?`below`:`above`:t%2?`right`:`left`});return}let o=A.control1||{x:e.x,y:e.y+(t.y-e.y)*.45},s=A.control2||{x:t.x-(t.x-e.x)*.36,y:t.y};a.forEach((n,r)=>{let i=(r+1)/(a.length+1),c=1-i;n.x=c**3*e.x+3*c**2*i*o.x+3*c*i**2*s.x+i**3*t.x,n.y=c**3*e.y+3*c**2*i*o.y+3*c*i**2*s.y+i**3*t.y,n.labelMode=r%2?`right`:`left`})}function Me(){if(!A)return``;if(A.roundedCorner)return A.path;let{start:e,end:t,remaining:n}=A;if(A.orthogonal){let r=`M ${e.x} ${e.y} L ${t.x} ${t.y}`;return n.forEach(e=>{r+=` L ${e.x} ${e.y}`}),r}let r=A.control1||{x:e.x,y:e.y+(t.y-e.y)*.45},i=A.control2||{x:t.x-(t.x-e.x)*.36,y:t.y},a=`M ${e.x} ${e.y} C ${r.x} ${r.y}, ${i.x} ${i.y}, ${t.x} ${t.y}`;return n.forEach(e=>{a+=` L ${e.x} ${e.y}`}),a}function Ne(e,t,n,r,i){let a=1-i;return{x:a**3*e.x+3*a**2*i*t.x+3*a*i**2*n.x+i**3*r.x,y:a**3*e.y+3*a**2*i*t.y+3*a*i**2*n.y+i**3*r.y}}function Pe(e,t){let n=e.geometry;if(!n)return null;if(t>=n.curveLength)return{x:n.armEnd.x+e.side*(t-n.curveLength),y:e.y};let r=n.samples,i=r.findIndex(e=>e.distance>=t),a=r[Math.max(1,i)],o=r[Math.max(0,Math.max(1,i)-1)],s=(t-o.distance)/Math.max(1,a.distance-o.distance);return{x:o.x+(a.x-o.x)*s,y:o.y+(a.y-o.y)*s}}function Fe(e){if(!e.geometry)return Ae(e.nodes,E);e.nodes.forEach((t,n)=>{if(!G(t))return;let r=n-1,i=n+1;for(;r>=0&&G(e.nodes[r]);)--r;for(;i<e.nodes.length&&G(e.nodes[i]);)i+=1;let a=r>=0?e.nodes[r]:E,o=e.nodes[i],s=a===E?0:a.pathDistance,c;if(o){let e=(n-r)/(i-r);c=s+(o.pathDistance-s)*e}else c=s+(Ce(t)?Te(a,t):54)*(n-r);let l=Pe(e,c),u=Pe(e,Math.max(0,c-3)),d=Pe(e,c+3);t.x=l.x,t.y=l.y,t.labelMode=Math.abs(d.x-u.x)>=Math.abs(d.y-u.y)?n%2?`below`:`above`:n%2?`right`:`left`})}function Ie(e){let t=e.continuationOf===u?ie.find(e=>V(e.name)===`fourmies`&&V(e.type)===`sst`&&!G(e)):k.find(e=>V(e.name)===`fives`&&V(e.type)===`sspa`&&!G(e));if(!t)return;e.anchor=t;let n=e.continuationOf?100:118,r=e.continuationOf?t.x:t.x+500;e.nodes.filter(e=>!G(e)).forEach((e,i)=>{e.x=r,e.y=t.y+n*(i+1),e.labelMode=i%2?`right`:`left`}),Ae(e.nodes,{x:r,y:t.y});let i=e.continuationOf?null:e.nodes.find(e=>V(e.name)===`fives`&&V(e.sat)===`sat5`);i&&(i.x=r,i.y=t.y,i.labelMode=`left`)}function Le(e){let t=K(i).find(e=>V(e.name)===`dunkerque`&&!G(e)),n=K(i).find(e=>V(e.name)===`coudekerque`&&V(e.type)===`sst`&&!G(e));!t||!n||!e.nodes.length||(e.anchor={x:t.x+(n.x-t.x)*.48,y:t.y+(n.y-t.y)*.48},e.nodes.forEach((t,n)=>{t.x=e.anchor.x-150-n*95,t.y=e.anchor.y-125-n*70,t.labelMode=`above`}))}function Re(e){let t=K(i).find(e=>V(e.name)===`dunkerque`&&!G(e)),n=K(r).find(e=>V(e.name)===`coulogne`&&V(e.type)===`sp`&&!G(e)),a=e.nodes.filter(e=>!G(e));if(!t||!n||!a.length)return;e.anchor=t,e.endAnchor=n;let o=t.x;ke(a,[[o,t.y+180],[o,n.y-190]],e.nodes),Ae(e.nodes)}function ze(e){let t=K(r).find(e=>V(e.name)===`curie`&&V(e.type)===`ssp`&&!G(e)),n=e.nodes.filter(e=>!G(e)),i=e.nodes[0];if(!t||!n.length||!i)return;e.anchor=t;let a={x:t.x-260,y:t.y+160},o={x:a.x,y:1690},s={x:a.x+360,y:2050},c={x:s.x+260*(n.length-1),y:s.y},l=.5522848,u={x:o.x,y:o.y+360*l},d={x:s.x-360*l,y:s.y},f=[[a.x,a.y],[o.x,o.y]];for(let e=1;e<=48;e+=1){let t=e/48,n=1-t;f.push([n**3*o.x+3*n**2*t*u.x+3*n*t**2*d.x+t**3*s.x,n**3*o.y+3*n**2*t*u.y+3*n*t**2*d.y+t**3*s.y])}f.push([c.x,c.y]);let p=f.slice(1).map(([e,t],n)=>Math.hypot(e-f[n][0],t-f[n][1])),m=[0];p.forEach(e=>m.push(m[m.length-1]+e));let h=m[m.length-1],g=e=>{let t=Math.min(h,Math.max(0,e)),n=0;for(;n<p.length-1&&m[n+1]<t;)n+=1;let r=(t-m[n])/Math.max(1,p[n]);return{x:f[n][0]+(f[n+1][0]-f[n][0])*r,y:f[n][1]+(f[n+1][1]-f[n][1])*r}},_=(e,t,n)=>{let r=g(t),i=g(t-3),a=g(t+3);e.x=r.x,e.y=r.y,e.pathDistance=t,e.labelMode=Math.abs(a.x-i.x)>=Math.abs(a.y-i.y)?n%2?`below`:`above`:n%2?`right`:`left`};[i,...n].forEach((t,n,r)=>{_(t,h*n/Math.max(1,r.length-1),e.nodes.indexOf(t))}),e.nodes.forEach((t,n)=>{if(!G(t)||t===i)return;let r=n-1,a=n+1;for(;r>=0&&G(e.nodes[r]);)--r;for(;a<e.nodes.length&&G(e.nodes[a]);)a+=1;let o=r>=0?e.nodes[r]:i,s=r>=0?r:0,c=e.nodes[a],l=c?(n-s)/(a-s):1,u=c?o.pathDistance+(c.pathDistance-o.pathDistance)*l:o.pathDistance;_(t,u,n)}),e.routePath=`M ${a.x} ${a.y} L ${o.x} ${o.y} C ${u.x} ${u.y}, ${d.x} ${d.y}, ${s.x} ${s.y} L ${c.x} ${c.y}`}function Be(e){let t=K(s).find(e=>V(e.name)===`hauteville`&&V(e.type)===`sspa`&&!G(e)),n=e.nodes.filter(e=>!G(e));if(!t||!n.length)return;e.anchor=t;let r={x:t.x+260*n.length,y:t.y};ke([t,...n],[[t.x,t.y],[r.x,r.y]],[t,...n]),Ae(e.nodes,t),e.routePath=`M ${t.x} ${t.y} L ${r.x} ${r.y}`}function Ve(){let e=at(),t=f.width,n=f.lineStart,r=f.lineEnd,i=f.cardHeight+f.cardGap,a=f.cardLineOffset+30,o=Math.max(680,30+e.length*i);e.forEach(({code:e},t)=>{let o=a+t*i,s=K(e),c=s.filter(e=>!G(e)),l=s.findIndex(e=>!G(e)),u=s.findLastIndex(e=>!G(e)),d=l<0?0:s.slice(0,l).filter(G).length,p=u<0?0:s.slice(u+1).filter(G).length;s.forEach(e=>{e.linearEndpoint=!1,e.linearSatVertical=!1});let m=e=>e>0?Math.min(f.maxEdgeSpace,Math.max(f.baseEdgeSpace,50+e*f.satEdgeStep)):0,h=n,g=h+m(d),_=c.at(-1),v=_?58+Z(_)*Math.cos(48*Math.PI/180):0,y=r-Math.max(m(p),v);c.forEach((e,t)=>{e.x=c.length===1?(g+y)/2:g+(y-g)*t/(c.length-1),e.y=o,e.labelMode=`above`,e.stemOffset=72}),s.filter(G).forEach(e=>{let t=s.indexOf(e),n=s.findLastIndex((e,n)=>n<t&&!G(e)),i=s.slice(t+1).findIndex(e=>!G(e)),a=i<0?-1:t+1+i,c=n>=0?s[n]:null,l=a>=0?s[a]:null,u=n+1,d=a>=0?a:s.length,f=s.slice(u,d).filter(G),p=f.indexOf(e),m=c?.x??h,g=l?.x??r;c?l?e.x=m+(g-m)*(p+1)/(f.length+1):e.x=m+(g-m)*(p+1)/f.length:e.x=m+(g-m)*p/f.length,e.y=o,e.labelMode=`below`,e.linearSatVertical=!c||!l,e.stemOffset=e.linearSatVertical?70+p*45:90+p*72})}),b.setAttribute(`viewBox`,`0 0 ${t} ${o}`),b.setAttribute(`preserveAspectRatio`,`xMidYMin meet`),b.style.width=`100%`;let s=S.clientWidth/t;b.style.height=`${Math.max(680,Math.round(o*s))}px`,S.classList.add(`vue-ligne`),qe()}function Q(){if(N===`ligne`){Ve();return}S.classList.remove(`vue-ligne`),b.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),b.style.removeProperty(`width`),b.style.removeProperty(`height`);let e=1480;E.x=1600,E.y=1800/2,O.filter(e=>!e.vertical&&!e.satelliteOnly&&!e.independent&&!e.independent314&&!e.continuation311).forEach(t=>{t.y=t.extra?2280+Math.floor(t.extraIndex/2)*300:[`295-left`,`301-right`].includes(t.id)?e:320;let n=t.nodes.filter(e=>!G(e)),i=K(r).find(e=>V(e.name)===`coulogne`&&V(e.type)===`sp`&&!G(e)),a=t.id===`295-left`?-120:t.id===`301-left`&&i?i.x:t.side<0?160:t.extra?4300:3180,o=E.x+t.side*700,s={x:o,y:t.y},c={x:E.x+t.side*700*.34,y:E.y},l={x:o-t.side*700*.34,y:t.y},u=[{x:E.x,y:E.y,distance:0}],d=0;for(let e=1;e<=100;e+=1){let t=Ne(E,c,l,s,e/100),n=u[u.length-1];d+=Math.hypot(t.x-n.x,t.y-n.y),u.push({...t,distance:d})}let f=d+Math.abs(a-o);t.geometry={armEnd:s,control1:c,control2:l,samples:u,curveLength:d,totalLength:f,endX:a};let p=0;n.forEach((e,r)=>{e.pathDistance=f*(r+1)/n.length;let i=Pe(t,e.pathDistance);e.x=i.x,e.y=i.y,e.pathDistance<=d&&(p+=1),e.labelMode=r%2?`below`:`above`}),t.transitionCount=Math.max(1,p),Fe(t)}),O.filter(e=>e.satelliteOnly).forEach(Le),O.filter(e=>e.independent).forEach(Re),O.filter(e=>e.independent314).forEach(ze),O.filter(e=>e.continuation311).forEach(Be);let t=k.filter(e=>!G(e)),n=t.findIndex(e=>V(e.name)===`arras`),i=n>=0?n:Math.max(1,Math.floor(t.length*.58)),a=t.slice(0,i+1),o=t.slice(i),s=k.findIndex(e=>V(e.name)===`arras`&&!G(e)),c=k.slice(0,s+1);ke(a,[[3650,320],[3650,e]],c);let l=o.at(-1);if(l&&o.length>1){let e=o[0],t={x:e.x,y:2180},n={x:e.x-420,y:2600},r={x:e.x,y:t.y+420*.5522848},i={x:n.x+420*.5522848,y:n.y},a=[[e.x,e.y],[t.x,t.y]];for(let e=1;e<=48;e+=1){let o=Ne(t,r,i,n,e/48);a.push([o.x,o.y])}a.push([700,n.y]),ke(o,a),A={start:e,end:l,points:a,roundedCorner:!0,path:`M ${e.x} ${e.y} L ${t.x} ${t.y} C ${r.x} ${r.y}, ${i.x} ${i.y}, ${n.x} ${n.y} L 700 ${n.y}`}}else A=null;Ae(k),je(),O.filter(e=>e.vertical).forEach(Ie),Se();let u=Math.ceil(O.filter(e=>e.extra).length/2);b.setAttribute(`viewBox`,`-700 80 5500 ${3e3+u*300}`),qe()}function $(e,t){if(Math.abs(t.x-e.x)<1||Math.abs(t.y-e.y)<1)return`M ${e.x} ${e.y} L ${t.x} ${t.y}`;let n=t.x>=e.x?1:-1,r=Math.max(55,Math.abs(t.x-e.x)*.42);return`M ${e.x} ${e.y} C ${e.x+r*n} ${e.y}, ${t.x-r*n} ${t.y}, ${t.x} ${t.y}`}function He(e,t){if(e.continuation311&&e.routePath||e.independent314&&e.routePath)return e.routePath;if(e.satelliteOnly&&e.anchor)return[e.anchor,...e.nodes].slice(1).reduce((t,n,r)=>`${t} ${$([e.anchor,...e.nodes][r],n).replace(/^M [^C]+/,``)}`,`M ${e.anchor.x} ${e.anchor.y}`);if(e.vertical){let n=e.nodes.find(e=>!G(e)),r=e.lineCode===u?e.nodes.find(e=>V(e.name)===`fives`&&V(e.sat)===`sat5`):null,i={x:n?.x??e.anchor.x+(e.continuationOf?0:500),y:r?.y??(e.lineCode===u?n?.y:e.anchor.y)};return`M ${i.x} ${i.y} `+t.map(e=>`L ${e.x} ${e.y}`).join(` `)}if(e.independent)return t.slice(1).reduce((e,n,r)=>{let i=t[r];return`${e} ${$(i,n).replace(/^M\s+[-\d.]+\s+[-\d.]+\s+/,``)}`},`M ${t[0].x} ${t[0].y}`);if(e.geometry){let{armEnd:t,control1:n,control2:r,endX:i}=e.geometry;return`M ${E.x} ${E.y} C ${n.x} ${n.y}, ${r.x} ${r.y}, ${t.x} ${t.y} L ${i} ${e.y}`}let n=Math.min(e.transitionCount||1,t.length),r=t[n-1],i=r.x-E.x,a=`M ${E.x} ${E.y} C ${E.x+i*.34} ${E.y}, ${r.x-i*.34} ${r.y}, ${r.x} ${r.y}`;return t.slice(n).forEach(e=>{a+=` L ${e.x} ${e.y}`}),a}function Ue(e,t){let n=e.stemOffset||68+t%2*32;return{above:{x:0,y:-n,textX:0,textY:-n-20,anchor:`middle`},below:{x:0,y:n,textX:0,textY:n+31,anchor:`middle`},left:{x:-n,y:0,textX:-n-15,textY:9,anchor:`end`},right:{x:n,y:0,textX:n+15,textY:9,anchor:`start`}}[e.labelMode||`below`]}function We(e,t){let n=[e.name,e.type].filter(Boolean).join(` `),r=G(e),i=r?ve(e):``;if(N!==`ligne`&&Ce(e)){let t=J(e);return`<g class="station satellite line-${e.lineCode.slice(0,3)}" style="--node-line-color:${W(e.lineCode)}" data-node-id="${H(e.id)}" data-parent-key="${H(q(e))}" data-parent-label="${H(n)}" tabindex="0" aria-label="${H(`${e.sat}, poste ${n}`)}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="7"/><circle class="sat-family-marker" r="4.5" style="fill:${t};color:${t}"/><text class="station-sat" x="0" y="-28" style="fill:${t}">${H(i)}</text></g>`}if(r){if(N===`ligne`){let r=Ue(e,t),i=J(e),a=ve(e),o=e.linearSatVertical,s=o?r.x:r.x-12,c=o?r.y+13:r.y+8,l=o?-90:-48;return`<g class="station satellite line-${e.lineCode.slice(0,3)}${e.linearEndpoint?` is-line-endpoint`:``}" style="--node-line-color:${W(e.lineCode)}" data-node-id="${H(e.id)}" data-parent-key="${H(q(e))}" data-parent-label="${H(n)}" tabindex="0" aria-label="${H(`${e.sat}, poste ${n}`)}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="${e.linearEndpoint?13:5}"/><line class="sat-stem" x1="0" y1="0" x2="${r.x}" y2="${r.y}"/><circle class="sat-family-marker" cx="${r.x}" cy="${r.y}" r="7" style="fill:${i};color:${i}"/><text class="station-sat" x="${s}" y="${c}" transform="rotate(${l} ${s} ${c})" style="text-anchor:end;fill:${i}">${H(a)}</text></g>`}let r=Ue(e,t),a=J(e),o=_e(e),s=o?r.textY-15:r.textY,c=o?`${H(n)} <tspan x="${r.textX}" dy="1.05em">${H(e.sat)}</tspan>`:H(i);return`<g class="station satellite line-${e.lineCode.slice(0,3)}" style="--node-line-color:${W(e.lineCode)}" data-node-id="${H(e.id)}" data-parent-key="${H(q(e))}" data-parent-label="${H(n)}" tabindex="0" aria-label="${H(`${e.sat}, poste ${n}`)}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="3"/><line class="sat-stem" x1="0" y1="0" x2="${r.x}" y2="${r.y}"/><circle class="sat-family-marker" cx="${r.x}" cy="${r.y}" r="7" style="fill:${a};color:${a}"/><text class="station-sat" x="${r.textX}" y="${s}" style="text-anchor:${r.anchor};fill:${a}">${c}</text></g>`}let a=V(e.type)===`sst`,o=we(e),s={above:{x:0,y:a?-58:-38,anchor:`middle`},below:{x:0,y:a?80:58,anchor:`middle`},left:{x:a?-52:-32,y:9,anchor:`end`},right:{x:a?52:32,y:9,anchor:`start`}}[e.labelMode||`above`],c=N===`ligne`?{x:28,y:a?-28:-12,anchor:`start`}:s,l=N===`ligne`?`<line class="metro-station-leader" x1="0" y1="0" x2="20" y2="-20"/>`:``,u=N===`ligne`?` transform="rotate(-48 ${c.x} ${c.y})"`:``,d=j.has(q(e))?`<circle class="sat-family-marker" r="5" style="fill:${J(e)};color:${J(e)}"/>`:``,f=d&&!a?`;fill:${J(e)}`:``,p=f?` sat-family-label`:``;return`<g class="station line-${e.lineCode.slice(0,3)}${a?` is-sst`:``}${o?` is-junction`:``}${e.linearEndpoint?` is-line-endpoint`:``}" style="--node-line-color:${W(e.lineCode)}" data-node-id="${H(e.id)}" data-parent-key="${H(q(e))}" tabindex="0" aria-label="${H(n)}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="${a?20:o?15:e.linearEndpoint?13:9}"/>${d}${l}<text class="station-label linear-station-label${p}" x="${c.x}" y="${c.y}"${u} style="text-anchor:${c.anchor}${f}">${H(n)}</text></g>`}function Ge(e,t,n=``){let r={above:{x:0,y:-58,anchor:`middle`},below:{x:0,y:82,anchor:`middle`},left:{x:-44,y:11,anchor:`end`},right:{x:44,y:11,anchor:`start`}}[e.junctionLabelMode||`above`],i=j.has(q(e))?`<circle class="sat-family-marker" r="6" style="fill:${J(e)};color:${J(e)}"/>`:``,a=i?`;fill:${J(e)}`:``,o=a?` sat-family-label`:``;return`<g class="hub junction ${n}" data-node-id="${H(e.detailNodeId||e.id)}" data-parent-key="${H(q(e))}" tabindex="0" aria-label="${H(t)}" transform="translate(${e.x} ${e.y})"><circle r="19"/>${i}<text class="hub-title${o}" x="${r.x}" y="${r.y}" style="text-anchor:${r.anchor}${a}">${H(t)}</text></g>`}function Ke(){let e=[],[t,n,a,o]=b.getAttribute(`viewBox`).split(/\s+/).map(Number),s={left:t+20,right:t+a-20,top:n+20,bottom:n+o-20},c=[{node:E,title:E.name},...k.filter(X).map(e=>({node:e,title:[e.name,e.type].filter(Boolean).join(` `)}))];c.forEach(({node:t})=>e.push({left:t.x-23,right:t.x+23,top:t.y-23,bottom:t.y+23})),[...O.flatMap(e=>e.nodes.filter(e=>!G(e))),...k.filter(e=>!G(e)&&!X(e))].forEach(t=>{let n=V(t.type)===`sst`?19:13;e.push({left:t.x-n,right:t.x+n,top:t.y-n,bottom:t.y+n})});let l=[];O.filter(e=>!e.vertical).forEach(e=>{let t=[e.anchor||E,...e.nodes.filter(e=>!G(e))];t.slice(1).forEach((e,n)=>l.push([t[n],e])),e.endAnchor&&t.length>1&&l.push([t[t.length-1],e.endAnchor])});let u=k.filter(e=>!G(e));u.slice(1).forEach((e,t)=>l.push([u[t],e]));let d=K(i).find(e=>V(e.name)===`bailleul sir bethoult`&&!G(e)),f=k.find(e=>V(e.name)===`arras`&&!G(e)),p=K(r).find(e=>V(e.name)===`la madeleine`&&!G(e)),m=k.find(e=>V(e.name)===`lille gare`&&!G(e));d&&f&&l.push([d,f]),p&&m&&l.push([p,m]);let h=(e,t)=>Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left))*Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)),g=([e,t],n)=>{for(let r=1;r<20;r+=1){let i=r/20,a=e.x+(t.x-e.x)*i,o=e.y+(t.y-e.y)*i;if(a>n.left&&a<n.right&&o>n.top&&o<n.bottom)return!0}return!1},_=t=>{let n=Math.max(0,s.left-t.left)+Math.max(0,t.right-s.right)+Math.max(0,s.top-t.top)+Math.max(0,t.bottom-s.bottom),r=l.reduce((e,n)=>e+(g(n,t)?5e4:0),0);return n*1e3+r+e.reduce((e,n)=>e+h(t,n),0)},v=(e,t,n)=>{let r=Math.max(190,t.length*22);return n===`above`?{left:e.x-r/2,right:e.x+r/2,top:e.y-104,bottom:e.y-45}:n===`below`?{left:e.x-r/2,right:e.x+r/2,top:e.y+45,bottom:e.y+106}:n===`left`?{left:e.x-r-44,right:e.x-40,top:e.y-31,bottom:e.y+28}:{left:e.x+40,right:e.x+r+44,top:e.y-31,bottom:e.y+28}};c.forEach(({node:t,title:n})=>{if(t===E){t.junctionLabelMode=`above`,e.push(v(t,n,`above`));return}let r=null;[`above`,`right`,`left`,`below`].forEach((e,i)=>{let a=v(t,n,e),o=_(a)+i*100;(!r||o<r.score)&&(r={mode:e,box:a,score:o})}),t.junctionLabelMode=r.mode,e.push(r.box)});let y=(e,t)=>{let n=Z(e),r=V(e.type)===`sst`,i=r?52:32,a=r?32:23;return t===`above`?{left:e.x-n/2,right:e.x+n/2,top:e.y-(r?104:73),bottom:e.y-(r?38:28)}:t===`below`?{left:e.x-n/2,right:e.x+n/2,top:e.y+(r?38:28),bottom:e.y+(r?112:80)}:t===`left`?{left:e.x-n-i-4,right:e.x-i,top:e.y-a,bottom:e.y+a}:{left:e.x+i,right:e.x+n+i+4,top:e.y-a,bottom:e.y+a}},ee=[...O.map(e=>({nodes:e.nodes.filter(e=>!G(e)),parent:e.anchor||E})),{nodes:k.filter(e=>!G(e)),parent:null}],te=new Set(O.filter(e=>e.continuationOf&&e.anchor).map(e=>e.anchor.id));ee.forEach(({nodes:t,parent:n})=>{t.forEach((r,i)=>{if(X(r))return;if(te.has(r.id)){r.labelMode=`right`,e.push(y(r,r.labelMode));return}let a=t[i-1]||n||r,o=t[i+1]||a,s=Math.abs(o.x-a.x),c=Math.abs(o.y-a.y),l=Math.min(s,c)/Math.max(1,Math.max(s,c))>.35?i%2?[`left`,`right`,`below`,`above`]:[`right`,`left`,`above`,`below`]:s>=c?i%2?[`below`,`above`,`right`,`left`]:[`above`,`below`,`left`,`right`]:i%2?[`right`,`left`,`above`,`below`]:[`left`,`right`,`above`,`below`],u=null;l.forEach(e=>{let t=y(r,e),n=_(t);(!u||n<u.score)&&(u={mode:e,box:t,score:n})}),r.labelMode=u.mode,e.push(u.box)})});{let t=(e,t,n)=>{let r=Z(e),i=_e(e)?30:0;return t===`above`?{left:e.x-r/2,right:e.x+r/2,top:e.y-n-60-i,bottom:e.y-n+8}:t===`below`?{left:e.x-r/2,right:e.x+r/2,top:e.y+n-8,bottom:e.y+n+60+i}:t===`left`?{left:e.x-n-r-18,right:e.x-n+5,top:e.y-30-i/2,bottom:e.y+30+i/2}:{left:e.x+n-5,right:e.x+n+r+18,top:e.y-30-i/2,bottom:e.y+30+i/2}};[...O.map(e=>e.nodes),k].forEach(n=>{n.forEach((r,i)=>{if(!G(r))return;if(Ce(r)){e.push({left:r.x-Z(r)/2,right:r.x+Z(r)/2,top:r.y-60,bottom:r.y-10});return}let a=i-1,o=i+1;for(;a>=0&&G(n[a]);)--a;for(;o<n.length&&G(n[o]);)o+=1;let s=n[a],c=n[o],l=(c?.x??r.x+1)-(s?.x??r.x-1),u=(c?.y??r.y)-(s?.y??r.y),d=Math.abs(l)>=Math.abs(u),f=d?i%2?[`below`,`above`]:[`above`,`below`]:i%2?[`right`,`left`]:[`left`,`right`],p=[s,c].find(e=>e&&X(e)),m=p===s&&a===i-1||p===c&&o===i+1,g=!d&&m&&[`left`,`right`].includes(p?.junctionLabelMode)?p.junctionLabelMode:null,v=g?f.filter(e=>e!==g):f,y=null;[72,132,192,252,312,372,432,492,552,612,672,732,792,852].forEach((n,i)=>{v.forEach((a,o)=>{let s=t(r,a,n),c=e.reduce((e,t)=>e+h(s,t),0),l=_(s)+i*20+o*5;(!y||c<y.collision||c===y.collision&&l<y.score)&&(y={mode:a,offset:n,box:s,collision:c,score:l})})}),r.labelMode=y.mode,r.stemOffset=y.offset,e.push(y.box)})})}}function qe(){if($e(),tt(),N===`ligne`){Je();return}Ke();let e=O.map(e=>{if(e.satelliteOnly)return!e.anchor||!e.nodes.length?``:`<path class="branch sat-only-branch line-${e.lineCode.slice(0,3)}" style="stroke:${W(e.lineCode)}" d="${He(e,e.nodes)}"/>`;let t=e.nodes.filter(e=>!G(e));if(!t.length)return``;if(e.continuation311&&e.routePath)return`<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${W(e.lineCode)}" d="${e.routePath}"/>`;if(e.independent314&&e.routePath){let t=e.nodes[0];return`${e.anchor&&t?`<path class="independent-connector" style="stroke:${W(e.lineCode)}" d="${$(e.anchor,t)}"/>`:``}<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${W(e.lineCode)}" d="${e.routePath}"/>`}if(e.independent){let n=t[0],r=t[t.length-1],i=W(e.lineCode),a=e.anchor?`<path class="independent-connector" style="stroke:${i}" d="${$(e.anchor,n)}"/>`:``,o=e.endAnchor?`<path class="independent-connector" style="stroke:${i}" d="${$(r,e.endAnchor)}"/>`:``;return`${a}<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${i}" d="${He(e,t)}"/>${o}`}let n=`<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${W(e.lineCode)}" d="${He(e,t)}"/>`,r=t[t.length-1],i=e.nodes.indexOf(r),a=[r,...e.nodes.slice(i+1).filter(G)];return`${n}${a.slice(1).map((t,n)=>`<path class="branch sat-only-branch line-${e.lineCode.slice(0,3)}" style="stroke:${W(e.lineCode)}" d="${$(a[n],t)}"/>`).join(``)}`}).join(``),t=k.filter(Y),n=k.filter(e=>!G(e)),a=n.findIndex(e=>V(e.name)===`arras`),o=n.slice(0,a+1),s=`${o.slice(1).map((e,t)=>`<path class="branch line-272" d="${$(o[t],e)}"/>`).join(``)}${A?`<path class="branch line-272" d="${Me()}"/>`:``}`,c=K(r).find(e=>V(e.name)===`la madeleine`&&!G(e)),l=K(r).find(e=>V(e.name)===`la madeleine`&&V(e.sat)===`sat1`)||c,d=K(i).find(e=>V(e.name)===`bailleul sir bethoult`&&!G(e)),f=t.find(e=>V(e.name)===`lille gare`),p=t.find(e=>V(e.name)===`arras`&&!G(e)),m=k.find(e=>V(e.name)===`fives`&&V(e.type)===`sspa`&&!G(e)),h=K(u).find(e=>V(e.name)===`fives`&&V(e.sat)===`sat5`),g=m&&h?`<path class="independent-connector" style="stroke:${W(u)}" d="${$(m,h)}"/>`:``,_=`${l&&f?`<path class="connector" d="${$(l,f)}"/>`:``}${d&&p?`<path class="connector" d="${$(d,p)}"/>`:``}${g}`;ne.innerHTML=`${e}${s}${_}`;let v=`${O.flatMap(e=>e.nodes.filter(Y).map(t=>We(t,e.nodes.indexOf(t)))).join(``)}${k.filter(e=>Y(e)&&!X(e)).map(e=>We(e,k.indexOf(e))).join(``)}`,y=k.filter(e=>Y(e)&&X(e)).map(e=>Ge(e,[e.name,e.type].filter(Boolean).join(` `))).join(``);x.innerHTML=`${v}${y}${Ge(E,`Hazebrouck`,`root-junction`)}`,Ye()}function Je(){let e=at(),t=e.map(({code:e,postes:t})=>{let n=t[0].y,r=W(e),i=f.cardStart,a=n-f.cardLineOffset,o=f.cardEnd-f.cardStart,s=f.cardHeight,c=a+32;t.forEach(e=>{e.linearEndpoint=!1});let l=t.filter(Y),u=l[0],d=l.at(-1);u&&(u.linearEndpoint=!0),d&&(d.linearEndpoint=!0);let p=u===d?f.lineEnd:d?.x,m=u&&d?`<line class="branch line-${e.slice(0,3)}" style="stroke:${r}" x1="${u.x}" y1="${n}" x2="${p}" y2="${n}"/>`:``;return`<g class="metro-linear-line">
            <rect class="metro-line-card" x="${i}" y="${a}" width="${o}" height="${s}" rx="30"/>
            <rect class="metro-line-badge" style="stroke:${r}" x="70" y="${c}" width="350" height="90" rx="41"/>
            <text class="metro-line-name" style="fill:${r}" x="245" y="${c+90/2+2}">Ligne ${H(e)}</text>
            ${m}
          </g>`}).join(``);ne.innerHTML=t,x.innerHTML=e.flatMap(({postes:e})=>e.filter(Y).map((e,t)=>We(e,t))).join(``),Ye()}function Ye(){te.setAttribute(`transform`,`translate(${z.x} ${z.y}) scale(${z.k})`)}function Xe(){le||=requestAnimationFrame(()=>{le=0,Ye()})}function Ze(e,t,n=w){let r=S.getBoundingClientRect(),i=S.scrollLeft+10,a=S.scrollTop+10,o=S.scrollLeft+e-r.left+14,s=S.scrollTop+t-r.top+14,c=Math.max(i,S.scrollLeft+r.width-n.offsetWidth-10),l=Math.max(a,S.scrollTop+r.height-n.offsetHeight-10);n.style.left=`${Math.max(i,Math.min(o,c))}px`,n.style.top=`${Math.max(a,Math.min(s,l))}px`}function Qe(t,n,r){if(!t?.classList.contains(`satellite`))return;tt(),M&&M!==t&&M.classList.remove(`is-sat-hover`),x.querySelectorAll(`.is-sat-parent-highlight`).forEach(e=>e.classList.remove(`is-sat-parent-highlight`)),M=t,t.classList.add(`is-sat-hover`);let i=t.dataset.parentKey;[...x.querySelectorAll(`[data-parent-key]`)].filter(e=>!e.classList.contains(`satellite`)&&e.dataset.parentKey===i).forEach(e=>e.classList.add(`is-sat-parent-highlight`));let a=Object.values(D).flat().find(e=>e.id===t.dataset.nodeId);if(!a)return;let o=q(a),s=Object.values(D).flat().filter(e=>!G(e)&&q(e)===o),c=s.find(e=>e.lineCode===a.lineCode)||s.find(e=>e.sourceLine===a.sourceLine)||s[0],l=ce.get(a.id)||{nombreAppareils:0,pk:``},u=c&&ce.get(c.id)?.nombreAppareils||0,d=e[a.sourceLine]||`Nom de ligne non renseigné`,f=[a.name,a.type].filter(Boolean).join(` `);w.innerHTML=`<strong>${H(a.sat)} · ${H(f)}</strong><br>${H(a.sourceLine)} · ${H(d)}${l.pk?`<br>${H(l.pk)}`:``}<br>Appareils dans ce SAT : ${l.nombreAppareils}<br>Appareils au poste principal : ${u}`,w.classList.add(`is-visible`),Ze(n,r)}function $e(){M?.classList.remove(`is-sat-hover`),M=null,x.querySelectorAll(`.is-sat-parent-highlight`).forEach(e=>e.classList.remove(`is-sat-parent-highlight`)),w.classList.remove(`is-visible`)}function et(t,n,r){let i=Object.values(D).flat().find(e=>e.id===t.dataset.nodeId);if(!i||G(i))return;$e();let a=[...new Map(Object.values(D).flat().filter(e=>q(e)===q(i)).map(e=>[`${e.sourceLine}:${e.key}`,e])).values()].filter(G),o=a.length,s=a.reduce((e,t)=>e+(ce.get(t.id)?.nombreAppareils||0),0),c=ce.get(i.id)||{nombreAppareils:0,pk:``},l=c.nombreAppareils+s,u=e[i.sourceLine]||`Nom de ligne non renseigné`,d=o?`<br>SAT associés : ${o}<br>Appareils au poste : ${c.nombreAppareils}<br>Appareils dans les SAT : ${s}<br>Appareils au total : ${l}`:`<br>Appareils au poste : ${c.nombreAppareils}`;T.innerHTML=`<strong>${H([i.name,i.type].filter(Boolean).join(` `))}</strong><br>${H(i.sourceLine)} · ${H(u)}${c.pk?`<br>${H(c.pk)}`:``}${d}`,T.classList.add(`is-visible`),Ze(n,r,T)}function tt(){T.classList.remove(`is-visible`)}function nt(e){return e.target instanceof Element?e.target.closest(`.station, .hub.junction[data-node-id]`):null}function rt(e){if(!R||R.pointerId!==e.pointerId)return;let t=Math.hypot(e.clientX-R.clientX,e.clientY-R.clientY),n=R.groupe;R=null,!(t>12||L.size>1||!n?.isConnected)&&(n.classList.contains(`satellite`)?Qe(n,e.clientX,e.clientY):et(n,e.clientX,e.clientY))}x.addEventListener(`pointerover`,e=>{let t=e.target.closest(`.station, .hub.junction[data-node-id]`);!t||t.contains(e.relatedTarget)||(t.classList.contains(`satellite`)?Qe(t,e.clientX,e.clientY):et(t,e.clientX,e.clientY))}),x.addEventListener(`pointermove`,e=>{let t=e.target.closest(`.station, .hub.junction[data-node-id]`);t&&Ze(e.clientX,e.clientY,t.classList.contains(`satellite`)?w:T)}),x.addEventListener(`pointerout`,e=>{let t=e.target.closest(`.station, .hub.junction[data-node-id]`);!t||t.contains(e.relatedTarget)||(t.classList.contains(`satellite`)?$e():tt())}),x.addEventListener(`focusin`,e=>{let t=e.target.closest(`.station, .hub.junction[data-node-id]`);if(!t)return;let n=t.getBoundingClientRect();t.classList.contains(`satellite`)?Qe(t,n.right,n.top+n.height/2):et(t,n.right,n.top+n.height/2)}),x.addEventListener(`focusout`,e=>{e.target.closest(`.station, .hub.junction[data-node-id]`)?.classList.contains(`satellite`)?$e():tt()});function it(){let e=[E,...O.flatMap(e=>e.nodes.filter(e=>!G(e))),...k.filter(e=>!G(e))],t=new Map;return e.forEach(e=>{let n=e===E?E.name:[e.name,e.type].filter(Boolean).join(` `),r=V(n);r&&!t.has(r)&&t.set(r,{node:e,libelle:n})}),[...t.values()].sort((e,t)=>e.libelle.localeCompare(t.libelle,`fr`,{sensitivity:`base`}))}function at(){return h.filter(e=>!P||e===P).sort((e,t)=>{let n=oe===`asc`?1:-1,r=e.localeCompare(t,`fr`,{numeric:!0});return se===`postes`?(K(e).filter(e=>!G(e)).length-K(t).filter(e=>!G(e)).length)*n||r:r*n}).map(e=>({code:e,postes:de(e)})).filter(({postes:e})=>e.length&&(C.checked||e.some(e=>!G(e))))}n.rechercherPosteMetro=e=>{let t=V(e);if(!t)return P?(P=null,Q(),!1):!1;let r=it().find(({libelle:e})=>V(e)===t);if(!r)return P&&(P=null,Q()),!1;let i=P!==r.node.lineCode;P=r.node.lineCode,N===`ligne`?i&&Q():n.changerDispositionMetro(`ligne`);let a=r.node.detailNodeId||r.node.id,o=[...x.querySelectorAll(`[data-node-id]`)].find(e=>e.dataset.nodeId===a);return o?(x.querySelectorAll(`.is-search-highlight`).forEach(e=>e.classList.remove(`is-search-highlight`)),o.getBoundingClientRect(),o.classList.add(`is-search-highlight`),!0):!1};function ot(e){let t=b.getBoundingClientRect(),n=b.viewBox.baseVal;return{x:n.x+(e.clientX-t.left)*n.width/t.width,y:n.y+(e.clientY-t.top)*n.height/t.height}}function st(e){return Math.min(4,Math.max(.5,e))}function ct(){let e=b.viewBox.baseVal;return{x:e.x+e.width/2,y:e.y+e.height/2}}function lt(e,t=ct()){let n=z.k,r=st(n*e);if(Math.abs(r-n)<.001)return;let i=(t.x-z.x)/n,a=(t.y-z.y)/n;z.x=t.x-i*r,z.y=t.y-a*r,z.k=r,Xe()}n.zoomerCarteMetro=lt,n.changerDispositionMetro=e=>{![`condense`,`ligne`].includes(e)||e===N||(N=e,z={x:0,y:0,k:1},Q(),n.dispatchEvent(new CustomEvent(`metro-disposition-change`,{detail:{disposition:N}})))},n.changerTriLignesMetro=(e,t)=>{![`numero`,`postes`].includes(e)||![`asc`,`desc`].includes(t)||e===se&&t===oe||(se=e,oe=t,N===`ligne`&&Q())};function ut(){return[...L.values()].slice(0,2)}function dt(){let[e,t]=ut();if(!e||!t)return;F=null,S.classList.remove(`is-panning`);let n=ot({clientX:(e.clientX+t.clientX)/2,clientY:(e.clientY+t.clientY)/2}),r=Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY);I={distance:Math.max(1,r),zoom:z.k,mondeX:(n.x-z.x)/z.k,mondeY:(n.y-z.y)/z.k}}function ft(){let[e,t]=ut();if(!I||!e||!t)return;let n=ot({clientX:(e.clientX+t.clientX)/2,clientY:(e.clientY+t.clientY)/2}),r=Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY),i=st(I.zoom*r/I.distance);z.x=n.x-I.mondeX*i,z.y=n.y-I.mondeY*i,z.k=i,Xe()}return b.addEventListener(`pointerdown`,e=>{let t=nt(e);if(R=t&&e.button===0?{pointerId:e.pointerId,clientX:e.clientX,clientY:e.clientY,groupe:t}:null,N===`ligne`){if(e.pointerType!==`touch`)return;L.set(e.pointerId,{clientX:e.clientX,clientY:e.clientY}),L.size>=2&&(e.preventDefault(),dt(),b.setPointerCapture(e.pointerId));return}if(e.preventDefault(),document.getSelection()?.removeAllRanges(),e.pointerType===`touch`&&(L.set(e.pointerId,{clientX:e.clientX,clientY:e.clientY}),L.size>=2)){dt(),b.setPointerCapture(e.pointerId);return}let n=ot(e);F={x:n.x-z.x,y:n.y-z.y},S.classList.add(`is-panning`),b.setPointerCapture(e.pointerId)}),b.addEventListener(`pointermove`,e=>{if(N===`ligne`){e.pointerType===`touch`&&L.has(e.pointerId)&&(L.set(e.pointerId,{clientX:e.clientX,clientY:e.clientY}),I&&L.size>=2&&(e.preventDefault(),ft()));return}if(e.pointerType===`touch`&&L.has(e.pointerId)&&(L.set(e.pointerId,{clientX:e.clientX,clientY:e.clientY}),I&&L.size>=2)){ft();return}let t=ot(e);F&&(z.x=t.x-F.x,z.y=t.y-F.y,Xe())}),[`pointerup`,`pointercancel`,`pointerleave`].forEach(e=>b.addEventListener(e,t=>{if(e===`pointerup`&&rt(t),e!==`pointerup`&&(R=null),t.pointerType===`touch`&&L.delete(t.pointerId),I){I=null,F=null,S.classList.remove(`is-panning`),L.size>=2&&dt();return}F=null,S.classList.remove(`is-panning`)})),b.addEventListener(`wheel`,e=>{N===`ligne`&&!e.ctrlKey&&!e.metaKey||(e.preventDefault(),document.getSelection()?.removeAllRanges(),lt(e.deltaY<0?1.15:.87,ot(e)))},{passive:!1}),b.addEventListener(`selectstart`,e=>e.preventDefault()),b.addEventListener(`dragstart`,e=>e.preventDefault()),document.getElementById(`resetLayout`).addEventListener(`click`,()=>{z={x:0,y:0,k:1},Q()}),window.addEventListener(`resize`,()=>{N===`ligne`&&Ve()}),document.getElementById(`defaultView`).addEventListener(`click`,()=>{C.checked=!1,n.classList.add(`satellites-hidden`),z={x:0,y:0,k:1},De(),Q()}),C.addEventListener(`change`,()=>{$e(),n.classList.toggle(`satellites-hidden`,!C.checked),N===`ligne`&&Ve()}),Promise.all([fetch(`./carte-heuristique.json`,{cache:`no-store`}).then(e=>e.ok?e.json():null).catch(()=>null),fetch(`./postes.geojson`,{cache:`no-store`}).then(e=>{if(!e.ok)throw Error(`postes.geojson (${e.status})`);return e.json()})]).then(([e,t])=>{let r=Array.isArray(e?.lines),i=r?e.lines:[];r&&(h=i.map(e=>B(e.code)).filter(Boolean),m=Object.fromEntries(i.map(e=>[B(e.code),Array.isArray(e.postes)?e.postes:[]])));let a=[...new Set([...Object.keys(p),...h])];D=Object.fromEntries(a.map(e=>[e,Ee(t,e)])),De(),Q(),Oe().then(()=>{N===`ligne`?Q():qe()}).catch(e=>console.warn(`Chargement des détails PK/appareils impossible`,e)),re.textContent=`${h.reduce((e,t)=>e+K(t).length,0)} postes · ordre manuel conservé`,n.dispatchEvent(new CustomEvent(`metro-postes-prets`,{detail:{postes:it().map(({libelle:e})=>e)}}))}).catch(e=>{console.error(e),re.textContent=`Impossible de charger les postes`,x.innerHTML=`<text class="error" x="1600" y="750">Chargement impossible</text>`})})()}export{n as initialiserCarteMetro};