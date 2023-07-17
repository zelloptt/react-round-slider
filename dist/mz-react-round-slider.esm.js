/* 
MZ React Round Slider v1.0.0
https://github.com/mzusin/react-round-slider
MIT License      
Copyright (c) 2023-present, Miriam Zusin          
*/
var ft=Object.defineProperty,ht=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var Pe=(e,t,r)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))bt.call(t,r)&&Pe(e,r,t[r]);if(Me)for(var r of Me(t))Dt.call(t,r)&&Pe(e,r,t[r]);return e},Re=(e,t)=>ht(e,pt(t));import{useEffect as Ce,useRef as dt,useState as me}from"react";var xt=Math.pow,_=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=xt(10,t);return Math.round(e*r)/r},I=(e,t)=>(e%t+t)%t,R=(e,t,r,o,n)=>(n-o)*(e-t)/(r-t)+o;var _e=e=>!isNaN(parseFloat(e))&&isFinite(e);var ke=(e,t=1/0)=>{let r=e*(180/Math.PI);return _(r,t)},N=(e,t=1/0)=>{let r=e*(Math.PI/180);return _(r,t)};var Le=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(_(e[n]-t[n],r));return o},Oe=(e,t,r=1/0)=>Le(e,t,r);var vt=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(_(e[n]*t,r));return o},ee=(e,t,r=1/0)=>vt(e,t,r);var we=(e,t=1/0)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*e[o];return _(Math.sqrt(r),t)};var te=(e,t,r=1/0)=>{let o=Le(e,t);return we(o,r)};var At=(e,t=1/0)=>{let r=we(e),o=[];for(let n=0;n<e.length;n++)o.push(r===0?0:_(e[n]/r,t));return o},ye=(e,t=1/0)=>At(e,t);var F=(e,t,r)=>(t=t%Math.PI*2,[e[0]+Math.cos(t)*r,e[1]+Math.sin(t)*r]);var ne=e=>{let t=e.duration!==void 0?e.duration:1/0,r,o,n,a,s=!1,i,c=()=>{r=void 0,n=void 0,a=void 0,s=!1,o!==void 0&&window.cancelAnimationFrame(o)},g=()=>{c(),u()},m=()=>{s=!1},b=()=>{s=!0},h=P=>{r===void 0&&(r=P),n=P-r,s&&a!==P&&typeof e.callback=="function"&&e.callback(E()),n<=t?(a=P,o=window.requestAnimationFrame(h)):c()},l=(P,S)=>{g(),typeof e.resizeCallback=="function"&&e.resizeCallback(P,S)},u=()=>{r=void 0,n=void 0,a=void 0,s=!0,e.restartOnResize&&window.ResizeObserver&&i===void 0?(i=new ResizeObserver(l),i.observe(document.body,{box:"border-box"})):o=window.requestAnimationFrame(h)},p=()=>n,d=()=>s,D=()=>r,M=()=>{if(!(t===1/0||n===void 0))return n*100/t},k=()=>i,E=()=>({start:u,stop:c,pause:m,resume:b,restart:g,isAnimating:d,getElapsedTime:p,getStartTime:D,getPercent:M,getResizeObserver:k});return E()};var Ne=(e,t,r,o,n,a)=>{let s=t+r*2,i=Math.max(0,o*2-s),c=e*2+s+i,[g,m]=It(e,o,t,r);return{cx:g,cy:m,radius:e,size:c,thickness:t,border:r,startAngleDeg:n,endAngleDeg:a}},It=(e,t,r,o)=>{let n=St(e,t,r,o),a=_(n/2,2);return[a,a]},St=(e,t,r,o)=>{let n=r+o*2,a=Math.max(0,t*2-n);return e*2+n+a};var Fe="#efefef";var Be="#444444";var W="#163a86",he="#000",pe="#a8a8a8";var be="#000",De="#5daed2",Ue="#97b0bb",He="#000";var Ve="#efefef",ze="#000";var f=(e,t)=>_e(e)?Number(e):t,A=(e,t)=>e==null?t:e,B=(e,t)=>e==null?t:e;var H=(e,t,r)=>(e>t&&(t+=360),r>=e&&r<=t||r+360>=e&&r+360<=t),Z=(e,t)=>{t<e&&(t+=360);let r=t-e,o=I(r,360);return o===0&&r>0?360:o},Ge=(e,t,r)=>{e>t&&(t+=360);let o=2*Math.PI*r,n=t-e,a=-(e/360)*o,s=n/360*o,i=o-s;return{strokeDasharray:[s,i].join(" "),strokeOffset:a}};var z=(e,t,r,o,n,a,s)=>{let{left:i,top:c}=e.getBoundingClientRect(),g=[t-i,r-c],m=Oe(g,[o,n]),b=Math.atan2(m[1]/s,m[0]/a);return b<0&&(b+=2*Math.PI),ke(b)},q=(e,t,r,o)=>{o<r&&(o+=360),t<r&&(t+=360);let n=R(t,r,o,e.min,e.max);if(e.data.length>0){let a=Math.round(n);n=e.data[a]}else n=_(n,e.round);return n},Tt=(e,t,r,o)=>{let n;if(o<r&&(o+=360),e.data.length>0){let a=e.data.findIndex(s=>s===t);n=a===-1?0:a}else n=typeof t!="number"?e.min:t;return I(R(n,e.min,e.max,r,o),360)},Ct=(e,t)=>{if(!e||!e.pointers||e.pointers.length<0||!t){let o=I(f(e.pathStartAngle,0),360),n=A(e.pointerBgColor,W),a=A(e.pointerBgColorSelected,he),s=A(e.pointerBgColorDisabled,pe),i=A(e.pointerBgColorHover,a);return[{id:"0",index:0,radius:f(e.pointerRadius,10),angleDeg:o,prevAngleDeg:o,bgColor:n,bgColorSelected:a,bgColorDisabled:s,bgColorHover:i,border:f(e.pointerBorder,0),borderColor:A(e.pointerBorderColor,be),disabled:!!e.disabled}]}let r=[];for(let o=0;o<e.pointers.length;o++){let n=e.pointers[o],a=n.radius!==void 0?n.radius:f(e.pointerRadius,10),s=n.bgColor?n.bgColor:A(e.pointerBgColor,W),i=n.bgColorSelected?n.bgColorSelected:A(e.pointerBgColorSelected,he),c=n.bgColorDisabled?n.bgColorDisabled:A(e.pointerBgColorDisabled,pe),g=n.bgColorHover?n.bgColorHover:A(e.pointerBgColorHover,i),m=n.border?n.border:f(e.pointerBorder,0),b=n.borderColor?n.borderColor:A(e.pointerBorderColor,be),h=n.disabled!==void 0?n.disabled:B(e.disabled,!1),l=f(e.pathStartAngle,0),u=f(e.pathEndAngle,360),p=Tt(t,n.value,l,u),d=xe(p,t.stepAngleDeg);t.isClosedShape&&I(d,360)===I(u,360)&&(d=l),r.push({id:o.toString(),index:o,radius:a,angleDeg:d,prevAngleDeg:d,bgColor:s,bgColorSelected:i,bgColorDisabled:c,bgColorHover:g,border:m,borderColor:b,disabled:h,ariaLabel:n.ariaLabel})}return r},qe=(e,t)=>{let r=Ct(e,t);return{pointers:r,maxRadius:Et(r)}},Et=e=>{if(e.length<=0)return 0;let t=-1/0;for(let r of e)t=Math.max(t,Math.max(0,r.radius+r.border/2));return t},re=(e,t,r,o,n)=>{if(!e||e.length<=0)return null;if(e.length===1)return e[0];let a=R(N(t),0,Math.PI*2,0,Math.PI),s=F([r,o],a,n),i,c=null,g=e.filter(m=>!m.disabled);for(let m of g){let b=R(N(m.angleDeg),0,Math.PI*2,0,Math.PI),h=F([r,o],b,n),l=te(s,h);(i===void 0||l<i)&&(i=l,c=m)}return K({},c)},oe=(e,t,r,o,n,a)=>{let s=R(N(r),0,Math.PI*2,0,Math.PI),i=F([o,n],s,a),c=R(N(e),0,Math.PI*2,0,Math.PI),g=F([o,n],c,a),m=R(N(t),0,Math.PI*2,0,Math.PI),b=F([o,n],m,a),h=te(i,g),l=te(i,b);return h<=l?e:t},se=(e,t)=>{if(!e||e.length<=0)return null;let r,o,n=null,a=null;for(let s of e){let i=Z(t,s.angleDeg);(r===void 0||i<r)&&(n=s,r=i),(o===void 0||i>o)&&(a=s,o=i)}return n===null||a===null?null:[n,a]},xe=(e,t)=>t===0?0:Math.round(e/t)*t;import{useEffect as ae,useState as ie,useRef as Mt,useCallback as Pt}from"react";var J={outline:"none"};import{Fragment as Lt,jsx as ve,jsxs as kt}from"react/jsx-runtime";var Rt=(e,t,r,o,n,a,s)=>e.disabled?n:s?a:e.id===t?o:r,_t=e=>{let t=Mt(null),{pointer:r,svg:o,$svg:n,data:a,settings:s,setPointer:i,setSelectedPointerId:c,selectedPointerId:g}=e,{radius:m,angleDeg:b,bgColor:h,bgColorSelected:l,bgColorDisabled:u,bgColorHover:p,border:d,borderColor:D}=e.pointer,{cx:M,cy:k}=o,[E,P]=ie(null),[S,V]=ie(""),[O,C]=ie(W),[v,T]=ie(!1);ae(()=>{C(Rt(r,g,h,l,u,p,v))},[r,g,h,l,u,p,v]),ae(()=>{let x=q(a,r.angleDeg,o.startAngleDeg,o.endAngleDeg);V(x===void 0?"":x.toString())},[a,r.angleDeg,o.startAngleDeg,o.endAngleDeg]),ae(()=>{let x=R(N(b),0,Math.PI*2,0,Math.PI),$=F([M,k],x,o.radius);P($)},[b,M,k,o.radius]);let L=Pt(x=>{if(!n||s.disabled||r.disabled)return;c(r.id);let $=x.type.indexOf("mouse")!==-1?x.clientX:x.touches[0].clientX,j=x.type.indexOf("mouse")!==-1?x.clientY:x.touches[0].clientY,y=z(n,$,j,o.cx,o.cy,o.radius,o.radius),Y;H(o.startAngleDeg,o.endAngleDeg,y)?Y=y:Y=oe(o.startAngleDeg,o.endAngleDeg,r.angleDeg,o.cx,o.cy,o.radius),i(r,Y)},[n,r,i,o.cx,o.cy,o.endAngleDeg,o.radius,o.startAngleDeg,s.disabled,c]),U=()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",L)},w=x=>{s.disabled||r.disabled||(L(x),window.addEventListener("mousemove",L),window.addEventListener("mouseup",U))},ge=x=>{if(!(s.disabled||r.disabled||s.keyboardDisabled))switch(x.key){case"ArrowLeft":{x.preventDefault(),i(r,r.angleDeg+a.stepAngleDeg);break}case"ArrowRight":{x.preventDefault(),i(r,r.angleDeg-a.stepAngleDeg);break}case"ArrowUp":{x.preventDefault(),i(r,r.angleDeg-a.stepAngleDeg);break}case"ArrowDown":{x.preventDefault(),i(r,r.angleDeg+a.stepAngleDeg);break}}};ae(()=>{let x=t.current,$=y=>{s.disabled||r.disabled||(y.preventDefault(),y.stopPropagation(),L(y))},j=y=>{if(s.disabled||r.disabled||s.mousewheelDisabled||document.activeElement!==x)return;y.stopPropagation(),y.preventDefault();let Y=y.deltaY<0,fe;Y?fe=r.angleDeg+a.stepAngleDeg:fe=r.angleDeg-a.stepAngleDeg,i(r,fe)};return x==null||x.addEventListener("touchmove",$,{passive:!1}),document.addEventListener("wheel",j,{passive:!1}),()=>{x==null||x.removeEventListener("touchmove",$),document.removeEventListener("wheel",j)}},[E,L,a.stepAngleDeg,r,i,s.disabled,s.mousewheelDisabled]);let de=()=>{T(!0)},Ee=()=>{T(!1)};return ve(Lt,{children:E&&kt("g",{ref:t,transform:`translate(${E[0]-m/2}, ${E[1]-m/2})`,role:"slider","aria-disabled":r.disabled?!0:void 0,"aria-valuenow":r.angleDeg,"aria-valuetext":S,"aria-label":r.ariaLabel,"data-type":"pointer",className:`mz-round-slider-pointer ${r.disabled?"mz-round-slider-pointer-disabled":""}`,"data-angle":r.angleDeg,"data-id":r.id,"data-index":r.index,onMouseDown:w,onKeyDown:ge,onMouseOver:de,onMouseOut:Ee,tabIndex:0,cursor:r.disabled?"default":"pointer",style:J,children:[!s.pointerSVG&&ve("circle",{cx:m/2,cy:m/2,r:m,fill:O,strokeWidth:d,stroke:D}),s.pointerSVG&&ve("g",{children:s.pointerSVG})]})})},Ye=_t;import{Fragment as wt,jsx as Ke}from"react/jsx-runtime";var Ot=e=>{let{pointers:t,settings:r,svg:o,$svg:n,data:a,setPointer:s,setSelectedPointerId:i,selectedPointerId:c}=e;return Ke(wt,{children:t.pointers.map(g=>Ke(Ye,{pointer:g,svg:o,settings:r,$svg:n,data:a,setPointer:s,setSelectedPointerId:i,selectedPointerId:c},g.id))})},We=Ot;var Qe=e=>{let t=f(e.min,0),r=f(e.max,100),o=f(e.step,1),n=f(e.arrowStep,1),a=f(e.round,0),s=e.data||[];if(s.length>0){let h=s.findIndex(u=>u===t),l=s.findIndex(u=>u===r);t=h===-1?0:h,r=l===-1?s.length:l}else t>r&&(t=r+100);let i=f(e.pathStartAngle,0),c=f(e.pathEndAngle,360),g=I(i,360)===I(c,360),m=o*360/(r-t),b=n*360/(r-t);return{min:t,max:r,round:a,data:s,stepAngleDeg:m,arrowStepAngleDeg:b,isClosedShape:g}};import{useCallback as Ut,useEffect as Ae,useRef as ue,useState as ce}from"react";var Je=(e,t,r,o,n,a)=>{if(!e.pointers||e.pointers.length<=0)return null;let s={radius:t,cx:r,cy:o,startAngleDeg:n,endAngleDeg:n,strokeDasharray:[0,0],strokeOffset:0};if(e.pointers.length===1)s.startAngleDeg=n,s.endAngleDeg=e.pointers[0].angleDeg;else{let u=se(e.pointers,n);if(!u)return null;let[p,d]=u;s.startAngleDeg=p.angleDeg,s.endAngleDeg=d.angleDeg}let i=Z(n,a);s.startAngleDeg>s.endAngleDeg&&(s.endAngleDeg+=360);let c=Z(s.startAngleDeg,s.endAngleDeg);c>i&&(c=360-c,[s.startAngleDeg,s.endAngleDeg]=[s.endAngleDeg,s.startAngleDeg]);let m=2*Math.PI*t,b=-(s.startAngleDeg/360)*m,h=c/360*m,l=m-h;return s.strokeDasharray=[h,l],s.strokeOffset=b,s};var le=(e,t,r,o)=>{let n=e.getPercent();n<0&&(n=0),n>100&&(n=100);let a=t%360,s=r%360;if(a<o&&(a+=360),s<o&&(s+=360),s>a){let c=(s-a+360)%360;return I(t+n*c/100,360)}else{let c=(a-s+360)%360;return I(t-n*c/100,360)}};import{Fragment as zt,jsx as je}from"react/jsx-runtime";var Ht=(e,t,r,o,n)=>{if(e)return A(t,Ue);let a=A(r,De);return o?A(n,a):a},Vt=e=>{let{settings:t,pointers:r,$svg:o,svg:n,data:a,setPointer:s}=e,[i,c]=ce(null),[g,m]=ce(null),[b,h]=ce(De),[l,u]=ce(!1),p=ue(),d=ue(null),D=ue(0),M=ue(0);Ae(()=>{h(Ht(t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,l,t.connectionBgColorHover))},[t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,t.connectionBgColorHover,l]),Ae(()=>{c(Je(r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg))},[r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg]);let k=C=>{if(!o||t.disabled||g&&g.isAnimating())return;let v=z(o,C.clientX,C.clientY,n.cx,n.cy,n.radius,n.radius),T=re(r.pointers,v,n.cx,n.cy,n.radius);T&&(t.animateOnClick?(d.current=T,D.current=T.angleDeg,M.current=v,g==null||g.start()):s(T,v))},E=Ut(C=>{if(!o||t.disabled||!t.rangeDragging)return;let v=se(r.pointers,n.startAngleDeg);if(!v)return;let[T,L]=v,U=z(o,C.clientX,C.clientY,n.cx,n.cy,n.radius,n.radius);if(p.current===void 0){p.current=U;return}let w=U-p.current;w===0||Math.abs(w)<a.stepAngleDeg||(s(T,I(T.angleDeg+w,360)),s(L,I(L.angleDeg+w,360)),p.current=U)},[o,n.cx,n.cy,n.radius,a.stepAngleDeg,r.pointers,s,t.disabled,t.rangeDragging,n.startAngleDeg]),P=()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",E),p.current=void 0},S=C=>{!t.rangeDragging||t.disabled||r.pointers.length<=1||(E(C),window.addEventListener("mousemove",E),window.addEventListener("mouseup",P))};Ae(()=>{if(g&&g.stop(),!t.animateOnClick){m(null);return}let C=ne({callback:v=>{if(!d.current)return;let T=le(v,D.current,M.current,n.startAngleDeg);s(d.current,T)},duration:f(t.animationDuration,200)});m(C)},[t.animateOnClick,t.animationDuration]);let V=()=>{u(!0)},O=()=>{u(!1)};return je(zt,{children:!B(t.hideConnection,!1)&&i&&je("circle",{"data-type":"connection",className:"mz-round-slider-connection",cx:i.cx,cy:i.cy,r:i.radius,strokeDasharray:i.strokeDasharray.join(" "),strokeDashoffset:i.strokeOffset,stroke:b,strokeWidth:n.thickness+1,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:t.disabled?"default":"pointer",onClick:k,onMouseDown:S,onMouseOver:V,onMouseOut:O})})},et=Vt;import{useEffect as $t,useState as Xt}from"react";import{Fragment as Yt,jsx as tt}from"react/jsx-runtime";var qt=e=>{let{settings:t,pointers:r,svg:o,data:n}=e,{cx:a,cy:s}=o,[i,c]=Xt("");$t(()=>{let m=r.pointers.map(h=>q(n,h.angleDeg,o.startAngleDeg,o.endAngleDeg));m.sort((h,l)=>h.toString().localeCompare(l.toString(),"en",{numeric:!0}));let b=m.map(h=>`${t.textPrefix||""}${h}${t.textSuffix||""}`);c(b.join(" "))},[n,r.pointers,o.startAngleDeg,o.endAngleDeg,t.textPrefix,t.textSuffix]);let g=B(t.hideText,!1);return tt(Yt,{children:!g&&tt("text",{"data-type":"text",className:"mz-round-slider-text",x:a,y:s,fill:A(t.textColor,He),fontSize:f(t.textFontSize,16),fontFamily:t.textFontFamily,style:{userSelect:"none",whiteSpace:"pre"},textAnchor:"middle",children:i})})},nt=qt;import{useEffect as st,useState as at,Fragment as en}from"react";var rt=(e,t)=>{let r=f(e.ticksCount,0);r||(t.data&&t.data.length>0?r=t.data.length:r=t.max);let o=f(e.ticksHeight,10);return{ticksCount:r,enableTicks:B(e.enableTicks,!1),ticksWidth:f(e.ticksWidth,3),ticksHeight:o,longerTicksHeight:f(e.longerTicksHeight,o*2),ticksDistanceToPanel:f(e.ticksDistanceToPanel,0),tickValuesDistance:f(e.tickValuesDistance,15),ticksColor:A(e.ticksColor,Ve),tickValuesColor:A(e.tickValuesColor,ze),tickValuesFontSize:f(e.tickValuesFontSize,12),ticksGroupSize:f(e.ticksGroupSize,10),longerTickValuesOnly:B(e.longerTickValuesOnly,!0),showTickValues:B(e.showTickValues,!0)}},ot=(e,t,r,o,n,a)=>{let s=[],i=Math.abs(o-r),c=t===0?0:i/t,g=t;a.isClosedShape||g++;for(let m=0;m<g;m++){let b=r+m*c,h=R(N(b),0,Math.PI*2,0,Math.PI),[l,u]=F([n.cx,n.cy],h,n.radius),p=e.ticksGroupSize!==void 0&&m%e.ticksGroupSize===0,d=e.ticksHeight;p&&(d=e.longerTicksHeight);let D=ye([n.cx-l,n.cy-u]),M=ee(D,d),k=ee(D,e.ticksDistanceToPanel+n.thickness/2);l+=k[0],u+=k[1];let E=l+M[0],P=u+M[1],S;if(e.showTickValues&&(!e.longerTickValuesOnly||e.longerTickValuesOnly&&(p||e.ticksGroupSize===void 0))){let v=R(m,0,t,a.min,a.max);if(a.data.length>0){let T=Math.round(v);v=a.data[T]}else v=_(v,a.round);S=(v!=null?v:"").toString()}let V=0,O=0,C=S!==void 0;if(C){let v=f(d+e.tickValuesDistance,d*1.5),T=ee(D,v);V=l+T[0],O=u+T[1]}s.push({x:l,y:u,x1:E,y1:P,textX:V,textY:O,isLonger:p,tickValue:S,showText:C})}return s};import{Fragment as nn,jsx as Se,jsxs as it}from"react/jsx-runtime";var tn=e=>{let{settings:t,svg:r,data:o}=e,[n,a]=at(null),[s,i]=at([]);return st(()=>{a(rt(t,o))},[t,o]),st(()=>{if(!n)return;let c=r.endAngleDeg;c<r.startAngleDeg&&(c+=360),i(ot(n,n.ticksCount,r.startAngleDeg,c,r,o))},[o,r,n]),Se(nn,{children:n&&n.enableTicks&&Se("g",{children:s.map((c,g)=>{let{x:m,y:b,x1:h,y1:l,textX:u,textY:p,showText:d}=c;return it(en,{children:[Se("line",{x1:m,y1:b,x2:h,y2:l,strokeWidth:n.ticksWidth,stroke:n.ticksColor,"data-type":"tick",className:"mz-round-slider-tick"}),d&&it("text",{"data-type":"tick-text",className:"mz-round-slider-tick-text",x:u,y:p,textAnchor:"middle",dominantBaseline:"middle",fill:n.tickValuesColor,fontSize:n.tickValuesFontSize,fontFamily:t.tickValuesFontFamily,style:{userSelect:"none",whiteSpace:"pre"},children:[t.tickValuesPrefix,c.tickValue,t.tickValuesSuffix]})]},g)})})})},lt=tn;import{useEffect as ut,useState as ct,useRef as Te}from"react";import{jsx as mt,jsxs as on}from"react/jsx-runtime";var rn=e=>{let{settings:t,pointers:r,$svg:o,svg:n,setPointer:a}=e,[s,i]=ct(null),[c,g]=ct({strokeDasharray:"0 1000000",strokeOffset:0}),m=Te(null),b=Te(0),h=Te(0);ut(()=>{g(Ge(n.startAngleDeg,n.endAngleDeg,n.radius))},[n.startAngleDeg,n.endAngleDeg,n.radius]);let l=u=>{if(!o||t.disabled||s&&s.isAnimating())return;let p=z(o,u.clientX,u.clientY,n.cx,n.cy,n.radius,n.radius),d=re(r.pointers,p,n.cx,n.cy,n.radius);d&&(t.animateOnClick?(m.current=d,b.current=d.angleDeg,h.current=p,s==null||s.start()):a(d,p))};return ut(()=>{if(s&&s.stop(),!t.animateOnClick){i(null);return}let u=ne({callback:p=>{if(!m.current)return;let d=le(p,b.current,h.current,n.startAngleDeg);a(m.current,d)},duration:f(t.animationDuration,200)});i(u)},[t.animateOnClick,t.animationDuration]),on("g",{onClick:l,children:[n.border>0&&mt("circle",{strokeDasharray:c.strokeDasharray,strokeDashoffset:c.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:A(t.pathBorderColor,Be),strokeWidth:n.thickness+n.border*2,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path-border",className:"mz-round-slider-path-border"}),mt("circle",{strokeDasharray:c.strokeDasharray,strokeDashoffset:c.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:A(t.pathBgColor,Fe),strokeWidth:n.thickness,fill:t.pathInnerBgColor?t.pathInnerBgColor:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path",className:"mz-round-slider-path"})]})},gt=rn;import{Fragment as cn,jsx as G,jsxs as un}from"react/jsx-runtime";var mo=e=>{let[t,r]=me(null),[o,n]=me(null),[a,s]=me(null),[i,c]=me(""),g=dt(null),m=dt(null);Ce(()=>{let l=Qe(e);JSON.stringify(t)!==JSON.stringify(l)&&r(l)},[t,e]),Ce(()=>{s(qe(e,t))},[e.pointerRadius,e.pathStartAngle,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pointers,e.pointerRadius,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pathStartAngle,e.pathEndAngle,t]),Ce(()=>{if(!a)return;let l=f(e.pathStartAngle,0),u=f(e.pathEndAngle,360);u<=l&&(u+=360),n(Ne(f(e.pathRadius,150),f(e.pathThickness,5),f(e.pathBorder,0),a.maxRadius,l,u))},[e.pathRadius,e.pathThickness,e.pathBorder,e.pathStartAngle,e.pathEndAngle,a]);let b=(l,u)=>{if(e.disabled||!a.pointers||!l||l.disabled||(u=xe(u,t.stepAngleDeg),t.isClosedShape&&I(u,360)===I(o.endAngleDeg,360)&&(u=o.startAngleDeg),l.angleDeg===u))return;if(!e.pointersOverlap){let d,D;if(t.isClosedShape){let M=I(l.index-1,a.pointers.length),k=I(l.index+1,a.pointers.length),E=a.pointers[M],P=a.pointers[k];if(d=E.angleDeg,D=P.angleDeg,a.pointers.length===2&&d===D){let S=d;if(g.current===null)g.current=u;else{let O=S-90,C=S-.001;O<0&&(O+=360),C<0&&(C+=360);let v=H(S+.001,S+90,u),T=H(O,C,g.current),L=v&&T,U=S-90,w=S-.001;U<0&&(U+=360),w<0&&(w+=360);let ge=H(U,w,u),de=H(S+.001,S+90,g.current);if(L||ge&&de){h(l,S);return}u!==S&&(g.current=u)}}}else d=l.index===0?o.startAngleDeg:a.pointers[l.index-1].angleDeg,D=l.index===a.pointers.length-1?o.endAngleDeg:a.pointers[l.index+1].angleDeg;D<=d&&(D+=360),H(d,D,u)||(u=oe(d,D,u,o.cx,o.cy,o.radius))}l.angleDeg!==u&&h(l,u)},h=(l,u)=>{let p=K({},a);if(p.pointers=[...a.pointers],p.pointers[l.index].prevAngleDeg=p.pointers[l.index].angleDeg,p.pointers[l.index].angleDeg=u,a.pointers=p.pointers,s(p),typeof e.onChange=="function"){let d=p.pointers.map(D=>{let M=q(t,D.angleDeg,o.startAngleDeg,o.endAngleDeg);return{radius:D.radius,value:M,bgColor:D.bgColor,bgColorSelected:D.bgColorSelected,bgColorDisabled:D.bgColorDisabled,border:D.border,borderColor:D.borderColor,disabled:D.disabled,ariaLabel:D.ariaLabel}});e.onChange(d)}};return G(cn,{children:o&&un("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,tabIndex:0,focusable:!0,"aria-disabled":e.disabled?!0:void 0,style:e.svgBgColor?Re(K({},J),{backgroundColor:e.svgBgColor}):J,className:"mz-round-slider",children:[e.SvgDefs&&G("defs",{children:e.SvgDefs}),G(gt,{settings:e,pointers:a,svg:o,$svg:m.current,setPointer:b}),G(lt,{settings:e,svg:o,data:t}),G(et,{settings:e,pointers:a,svg:o,$svg:m.current,data:t,setPointer:b}),G(We,{settings:e,pointers:a,svg:o,$svg:m.current,data:t,setPointer:b,setSelectedPointerId:c,selectedPointerId:i}),G(nt,{settings:e,pointers:a,svg:o,data:t})]})})};export{mo as RoundSlider};
//# sourceMappingURL=mz-react-round-slider.esm.js.map
