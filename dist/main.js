!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const n=document.createElement("canvas"),s=n.getContext("2d");n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight,window.addEventListener("resize",t=>{n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}),document.body.append(n);var o=class{constructor(t){this.unit=t,this.x=this.unit.x,this.y=this.unit.y,this.width=50,this.height=10,this.distance=10}update(){this.x=this.unit.x,this.y=this.unit.y}};var r={healthBarList:[],init(t){for(let e of t.list){const t=new o(e);this.healthBarList.push(t)}},update(){for(let t of this.healthBarList)t.update()},createHealthBar(t){},deleteHealthBar(t){}};var h=function(t,e){let i=null;const n=t.x,s=t.y,o=-n+e.centerX+e.centerY,r=n-e.centerX+e.centerY;return s<o&&s<r?i="north":s>o&&s>r?i="south":s<o&&s>r?i="west":s>o&&s<r&&(i="east"),i};var c=function(t,e){let i=!1;return h(t,e)===e.sightDirection&&(i=!0),i};var l=function(t){const e=[];for(let i of k.list){const n=i.centerX,s=i.centerY;c({x:n,y:s},t)&&e.push(i)}return e};var u=function(t,e){const i=t.centerX-e.centerX,n=t.centerY-e.centerY;return Math.sqrt(i*i+n*n)};var a=function(t,e,i){return u(t,e)<=i};var d={attack:function(t){const e=t.unit,i=l(e);for(let t of i)t!==e&&a(e,t,e.attackRange)&&(t.currentHealth-=e.attackPower)}};var f={unit:null,x:null,y:null,init(t){this.unit=t,this.x=this.unit.x-n.width/2+this.unit.width/2,this.y=this.unit.y-n.height/2+this.unit.height/2},update(){this.x=this.unit.x-n.width/2+this.unit.width/2,this.y=this.unit.y-n.height/2+this.unit.height/2}};var m=class{constructor(t,e,i){this.id=t,this.duration=e,this.start=Date.now(),this.callback=i}};var g={list:{},create(t,e,i){this.list[t]=new m(t,e,i)},update(){const t=Date.now();for(let e in this.list){const i=this.list[e];t-i.start>=i.duration&&(i.callback(),delete this.list[e])}}};var p={"unit-died":function(t){}};var v=class{constructor(t,e,i){this.id=t,this.x=e,this.y=i,this.width=50,this.height=50,this.sightDirection="south",this.speed=5,this.color="darkgreen",this.moveUp=!1,this.moveDown=!1,this.moveLeft=!1,this.moveRight=!1,this.walk=!1,this.totalHealth=100,this.currentHealth=70,this.attackPower=20,this.attackRange=100,this.isDead=!1,this.target=null,this.targetIsLocked=!1}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}get centerX(){return this.x+this.width/2}get centerY(){return this.y+this.height/2}update(){if(this.currentHealth<0&&(this.currentHealth=0),0===this.currentHealth&&!this.isDead){this.isDead=!0;const t={unit:this};this.emit("unit-died",t),g.create(this.id+"rev",2e3,()=>{this.isDead&&this.revive()})}this.moveUp&&(this.y-=this.walk?.5*this.speed:this.speed),this.moveDown&&(this.y+=this.walk?.5*this.speed:this.speed),this.moveLeft&&(this.x-=this.walk?.5*this.speed:this.speed),this.moveRight&&(this.x+=this.walk?.5*this.speed:this.speed)}attack(){const t={unit:this,target:this.target};this.act("attack",t)}revive(){this.isDead=!1,this.currentHealth=this.totalHealth}act(t,e){d[t](e)}emit(t,e){p[t](e)}};const y=new v(1,200,200);y.color="darkblue";const w=[new v(2,300,300),new v(3,500,500),new v(4,100,100),new v(5,150,400),new v(6,400,150),new v(7,450,350)];var k={hero:null,list:[],init(){this.hero=y,this.list.push(y),this.list=this.list.concat(w)},update(){for(let t of this.list)t.update()}};var b={unit:null,mouse:{clientX:0,clientY:0,get x(){return this.clientX+f.x},get y(){return this.clientY+f.y},get worldX(){return this.x},get worldY(){return this.y}},init(t){this._initMouse(),this._preventMouseDefault(),this.unit=t,document.addEventListener("mousemove",e=>{this._getSightDirection(t)}),document.addEventListener("click",t=>{this.unit.attack()}),document.addEventListener("keydown",t=>{"KeyW"===t.code&&(this.unit.moveUp=!0),"KeyS"===t.code&&(this.unit.moveDown=!0),"KeyA"===t.code&&(this.unit.moveLeft=!0),"KeyD"===t.code&&(this.unit.moveRight=!0),"ShiftLeft"===t.code&&(this.unit.walk=!0)}),document.addEventListener("keyup",t=>{"KeyW"===t.code&&(this.unit.moveUp=!1),"KeyS"===t.code&&(this.unit.moveDown=!1),"KeyA"===t.code&&(this.unit.moveLeft=!1),"KeyD"===t.code&&(this.unit.moveRight=!1),"ShiftLeft"===t.code&&(this.unit.walk=!1)})},_initMouse(){document.addEventListener("mousemove",t=>{this.mouse.clientX=t.clientX,this.mouse.clientY=t.clientY})},_getSightDirection(t){const e=this.mouse.x,i=this.mouse.y,n=-e+t.centerX+t.centerY,s=e-t.centerX+t.centerY;i<n&&i<s?t.sightDirection="north":i>n&&i>s?t.sightDirection="south":i<n&&i>s?t.sightDirection="west":i>n&&i<s&&(t.sightDirection="east")},_preventMouseDefault(){const t=["mousedown","dblclick","contextmenu"];for(let e of t)document.addEventListener(e,t=>{t.preventDefault()})}};var x={ui:function(t,e,i){const n=e.x,s=e.y;for(let e of i.healthBarList)t.fillStyle="black",t.fillRect(e.x-n,e.y-e.distance-e.height-s,e.width,e.height),t.fillStyle="red",t.fillRect(e.x-n,e.y-e.distance-e.height-s,e.unit.currentHealth/e.unit.totalHealth*e.width,e.height)},units:function(t,e,i){const n=e.x,s=e.y;for(let e of i.list){switch(t.fillStyle=e.color,t.fillRect(e.x-n,e.y-s,e.width,e.height),t.beginPath(),e.sightDirection){case"north":t.moveTo(e.centerX-n,e.centerY-s),t.lineTo(e.left-n,e.top-s),t.lineTo(e.right-n,e.top-s);break;case"south":t.moveTo(e.centerX-n,e.centerY-s),t.lineTo(e.left-n,e.bottom-s),t.lineTo(e.right-n,e.bottom-s);break;case"west":t.moveTo(e.centerX-n,e.centerY-s),t.lineTo(e.left-n,e.top-s),t.lineTo(e.left-n,e.bottom-s);break;case"east":t.moveTo(e.centerX-n,e.centerY-s),t.lineTo(e.right-n,e.top-s),t.lineTo(e.right-n,e.bottom-s)}t.closePath(),t.strokeStyle="white",t.lineWidth=2,t.stroke(),i.hero}}};var D={backgroundColor:"lightblue",init(){k.init(),f.init(k.hero),b.init(k.hero),r.init(k)},update(){g.update(),k.update(),r.update(),f.update()},render(){s.clearRect(0,0,n.width,n.height),this._renderBackground(),this._renderMap(),x.units(s,f,k),x.ui(s,f,r)},_renderBackground(){s.fillStyle=this.backgroundColor,s.fillRect(0,0,n.width,n.height)},_renderUnits(){const t=f.x,e=f.y;for(let i of k.list)s.fillStyle=i.color,s.fillRect(i.x-t,i.y-e,i.width,i.height)},_renderMap(){const t=f.x,e=f.y;s.fillStyle="lightgreen",s.fillRect(0-t,0-e,800,600)}};function S(t){t-S.elapsed<1e3?++S.fps:(S.block.textContent="FPS: "+S.fps,S.elapsed=Date.now(),S.fps=0)}S.fps=0,S.block=document.createElement("div"),S.block.className="fps-block",document.body.append(S.block);var L=S;D.init(),requestAnimationFrame((function t(){requestAnimationFrame(t),L(Date.now()),D.update(),D.render()}))}]);