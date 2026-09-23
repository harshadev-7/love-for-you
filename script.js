const screens=document.querySelectorAll(".screen");
const song=document.getElementById("song");
const photos=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];
let photoIndex=0;

function next(n){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById("screen"+n).classList.add("active");
}

function startLove(){
  burst();
  setTimeout(()=>next(2),700);
}

function sayYes(){
  burst();
  hearts(25);
  setTimeout(()=>{next(3);typeWriter("I knew you would say yes! ❤️")},900);
}

function typeWriter(text){
  const el=document.getElementById("typeText");
  el.textContent="";
  let i=0;
  const timer=setInterval(()=>{
    el.textContent+=text[i++];
    if(i>=text.length)clearInterval(timer);
  },70);
}

function runAway(){
  const b=document.getElementById("noBtn");
  b.style.position="fixed";
  b.style.left=Math.random()*70+15+"%";
  b.style.top=Math.random()*70+15+"%";
}

function hearts(count=12){
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      const e=document.createElement("div");
      e.className="float";
      e.textContent=["❤️","💖","💕","🌸","🌹","✨"][Math.floor(Math.random()*6)];
      e.style.left=Math.random()*100+"vw";
      e.style.fontSize=20+Math.random()*30+"px";
      e.style.animationDuration=3+Math.random()*3+"s";
      document.body.appendChild(e);
      setTimeout(()=>e.remove(),6500);
    },i*90);
  }
}

function burst(){
  for(let i=0;i<20;i++){
    setTimeout(()=>{
      const e=document.createElement("div");
      e.className="spark";
      e.style.left=10+Math.random()*80+"vw";
      e.style.top=10+Math.random()*70+"vh";
      document.body.appendChild(e);
      setTimeout(()=>e.remove(),1300);
    },i*35);
  }
}

function finalFireworks(){
  for(let i=0;i<80;i++){
    setTimeout(()=>burst(),i*35);
  }
  hearts(50);
}

function playSong(){
  song.play().catch(()=>alert("Add let-me-love-you.mp3 to this folder first."));
}

function setupPhotos(){
  const dots=document.getElementById("dots");
  photos.forEach((_,i)=>{
    const d=document.createElement("span");
    d.className="dot"+(i===0?" on":"");
    dots.appendChild(d);
  });
  setInterval(()=>{
    photoIndex=(photoIndex+1)%photos.length;
    const img=document.getElementById("memory");
    img.style.opacity="0";
    img.style.transform="scale(.94)";
    setTimeout(()=>{
      img.src=photos[photoIndex];
      img.style.opacity="1";
      img.style.transform="scale(1)";
      document.querySelectorAll(".dot").forEach((d,i)=>d.classList.toggle("on",i===photoIndex));
    },250);
  },3200);
}
setupPhotos();
