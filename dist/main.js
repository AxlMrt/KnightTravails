(()=>{"use strict";const t=new Map;function e(s,o){const n=[[1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,1],[-2,-1]],c=s,a=o;let l;const r=()=>`${s}, ${o}`;if(t.has(r()))return t.get(r());const i={showMove:r,getLastMove:()=>l,setLastMove:t=>{l=l||t},possibleKnightMoves:()=>n.map((t=>((t,s)=>{const[o,n]=[c+t,a+s];return e(o,n)})(t[0],t[1]))).filter((t=>void 0!==t))};return t.set(r(),i),i}const s=8,o={x:0,y:0},n="board",{x:c,y:a}=o;!function(t,e){const s=document.getElementById(t),o=[];for(let t=0;t<e;t+=1){const n=Math.abs(t-(e-1));for(let c=0;c<e;c+=1){const e=document.createElement("div"),a=c;e.classList.add("cell"),(t+c)%2==0?(e.style.background="white",e.textContent=a):(e.style.background="black",e.textContent=n),o.push(n),o.push(a),e.dataset.chessArray=o,o.splice(0,2),s.appendChild(e)}}}(n,s),function(t,e){const s=[t,e];document.querySelectorAll(".cell").forEach((t=>{if(s.toString()===t.dataset.chessArray){const e=document.createElement("img");e.classList.add("knight"),e.src="./TravailKnight.png",t.appendChild(e)}}))}(c,a),function(s,o){t.clear();const n=e(3,3),c=e(4,3),a=[n];for(;!a.includes(c);){const t=a.shift(),e=t.possibleKnightMoves();e.forEach((e=>e.setLastMove(t))),a.push(...e)}const l=[c];for(;!l.includes(n);){const t=l[0].getLastMove();l.unshift(t)}console.log(`The shortest path was ${l.length-1} moves!`),console.log("The moves were: "),l.forEach((t=>console.log(t.showMove())))}()})();