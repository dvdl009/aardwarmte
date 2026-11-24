/* =====================================================================
   3D-VERHAAL VOOR DE LIVE PRESENTATIE
   Eén 3D-scène bovenin de telefoon die per dia verandert.
   Gebruikt three.js r128 (THREE) en OrbitControls, geladen door live.html.

   Scènes (de namen staan per dia in slides.js bij "scene"):
   doublet   – doorsnede van de ondergrond met twee putten en het warmtenet
   net       – huizen met warmtepompen en een vol stroomstation
   vraag     – drie zuilen: technisch, economisch, maatschappelijk (met ?)
   stroom    – 3D-staven 34 MW tegenover 4,9 MW
   kaart     – de vier gemeenten van de Bollenstreek met de bron
   inzoom    – ingezoomd op de Leeweg, Noordwijk en Noordwijkerhout
   poll      – live stemmen als 3D-staven
   kosten    – stapels munten: warmtenet tegenover gas
   advies    – de drie zuilen met het oordeel
   volg      – de doorsnede, de camera volgt een druppel warm water omhoog naar de huizen
   lagen     – blok ondergrond: wat een goede laag nodig heeft (deksel, zandsteen, warmte, breuken)
   leeweg    – hetzelfde blok met de gegevens van de oude put aan de Leeweg
   regionet  – kaart met één hoofdleiding langs alle kernen
   zon       – staven: warmtepomp tegenover zonnepanelen, winter en zomer
   maand     – warmtevraag per maand tegenover één bron
   none      – geen 3D (live.html verbergt dan het podium)
   ===================================================================== */
(function(){
"use strict";

/* Kaartgegevens: CBS-gemeentegrenzen (vereenvoudigd), km ten opzichte van de Leeweg; x = oost, y = noord */
const MAP={"gem":{"Hillegom":[[8.09,5.02],[7.25,4.24],[5.21,5.97],[6.68,8.48],[8.04,9.47],[9.96,8.91],[9.31,7.77],[8.71,6.16],[8.09,5.02]],"Lisse":[[6.03,-0.12],[5.9,-1.21],[3.95,0.34],[4.07,1.6],[3.19,2.47],[5.21,5.97],[7.25,4.24],[6.63,0.61],[6.03,-0.12]],"Noordwijk":[[1.97,1.36],[0.7,-0.0],[-0.24,-1.83],[-1.89,-2.76],[-2.08,-2.5],[-3.6,-1.77],[-4.24,-1.35],[-1.32,3.89],[1.95,10.64],[6.68,8.48],[3.19,2.47],[1.97,1.36]],"Teylingen":[[1.55,-5.11],[1.71,-4.1],[1.66,-3.48],[0.74,-3.09],[-0.31,-3.58],[-0.83,-2.81],[0.7,-0.0],[2.35,1.77],[3.19,2.47],[4.07,1.6],[3.95,0.34],[5.9,-1.21],[6.21,-1.59],[6.27,-3.62],[5.39,-3.78],[4.77,-5.88],[2.28,-5.38],[2.0,-5.41],[1.55,-5.11]]},"kern":{"Noordwijk":[-2.06,0.87],"Noordwijkerhout":[1.8,3.27],"De Zilk":[5.25,7.12],"Voorhout":[1.19,-1.17],"Sassenheim":[3.8,-0.87],"Lisse":[6.16,2.77],"Hillegom":[7.98,6.43],"Warmond":[2.43,-3.91]},"zoom":[[0.05,-1.0],[-0.39,-0.92],[-2.54,-0.01],[-2.84,0.25],[-3.02,0.59],[-2.29,1.91],[1.36,4.17],[1.83,4.27],[2.21,4.18],[2.52,3.96],[2.73,3.63],[2.8,3.25],[2.72,2.88],[1.99,1.54],[0.61,0.07],[0.05,-1.0]]};

const C={hot:0xd9480f,cold:0x1971c2,green:0x00a54b,dgreen:0x2e7d32,lgreen:0x66bb6a,blue:0x3b78e7,amber:0xe8a317,grey:0xb8b2a6,
  house:0xe3d3b0,roof:0x9a4b33,grass:0x9cc79a,white:0xf4f1ea,dark:0x2b2b2b,coin:0xd9a930,coin2:0x9a958a,sea:0x9ec9de,land:0xe9e2d0};

function easeInOut(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}

class Story{
constructor(el,opts={}){
  this.el=el;this.opts=opts;this.worlds={};this.active=null;this.state=null;this.labels=[];this.t=0;this.tween=null;
  const dark=matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches&&document.documentElement.dataset.theme!=="light";
  this.bg=dark?0x1a1e1c:0xeef1ec;
  const r=this.renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:"low-power"});
  r.setPixelRatio(Math.min(2,window.devicePixelRatio||1));r.setClearColor(this.bg,1);
  el.appendChild(r.domElement);
  this.lbl=document.createElement("div");this.lbl.className="s3-labels";el.appendChild(this.lbl);
  const s=this.scene=new THREE.Scene();s.fog=new THREE.Fog(this.bg,120,320);
  s.add(new THREE.HemisphereLight(0xffffff,0xb9a276,0.85));
  const d=new THREE.DirectionalLight(0xffffff,0.75);d.position.set(30,60,40);s.add(d);
  this.camera=new THREE.PerspectiveCamera(42,1,0.1,800);
  this.controls=new THREE.OrbitControls(this.camera,r.domElement);
  Object.assign(this.controls,{enableDamping:true,dampingFactor:.08,enablePan:false,rotateSpeed:.7,zoomSpeed:.8,autoRotateSpeed:.6});
  this.controls.addEventListener("start",()=>{this.controls.autoRotate=false;this.follow=null});
  this.build();
  this.resize();
  this.ro=new ResizeObserver(()=>this.resize());this.ro.observe(el);
  this.last=performance.now();
  const loop=now=>{this.raf=requestAnimationFrame(loop);if(document.hidden)return;const dt=Math.max(0,Math.min(.05,(now-this.last)/1000));this.last=now;this.frame(dt)};
  this.raf=requestAnimationFrame(loop);
}
resize(){const w=this.el.clientWidth||1,h=this.el.clientHeight||1;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.fov=w/h<0.9?52:42;this.camera.updateProjectionMatrix()}

/* ---------- hulpjes ---------- */
mat(c,o={}){return new THREE.MeshLambertMaterial(Object.assign({color:c},o))}
box(g,w,h,d,c,x,y,z,o){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),this.mat(c,o));m.position.set(x,y,z);g.add(m);return m}
tube(g,pts,c,r){const cv=new THREE.CatmullRomCurve3(pts.map(p=>new THREE.Vector3(...p)));const m=new THREE.Mesh(new THREE.TubeGeometry(cv,80,r,8,false),this.mat(c));g.add(m);return cv}
label(world,html,pos,cls="",when=null){const e=document.createElement("div");e.className="s3l "+cls;e.innerHTML=html;this.lbl.appendChild(e);
  const L={world,e,pos:new THREE.Vector3(...pos),when};this.labels.push(L);return L}
flow(g,curve,n,c1,c2,speed,size,list){const arr=[];for(let i=0;i<n;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(size,10,8),new THREE.MeshBasicMaterial({color:c1}));g.add(m);arr.push({m,t:i/n})}
  list.push({curve,arr,speed,c1:new THREE.Color(c1),c2:new THREE.Color(c2)})}
house(g,x,z,s=1,c=C.house){const b=this.box(g,1.6*s,1.2*s,1.4*s,c,x,0.6*s,z);const r=new THREE.Mesh(new THREE.ConeGeometry(1.25*s,0.9*s,4),this.mat(C.roof));r.rotation.y=Math.PI/4;r.position.set(x,1.65*s,z);g.add(r);return b}
world(name,offset){const g=new THREE.Group();g.position.set(offset,0,0);g.visible=false;this.scene.add(g);const w={name,g,offset,flows:[],upd:null,views:{}};this.worlds[name]=w;return w}

/* ---------- alle werelden bouwen ---------- */
build(){
  this.buildDoublet();this.buildNet();this.buildPillars();this.buildPower();this.buildMap();this.buildPoll();this.buildCost();this.buildLayers();this.buildSun();this.buildMonth();
}

buildDoublet(){
  const w=this.world("doublet",0),g=w.g;
  const layers=[[0,-5,0xe4d7ba,"zand, klei en veen"],[-5,-12,0xd2bf98,"kleisteen en krijt"],[-12,-20,0xb9a276,"kleisteen: sluit het water af"],[-20,-23.5,0x7fc3a3,"zandsteen met water van ± 83 °C"],[-23.5,-27,0x8f7d5a,""]];
  layers.forEach(([a,b,c,n])=>{this.box(g,32,a-b,8,c,0,(a+b)/2,-4);if(n)this.label(w,n,[12.6,(a+b)/2,0.2],"layer")});
  this.box(g,32,0.3,18,C.grass,0,0.15,1);
  [["0 m",0],["500 m",-5],["1 km",-10],["2 km",-20]].forEach(([t,y])=>this.label(w,t,[-16.6,y,0],"depth"));
  // putten
  const P=[[-2,0.4,0.6],[-2,-6,0.6],[-2.4,-10,0.6],[-4.6,-16,0.6],[-7.5,-21.8,0.6]];
  const I=P.map(([x,y,z])=>[-x,y,z]);
  const cp=this.tube(g,P,C.hot,0.38),ci=this.tube(g,I,C.cold,0.38);
  this.box(g,1.1,1.6,1.1,C.dark,-2,-5,0.6);
  // centrale, huizen, bollenschuur
  this.box(g,7,2.6,3.4,C.white,0,1.6,3.2);this.box(g,1.2,1.2,1.2,C.dark,-2.2,3.5,3.2);
  for(let i=0;i<5;i++)this.house(g,7+i*2.2,8.2,0.9);
  for(let i=0;i<4;i++)this.house(g,8.1+i*2.2,5.4,0.9);
  this.box(g,7,1.8,3,0xcfc3a6,-11,1.2,7.5);const kas=this.box(g,6,1.6,3,0xdff1ff,-11,1.1,3.4,{transparent:true,opacity:.55});
  const hn=this.tube(g,[[1.5,0.45,4.9],[5,0.45,6.8],[11,0.45,6.8],[16,0.45,6.8]],C.hot,0.22);
  const hb=this.tube(g,[[-1.5,0.45,4.9],[-5,0.45,5.8],[-8,0.45,5.6],[-11,0.45,5.6]],C.hot,0.22);
  const res=new THREE.CatmullRomCurve3([[7.5,-21.8,0.4],[3,-22.4,0.4],[-3,-22.4,0.4],[-7.5,-21.8,0.4]].map(p=>new THREE.Vector3(...p)));
  // stroming
  this.flow(g,cp,14,C.hot,0xff8a50,-0.12,0.32,w.flows);
  this.flow(g,ci,14,0x5aa9f0,C.cold,0.12,0.32,w.flows);
  this.flow(g,res,8,C.cold,C.hot,0.05,0.26,w.flows);
  this.flow(g,hn,8,C.hot,0xff8a50,0.18,0.25,w.flows);
  this.flow(g,hb,6,C.hot,0xff8a50,0.18,0.25,w.flows);
  this.label(w,"<b>Productieput</b><br><span class=m>± 83 °C omhoog</span>",[-7.4,-14,0.8],"hot");
  this.label(w,"<b>Injectieput</b><br><span class=m>± 45 °C terug</span>",[4.6,-11.5,0.8],"cold");
  this.label(w,"<b>Pomp</b> <span class=m>± 500 m</span>",[-2,-5,1.2]);
  this.label(w,"<b>Warmtewisselaar</b>",[0,3.4,3.2]);
  this.label(w,"<b>Warmtenet</b> <span class=m>± 70 °C</span>",[11,1.2,6.8],"hot");
  this.label(w,"<b>Woningen</b>",[11.5,3,8.2]);
  this.label(w,"<b>Bollenschuur en kas</b>",[-11,3,6]);
  this.label(w,"<span class=m>± 1,5 km</span>",[0,-24.6,0.6],"depth");
  // pad voor 'volg het water': onderin de productieput omhoog, door de warmtewisselaar, naar de huizen
  w.followCurve=new THREE.CatmullRomCurve3([[-7.5,-21.8,0.6],[-4.6,-16,0.6],[-2.4,-10,0.6],[-2,-6,0.6],[-2,0.4,0.6],[-0.8,1.4,3],[1.5,0.6,4.9],[5,0.45,6.8],[11,0.45,6.8],[15,0.45,6.8]].map(p=>new THREE.Vector3(...p)));
  w.drop=new THREE.Mesh(new THREE.SphereGeometry(0.7,16,12),new THREE.MeshBasicMaterial({color:0xff6b2c}));w.drop.visible=false;g.add(w.drop);
  this.label(w,"<b>Start: ± 2 km diep</b><br><span class=m>water van ± 83 °C</span>",[-7.5,-19.6,0.8],"hot",()=>this.state==="volg"&&this.follow&&this.follow.k<0.3);
  this.label(w,"<b>Warmte naar het warmtenet</b>",[0,4.4,3.2],"",()=>this.state==="volg"&&this.follow&&this.follow.k>0.45&&this.follow.k<0.75);
  this.label(w,"<b>± 70 °C de huizen in</b>",[12,3,6.8],"hot",()=>this.state==="volg"&&this.follow&&this.follow.k>0.75);
  const f0=w.followCurve.getPointAt(0);
  w.views={overview:{p:[16,4,40],t:[0,-10,0],auto:true},explain:{p:[-12,-6,30],t:[-1,-11,0]},free:{p:[20,8,36],t:[0,-8,0]},
    follow:{p:[f0.x+9,f0.y+4,f0.z+20],t:f0.toArray()}};
  w.set=state=>{w.drop.visible=state==="volg"};
}

buildNet(){
  const w=this.world("net",300),g=w.g;
  this.box(g,46,0.3,30,C.grass,0,-0.15,0);
  const st=this.box(g,6,3.2,5,0x8a8f96,-14,1.6,0);
  this.stationMat=st.material;
  for(let i=0;i<4;i++)this.box(g,0.3,4,0.3,C.dark,-16.5+i*1.6,2,-2.4);
  const houses=[];
  for(let r=0;r<3;r++)for(let c=0;c<5;c++){const x=0+c*3.6,z=-6+r*6;this.house(g,x,z,1.1);this.box(g,0.7,0.7,0.5,C.white,x+1.4,0.35,z+0.9);houses.push([x+1.4,z+0.9])}
  houses.forEach(([x,z])=>{const cv=this.tube(g,[[x,0.2,z],[x-2,0.2,z],[-6,0.2,z*0.6],[-11,0.4,0]],0xf2c94c,0.08);this.flow(g,cv,3,0xffd43b,0xff6b6b,0.22,0.14,w.flows)});
  this.label(w,"<b>Station Sassenheim</b><br><span class=m>vol</span>",[-14,4.4,0],"alarm");
  this.label(w,"<b>Warmtepomp in elk huis</b><br><span class=m>nog meer stroom nodig</span>",[7.2,3.4,-6]);
  w.upd=(dt,t)=>{this.stationMat.emissive.setHex(0xe03131);this.stationMat.emissiveIntensity=0.25+0.25*Math.sin(t*5)};
  w.views={main:{p:[6,15,30],t:[-2,0,0]}};
}

buildPillars(){
  const w=this.world("pillars",600),g=w.g;
  this.box(g,30,0.4,10,0xddd5c3,0,-0.2,0);
  w.pillars=[-8,0,8].map(x=>{const m=this.box(g,5,1,5,C.grey,x,0.5,0);return{m,h:1,target:1}});
  const names=["Technisch","Economisch","Maatschappelijk"];
  w.qLabels=names.map((n,i)=>this.label(w,`<b>${n}</b><br><span class=big>?</span>`,[-8+i*8,0,2.6],"pill",()=>this.state==="vraag"));
  const verdict=[["✓ haalbaar","ok"],["! alleen met steun","warn"],["✓ wenselijk","ok"]];
  w.aLabels=names.map((n,i)=>this.label(w,`<b>${n}</b><br><span class="v ${verdict[i][1]}">${verdict[i][0]}</span>`,[-8+i*8,0,2.6],"pill",()=>this.state==="advies"));
  w.upd=dt=>{w.pillars.forEach(p=>{p.h+=(p.target-p.h)*Math.min(1,dt*3);p.m.scale.y=p.h;p.m.position.y=p.h/2});
    w.qLabels.concat(w.aLabels).forEach((L,i)=>{L.pos.y=w.pillars[i%3].h+1.6})};
  w.set=state=>{const ad=state==="advies";const hs=ad?[9,5,9]:[6,6,6];const cs=ad?[C.green,C.amber,C.green]:[C.grey,C.grey,C.grey];
    w.pillars.forEach((p,i)=>{p.target=hs[i];p.m.material.color.setHex(cs[i]);if(this.state!==state)p.h=1})};
  w.views={main:{p:[0,10,30],t:[0,5,0]}};
}

buildPower(){
  const w=this.world("power",900),g=w.g;
  this.box(g,26,0.4,12,0xddd5c3,0,-0.2,0);
  const k=0.45;
  w.bars=[
    {m:this.box(g,5,1,5,C.blue,-5,0.5,0),h:34*k},
    {m:this.box(g,5,1,5,C.dgreen,5,0.5,0),h:3.2*k},
    {m:this.box(g,5,1,5,C.lgreen,5,0.5,0),h:1.14*k,base:3.2*k},
    {m:this.box(g,5,1,5,C.lgreen,5,0.5,0,{transparent:true,opacity:.35}),h:0.56*k,base:4.34*k}];
  for(let i=0;i<6;i++)this.house(g,-9.6+i*1.9,5.2,0.55);
  this.label(w,"<b>≈ 34 MW</b>",[-5,34*k+1.2,0],"num");
  this.label(w,"<b>≈ 4,3–4,9 MW</b>",[5,4.9*k+1.4,0],"num green");
  this.label(w,"Warmtepomp in elk huis",[-5,-0.6,3.4]);
  this.label(w,"Aardwarmte + warmtenet",[5,-0.6,3.4]);
  this.label(w,"<span class=m>extra stroom op een koude dag · 16.200 woningen</span>",[0,-2.2,5],"depth");
  w.grow=0;
  w.upd=dt=>{w.grow=Math.min(1,w.grow+dt*0.6);const e=easeInOut(w.grow);w.bars.forEach(b=>{const h=Math.max(0.01,b.h*e);b.m.scale.y=h;b.m.position.y=(b.base||0)*e+h/2})};
  w.enter=()=>{w.grow=0};
  w.views={main:{p:[10,10,32],t:[0,7,0]}};
}

buildMap(){
  const w=this.world("map",1200),g=w.g,S=2.2;
  const P=([x,y],h=0)=>new THREE.Vector3(x*S,h,-y*S);
  this.box(g,90,0.2,90,C.land,8,-0.3,-6);
  const coast=[[-4.24,-1.35],[-1.32,3.89],[1.95,10.64]];
  const sea=new THREE.Shape([[-4.24,-1.35],[-1.32,3.89],[1.95,10.64],[3,16],[-20,16],[-20,-12],[-7,-12]].map(([x,y])=>new THREE.Vector2(x*S,y*S)));
  const sm=new THREE.Mesh(new THREE.ShapeGeometry(sea),this.mat(C.sea));sm.rotation.x=-Math.PI/2;sm.position.y=-0.15;g.add(sm);
  const cols={Noordwijk:0x86c99a,Teylingen:0xb5d47e,Lisse:0x7fc6b6,Hillegom:0xc9d27a};
  Object.entries(MAP.gem).forEach(([n,pts])=>{
    const sh=new THREE.Shape(pts.map(([x,y])=>new THREE.Vector2(x*S,y*S)));
    const geo=new THREE.ExtrudeGeometry(sh,{depth:0.5,bevelEnabled:false});
    const m=new THREE.Mesh(geo,this.mat(cols[n]));m.rotation.x=-Math.PI/2;g.add(m);
    const ed=new THREE.LineSegments(new THREE.EdgesGeometry(geo,30),new THREE.LineBasicMaterial({color:0x5c7a62}));ed.rotation.x=-Math.PI/2;g.add(ed);
    const cx=pts.reduce((a,p)=>a+p[0],0)/pts.length,cy=pts.reduce((a,p)=>a+p[1],0)/pts.length;
    this.label(w,n.toUpperCase(),[cx*S,1.2,-cy*S],"gem",()=>this.state==="kaart"||this.state==="regionet")});
  Object.entries(MAP.kern).forEach(([n,p])=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,0.6,16),this.mat(C.dark));m.position.copy(P(p,0.8));g.add(m);
    const near=n==="Noordwijk"||n==="Noordwijkerhout";
    this.label(w,n,P(p,1.6).toArray(),near?"kern near":"kern",near?null:()=>this.state==="kaart"||this.state==="regionet")});
  // bron
  const pin=new THREE.Mesh(new THREE.ConeGeometry(0.6,2.2,16),this.mat(C.hot));pin.rotation.x=Math.PI;pin.position.set(0,2,0);g.add(pin);
  const ball=new THREE.Mesh(new THREE.SphereGeometry(0.75,16,12),this.mat(C.hot));ball.position.set(0,3.4,0);g.add(ball);
  this.label(w,"<b>Leeweg</b><br><span class=m>oude NAM-put</span>",[0,5.2,0],"hot");
  // ingezoomd gebied
  const zl=new THREE.Line(new THREE.BufferGeometry().setFromPoints(MAP.zoom.map(p=>P(p,0.62))),new THREE.LineDashedMaterial({color:0x1971c2,dashSize:0.7,gapSize:0.45}));zl.computeLineDistances();g.add(zl);
  // inzoom-extra's: twee bronnen, leidingen, afstanden
  const z=w.zoomGroup=new THREE.Group();g.add(z);
  [[-0.25,0.15],[0.5,0.45]].forEach(([x,y],i)=>{const t=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.28,1.6,12),this.mat(i?C.cold:C.hot));t.position.copy(P([x,y],1.3));z.add(t)});
  const pipe=(to)=>{const a=P([0,0],0.75),b=P(to,0.75),m=a.clone().lerp(b,0.5);m.y=1.4;return this.tube(z,[a.toArray(),m.toArray(),b.toArray()],C.hot,0.14)};
  const p1=pipe(MAP.kern.Noordwijk),p2=pipe(MAP.kern.Noordwijkerhout);
  this.flow(z,p1,5,C.hot,0xff8a50,0.25,0.2,w.flows);this.flow(z,p2,7,C.hot,0xff8a50,0.18,0.2,w.flows);
  this.label(w,"± 2 km",P([-1.1,0.6],1.6).toArray(),"dist",()=>this.state==="inzoom");
  this.label(w,"± 4 km",P([1.1,1.9],1.6).toArray(),"dist",()=>this.state==="inzoom");
  this.label(w,"<b>Eerste bron: 20 MW</b><br><span class=m>16.200 woningen + 40 bollenbedrijven</span>",P([0.9,-0.7],3.2).toArray(),"",()=>this.state==="inzoom");
  // regionet: één hoofdleiding langs alle kernen (kortste net, hemelsbreed)
  const rn=new THREE.Group();g.add(rn);const K=MAP.kern,L0=[0,0];
  [[L0,K.Voorhout],[L0,K.Noordwijk],[K.Voorhout,K.Sassenheim],[K.Voorhout,K.Warmond],[L0,K.Noordwijkerhout],[K.Sassenheim,K.Lisse],[K.Lisse,K.Hillegom],[K.Hillegom,K["De Zilk"]]].forEach(([a,b],i)=>{
    const A=P(a,0.85),B=P(b,0.85),M=A.clone().lerp(B,0.5);M.y=1.05;const cv=this.tube(rn,[A.toArray(),M.toArray(),B.toArray()],0xc92a2a,0.32);this.flow(rn,cv,4,0xffd8a8,0xffd8a8,0.22,0.3,w.flows)});
  this.label(w,"<b>Eén net, 3–4 bronnen</b><br><span class=m>± 24 km hoofdleiding</span>",P([4.4,9.6],2).toArray(),"",()=>this.state==="regionet");
  w.views={kaart:{p:[6.6,40,22],t:[6.6,0,-4.5]},net:{p:[7,30,14],t:[6.2,0,-4]},inzoom:{p:[2.6,12,9],t:[-0.2,0,-3.4]}};
  w.set=state=>{z.visible=state==="inzoom";rn.visible=state==="regionet"};
}

buildPoll(){
  const w=this.world("poll",1500),g=w.g;
  this.box(g,26,0.4,10,0xddd5c3,0,-0.2,0);
  w.bars=[-7,0,7].map(x=>({m:this.box(g,4.4,1,4.4,0x3c86a6,x,0.5,0),h:0.2,target:0.2}));
  w.lab=[-7,0,7].map((x,i)=>this.label(w,"",[x,0,2.4],"pollopt"));
  w.upd=dt=>{w.bars.forEach((b,i)=>{b.h+=(b.target-b.h)*Math.min(1,dt*4);b.m.scale.y=b.h;b.m.position.y=b.h/2;w.lab[i].pos.y=b.h+1.5})};
  w.views={main:{p:[0,11,28],t:[0,5,0]}};
}
setPoll(counts,options){const w=this.worlds.poll;const n=counts.reduce((a,b)=>a+b,0);
  w.bars.forEach((b,i)=>{b.target=0.2+(n?12*counts[i]/n:0)});
  w.lab.forEach((L,i)=>{const pct=n?Math.round(100*counts[i]/n):0;L.e.innerHTML=`<b>${pct}%</b><br><span class=m>${(options[i]||"").replace(/[<&]/g,"")}</span>`})}

buildCost(){
  const w=this.world("cost",1800),g=w.g;
  this.box(g,24,0.4,12,0xddd5c3,0,-0.2,0);
  const geo=new THREE.CylinderGeometry(1.9,1.9,0.42,28);
  const stack=(x,n,c)=>{const arr=[];for(let i=0;i<Math.ceil(n);i++){const m=new THREE.Mesh(geo,this.mat(c));const frac=Math.min(1,n-i);m.scale.y=frac;m.position.set(x+(i%2?0.06:-0.06),0.21+i*0.45,0);m.userData.y=m.position.y;g.add(m);arr.push(m)}return arr};
  w.coins=stack(-4.5,19.5,C.coin).concat(stack(4.5,18.32,C.coin2));
  this.label(w,"<b>€ 1.950</b><br><span class=m>warmtenet per jaar</span>",[-4.5,10.4,0],"num green");
  this.label(w,"<b>€ 1.832</b><br><span class=m>gas per jaar</span>",[4.5,9.9,0],"num");
  this.label(w,"<span class=m>1 munt = € 100</span>",[0,-1,5],"depth");
  w.drop=0;
  w.upd=dt=>{w.drop+=dt;w.coins.forEach((m,i)=>{const k=i%20,start=k*0.06+(i>=20?0.3:0);const t=Math.max(0,Math.min(1,(w.drop-start)/0.35));m.position.y=m.userData.y+(1-easeInOut(t))*14;m.visible=t>0})};
  w.enter=()=>{w.drop=0};
  w.views={main:{p:[0,9,26],t:[0,5,0]}};
}

buildSun(){
  const w=this.world("sun",2400),g=w.g;
  this.box(g,28,0.4,12,0xddd5c3,0,-0.2,0);
  const k=0.006;
  const bars=[[-8.2,1510,C.blue],[-3.8,296,C.amber],[3.8,473,C.blue],[8.2,2763,C.amber]];
  w.bars=bars.map(([x,v,c])=>({m:this.box(g,3.6,1,3.6,c,x,0.5,0),h:v*k}));
  this.label(w,"<b>1.510 kWh</b><br><span class=m>warmtepomp</span>",[-8.2,1510*k+1.6,0],"num");
  this.label(w,"<b>296 kWh</b><br><span class=m>zonnepanelen</span>",[-3.8,296*k+1.6,0],"num");
  this.label(w,"<b>473 kWh</b><br><span class=m>warmtepomp</span>",[3.8,473*k+1.6,0],"num");
  this.label(w,"<b>2.763 kWh</b><br><span class=m>zonnepanelen</span>",[8.2,2763*k+1.6,0],"num");
  this.label(w,"<b>Winter</b> <span class=m>nov–feb</span>",[-6,-0.6,4],"");
  this.label(w,"<b>Zomer</b> <span class=m>apr–sep</span>",[6,-0.6,4],"");
  this.label(w,"<span class=m>één huis in Noordwijk, 10 zonnepanelen</span>",[0,-2.2,5],"depth");
  w.grow=0;
  w.upd=dt=>{w.grow=Math.min(1,w.grow+dt*0.6);const e=easeInOut(w.grow);w.bars.forEach(b=>{const h=Math.max(0.01,b.h*e);b.m.scale.y=h;b.m.position.y=h/2})};
  w.enter=()=>{w.grow=0};
  w.views={main:{p:[4,10,34],t:[0,7,0]}};
}

buildMonth(){
  const w=this.world("month",2700),g=w.g;
  this.box(g,30,0.4,8,0xddd5c3,0,-0.2,0);
  const won=[73.3,59.6,59.6,36.7,13.7,4.6,4.6,4.6,9.2,22.9,55.0,73.3],bol=[5.1,5.1,5.1,2.6,0,0,17,17,10.2,10.2,2.6,5.1],cap=[53.6,48.4,53.6,51.8,53.6,51.8,53.6,53.6,51.8,53.6,51.8,53.6];
  const k=0.16,M=["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
  w.bars=[];
  won.forEach((v,i)=>{const x=-12.65+i*2.3;
    w.bars.push({m:this.box(g,1.7,1,1.7,0x7b5cc4,x,0.5,0),h:v*k,base:0});
    if(bol[i])w.bars.push({m:this.box(g,1.7,1,1.7,0xc0562f,x,0.5,0),h:bol[i]*k,base:v*k});
    this.label(w,`<span class=m>${M[i]}</span>`,[x,-0.6,1.6],"depth")});
  const pts=[];cap.forEach((c,i)=>{const x=-12.65+i*2.3;pts.push(new THREE.Vector3(x-1.15,c*k,1.2),new THREE.Vector3(x+1.15,c*k,1.2))});
  const ln=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineDashedMaterial({color:0x222222,dashSize:0.5,gapSize:0.3}));ln.computeLineDistances();g.add(ln);
  this.label(w,"<b>Eén bron: 20 MW</b>",[11,53.6*k+1.4,1.2],"num");
  this.label(w,"<b>Woningen</b>",[-12.6,73.3*k+2.4,0],"");
  this.label(w,"<b>Bollen</b><br><span class=m>vullen de zomer</span>",[2.3,22*k+2.2,0],"hot");
  w.grow=0;
  w.upd=dt=>{w.grow=Math.min(1,w.grow+dt*0.6);const e=easeInOut(w.grow);w.bars.forEach(b=>{const h=Math.max(0.01,b.h*e);b.m.scale.y=h;b.m.position.y=b.base*e+h/2})};
  w.enter=()=>{w.grow=0};
  w.views={main:{p:[2,9,30],t:[0,6,0]}};
}

buildLayers(){
  const w=this.world("layers",2100),g=w.g;
  /* schematisch blok, 1 eenheid ≈ 200 m diepte */
  const L=[[0,-5,0xe4d7ba,"Zand, klei en krijt"],[-5,-12.5,0x9d8f7a,"Kleisteen: de deksel"],[-12.5,-15,0x7fc3a3,"Zandsteen met water"],[-15,-17,0x8f7d5a,""]];
  L.forEach(([a,b,c])=>this.box(g,22,a-b,8,c,0,(a+b)/2,0));
  this.box(g,22,0.3,8,C.grass,0,0.15,0);
  // water dat door de holtes van de zandsteen stroomt
  for(let i=0;i<5;i++){const y=-12.9-i*0.45,z=-3+i*1.5;const cv=new THREE.CatmullRomCurve3([[-10.6,y,z],[-4,y+0.2,z+0.4],[3,y-0.15,z-0.3],[10.6,y,z]].map(p=>new THREE.Vector3(...p)));this.flow(g,cv,7,0x5aa9f0,C.hot,0.07,0.22,w.flows)}
  // breuken
  [[5.2,0.32],[8.4,0.28]].forEach(([x,r])=>{const m=this.box(g,0.25,15,8.2,C.amber,x,-8.5,0);m.rotation.z=r});
  // thermometer
  const seg=8;for(let i=0;i<seg;i++){const c=new THREE.Color(0x3b78e7).lerp(new THREE.Color(0xd9480f),i/(seg-1));
    const m=new THREE.Mesh(new THREE.CylinderGeometry(0.45,0.45,15/seg,12),new THREE.MeshLambertMaterial({color:c}));m.position.set(-12.4,-(i+0.5)*15/seg,4.2);g.add(m)}
  const on=s=>()=>this.state===s;
  this.label(w,"<span class=m>± 10 °C</span>",[-12.4,0.8,4.2],"depth");
  this.label(w,"<b>Diep genoeg</b><br><span class=m>± 30 °C warmer per km</span>",[-11,-4,4.6],"",on("lagen"));
  this.label(w,"<b>Deksel</b><br><span class=m>kleisteen houdt het water binnen</span>",[-1,-9.5,4.2],"",on("lagen"));
  this.label(w,"<b>Zandsteen</b><br><span class=m>holtes waar het water door stroomt</span>",[-3,-14.2,4.2],"cold",on("lagen"));
  this.label(w,"<b>Breuken</b><br><span class=m>water loopt er slecht langs</span>",[8,-1.6,4.2],"alarm",on("lagen"));
  this.label(w,"<span class=m>± 100 °C</span>",[-12.4,-15.8,4.2],"depth",on("leeweg"));
  this.label(w,"<b>± 2,9 km: zandsteen</b><br><span class=m>water van ± 90–100 °C</span>",[-3,-14.2,4.2],"hot",on("leeweg"));
  this.label(w,"<b>Kleisteen erboven</b><br><span class=m>deksel is er ✓</span>",[-4,-8,4.2],"",on("leeweg"));
  this.label(w,"<b>2 breuken</b><br><span class=m>op 1.055 en 1.633 m</span>",[8,-1.6,4.2],"alarm",on("leeweg"));
  this.label(w,"<b>Oude NAM-put</b><br><span class=m>tot 2.940 m</span>",[1,2.6,0],"",on("leeweg"));
  w.well=this.box(g,0.4,15,0.4,C.dark,1,-7.2,0);
  w.set=s=>{w.well.visible=s==="leeweg"};
  w.views={main:{p:[6,-4,31],t:[-1,-8,0]}};
}

/* ---------- naar een dia ---------- */
go(scene,opts={}){
  const map={doublet:["doublet","overview"],uitleg:["doublet","explain"],draai:["doublet","free"],net:["net","main"],vraag:["pillars","main"],advies:["pillars","main"],
    stroom:["power","main"],volg:["doublet","follow"],lagen:["layers","main"],leeweg:["layers","main"],kaart:["map","kaart"],regionet:["map","net"],zon:["sun","main"],maand:["month","main"],inzoom:["map","inzoom"],poll:["poll","main"],kosten:["cost","main"],einde:["doublet","overview"]};
  const [wn,vn]=map[scene]||map.doublet;const w=this.worlds[wn],v=w.views[vn];
  const prev=this.active;
  this.follow=scene==="volg"?{k:0}:null;
  if(w.set)w.set(scene);
  this.state=scene;
  if(w!==prev&&w.enter)w.enter();
  w.g.visible=true;
  const t1=new THREE.Vector3(...v.t).add(w.g.position);
  const asp=this.camera.aspect||1,k=asp<1.5?Math.min(2.2,Math.pow(1.5/asp,0.95)):1;
  const p1=new THREE.Vector3(...v.p).sub(new THREE.Vector3(...v.t)).multiplyScalar(k).add(t1);
  if(!prev){this.camera.position.copy(p1);this.controls.target.copy(t1);this.controls.update()}
  else this.tween={p0:this.camera.position.clone(),t0:this.controls.target.clone(),p1,t1,k:0,prev:prev!==w?prev:null};
  this.active=w;
  this.controls.autoRotate=!!v.auto;
  const d=p1.distanceTo(t1);this.controls.minDistance=d*0.35;this.controls.maxDistance=d*1.8;
}
reset(){if(this.state)this.go(this.state)}

frame(dt){
  this.t+=dt;const t=this.t;
  if(this.tween){const tw=this.tween;tw.k=Math.min(1,tw.k+dt/1.3);const e=easeInOut(tw.k);
    this.camera.position.lerpVectors(tw.p0,tw.p1,e);this.controls.target.lerpVectors(tw.t0,tw.t1,e);
    if(tw.k>=1){if(tw.prev)tw.prev.g.visible=false;this.tween=null}}
  if(this.follow&&!this.tween){const w=this.worlds.doublet,f=this.follow;f.k=(f.k+dt/11)%1;
    const p=w.followCurve.getPointAt(f.k).clone();w.drop.position.copy(p);p.add(w.g.position);
    const asp=this.camera.aspect||1,s=asp<1.5?Math.min(2.2,Math.pow(1.5/asp,0.95)):1;
    const cam=p.clone().add(new THREE.Vector3(9,4,20).multiplyScalar(s));
    this.camera.position.lerp(cam,Math.min(1,dt*2.5));this.controls.target.lerp(p,Math.min(1,dt*3))}
  Object.values(this.worlds).forEach(w=>{if(!w.g.visible)return;
    w.flows.forEach(f=>f.arr.forEach(o=>{o.t=(((o.t+dt*f.speed)%1)+1)%1;o.m.position.copy(f.curve.getPointAt(o.t));if(!f.c1.equals(f.c2))o.m.material.color.copy(f.c1).lerp(f.c2,o.t)}));
    if(w.upd)w.upd(dt,t)});
  this.controls.update();
  this.renderer.render(this.scene,this.camera);
  this.placeLabels();
}
placeLabels(){
  const w=this.el.clientWidth,h=this.el.clientHeight,v=new THREE.Vector3(),show=!this.tween;
  this.labels.forEach(L=>{
    const on=show&&L.world===this.active&&(!L.when||L.when());
    if(!on){if(L.e.style.opacity!=="0")L.e.style.opacity="0";return}
    v.copy(L.pos).add(L.world.g.position).project(this.camera);
    if(v.z>1){L.e.style.opacity="0";return}
    L.e.style.opacity="1";L.e.style.transform=`translate(-50%,-50%) translate(${(v.x*.5+.5)*w}px,${(-v.y*.5+.5)*h}px)`});
}
dispose(){cancelAnimationFrame(this.raf);this.ro.disconnect();this.renderer.dispose();this.el.innerHTML=""}
}

window.Story3D={create(el,opts){return new Story(el,opts)}};
})();
