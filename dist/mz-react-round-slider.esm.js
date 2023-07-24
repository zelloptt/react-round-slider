/* 
MZ React Round Slider v1.0.0
https://github.com/mzusin/react-round-slider
MIT License      
Copyright (c) 2023-present, Miriam Zusin          
*/
var xt=Object.defineProperty,vt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var It=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var Re=(e,t,r)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))It.call(t,r)&&Re(e,r,t[r]);if(ke)for(var r of ke(t))St.call(t,r)&&Re(e,r,t[r]);return e},_e=(e,t)=>vt(e,At(t));import{useEffect as ge,useRef as Dt,useState as me}from"react";var Tt=Math.pow,w=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=Tt(10,t);return Math.round(e*r)/r},v=(e,t)=>(e%t+t)%t,k=(e,t,r,o,n)=>(n-o)*(e-t)/(r-t)+o;var Le=e=>!isNaN(parseFloat(e))&&isFinite(e);var we=(e,t=1/0)=>{let r=e*(180/Math.PI);return w(r,t)},_=(e,t=1/0)=>{let r=e*(Math.PI/180);return w(r,t)};var Oe=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(w(e[n]-t[n],r));return o},ye=(e,t,r=1/0)=>Oe(e,t,r);var Ct=(e,t,r=1/0)=>{let o=[];for(let n=0;n<e.length;n++)o.push(w(e[n]*t,r));return o},ee=(e,t,r=1/0)=>Ct(e,t,r);var Ne=(e,t=1/0)=>{let r=0;for(let o=0;o<e.length;o++)r+=e[o]*e[o];return w(Math.sqrt(r),t)};var te=(e,t,r=1/0)=>{let o=Oe(e,t);return Ne(o,r)};var Et=(e,t=1/0)=>{let r=Ne(e),o=[];for(let n=0;n<e.length;n++)o.push(r===0?0:w(e[n]/r,t));return o},Be=(e,t=1/0)=>Et(e,t);var L=(e,t,r)=>(t=t%Math.PI*2,[e[0]+Math.cos(t)*r,e[1]+Math.sin(t)*r]);var Fe=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var ne=e=>{let t=e.duration!==void 0?e.duration:1/0,r,o,n,s,a=!1,l,c=()=>{r=void 0,n=void 0,s=void 0,a=!1,o!==void 0&&window.cancelAnimationFrame(o)},g=()=>{c(),u()},m=()=>{a=!1},f=()=>{a=!0},p=P=>{r===void 0&&(r=P),n=P-r,a&&s!==P&&typeof e.callback=="function"&&e.callback(I()),n<=t?(s=P,o=window.requestAnimationFrame(p)):c()},i=(P,E)=>{g(),typeof e.resizeCallback=="function"&&e.resizeCallback(P,E)},u=()=>{r=void 0,n=void 0,s=void 0,a=!0,e.restartOnResize&&window.ResizeObserver&&l===void 0?(l=new ResizeObserver(i),l.observe(document.body,{box:"border-box"})):o=window.requestAnimationFrame(p)},D=()=>n,h=()=>a,b=()=>r,C=()=>{if(!(t===1/0||n===void 0))return n*100/t},R=()=>l,I=()=>({start:u,stop:c,pause:m,resume:f,restart:g,isAnimating:h,getElapsedTime:D,getStartTime:b,getPercent:C,getResizeObserver:R});return I()};var Ue=(e,t,r,o,n,s)=>{let a=t+r*2,l=Math.max(0,o*2-a),c=e*2+a+l,[g,m]=Mt(e,o,t,r);return{cx:g,cy:m,radius:e,size:c,thickness:t,border:r,startAngleDeg:n,endAngleDeg:s}},Mt=(e,t,r,o)=>{let n=Pt(e,t,r,o),s=w(n/2,2);return[s,s]},Pt=(e,t,r,o)=>{let n=r+o*2,s=Math.max(0,t*2-n);return e*2+n+s};var He="#efefef";var Ve="#444444";var W="#163a86",pe="#000",be="#a8a8a8";var De="#000",xe="#5daed2",$e="#97b0bb",ze="#000";var Ge="#efefef",Xe="#000";var d=(e,t)=>Le(e)?Number(e):t,A=(e,t)=>e==null?t:e,O=(e,t)=>e==null?t:e;var U=(e,t,r)=>(e>t&&(t+=360),r>=e&&r<=t||r+360>=e&&r+360<=t),Z=(e,t)=>{t<e&&(t+=360);let r=t-e,o=v(r,360);return o===0&&r>0?360:o},qe=(e,t,r)=>{e>t&&(t+=360);let o=2*Math.PI*r,n=t-e,s=-(e/360)*o,a=n/360*o,l=o-a;return{strokeDasharray:[a,l].join(" "),strokeOffset:s}};var V=(e,t,r,o,n,s,a)=>{let{left:l,top:c}=e.getBoundingClientRect(),g=[t-l,r-c],m=ye(g,[o,n]),f=Math.atan2(m[1]/a,m[0]/s);return f<0&&(f+=2*Math.PI),we(f)},q=(e,t,r,o)=>{o<r&&(o+=360),t<r&&(t+=360);let n=k(t,r,o,e.min,e.max);if(e.data.length>0){let s=Math.round(n);n=e.data[s]}else n=w(n,e.round);return n},kt=(e,t,r,o)=>{let n;if(o<r&&(o+=360),e.data.length>0){let s=e.data.findIndex(a=>a===t);n=s===-1?0:s}else n=typeof t!="number"?e.min:t;return v(k(n,e.min,e.max,r,o),360)},Rt=(e,t)=>{if(!e||!e.pointers||e.pointers.length<0||!t){let o=v(d(e.pathStartAngle,0),360),n=A(e.pointerBgColor,W),s=A(e.pointerBgColorSelected,pe),a=A(e.pointerBgColorDisabled,be),l=A(e.pointerBgColorHover,s);return[{id:"0",index:0,radius:d(e.pointerRadius,10),angleDeg:o,prevAngleDeg:o,bgColor:n,bgColorSelected:s,bgColorDisabled:a,bgColorHover:l,border:d(e.pointerBorder,0),borderColor:A(e.pointerBorderColor,De),disabled:!!e.disabled}]}let r=[];for(let o=0;o<e.pointers.length;o++){let n=e.pointers[o],s=n.radius!==void 0?n.radius:d(e.pointerRadius,10),a=n.bgColor?n.bgColor:A(e.pointerBgColor,W),l=n.bgColorSelected?n.bgColorSelected:A(e.pointerBgColorSelected,pe),c=n.bgColorDisabled?n.bgColorDisabled:A(e.pointerBgColorDisabled,be),g=n.bgColorHover?n.bgColorHover:A(e.pointerBgColorHover,l),m=n.border?n.border:d(e.pointerBorder,0),f=n.borderColor?n.borderColor:A(e.pointerBorderColor,De),p=n.disabled!==void 0?n.disabled:O(e.disabled,!1),i=d(e.pathStartAngle,0),u=d(e.pathEndAngle,360),D=kt(t,n.value,i,u),h=ve(D,t.stepAngleDeg);t.isClosedShape&&v(h,360)===v(u,360)&&(h=i),r.push({id:o.toString(),index:o,radius:s,angleDeg:h,prevAngleDeg:h,bgColor:a,bgColorSelected:l,bgColorDisabled:c,bgColorHover:g,border:m,borderColor:f,disabled:p,ariaLabel:n.ariaLabel})}return r},We=(e,t)=>{let r=Rt(e,t);return{pointers:r,maxRadius:_t(r)}},_t=e=>{if(e.length<=0)return 0;let t=-1/0;for(let r of e)t=Math.max(t,Math.max(0,r.radius+r.border/2));return t},re=(e,t,r,o,n)=>{if(!e||e.length<=0)return null;if(e.length===1)return e[0];let s=k(_(t),0,Math.PI*2,0,Math.PI),a=L([r,o],s,n),l,c=null,g=e.filter(m=>!m.disabled);for(let m of g){let f=k(_(m.angleDeg),0,Math.PI*2,0,Math.PI),p=L([r,o],f,n),i=te(a,p);(l===void 0||i<l)&&(l=i,c=m)}return K({},c)},oe=(e,t,r,o,n,s)=>{let a=k(_(r),0,Math.PI*2,0,Math.PI),l=L([o,n],a,s),c=k(_(e),0,Math.PI*2,0,Math.PI),g=L([o,n],c,s),m=k(_(t),0,Math.PI*2,0,Math.PI),f=L([o,n],m,s),p=te(l,g),i=te(l,f);return p<=i?e:t},Ze=(e,t)=>{if(!e||e.length<=0)return null;let r,o,n=null,s=null;for(let a of e){let l=Z(t,a.angleDeg);(r===void 0||l<r)&&(n=a,r=l),(o===void 0||l>o)&&(s=a,o=l)}return n===null||s===null?null:[n,s]},ve=(e,t)=>t===0?0:Math.round(e/t)*t;import{useEffect as se,useState as ae,useRef as Lt,useCallback as wt}from"react";var J={outline:"none"};import{Fragment as Bt,jsx as Ae,jsxs as Nt}from"react/jsx-runtime";var Ot=(e,t,r,o,n,s,a)=>e.disabled?n:a?s:e.id===t?o:r,yt=e=>{let t=Lt(null),{pointer:r,svg:o,$svg:n,data:s,settings:a,setPointer:l,selectedPointerId:c}=e,{radius:g,angleDeg:m,bgColor:f,bgColorSelected:p,bgColorDisabled:i,bgColorHover:u,border:D,borderColor:h}=e.pointer,{cx:b,cy:C}=o,[R,I]=ae(null),[P,E]=ae(""),[H,y]=ae(W),[M,S]=ae(!1);se(()=>{y(Ot(r,c,f,p,i,u,M))},[r,c,f,p,i,u,M]),se(()=>{let x=q(s,r.angleDeg,o.startAngleDeg,o.endAngleDeg);E(x===void 0?"":x.toString())},[s,r.angleDeg,o.startAngleDeg,o.endAngleDeg]),se(()=>{let x=k(_(m),0,Math.PI*2,0,Math.PI),G=L([b,C],x,o.radius);I(G)},[m,b,C,o.radius]);let T=wt(x=>{if(!n||a.disabled||r.disabled)return;let G=x.type.indexOf("mouse")!==-1?x.clientX:x.touches[0].clientX,j=x.type.indexOf("mouse")!==-1?x.clientY:x.touches[0].clientY,B=V(n,G,j,o.cx,o.cy,o.radius,o.radius),Y;U(o.startAngleDeg,o.endAngleDeg,B)?Y=B:Y=oe(o.startAngleDeg,o.endAngleDeg,r.angleDeg,o.cx,o.cy,o.radius),l(r,Y)},[n,r,l,o.cx,o.cy,o.endAngleDeg,o.radius,o.startAngleDeg,a.disabled]),z=()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",T)},F=x=>{a.disabled||r.disabled||(T(x),window.addEventListener("mousemove",T),window.addEventListener("mouseup",z))},N=x=>{if(!(a.disabled||r.disabled||a.keyboardDisabled))switch(x.key){case"ArrowLeft":{x.preventDefault(),l(r,r.angleDeg+s.arrowStepAngleDeg);break}case"ArrowRight":{x.preventDefault(),l(r,r.angleDeg-s.arrowStepAngleDeg);break}case"ArrowUp":{x.preventDefault(),l(r,r.angleDeg-s.arrowStepAngleDeg);break}case"ArrowDown":{x.preventDefault(),l(r,r.angleDeg+s.arrowStepAngleDeg);break}}};se(()=>{let x=t.current,G=B=>{a.disabled||r.disabled||(B.preventDefault(),B.stopPropagation(),T(B))},j=B=>{if(a.disabled||r.disabled||a.mousewheelDisabled||document.activeElement!==x)return;B.stopPropagation(),B.preventDefault();let Y=B.deltaY<0,he;Y?he=r.angleDeg+s.arrowStepAngleDeg:he=r.angleDeg-s.arrowStepAngleDeg,l(r,he)};return x==null||x.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("wheel",j,{passive:!1}),()=>{x==null||x.removeEventListener("touchmove",G),document.removeEventListener("wheel",j)}},[R,T,s.arrowStepAngleDeg,r,l,a.disabled,a.mousewheelDisabled]);let de=()=>{S(!0)},fe=()=>{S(!1)};return Ae(Bt,{children:R&&Nt("g",{ref:t,transform:`translate(${R[0]-g/2}, ${R[1]-g/2})`,role:"slider","aria-disabled":r.disabled?!0:void 0,"aria-valuenow":r.angleDeg,"aria-valuetext":P,"aria-label":r.ariaLabel,"data-type":"pointer",className:`mz-round-slider-pointer ${r.disabled?"mz-round-slider-pointer-disabled":""}`,"data-angle":r.angleDeg,"data-id":r.id,"data-index":r.index,onMouseDown:F,onKeyDown:N,onMouseOver:de,onMouseOut:fe,tabIndex:0,cursor:r.disabled?"default":"pointer",style:J,children:[!a.pointerSVG&&Ae("circle",{cx:g/2,cy:g/2,r:g,fill:H,strokeWidth:D,stroke:h,style:{transition:"0.3s fill"}}),a.pointerSVG&&Ae("g",{children:a.pointerSVG})]})})},Qe=yt;import{Fragment as Ut,jsx as Je}from"react/jsx-runtime";var Ft=e=>{let{pointers:t,settings:r,svg:o,$svg:n,data:s,setPointer:a,selectedPointerId:l}=e;return Je(Ut,{children:t.pointers.map(c=>Je(Qe,{pointer:c,svg:o,settings:r,$svg:n,data:s,setPointer:a,selectedPointerId:l},c.id))})},je=Ft;var tt=e=>{let t=d(e.min,0),r=d(e.max,100),o=d(e.step,1),n=d(e.arrowStep,1),s=d(e.round,0),a=e.data||[];if(a.length>0){let p=a.findIndex(u=>u===t),i=a.findIndex(u=>u===r);t=p===-1?0:p,r=i===-1?a.length:i}else t>r&&(t=r+100);let l=d(e.pathStartAngle,0),c=d(e.pathEndAngle,360),g=v(l,360)===v(c,360),m=o*360/(r-t),f=n*360/(r-t);return{min:t,max:r,round:s,data:a,stepAngleDeg:m,arrowStepAngleDeg:f,isClosedShape:g}};import{useCallback as Gt,useEffect as Ie,useRef as le,useState as ue}from"react";var nt=(e,t,r,o,n,s)=>{if(!e.pointers||e.pointers.length<=0)return null;let a={radius:t,cx:r,cy:o,startAngleDeg:n,endAngleDeg:n,strokeDasharray:[0,0],strokeOffset:0};e.pointers.length===1?(a.startAngleDeg=n,a.endAngleDeg=e.pointers[0].angleDeg):(a.startAngleDeg=e.pointers[0].angleDeg,a.endAngleDeg=e.pointers[e.pointers.length-1].angleDeg);let l=Z(n,s);a.startAngleDeg>a.endAngleDeg&&(a.endAngleDeg+=360);let c=Z(a.startAngleDeg,a.endAngleDeg);c>l&&(c=360-c,[a.startAngleDeg,a.endAngleDeg]=[a.endAngleDeg,a.startAngleDeg]);let m=2*Math.PI*t,f=-(a.startAngleDeg/360)*m,p=c/360*m,i=m-p;return a.strokeDasharray=[p,i],a.strokeOffset=f,a};var ie=(e,t,r,o)=>{let n=e.getPercent();n<0&&(n=0),n>100&&(n=100);let s=t%360,a=r%360;if(s<o&&(s+=360),a<o&&(a+=360),a>s){let c=(a-s+360)%360;return v(t+n*c/100,360)}else{let c=(s-a+360)%360;return v(t-n*c/100,360)}};import{Fragment as Yt,jsx as rt}from"react/jsx-runtime";var Xt=(e,t,r,o,n)=>{if(e)return A(t,$e);let s=A(r,xe);return o?A(n,s):s},qt=e=>{let{settings:t,pointers:r,$svg:o,svg:n,data:s,setPointer:a}=e,[l,c]=ue(null),[g,m]=ue(null),[f,p]=ue(xe),[i,u]=ue(!1),D=le(),h=le(null),b=le(0),C=le(0);Ie(()=>{p(Xt(t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,i,t.connectionBgColorHover))},[t.disabled,t.connectionBgColorDisabled,t.connectionBgColor,t.connectionBgColorHover,i]),Ie(()=>{c(nt(r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg))},[r,n.radius,n.cx,n.cy,n.startAngleDeg,n.endAngleDeg]);let R=M=>{if(!o||t.disabled||g&&g.isAnimating())return;let S=V(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius),T=re(r.pointers,S,n.cx,n.cy,n.radius);T&&(t.animateOnClick?(h.current=T,b.current=T.angleDeg,C.current=S,g==null||g.start()):a(T,S))},I=Gt(M=>{if(!o||t.disabled||!t.rangeDragging)return;let S=Ze(r.pointers,n.startAngleDeg);if(!S)return;let[T,z]=S,F=V(o,M.clientX,M.clientY,n.cx,n.cy,n.radius,n.radius);if(D.current===void 0){D.current=F;return}let N=F-D.current;N===0||Math.abs(N)<s.stepAngleDeg||(a(T,v(T.angleDeg+N,360)),a(z,v(z.angleDeg+N,360)),D.current=F)},[o,n.cx,n.cy,n.radius,s.stepAngleDeg,r.pointers,a,t.disabled,t.rangeDragging,n.startAngleDeg]),P=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",I),D.current=void 0},E=M=>{!t.rangeDragging||t.disabled||r.pointers.length<=1||(I(M),window.addEventListener("mousemove",I),window.addEventListener("mouseup",P))};Ie(()=>{if(g&&g.stop(),!t.animateOnClick){m(null);return}let M=ne({callback:S=>{if(!h.current)return;let T=ie(S,b.current,C.current,n.startAngleDeg);a(h.current,T)},duration:d(t.animationDuration,200)});m(M)},[t.animateOnClick,t.animationDuration]);let H=()=>{u(!0)},y=()=>{u(!1)};return rt(Yt,{children:!O(t.hideConnection,!1)&&l&&rt("circle",{"data-type":"connection",className:"mz-round-slider-connection",cx:l.cx,cy:l.cy,r:l.radius,strokeDasharray:l.strokeDasharray.join(" "),strokeDashoffset:l.strokeOffset,stroke:f,strokeWidth:n.thickness+1,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:t.disabled?"default":"pointer",onClick:R,onMouseDown:E,onMouseOver:H,onMouseOut:y,style:{transition:"0.2s stroke"}})})},ot=qt;import{useEffect as Wt,useState as Zt}from"react";import{Fragment as Jt,jsx as st}from"react/jsx-runtime";var Qt=e=>{let{settings:t,pointers:r,svg:o,data:n}=e,{cx:s,cy:a}=o,[l,c]=Zt("");Wt(()=>{let m=r.pointers.map(i=>q(n,i.angleDeg,o.startAngleDeg,o.endAngleDeg));m.sort((i,u)=>i.toString().localeCompare(u.toString(),"en",{numeric:!0}));let f=m.map(i=>`${t.textPrefix||""}${i}${t.textSuffix||""}`),p=A(t.textBetween," ");c(f.join(p))},[n,r.pointers,o.startAngleDeg,o.endAngleDeg,t.textPrefix,t.textSuffix,t.textBetween]);let g=O(t.hideText,!1);return st(Jt,{children:!g&&st("text",{"data-type":"text",className:"mz-round-slider-text",x:s+d(t.textOffsetX,0),y:a+d(t.textOffsetY,0),fill:A(t.textColor,ze),fontSize:d(t.textFontSize,16),fontFamily:t.textFontFamily,style:{userSelect:"none",whiteSpace:"pre"},textAnchor:"middle",children:l})})},at=Qt;import{useEffect as ut,useState as ct,Fragment as sn}from"react";var it=(e,t)=>{let r=d(e.ticksCount,0);r||(t.data&&t.data.length>0?r=t.data.length:r=t.max);let o=d(e.ticksHeight,10);return{ticksCount:r,enableTicks:O(e.enableTicks,!1),ticksWidth:d(e.ticksWidth,3),ticksHeight:o,longerTicksHeight:d(e.longerTicksHeight,o*2),ticksDistanceToPanel:d(e.ticksDistanceToPanel,0),tickValuesDistance:d(e.tickValuesDistance,15),ticksColor:A(e.ticksColor,Ge),tickValuesColor:A(e.tickValuesColor,Xe),tickValuesFontSize:d(e.tickValuesFontSize,12),ticksGroupSize:d(e.ticksGroupSize,10),longerTickValuesOnly:O(e.longerTickValuesOnly,!0),showTickValues:O(e.showTickValues,!0)}},lt=(e,t,r,o,n,s)=>{let a=[],l=Math.abs(o-r),c=t===0?0:l/t,g=t;s.isClosedShape||g++;for(let m=0;m<g;m++){let f=r+m*c,p=k(_(f),0,Math.PI*2,0,Math.PI),[i,u]=L([n.cx,n.cy],p,n.radius),D=e.ticksGroupSize!==void 0&&m%e.ticksGroupSize===0,h=e.ticksHeight;D&&(h=e.longerTicksHeight);let b=Be([n.cx-i,n.cy-u]),C=ee(b,h),R=ee(b,e.ticksDistanceToPanel+n.thickness/2);i+=R[0],u+=R[1];let I=i+C[0],P=u+C[1],E;if(e.showTickValues&&(!e.longerTickValuesOnly||e.longerTickValuesOnly&&(D||e.ticksGroupSize===void 0))){let S=k(m,0,t,s.min,s.max);if(s.data.length>0){let T=Math.round(S);S=s.data[T]}else S=w(S,s.round);E=(S!=null?S:"").toString()}let H=0,y=0,M=E!==void 0;if(M){let S=d(h+e.tickValuesDistance,h*1.5),T=ee(b,S);H=i+T[0],y=u+T[1]}a.push({x:i,y:u,x1:I,y1:P,textX:H,textY:y,isLonger:D,tickValue:E,showText:M})}return a};import{Fragment as ln,jsx as Te,jsxs as gt}from"react/jsx-runtime";var an=e=>{let{settings:t,svg:r,data:o}=e,[n,s]=ct(null),[a,l]=ct([]);return ut(()=>{s(it(t,o))},[t,o]),ut(()=>{if(!n)return;let c=r.endAngleDeg;c<r.startAngleDeg&&(c+=360),l(lt(n,n.ticksCount,r.startAngleDeg,c,r,o))},[o,r,n]),Te(ln,{children:n&&n.enableTicks&&Te("g",{children:a.map((c,g)=>{let{x:m,y:f,x1:p,y1:i,textX:u,textY:D,showText:h}=c;return gt(sn,{children:[Te("line",{x1:m,y1:f,x2:p,y2:i,strokeWidth:n.ticksWidth,stroke:n.ticksColor,"data-type":"tick",className:"mz-round-slider-tick"}),h&&gt("text",{"data-type":"tick-text",className:"mz-round-slider-tick-text",x:u,y:D,textAnchor:"middle",dominantBaseline:"middle",fill:n.tickValuesColor,fontSize:n.tickValuesFontSize,fontFamily:t.tickValuesFontFamily,style:{userSelect:"none",whiteSpace:"pre"},children:[t.tickValuesPrefix,c.tickValue,t.tickValuesSuffix]})]},g)})})})},mt=an;import{useEffect as pt,useState as Ee,useRef as Me}from"react";import{useEffect as dt,useState as ce}from"react";import{Fragment as cn,jsx as Ce,jsxs as ft}from"react/jsx-runtime";var un=e=>{let{svg:t,maskId:r,settings:o,circle:n}=e,[s,a]=ce([0,0]),[l,c]=ce([0,0]),[g,m]=ce(0),[f,p]=ce(!1);return dt(()=>{if(v(t.startAngleDeg,360)===v(t.endAngleDeg,360)){p(!0);return}p(O(o.pathInnerBgFull,!1))},[o.pathInnerBgFull,t.startAngleDeg,t.endAngleDeg]),dt(()=>{let i=k(t.startAngleDeg,0,Math.PI*2,0,Math.PI);a(L([t.cx,t.cy],_(i),t.radius));let u=k(t.endAngleDeg,0,Math.PI*2,0,Math.PI);c(L([t.cx,t.cy],_(u),t.radius));let D=t.endAngleDeg-t.startAngleDeg<=180?1:0;m(D)},[t.cx,t.cy,t.endAngleDeg,t.radius,t.startAngleDeg]),ft(cn,{children:[!f&&ft("mask",{id:r,children:[Ce("path",{fill:"black",d:`M ${s[0]} ${s[1]} A ${t.radius} ${t.radius} 1 ${g} 0 ${l[0]} ${l[1]}`}),Ce("path",{fill:"white",d:`M ${s[0]} ${s[1]} A ${t.radius} ${t.radius} 0 ${g===1?0:1} 1 ${l[0]} ${l[1]}`})]}),Ce("circle",{strokeDasharray:n.strokeDasharray,strokeDashoffset:n.strokeOffset,cx:t.cx,cy:t.cy,r:t.radius,stroke:"transparent",strokeWidth:t.thickness,fill:o.pathInnerBgColor,shapeRendering:"geometricPrecision",strokeLinecap:"round","data-type":"path-inner",className:"mz-round-slider-path-inner",mask:f?"":`url(#${r})`})]})},ht=un;import{jsx as Pe,jsxs as mn}from"react/jsx-runtime";var gn=e=>{let{settings:t,pointers:r,$svg:o,svg:n,setPointer:s}=e,[a,l]=Ee(null),[c]=Ee(Fe()),[g,m]=Ee({strokeDasharray:"0 1000000",strokeOffset:0}),f=Me(null),p=Me(0),i=Me(0);pt(()=>{m(qe(n.startAngleDeg,n.endAngleDeg,n.radius))},[n.startAngleDeg,n.endAngleDeg,n.radius]);let u=D=>{if(!o||t.disabled||a&&a.isAnimating())return;let h=V(o,D.clientX,D.clientY,n.cx,n.cy,n.radius,n.radius),b=re(r.pointers,h,n.cx,n.cy,n.radius);b&&(t.animateOnClick?(f.current=b,p.current=b.angleDeg,i.current=h,a==null||a.start()):s(b,h))};return pt(()=>{if(a&&a.stop(),!t.animateOnClick){l(null);return}let D=ne({callback:h=>{if(!f.current)return;let b=ie(h,p.current,i.current,n.startAngleDeg);s(f.current,b)},duration:d(t.animationDuration,200)});l(D)},[t.animateOnClick,t.animationDuration]),mn("g",{onClick:u,children:[t.pathInnerBgColor&&Pe(ht,{maskId:c,settings:t,svg:n,circle:g}),n.border>0&&Pe("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:A(t.pathBorderColor,Ve),strokeWidth:n.thickness+n.border*2,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path-border",className:"mz-round-slider-path-border"}),Pe("circle",{strokeDasharray:g.strokeDasharray,strokeDashoffset:g.strokeOffset,cx:n.cx,cy:n.cy,r:n.radius,stroke:A(t.pathBgColor,He),strokeWidth:n.thickness,fill:"none",shapeRendering:"geometricPrecision",strokeLinecap:"round",cursor:"pointer","data-type":"path",className:"mz-round-slider-path"})]})},bt=gn;import{Fragment as bn,jsx as $,jsxs as pn}from"react/jsx-runtime";var To=e=>{let[t,r]=me(null),[o,n]=me(null),[s,a]=me(null),[l,c]=me(""),g=Dt(null),m=Dt(null);ge(()=>{let i=tt(e);JSON.stringify(t)!==JSON.stringify(i)&&r(i)},[t,e]),ge(()=>{a(We(e,t))},[e.pointerRadius,e.pathStartAngle,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pointers,e.pointerRadius,e.pointerBgColor,e.pointerBgColorSelected,e.pointerBgColorDisabled,e.pointerBorder,e.pointerBorderColor,e.disabled,e.pathStartAngle,e.pathEndAngle,t]),ge(()=>{if(!s)return;let i=d(e.pathStartAngle,0),u=d(e.pathEndAngle,360);u<=i&&(u+=360),n(Ue(d(e.pathRadius,150),d(e.pathThickness,5),d(e.pathBorder,0),s.maxRadius,i,u))},[e.pathRadius,e.pathThickness,e.pathBorder,e.pathStartAngle,e.pathEndAngle,s]),ge(()=>{let i=u=>{u.target.closest('[data-type="pointer"]')||c("")};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);let f=(i,u)=>{if(e.disabled||!s.pointers||!i||i.disabled)return;if(u=ve(u,t.stepAngleDeg),t.isClosedShape&&v(u,360)===v(o.endAngleDeg,360)&&(u=o.startAngleDeg),i.angleDeg===u){p(i,u,!1);return}if(!e.pointersOverlap){let h,b;if(t.isClosedShape){let C=v(i.index-1,s.pointers.length),R=v(i.index+1,s.pointers.length),I=s.pointers[C],P=s.pointers[R];if(h=I.angleDeg,b=P.angleDeg,s.pointers.length===2&&h===b){let E=h;if(g.current===null)g.current=u;else{let y=E-150,M=E-.001;y<0&&(y+=360),M<0&&(M+=360);let S=U(E+.001,E+150,u),T=U(y,M,g.current),z=S&&T,F=E-150,N=E-.001;F<0&&(F+=360),N<0&&(N+=360);let de=U(F,N,u),fe=U(E+.001,E+150,g.current);if(z||de&&fe){p(i,E,!0);return}u!==E&&(g.current=u)}}}else h=i.index===0?o.startAngleDeg:s.pointers[i.index-1].angleDeg,b=i.index===s.pointers.length-1?o.endAngleDeg:s.pointers[i.index+1].angleDeg;b<=h&&(b+=360),U(h,b,u)||(u=oe(h,b,u,o.cx,o.cy,o.radius))}p(i,u,i.angleDeg!==u)},p=(i,u,D)=>{var b;if(D){let C=K({},s);if(C.pointers=[...s.pointers],C.pointers[i.index].prevAngleDeg=C.pointers[i.index].angleDeg,C.pointers[i.index].angleDeg=u,s.pointers=C.pointers,a(C),typeof e.onChange=="function"){let R=C.pointers.map(I=>{let P=q(t,I.angleDeg,o.startAngleDeg,o.endAngleDeg);return{radius:I.radius,value:P,bgColor:I.bgColor,bgColorSelected:I.bgColorSelected,bgColorDisabled:I.bgColorDisabled,border:I.border,borderColor:I.borderColor,disabled:I.disabled,ariaLabel:I.ariaLabel}});e.onChange(R)}}c(i.id);let h=(b=m.current)==null?void 0:b.querySelector(`[data-id="${i.id}"]`);h&&h.focus()};return $(bn,{children:o&&pn("svg",{ref:m,xmlns:"http://www.w3.org/2000/svg",width:o.size,height:o.size,tabIndex:0,focusable:!0,"aria-disabled":e.disabled?!0:void 0,style:e.svgBgColor?_e(K({},J),{backgroundColor:e.svgBgColor}):J,className:"mz-round-slider",children:[e.SvgDefs&&$("defs",{children:e.SvgDefs}),$(bt,{settings:e,pointers:s,svg:o,$svg:m.current,setPointer:f}),$(mt,{settings:e,svg:o,data:t}),$(ot,{settings:e,pointers:s,svg:o,$svg:m.current,data:t,setPointer:f}),$(je,{settings:e,pointers:s,svg:o,$svg:m.current,data:t,setPointer:f,selectedPointerId:l}),$(at,{settings:e,pointers:s,svg:o,data:t})]})})};export{To as RoundSlider};
//# sourceMappingURL=mz-react-round-slider.esm.js.map
