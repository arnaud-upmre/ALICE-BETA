function e(e){e.innerHTML=`<style>.metro-zone {
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
</div>`,e.insertAdjacentHTML(`afterbegin`,`<style>.line-267 { stroke: #8d6ac8; } .station.line-267 .station-dot { stroke: #8d6ac8; } .station.line-267 .sat-stem { stroke: #8d6ac8; } .line-212 { stroke: #c65a8d; } .station.line-212 .station-dot { stroke: #c65a8d; } .station.line-212 .sat-stem { stroke: #c65a8d; } #metroZone .station-label { font-size: 40px !important; font-weight: 500; } #metroZone .station.satellite .station-label { font-size: 34px !important; font-weight: 525; } #metroZone .station-sat { font-size: 30px !important; font-weight: 525; } #metroZone .station.is-sst .station-label { font-size: 48px !important; } #metroZone .station.is-junction .station-dot { stroke-width: 7; } #metroZone .station.is-junction .station-label { font-size: 46px !important; font-weight: 600; } #metroZone .independent-connector { fill: none; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 12 12; opacity: .8; } #metroZone .hub .hub-title, #metroZone .hub.junction .hub-title { font-size: 54px !important; font-weight: 650 !important; }</style>`),e.querySelector(`.metro-toolbar`)?.remove(),e.insertAdjacentHTML(`afterbegin`,`<style>.station .sat-stem, .station .station-dot { stroke: var(--node-line-color); }</style>`),e.insertAdjacentHTML(`beforeend`,`<style>
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

    #metroZone.satellites-hidden .station.satellite,
    #metroZone.satellites-hidden .sat-only-branch {
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
      max-width: 260px;
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
  </style>`),(()=>{let t=`295000`,n=`301000`,r=`301306`,i=`304000`,a=`314000`,o=`311000`,s=`272000`,c=`267000`,l=`212000`,u={[t]:[`Curie|SSP|SAT2`,`Curie|SSP`,`Coulogne|SP`,`Coulogne|SP|SAT1`,`Nortkerque|P`,`Audruicq|L`,`Saint Omer|L|SAT3`,`Saint Omer|L`,`Saint Omer|L|SAT2`,`Saint Omer|L|SAT1`,`Arques|P`,`Haute Loge|SSP`,`Strazeele|SP|SAT1`,`Strazeele|SP`,`Strazeele|SP|SAT2`,`Steenwerck|SSP`,`Armentières|SS`,`Lambersart|SSP|SAT2`,`Lambersart|SSP`,`Lambersart|SSP|SAT1`,`La madeleine|L|SAT2`,`La madeleine|L`,`La madeleine|L|SAT1`],[n]:[`Dunkerque|SSPA`,`Coudekerque|SST|SAT1`,`Coudekerque|SST`,`Esquelbecq|SS`,`Arneke|SSP`,`Cassel|S|SAT2`,`Volck Veld|SP`,`Hazebrouck|SSPA`,`Thiennes|SP`,`Lillers|SSP`,`Bethune|SSP`,`Bethune|A`,`Bethune SUD|SS`,`Verquigneul|SST`,`Bollaert|SSP`,`Lens|A`,`Lens|Atelier`,`Bailleul Sir Bethoult|SP`],[r]:[`Coudekerque|SST|SAT2`],[i]:[`Grande Synthe IA2|A`,`PE4 Pondereux|A`,`Puyt Houck|SSPA`,`Bif puyt houck ouest|L`,`PE5 Mardyck|A`,`PE3 Bif Coupvent|A`,`Bourbourg|S`,`Gravelines|L|SAT1`,`Gravelines|L`,`Gravelines|L|SAT2`,`Gravelines|L|SAT3`,`Bif coulogne|L`],[a]:`Curie|SSP|SAT4.Curie|SSP|SAT3.Curie|SSP|SAT1.Coulogne|SP|SAT2.Riviere|SSPA.Riviere|SSPA|SAT1.Coquelles|L|SAT4.Coquelles|L|SAT5.Coquelles|L.Coquelles|L|SAT3.Coquelles|L|SAT2.Coquelles|L|SAT1.Rue verte|L|SAT5.Rue verte|L|SAT4.Rue verte|L|SAT3.Rue verte|L.Rue verte|L|SAT2.Rue verte|L|SAT1.Pays Blanc|P|SAT2.Moulin|S|SAT1.Tricat|SP.Caffiers|L|SAT2.Caffiers|L|SAT1.Caffiers|L.Marquise|SSP|SAT2.Marquise|SSP|SAT1.Marquise|SSP.Hauteville|SSPA`.split(`.`),[o]:[`Hauteville|SSPA|SAT3`,`Hauteville|SSPA|SAT2`,`Hauteville|SSPA|SAT1`,`Pont de briques|SST|SAT1`,`Pont de briques|SST`,`Dannes|SSP`,`Etaples|SSP`,`Etaples|SSP|SAT2`,`Etaples|SSP|SAT1`,`Rang|SSP`],[s]:`Lille Gare|SSPA.Fives|SSPA|SAT6.Fives|SSPA|SAT3.Fives|SSPA|SAT2.Saint Sauveur|L.Fives|SSPA.Fives|SSPA|SAT1.Saint Sauveur|A.Ronchin|P|SAT1.Ronchin|P.Wattignies|SP.Templemars|L.Seclin|L.Harponlieu|L-A.Ostricourt|SSP.Douai|SSPA.Saint Eloi|SSP.Saint Eloi|SSP|SAT1.Roeux|SP.Fampoux|S|SAT I16.Fampoux|S|SAT I21.Arras|SSPA.Mercatel|SP|SAT3.Boisleux|SSP|SAT1.Boisleux|SSP.Boisleux|SSP|SAT2.Achiet|SST.Achiet|SST|SAT1.Aveluy|SP.Aveluy|SP|SAT.Mericourt|SSP.Corbie|SS.Lamotte|SST.Longueau|SA.Ailly sur Noye|SSP.La Faloise|SP.Gannes|SST.Saint Just|SSP`.split(`.`),[c]:[`Fives|SSPA|SAT5`,`Lesquin|SP`,`Lesquin|SP|SAT1`,`Orchies|SP`,`Beuvrage|SSP`,`Valenciennes|SS`,`Valenciennes|A`,`Faubourg|SSP`,`Maing|SST`,`Le Quesnoy|SSP`,`Berlaimont|SP`,`Leval|SP`,`Avesnes|SSP`,`Fourmies|SST`],[l]:[`Hirson|SSPA`,`Aouste|SP`]},d=u,f=Object.keys(u),p={[t]:`#ef985f`,[n]:`#6f9ed7`,[r]:`#d85f8f`,[i]:`#e0b72f`,[a]:`#3f8f6b`,[o]:`#5167a5`,[s]:`#2fa9a5`,[c]:`#8d6ac8`,[l]:`#c65a8d`},m=[`#d97706`,`#64748b`,`#dc5a78`,`#198b67`,`#7c5cc4`,`#3f7fbf`],h=`#e3313c`,g=[`#c94d1d`,`#c9911d`,`#adc91d`,`#66c91d`,`#2ac91d`,`#1dc963`,`#1dc9a4`,`#1db2c9`,`#1d75c9`,`#1d2ac9`,`#631dc9`,`#a41dc9`,`#c91d91`,`#c91d66`,`#64748b`],_=2400,v=document.getElementById(`mindmap`),y=document.getElementById(`world`),ee=document.getElementById(`branches`),b=document.getElementById(`stations`),x=document.getElementById(`mapShell`),S=document.getElementById(`showSats`),te=document.getElementById(`summary`),C=document.createElement(`div`);C.className=`sat-tooltip`,C.setAttribute(`role`,`tooltip`),x.append(C),v.setAttribute(`viewBox`,`-320 80 4820 2250`),S.checked=!1,e.classList.add(`satellites-hidden`);let w={id:`hub-hazebrouck`,name:`Hazebrouck`,x:1600,y:900,hub:!0},T={[t]:[],[n]:[],[r]:[],[i]:[],[a]:[],[o]:[],[s]:[],[c]:[],[l]:[]},E=[],D=[],O=null,ne=[],k=new Set,A=new Map,j=null,M=null,N=null,re=0,P=new Map,F={x:0,y:0,k:1},I=e=>String(e??``).trim(),L=e=>I(e).toLocaleLowerCase(`fr`),R=e=>I(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`),z=(e,t,n)=>[L(e),L(t),L(n)].filter(Boolean).join(`|`),ie=e=>{let t=I(e).replace(/\D+/g,``);return t?t.padStart(6,`0`):``},B=e=>p[e]||m[Math.max(0,f.indexOf(e))%m.length],V=e=>e.sat!==``,H=e=>z(e.name,e.type,``),ae=e=>Object.values(T).flat().filter(t=>!V(t)&&H(t)===H(e)),U=e=>{if(!V(e))return!1;let t=ae(e);return!t.length||Math.min(...t.map(t=>Math.hypot(t.x-e.x,t.y-e.y)))>600},oe=e=>U(e)?[e.name,e.type,e.sat].filter(Boolean).join(` `):e.sat,W=e=>{if(L(e.type)===`sst`)return h;let t=H(e);if(A.has(t))return A.get(t);let n=0;for(let e=0;e<t.length;e+=1)n=n*31+t.charCodeAt(e)>>>0;return g[n%g.length]},se=(e,t)=>{let n=e=>[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16)),[r,i,a]=n(e),[o,s,c]=n(t);return Math.hypot(r-o,i-s,a-c)},ce=e=>{let[t,n,r]=[1,3,5].map(t=>Number.parseInt(e.slice(t,t+2),16)/255),i=Math.max(t,n,r),a=i-Math.min(t,n,r);return a?((i===t?(n-r)/a%6:i===n?(r-t)/a+2:(t-n)/a+4)*60+360)%360:0},le=(e,t)=>{let n=Math.abs(ce(e)-ce(t));return Math.min(n,360-n)};function ue(){let e=Object.values(T).flat(),t=new Map,n=new Map,r=(e,t)=>{!e||!t||e===t||(n.has(e)||n.set(e,new Set),n.has(t)||n.set(t,new Set),n.get(e).add(t),n.get(t).add(e))};Object.values(T).forEach(e=>{let t=e.map(H).filter(e=>k.has(e)).filter((e,t,n)=>e!==n[t-1]);t.slice(1).forEach((e,n)=>r(t[n],e))}),e.forEach(e=>{let n=H(e);if(!k.has(n))return;let r=t.get(n);(!r||!V(e)&&V(r))&&t.set(n,e)});let i=[...t.entries()],a=new Map,o=new Map(g.map(e=>[e,0]));i.filter(([,e])=>L(e.type)===`sst`).forEach(([e])=>a.set(e,h));let s=([,e])=>i.filter(([,t])=>t!==e&&Math.hypot(t.x-e.x,t.y-e.y)<_).length;i.filter(([,e])=>L(e.type)!==`sst`).sort((e,t)=>(n.get(t[0])?.size||0)-(n.get(e[0])?.size||0)||s(t)-s(e)).forEach(([e,t])=>{let r=e=>i.flatMap(([n,r])=>{let i=a.get(n);return!i||Math.hypot(r.x-t.x,r.y-t.y)>=e?[]:[i]}),s=[...n.get(e)||[]].map(e=>a.get(e)).filter(Boolean),c=r(1600),l=r(_),u=[...new Set([...s,...c])],d=g.reduce((e,t)=>{let n=l.includes(t),r=u.includes(t),i=u.length?Math.min(...u.map(e=>le(t,e))):180,a=l.length?Math.min(...l.map(e=>le(t,e))):180,s=l.length?Math.min(...l.map(e=>se(t,e))):260,c=(r?-0x38d7ea4c68000:0)+(n?-1e6:0)+i*1e9+a*1e4+s*10-(o.get(t)||0)*20;return!e||c>e.score?{color:t,score:c}:e},null).color;a.set(e,d),o.set(d,(o.get(d)||0)+1)}),A=a}let de=e=>e.lineCode===t&&L(e.name)===`curie`&&L(e.type)===`ssp`&&L(e.sat)===`sat2`,G=()=>!0,fe=e=>e.lineCode===n&&!V(e)&&L(e.name)===`dunkerque`,K=e=>e.lineCode===s&&!V(e)&&[`lille gare`,`arras`].includes(L(e.name)),q=e=>{let t=L(e.type)===`sst`&&!V(e);if(V(e)){let t=U(e)?[[e.name,e.type].filter(Boolean).join(` `),e.sat]:[e.sat];return Math.max(96,Math.max(...t.map(e=>I(e).length))*21+40)}let n=t?24:19.5;return Math.max(t?215:170,[e.name,e.type].filter(Boolean).join(` `).length*n+36)},pe=(e,t)=>(q(e)+q(t))/2+24;function me(e,t){let n=(d[t]||[]).map(e=>({key:I(typeof e==`object`&&e?e.key:e),sourceLine:typeof e==`object`&&e&&ie(e.source_line)||t})),r=new Map((e.features||[]).flatMap(e=>{let t=e.properties||{},n=ie(t.numero_ligne);return!n||I(t.SAT)?[]:[[z(t.nom,t.type,``),n]]})),i=new Map;return(e.features||[]).forEach(e=>{let t=e.properties||{},n=I(t.nom),a=I(t.type),o=I(t.SAT),s=z(n,a,o),c=ie(t.numero_ligne)||(o?r.get(z(n,a,``)):``);if(!c||!s)return;let l=`${c}:${s}`;i.has(l)||i.set(l,{name:n,type:a,sat:o,key:s,sourceLine:c})}),n.flatMap(({key:e,sourceLine:n})=>{let r=L(e),a=i.get(`${n}:${r}`);return a?[{id:`${t}:${n}:${r}`,lineCode:t,sourceLine:n,name:a.name,type:a.type,sat:a.sat,key:r,x:0,y:0}]:[]})}function he(){let e=T[t],u=T[n],d=Math.max(1,e.findIndex(e=>L(e.name)===`strazeele`)),p=u.findIndex(e=>L(e.name)===`hazebrouck`),m=new Set([t,n,r,i,a,o,s,c,l]),h=f.filter(e=>!m.has(e));E=[{id:`295-left`,lineCode:t,side:-1,y:1560,nodes:e.slice(0,d).reverse()},{id:`295-right`,lineCode:t,side:1,y:240,nodes:e.slice(d)},{id:`301-left`,lineCode:n,side:-1,y:240,nodes:u.slice(0,p).reverse()},{id:`301-right`,lineCode:n,side:1,y:1560,nodes:u.slice(p+1)},{id:`301306-coudekerque`,lineCode:r,satelliteOnly:!0,nodes:T[r]||[]},{id:`304-independent`,lineCode:i,independent:!0,nodes:T[i]||[]},{id:`314-boulogne`,lineCode:a,independent314:!0,nodes:T[a]||[]},{id:`311-rang`,lineCode:o,continuation311:!0,nodes:T[o]||[]},{id:`267-down`,lineCode:c,vertical:!0,nodes:T[c]},{id:`212-down`,lineCode:l,vertical:!0,continuationOf:c,nodes:T[l]},...h.map((e,t)=>({id:`extra-${e}`,lineCode:e,side:t%2?1:-1,extra:!0,extraIndex:t,nodes:T[e]||[]}))],D=T[s],ne=T[c],k=new Set(Object.values(T).flat().filter(V).map(H))}function J(e,t){if(!e.length)return;let n=t.slice(1).map(([e,n],r)=>Math.hypot(e-t[r][0],n-t[r][1])),r=n.reduce((e,t)=>e+t,0),i=e.slice(1).map(()=>1),a=i.reduce((e,t)=>e+t,0)||1,o=0;e.forEach((e,s)=>{s>0&&(o+=i[s-1]);let c=r*o/a,l=0,u=!1;for(let r=0;r<n.length;r+=1){if(c<=l+n[r]||r===n.length-1){let i=(c-l)/Math.max(1,n[r]);e.x=t[r][0]+(t[r+1][0]-t[r][0])*i,e.y=t[r][1]+(t[r+1][1]-t[r][1])*i,e.pathDistance=c,e.labelMode=Math.abs(t[r+1][0]-t[r][0])>=Math.abs(t[r+1][1]-t[r][1])?s%2?`below`:`above`:s%2?`right`:`left`,u=!0;break}l+=n[r]}if(!u){let i=t.length-1,a=(c-r)/Math.max(1,n[n.length-1]);e.x=t[i][0]+(t[i][0]-t[i-1][0])*a,e.y=t[i][1]+(t[i][1]-t[i-1][1])*a,e.labelMode=Math.abs(t[i][0]-t[i-1][0])>=Math.abs(t[i][1]-t[i-1][1])?s%2?`below`:`above`:s%2?`right`:`left`}})}function Y(e,t=null){e.forEach((n,r)=>{if(!V(n))return;let i=r-1,a=r+1;for(;i>=0&&V(e[i]);)--i;for(;a<e.length&&V(e[a]);)a+=1;let o=i>=0?e[i]:t,s=e[a],c=1,l=0;if(o&&s){let e=i>=0?i:-1,t=(r-e)/(a-e);n.x=o.x+(s.x-o.x)*t,n.y=o.y+(s.y-o.y)*t,c=s.x-o.x,l=s.y-o.y}else if(o){let t=i-1;for(;t>=0&&V(e[t]);)--t;let a=e[t];c=o.x-(a?.x??o.x-90),l=o.y-(a?.y??o.y);let s=Math.hypot(c,l)||1,u=54*(r-i);n.x=o.x+c/s*u,n.y=o.y+l/s*u}else if(s){let t=a+1;for(;t<e.length&&V(e[t]);)t+=1;let i=e[t];c=(i?.x??s.x+90)-s.x,l=(i?.y??s.y)-s.y;let o=Math.hypot(c,l)||1,u=54*(a-r);n.x=s.x-c/o*u,n.y=s.y-l/o*u}let u=e.slice(0,r+1).filter(V).length;n.labelMode=Math.abs(c)>=Math.abs(l)?u%2?`below`:`above`:u%2?`right`:`left`})}function ge(){if(!O)return;let{start:e,end:t,points:n}=O,r=D.indexOf(e),i=D.indexOf(t);if(r<0||i<=r)return;let a=D.slice(r+1,i).filter(V);if(O.roundedCorner){let e=n.slice(1).map(([e,t],r)=>Math.hypot(e-n[r][0],t-n[r][1])),t=[0];e.forEach(e=>t.push(t[t.length-1]+e));let o=t[t.length-1],s=r=>{let i=Math.min(o,Math.max(0,r)),a=0;for(;a<e.length-1&&t[a+1]<i;)a+=1;let s=(i-t[a])/Math.max(1,e[a]);return{x:n[a][0]+(n[a+1][0]-n[a][0])*s,y:n[a][1]+(n[a+1][1]-n[a][1])*s}};a.forEach((e,t)=>{let n=D.indexOf(e),a=n-1,c=n+1;for(;a>=r&&V(D[a]);)--a;for(;c<=i&&V(D[c]);)c+=1;let l=D[a],u=D[c];if(!l||!u)return;let d=(n-a)/(c-a),f=l.pathDistance+(u.pathDistance-l.pathDistance)*d,p=s(f),m=s(Math.max(0,f-3)),h=s(Math.min(o,f+3));e.x=p.x,e.y=p.y,e.labelMode=Math.abs(h.x-m.x)>=Math.abs(h.y-m.y)?t%2?`below`:`above`:t%2?`right`:`left`});return}let o=O.control1||{x:e.x,y:e.y+(t.y-e.y)*.45},s=O.control2||{x:t.x-(t.x-e.x)*.36,y:t.y};a.forEach((n,r)=>{let i=(r+1)/(a.length+1),c=1-i;n.x=c**3*e.x+3*c**2*i*o.x+3*c*i**2*s.x+i**3*t.x,n.y=c**3*e.y+3*c**2*i*o.y+3*c*i**2*s.y+i**3*t.y,n.labelMode=r%2?`right`:`left`})}function _e(){if(!O)return``;if(O.roundedCorner)return O.path;let{start:e,end:t,remaining:n}=O;if(O.orthogonal){let r=`M ${e.x} ${e.y} L ${t.x} ${t.y}`;return n.forEach(e=>{r+=` L ${e.x} ${e.y}`}),r}let r=O.control1||{x:e.x,y:e.y+(t.y-e.y)*.45},i=O.control2||{x:t.x-(t.x-e.x)*.36,y:t.y},a=`M ${e.x} ${e.y} C ${r.x} ${r.y}, ${i.x} ${i.y}, ${t.x} ${t.y}`;return n.forEach(e=>{a+=` L ${e.x} ${e.y}`}),a}function ve(e,t,n,r,i){let a=1-i;return{x:a**3*e.x+3*a**2*i*t.x+3*a*i**2*n.x+i**3*r.x,y:a**3*e.y+3*a**2*i*t.y+3*a*i**2*n.y+i**3*r.y}}function X(e,t){let n=e.geometry;if(!n)return null;if(t>=n.curveLength)return{x:n.armEnd.x+e.side*(t-n.curveLength),y:e.y};let r=n.samples,i=r.findIndex(e=>e.distance>=t),a=r[Math.max(1,i)],o=r[Math.max(0,Math.max(1,i)-1)],s=(t-o.distance)/Math.max(1,a.distance-o.distance);return{x:o.x+(a.x-o.x)*s,y:o.y+(a.y-o.y)*s}}function ye(e){if(!e.geometry)return Y(e.nodes,w);e.nodes.forEach((t,n)=>{if(!V(t))return;let r=n-1,i=n+1;for(;r>=0&&V(e.nodes[r]);)--r;for(;i<e.nodes.length&&V(e.nodes[i]);)i+=1;let a=r>=0?e.nodes[r]:w,o=e.nodes[i],s=a===w?0:a.pathDistance,c;if(o){let e=(n-r)/(i-r);c=s+(o.pathDistance-s)*e}else c=s+(de(t)?pe(a,t):54)*(n-r);let l=X(e,c),u=X(e,Math.max(0,c-3)),d=X(e,c+3);t.x=l.x,t.y=l.y,t.labelMode=Math.abs(d.x-u.x)>=Math.abs(d.y-u.y)?n%2?`below`:`above`:n%2?`right`:`left`})}function be(e){let t=e.continuationOf===c?ne.find(e=>L(e.name)===`fourmies`&&L(e.type)===`sst`&&!V(e)):D.find(e=>L(e.name)===`fives`&&L(e.type)===`sspa`&&!V(e));if(!t)return;e.anchor=t;let n=e.continuationOf?100:118,r=e.continuationOf?t.x:t.x+500;e.nodes.filter(e=>!V(e)).forEach((e,i)=>{e.x=r,e.y=t.y+n*(i+1),e.labelMode=i%2?`right`:`left`}),Y(e.nodes,{x:r,y:t.y});let i=e.continuationOf?null:e.nodes.find(e=>L(e.name)===`fives`&&L(e.sat)===`sat5`);i&&(i.x=r,i.y=t.y,i.labelMode=`left`)}function xe(e){let t=T[n].find(e=>L(e.name)===`dunkerque`&&!V(e)),r=T[n].find(e=>L(e.name)===`coudekerque`&&L(e.type)===`sst`&&!V(e));!t||!r||!e.nodes.length||(e.anchor={x:t.x+(r.x-t.x)*.48,y:t.y+(r.y-t.y)*.48},e.nodes.forEach((t,n)=>{t.x=e.anchor.x-150-n*95,t.y=e.anchor.y-125-n*70,t.labelMode=`above`}))}function Se(e){let r=T[n].find(e=>L(e.name)===`dunkerque`&&!V(e)),i=T[t].find(e=>L(e.name)===`coulogne`&&L(e.type)===`sp`&&!V(e)),a=e.nodes.filter(e=>!V(e));if(!r||!i||!a.length)return;e.anchor=r,e.endAnchor=i;let o=r.x;J(a,[[o,r.y+180],[o,i.y-190]],e.nodes),Y(e.nodes)}function Ce(e){let n=T[t].find(e=>L(e.name)===`curie`&&L(e.type)===`ssp`&&!V(e)),r=e.nodes.filter(e=>!V(e)),i=e.nodes[0];if(!n||!r.length||!i)return;e.anchor=n;let a={x:n.x-260,y:n.y+160},o={x:a.x,y:1690},s={x:a.x+360,y:2050},c={x:s.x+260*(r.length-1),y:s.y},l=.5522848,u={x:o.x,y:o.y+360*l},d={x:s.x-360*l,y:s.y},f=[[a.x,a.y],[o.x,o.y]];for(let e=1;e<=48;e+=1){let t=e/48,n=1-t;f.push([n**3*o.x+3*n**2*t*u.x+3*n*t**2*d.x+t**3*s.x,n**3*o.y+3*n**2*t*u.y+3*n*t**2*d.y+t**3*s.y])}f.push([c.x,c.y]);let p=f.slice(1).map(([e,t],n)=>Math.hypot(e-f[n][0],t-f[n][1])),m=[0];p.forEach(e=>m.push(m[m.length-1]+e));let h=m[m.length-1],g=e=>{let t=Math.min(h,Math.max(0,e)),n=0;for(;n<p.length-1&&m[n+1]<t;)n+=1;let r=(t-m[n])/Math.max(1,p[n]);return{x:f[n][0]+(f[n+1][0]-f[n][0])*r,y:f[n][1]+(f[n+1][1]-f[n][1])*r}},_=(e,t,n)=>{let r=g(t),i=g(t-3),a=g(t+3);e.x=r.x,e.y=r.y,e.pathDistance=t,e.labelMode=Math.abs(a.x-i.x)>=Math.abs(a.y-i.y)?n%2?`below`:`above`:n%2?`right`:`left`};[i,...r].forEach((t,n,r)=>{_(t,h*n/Math.max(1,r.length-1),e.nodes.indexOf(t))}),e.nodes.forEach((t,n)=>{if(!V(t)||t===i)return;let r=n-1,a=n+1;for(;r>=0&&V(e.nodes[r]);)--r;for(;a<e.nodes.length&&V(e.nodes[a]);)a+=1;let o=r>=0?e.nodes[r]:i,s=r>=0?r:0,c=e.nodes[a],l=c?(n-s)/(a-s):1,u=c?o.pathDistance+(c.pathDistance-o.pathDistance)*l:o.pathDistance;_(t,u,n)}),e.routePath=`M ${a.x} ${a.y} L ${o.x} ${o.y} C ${u.x} ${u.y}, ${d.x} ${d.y}, ${s.x} ${s.y} L ${c.x} ${c.y}`}function we(e){let t=T[a].find(e=>L(e.name)===`hauteville`&&L(e.type)===`sspa`&&!V(e)),n=e.nodes.filter(e=>!V(e));if(!t||!n.length)return;e.anchor=t;let r={x:t.x+260*n.length,y:t.y};J([t,...n],[[t.x,t.y],[r.x,r.y]],[t,...n]),Y(e.nodes,t),e.routePath=`M ${t.x} ${t.y} L ${r.x} ${r.y}`}function Te(){let e=1480;w.x=1600,w.y=1800/2,E.filter(e=>!e.vertical&&!e.satelliteOnly&&!e.independent&&!e.independent314&&!e.continuation311).forEach(n=>{n.y=n.extra?2280+Math.floor(n.extraIndex/2)*300:[`295-left`,`301-right`].includes(n.id)?e:320;let r=n.nodes.filter(e=>!V(e)),i=T[t].find(e=>L(e.name)===`coulogne`&&L(e.type)===`sp`&&!V(e)),a=n.id===`295-left`?-120:n.id===`301-left`&&i?i.x:n.side<0?160:n.extra?4300:3180,o=w.x+n.side*700,s={x:o,y:n.y},c={x:w.x+n.side*700*.34,y:w.y},l={x:o-n.side*700*.34,y:n.y},u=[{x:w.x,y:w.y,distance:0}],d=0;for(let e=1;e<=100;e+=1){let t=ve(w,c,l,s,e/100),n=u[u.length-1];d+=Math.hypot(t.x-n.x,t.y-n.y),u.push({...t,distance:d})}let f=d+Math.abs(a-o);n.geometry={armEnd:s,control1:c,control2:l,samples:u,curveLength:d,totalLength:f,endX:a};let p=0;r.forEach((e,t)=>{e.pathDistance=f*(t+1)/r.length;let i=X(n,e.pathDistance);e.x=i.x,e.y=i.y,e.pathDistance<=d&&(p+=1),e.labelMode=t%2?`below`:`above`}),n.transitionCount=Math.max(1,p),ye(n)}),E.filter(e=>e.satelliteOnly).forEach(xe),E.filter(e=>e.independent).forEach(Se),E.filter(e=>e.independent314).forEach(Ce),E.filter(e=>e.continuation311).forEach(we);let n=D.filter(e=>!V(e)),r=n.findIndex(e=>L(e.name)===`arras`),i=r>=0?r:Math.max(1,Math.floor(n.length*.58)),a=n.slice(0,i+1),o=n.slice(i),s=D.findIndex(e=>L(e.name)===`arras`&&!V(e)),c=D.slice(0,s+1);J(a,[[3650,320],[3650,e]],c);let l=o.at(-1);if(l&&o.length>1){let e=o[0],t={x:e.x,y:2180},n={x:e.x-420,y:2600},r={x:e.x,y:t.y+420*.5522848},i={x:n.x+420*.5522848,y:n.y},a=[[e.x,e.y],[t.x,t.y]];for(let e=1;e<=48;e+=1){let o=ve(t,r,i,n,e/48);a.push([o.x,o.y])}a.push([700,n.y]),J(o,a),O={start:e,end:l,points:a,roundedCorner:!0,path:`M ${e.x} ${e.y} L ${t.x} ${t.y} C ${r.x} ${r.y}, ${i.x} ${i.y}, ${n.x} ${n.y} L 700 ${n.y}`}}else O=null;Y(D),ge(),E.filter(e=>e.vertical).forEach(be),ue();let u=Math.ceil(E.filter(e=>e.extra).length/2);v.setAttribute(`viewBox`,`-700 80 5500 ${3e3+u*300}`),je()}function Z(e,t){if(Math.abs(t.x-e.x)<1||Math.abs(t.y-e.y)<1)return`M ${e.x} ${e.y} L ${t.x} ${t.y}`;let n=t.x>=e.x?1:-1,r=Math.max(55,Math.abs(t.x-e.x)*.42);return`M ${e.x} ${e.y} C ${e.x+r*n} ${e.y}, ${t.x-r*n} ${t.y}, ${t.x} ${t.y}`}function Ee(e,t){if(e.continuation311&&e.routePath||e.independent314&&e.routePath)return e.routePath;if(e.satelliteOnly&&e.anchor)return[e.anchor,...e.nodes].slice(1).reduce((t,n,r)=>`${t} ${Z([e.anchor,...e.nodes][r],n).replace(/^M [^C]+/,``)}`,`M ${e.anchor.x} ${e.anchor.y}`);if(e.vertical){let n=e.nodes.find(e=>!V(e)),r=e.lineCode===c?e.nodes.find(e=>L(e.name)===`fives`&&L(e.sat)===`sat5`):null,i={x:n?.x??e.anchor.x+(e.continuationOf?0:500),y:r?.y??(e.lineCode===c?n?.y:e.anchor.y)};return`M ${i.x} ${i.y} `+t.map(e=>`L ${e.x} ${e.y}`).join(` `)}if(e.independent)return t.slice(1).reduce((e,n,r)=>{let i=t[r];return`${e} ${Z(i,n).replace(/^M\s+[-\d.]+\s+[-\d.]+\s+/,``)}`},`M ${t[0].x} ${t[0].y}`);if(e.geometry){let{armEnd:t,control1:n,control2:r,endX:i}=e.geometry;return`M ${w.x} ${w.y} C ${n.x} ${n.y}, ${r.x} ${r.y}, ${t.x} ${t.y} L ${i} ${e.y}`}let n=Math.min(e.transitionCount||1,t.length),r=t[n-1],i=r.x-w.x,a=`M ${w.x} ${w.y} C ${w.x+i*.34} ${w.y}, ${r.x-i*.34} ${r.y}, ${r.x} ${r.y}`;return t.slice(n).forEach(e=>{a+=` L ${e.x} ${e.y}`}),a}function De(e,t){let n=e.stemOffset||68+t%2*32;return{above:{x:0,y:-n,textX:0,textY:-n-20,anchor:`middle`},below:{x:0,y:n,textX:0,textY:n+31,anchor:`middle`},left:{x:-n,y:0,textX:-n-15,textY:9,anchor:`end`},right:{x:n,y:0,textX:n+15,textY:9,anchor:`start`}}[e.labelMode||`below`]}function Oe(e,t){let n=[e.name,e.type].filter(Boolean).join(` `),r=V(e),i=r?oe(e):``;if(de(e)){let t=W(e);return`<g class="station satellite line-${e.lineCode.slice(0,3)}" style="--node-line-color:${B(e.lineCode)}" data-node-id="${R(e.id)}" data-parent-key="${R(H(e))}" data-parent-label="${R(n)}" tabindex="0" aria-label="${R(`${e.sat}, poste ${n}`)}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="7"/><circle class="sat-family-marker" r="4.5" style="fill:${t};color:${t}"/><text class="station-sat" x="0" y="-28" style="fill:${t}">${R(i)}</text></g>`}if(r){let r=De(e,t),a=W(e),o=U(e),s=o?r.textY-15:r.textY,c=o?`${R(n)} <tspan x="${r.textX}" dy="1.05em">${R(e.sat)}</tspan>`:R(i);return`<g class="station satellite line-${e.lineCode.slice(0,3)}" style="--node-line-color:${B(e.lineCode)}" data-node-id="${R(e.id)}" data-parent-key="${R(H(e))}" data-parent-label="${R(n)}" tabindex="0" aria-label="${R(`${e.sat}, poste ${n}`)}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="3"/><line class="sat-stem" x1="0" y1="0" x2="${r.x}" y2="${r.y}"/><circle class="sat-family-marker" cx="${r.x}" cy="${r.y}" r="7" style="fill:${a};color:${a}"/><text class="station-sat" x="${r.textX}" y="${s}" style="text-anchor:${r.anchor};fill:${a}">${c}</text></g>`}let a=L(e.type)===`sst`,o=fe(e),s={above:{x:0,y:a?-42:-25,anchor:`middle`},below:{x:0,y:a?60:40,anchor:`middle`},left:{x:a?-40:-25,y:9,anchor:`end`},right:{x:a?40:25,y:9,anchor:`start`}}[e.labelMode||`above`],c=k.has(H(e))?`<circle class="sat-family-marker" r="5" style="fill:${W(e)};color:${W(e)}"/>`:``,l=c&&!a?`;fill:${W(e)}`:``,u=l?` sat-family-label`:``;return`<g class="station line-${e.lineCode.slice(0,3)}${a?` is-sst`:``}${o?` is-junction`:``}" style="--node-line-color:${B(e.lineCode)}" data-node-id="${R(e.id)}" data-parent-key="${R(H(e))}" transform="translate(${e.x} ${e.y})"><circle class="station-dot" r="${a?20:o?15:9}"/>${c}<text class="station-label${u}" x="${s.x}" y="${s.y}" style="text-anchor:${s.anchor}${l}">${R(n)}</text></g>`}function ke(e,t,n=``){let r={above:{x:0,y:-40,anchor:`middle`},below:{x:0,y:62,anchor:`middle`},left:{x:-34,y:11,anchor:`end`},right:{x:34,y:11,anchor:`start`}}[e.junctionLabelMode||`above`],i=k.has(H(e))?`<circle class="sat-family-marker" r="6" style="fill:${W(e)};color:${W(e)}"/>`:``,a=i?`;fill:${W(e)}`:``,o=a?` sat-family-label`:``;return`<g class="hub junction ${n}" data-node-id="${R(e.id)}" data-parent-key="${R(H(e))}" transform="translate(${e.x} ${e.y})"><circle r="19"/>${i}<text class="hub-title${o}" x="${r.x}" y="${r.y}" style="text-anchor:${r.anchor}${a}">${R(t)}</text></g>`}function Ae(){let e=[],[r,i,a,o]=v.getAttribute(`viewBox`).split(/\s+/).map(Number),s={left:r+20,right:r+a-20,top:i+20,bottom:i+o-20},c=[{node:w,title:w.name},...D.filter(K).map(e=>({node:e,title:[e.name,e.type].filter(Boolean).join(` `)}))];c.forEach(({node:t})=>e.push({left:t.x-23,right:t.x+23,top:t.y-23,bottom:t.y+23})),[...E.flatMap(e=>e.nodes.filter(e=>!V(e))),...D.filter(e=>!V(e)&&!K(e))].forEach(t=>{let n=L(t.type)===`sst`?19:13;e.push({left:t.x-n,right:t.x+n,top:t.y-n,bottom:t.y+n})});let l=[];E.filter(e=>!e.vertical).forEach(e=>{let t=[e.anchor||w,...e.nodes.filter(e=>!V(e))];t.slice(1).forEach((e,n)=>l.push([t[n],e])),e.endAnchor&&t.length>1&&l.push([t[t.length-1],e.endAnchor])});let u=D.filter(e=>!V(e));u.slice(1).forEach((e,t)=>l.push([u[t],e]));let d=T[n].find(e=>L(e.name)===`bailleul sir bethoult`&&!V(e)),f=D.find(e=>L(e.name)===`arras`&&!V(e)),p=T[t].find(e=>L(e.name)===`la madeleine`&&!V(e)),m=D.find(e=>L(e.name)===`lille gare`&&!V(e));d&&f&&l.push([d,f]),p&&m&&l.push([p,m]);let h=(e,t)=>Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left))*Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)),g=([e,t],n)=>{for(let r=1;r<20;r+=1){let i=r/20,a=e.x+(t.x-e.x)*i,o=e.y+(t.y-e.y)*i;if(a>n.left&&a<n.right&&o>n.top&&o<n.bottom)return!0}return!1},_=t=>{let n=Math.max(0,s.left-t.left)+Math.max(0,t.right-s.right)+Math.max(0,s.top-t.top)+Math.max(0,t.bottom-s.bottom),r=l.reduce((e,n)=>e+(g(n,t)?5e4:0),0);return n*1e3+r+e.reduce((e,n)=>e+h(t,n),0)},y=(e,t,n)=>{let r=Math.max(190,t.length*22);return n===`above`?{left:e.x-r/2,right:e.x+r/2,top:e.y-86,bottom:e.y-27}:n===`below`?{left:e.x-r/2,right:e.x+r/2,top:e.y+27,bottom:e.y+86}:n===`left`?{left:e.x-r-34,right:e.x-30,top:e.y-31,bottom:e.y+28}:{left:e.x+30,right:e.x+r+34,top:e.y-31,bottom:e.y+28}};c.forEach(({node:t,title:n})=>{let r=null;[`above`,`right`,`left`,`below`].forEach((e,i)=>{let a=y(t,n,e),o=_(a)+i*100;(!r||o<r.score)&&(r={mode:e,box:a,score:o})}),t.junctionLabelMode=r.mode,e.push(r.box)});let ee=(e,t)=>{let n=q(e),r=L(e.type)===`sst`,i=r?40:25,a=r?32:23;return t===`above`?{left:e.x-n/2,right:e.x+n/2,top:e.y-(r?88:60),bottom:e.y-(r?25:15)}:t===`below`?{left:e.x-n/2,right:e.x+n/2,top:e.y+(r?25:15),bottom:e.y+(r?92:62)}:t===`left`?{left:e.x-n-i-4,right:e.x-i,top:e.y-a,bottom:e.y+a}:{left:e.x+i,right:e.x+n+i+4,top:e.y-a,bottom:e.y+a}},b=[...E.map(e=>({nodes:e.nodes.filter(e=>!V(e)),parent:e.anchor||w})),{nodes:D.filter(e=>!V(e)),parent:null}],x=new Set(E.filter(e=>e.continuationOf&&e.anchor).map(e=>e.anchor.id));b.forEach(({nodes:t,parent:n})=>{t.forEach((r,i)=>{if(K(r))return;if(x.has(r.id)){r.labelMode=`right`,e.push(ee(r,r.labelMode));return}let a=t[i-1]||n||r,o=t[i+1]||a,s=Math.abs(o.x-a.x),c=Math.abs(o.y-a.y),l=Math.min(s,c)/Math.max(1,Math.max(s,c))>.35?i%2?[`left`,`right`,`below`,`above`]:[`right`,`left`,`above`,`below`]:s>=c?i%2?[`below`,`above`,`right`,`left`]:[`above`,`below`,`left`,`right`]:i%2?[`right`,`left`,`above`,`below`]:[`left`,`right`,`above`,`below`],u=null;l.forEach(e=>{let t=ee(r,e),n=_(t);(!u||n<u.score)&&(u={mode:e,box:t,score:n})}),r.labelMode=u.mode,e.push(u.box)})});{let t=(e,t,n)=>{let r=q(e),i=U(e)?30:0;return t===`above`?{left:e.x-r/2,right:e.x+r/2,top:e.y-n-60-i,bottom:e.y-n+8}:t===`below`?{left:e.x-r/2,right:e.x+r/2,top:e.y+n-8,bottom:e.y+n+60+i}:t===`left`?{left:e.x-n-r-18,right:e.x-n+5,top:e.y-30-i/2,bottom:e.y+30+i/2}:{left:e.x+n-5,right:e.x+n+r+18,top:e.y-30-i/2,bottom:e.y+30+i/2}};[...E.map(e=>e.nodes),D].forEach(n=>{n.forEach((r,i)=>{if(!V(r))return;if(de(r)){e.push({left:r.x-q(r)/2,right:r.x+q(r)/2,top:r.y-60,bottom:r.y-10});return}let a=i-1,o=i+1;for(;a>=0&&V(n[a]);)--a;for(;o<n.length&&V(n[o]);)o+=1;let s=n[a],c=n[o],l=(c?.x??r.x+1)-(s?.x??r.x-1),u=(c?.y??r.y)-(s?.y??r.y),d=Math.abs(l)>=Math.abs(u),f=d?i%2?[`below`,`above`]:[`above`,`below`]:i%2?[`right`,`left`]:[`left`,`right`],p=[s,c].find(e=>e&&K(e)),m=p===s&&a===i-1||p===c&&o===i+1,g=!d&&m&&[`left`,`right`].includes(p?.junctionLabelMode)?p.junctionLabelMode:null,v=g?f.filter(e=>e!==g):f,y=null;[72,132,192,252,312,372,432,492,552,612,672,732,792,852].forEach((n,i)=>{v.forEach((a,o)=>{let s=t(r,a,n),c=e.reduce((e,t)=>e+h(s,t),0),l=_(s)+i*20+o*5;(!y||c<y.collision||c===y.collision&&l<y.score)&&(y={mode:a,offset:n,box:s,collision:c,score:l})})}),r.labelMode=y.mode,r.stemOffset=y.offset,e.push(y.box)})})}}function je(){Q(),Ae();let e=E.map(e=>{if(e.satelliteOnly)return!e.anchor||!e.nodes.length?``:`<path class="branch sat-only-branch line-${e.lineCode.slice(0,3)}" style="stroke:${B(e.lineCode)}" d="${Ee(e,e.nodes)}"/>`;let t=e.nodes.filter(e=>!V(e));if(!t.length)return``;if(e.continuation311&&e.routePath)return`<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${B(e.lineCode)}" d="${e.routePath}"/>`;if(e.independent314&&e.routePath){let t=e.nodes[0];return`${e.anchor&&t?`<path class="independent-connector" style="stroke:${B(e.lineCode)}" d="${Z(e.anchor,t)}"/>`:``}<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${B(e.lineCode)}" d="${e.routePath}"/>`}if(e.independent){let n=t[0],r=t[t.length-1],i=B(e.lineCode),a=e.anchor?`<path class="independent-connector" style="stroke:${i}" d="${Z(e.anchor,n)}"/>`:``,o=e.endAnchor?`<path class="independent-connector" style="stroke:${i}" d="${Z(r,e.endAnchor)}"/>`:``;return`${a}<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${i}" d="${Ee(e,t)}"/>${o}`}let n=`<path class="branch line-${e.lineCode.slice(0,3)}" style="stroke:${B(e.lineCode)}" d="${Ee(e,t)}"/>`,r=t[t.length-1],i=e.nodes.indexOf(r),a=[r,...e.nodes.slice(i+1).filter(V)];return`${n}${a.slice(1).map((t,n)=>`<path class="branch sat-only-branch line-${e.lineCode.slice(0,3)}" style="stroke:${B(e.lineCode)}" d="${Z(a[n],t)}"/>`).join(``)}`}).join(``),r=D.filter(G),i=D.filter(e=>!V(e)),a=i.findIndex(e=>L(e.name)===`arras`),o=i.slice(0,a+1),s=`${o.slice(1).map((e,t)=>`<path class="branch line-272" d="${Z(o[t],e)}"/>`).join(``)}${O?`<path class="branch line-272" d="${_e()}"/>`:``}`,l=T[t].find(e=>L(e.name)===`la madeleine`&&!V(e)),u=T[t].find(e=>L(e.name)===`la madeleine`&&L(e.sat)===`sat1`)||l,d=T[n].find(e=>L(e.name)===`bailleul sir bethoult`&&!V(e)),f=r.find(e=>L(e.name)===`lille gare`),p=r.find(e=>L(e.name)===`arras`&&!V(e)),m=D.find(e=>L(e.name)===`fives`&&L(e.type)===`sspa`&&!V(e)),h=T[c].find(e=>L(e.name)===`fives`&&L(e.sat)===`sat5`),g=m&&h?`<path class="independent-connector" style="stroke:${B(c)}" d="${Z(m,h)}"/>`:``,_=`${u&&f?`<path class="connector" d="${Z(u,f)}"/>`:``}${d&&p?`<path class="connector" d="${Z(d,p)}"/>`:``}${g}`;ee.innerHTML=`${e}${s}${_}`;let v=`${E.flatMap(e=>e.nodes.filter(G).map(t=>Oe(t,e.nodes.indexOf(t)))).join(``)}${D.filter(e=>G(e)&&!K(e)).map(e=>Oe(e,D.indexOf(e))).join(``)}`,y=D.filter(e=>G(e)&&K(e)).map(e=>ke(e,[e.name,e.type].filter(Boolean).join(` `))).join(``);b.innerHTML=`${v}${y}${ke(w,`Hazebrouck`,`root-junction`)}`,Me()}function Me(){y.setAttribute(`transform`,`translate(${F.x} ${F.y}) scale(${F.k})`)}function Ne(){re||=requestAnimationFrame(()=>{re=0,Me()})}function Pe(e,t){let n=x.getBoundingClientRect(),r=e-n.left+14,i=t-n.top+14,a=Math.max(10,n.width-C.offsetWidth-10),o=Math.max(10,n.height-C.offsetHeight-10);C.style.left=`${Math.max(10,Math.min(r,a))}px`,C.style.top=`${Math.max(10,Math.min(i,o))}px`}function Fe(e,t,n){if(!e?.classList.contains(`satellite`))return;j&&j!==e&&j.classList.remove(`is-sat-hover`),b.querySelectorAll(`.is-sat-parent-highlight`).forEach(e=>e.classList.remove(`is-sat-parent-highlight`)),j=e,e.classList.add(`is-sat-hover`);let r=e.dataset.parentKey;[...b.querySelectorAll(`[data-parent-key]`)].filter(e=>!e.classList.contains(`satellite`)&&e.dataset.parentKey===r).forEach(e=>e.classList.add(`is-sat-parent-highlight`)),C.textContent=e.dataset.parentLabel||`Poste non renseigné`,C.classList.add(`is-visible`),Pe(t,n)}function Q(){j?.classList.remove(`is-sat-hover`),j=null,b.querySelectorAll(`.is-sat-parent-highlight`).forEach(e=>e.classList.remove(`is-sat-parent-highlight`)),C.classList.remove(`is-visible`)}b.addEventListener(`pointerover`,e=>{let t=e.target.closest(`.station.satellite`);!t||t.contains(e.relatedTarget)||Fe(t,e.clientX,e.clientY)}),b.addEventListener(`pointermove`,e=>{j&&Pe(e.clientX,e.clientY)}),b.addEventListener(`pointerout`,e=>{let t=e.target.closest(`.station.satellite`);!t||t.contains(e.relatedTarget)||Q()}),b.addEventListener(`focusin`,e=>{let t=e.target.closest(`.station.satellite`);if(!t)return;let n=t.getBoundingClientRect();Fe(t,n.right,n.top+n.height/2)}),b.addEventListener(`focusout`,e=>{e.target.closest(`.station.satellite`)&&Q()});function Ie(){let e=[w,...E.flatMap(e=>e.nodes.filter(e=>!V(e))),...D.filter(e=>!V(e))],t=new Map;return e.forEach(e=>{let n=e===w?w.name:[e.name,e.type].filter(Boolean).join(` `),r=L(n);r&&!t.has(r)&&t.set(r,{node:e,libelle:n})}),[...t.values()].sort((e,t)=>e.libelle.localeCompare(t.libelle,`fr`,{sensitivity:`base`}))}e.rechercherPosteMetro=e=>{let t=L(e);if(!t)return!1;let n=Ie().find(({libelle:e})=>L(e)===t);if(!n)return!1;let r=[...b.querySelectorAll(`[data-node-id]`)].find(e=>e.dataset.nodeId===n.node.id);return r?(b.querySelectorAll(`.is-search-highlight`).forEach(e=>e.classList.remove(`is-search-highlight`)),r.getBoundingClientRect(),r.classList.add(`is-search-highlight`),!0):!1};function $(e){let t=v.getBoundingClientRect(),n=v.viewBox.baseVal;return{x:n.x+(e.clientX-t.left)*n.width/t.width,y:n.y+(e.clientY-t.top)*n.height/t.height}}function Le(e){return Math.min(2.6,Math.max(.5,e))}function Re(){let e=v.viewBox.baseVal;return{x:e.x+e.width/2,y:e.y+e.height/2}}function ze(e,t=Re()){let n=F.k,r=Le(n*e);if(Math.abs(r-n)<.001)return;let i=(t.x-F.x)/n,a=(t.y-F.y)/n;F.x=t.x-i*r,F.y=t.y-a*r,F.k=r,Ne()}e.zoomerCarteMetro=ze;function Be(){return[...P.values()].slice(0,2)}function Ve(){let[e,t]=Be();if(!e||!t)return;M=null,x.classList.remove(`is-panning`);let n=$({clientX:(e.clientX+t.clientX)/2,clientY:(e.clientY+t.clientY)/2}),r=Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY);N={distance:Math.max(1,r),zoom:F.k,mondeX:(n.x-F.x)/F.k,mondeY:(n.y-F.y)/F.k}}function He(){let[e,t]=Be();if(!N||!e||!t)return;let n=$({clientX:(e.clientX+t.clientX)/2,clientY:(e.clientY+t.clientY)/2}),r=Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY),i=Le(N.zoom*r/N.distance);F.x=n.x-N.mondeX*i,F.y=n.y-N.mondeY*i,F.k=i,Ne()}v.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),document.getSelection()?.removeAllRanges(),e.pointerType===`touch`&&(P.set(e.pointerId,{clientX:e.clientX,clientY:e.clientY}),P.size>=2)){Ve(),v.setPointerCapture(e.pointerId);return}let t=$(e);M={x:t.x-F.x,y:t.y-F.y},x.classList.add(`is-panning`),v.setPointerCapture(e.pointerId)}),v.addEventListener(`pointermove`,e=>{if(e.pointerType===`touch`&&P.has(e.pointerId)&&(P.set(e.pointerId,{clientX:e.clientX,clientY:e.clientY}),N&&P.size>=2)){He();return}let t=$(e);M&&(F.x=t.x-M.x,F.y=t.y-M.y,Ne())}),[`pointerup`,`pointercancel`,`pointerleave`].forEach(e=>v.addEventListener(e,e=>{if(e.pointerType===`touch`&&P.delete(e.pointerId),N){N=null,M=null,x.classList.remove(`is-panning`),P.size>=2&&Ve();return}M=null,x.classList.remove(`is-panning`)})),v.addEventListener(`wheel`,e=>{e.preventDefault(),document.getSelection()?.removeAllRanges(),ze(e.deltaY<0?1.1:.9,$(e))},{passive:!1}),v.addEventListener(`selectstart`,e=>e.preventDefault()),v.addEventListener(`dragstart`,e=>e.preventDefault()),document.getElementById(`resetLayout`).addEventListener(`click`,()=>{F={x:0,y:0,k:1},Te()}),document.getElementById(`defaultView`).addEventListener(`click`,()=>{S.checked=!1,e.classList.add(`satellites-hidden`),F={x:0,y:0,k:1},he(),Te()}),S.addEventListener(`change`,()=>{Q(),e.classList.toggle(`satellites-hidden`,!S.checked)}),Promise.all([fetch(`./carte-heuristique.json`,{cache:`no-store`}).then(e=>e.ok?e.json():null).catch(()=>null),fetch(`./postes.geojson`,{cache:`no-store`}).then(e=>{if(!e.ok)throw Error(`postes.geojson (${e.status})`);return e.json()})]).then(([t,n])=>{let r=Array.isArray(t?.lines),i=r?t.lines:[];r&&(f=i.map(e=>I(e.code)).filter(Boolean),d=Object.fromEntries(i.map(e=>[I(e.code),Array.isArray(e.postes)?e.postes:[]])));let a=[...new Set([...Object.keys(u),...f])];T=Object.fromEntries(a.map(e=>[e,me(n,e)])),he(),Te(),te.textContent=`${f.reduce((e,t)=>e+(T[t]?.length||0),0)} postes · ordre manuel conservé`,e.dispatchEvent(new CustomEvent(`metro-postes-prets`,{detail:{postes:Ie().map(({libelle:e})=>e)}}))}).catch(e=>{console.error(e),te.textContent=`Impossible de charger les postes`,b.innerHTML=`<text class="error" x="1600" y="750">Chargement impossible</text>`})})()}export{e as initialiserCarteMetro};