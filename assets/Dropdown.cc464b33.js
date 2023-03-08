import{u as fe}from"./mapbox-layer.23573ae4.js";import{o as N,c as ee,a as E,a1 as te,a2 as le,a3 as ae,b as w,e as h,a4 as B,f as j,K as oe,a5 as H,F as ne,J as be,a6 as P,P as V,_ as me,a7 as K,l as M,k as U,r as q,n as Q,g as J,u as k,x as xe,p as W,a8 as ge,a0 as X,h as Y}from"./index.7a4453cf.js";import{e as he,o as m,S as ie,h as ue,u as D,f as ye,V as Se,a as Oe,P as A,w as we,t as z,b as Le,R as G,I as Re,c as g}from"./hidden.20d3f4bf.js";function Pe(e,o){return N(),ee("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[E("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})])}function Ie(e){throw new Error("Unexpected object: "+e)}var y=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(y||{});function ke(e,o){let a=o.resolveItems();if(a.length<=0)return null;let s=o.resolveActiveIndex(),t=s??-1,i=(()=>{switch(e.focus){case 0:return a.findIndex(u=>!o.resolveDisabled(u));case 1:{let u=a.slice().reverse().findIndex((d,f,l)=>t!==-1&&l.length-f-1>=t?!1:!o.resolveDisabled(d));return u===-1?u:a.length-1-u}case 2:return a.findIndex((u,d)=>d<=t?!1:!o.resolveDisabled(u));case 3:{let u=a.slice().reverse().findIndex(d=>!o.resolveDisabled(d));return u===-1?u:a.length-1-u}case 4:return a.findIndex(u=>o.resolveId(u)===e.id);case 5:return null;default:Ie(e)}})();return i===-1?s:i}let re=Symbol("Context");var F=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(F||{});function De(){return te(re,null)}function Ve(e){le(re,e)}function $(e,o,a){he||ae(s=>{document.addEventListener(e,o,a),s(()=>document.removeEventListener(e,o,a))})}function _e(e,o,a=h(()=>!0)){function s(i,u){if(!a.value||i.defaultPrevented)return;let d=u(i);if(d===null||!d.getRootNode().contains(d))return;let f=function l(n){return typeof n=="function"?l(n()):Array.isArray(n)||n instanceof Set?n:[n]}(e);for(let l of f){if(l===null)continue;let n=l instanceof HTMLElement?l:m(l);if(n!=null&&n.contains(d)||i.composed&&i.composedPath().includes(n))return}return!ie(d,ue.Loose)&&d.tabIndex!==-1&&i.preventDefault(),o(i,d)}let t=w(null);$("mousedown",i=>{var u,d;a.value&&(t.value=((d=(u=i.composedPath)==null?void 0:u.call(i))==null?void 0:d[0])||i.target)},!0),$("click",i=>{!t.value||(s(i,()=>t.value),t.value=null)},!0),$("blur",i=>s(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function se(e={},o=null,a=[]){for(let[s,t]of Object.entries(e))ve(a,de(o,s),t);return a}function de(e,o){return e?e+"["+o+"]":o}function ve(e,o,a){if(Array.isArray(a))for(let[s,t]of a.entries())ve(e,de(o,s.toString()),t);else a instanceof Date?e.push([o,a.toISOString()]):typeof a=="boolean"?e.push([o,a?"1":"0"]):typeof a=="string"?e.push([o,a]):typeof a=="number"?e.push([o,`${a}`]):a==null?e.push([o,""]):se(a,o,e)}function Te(e,o,a){let s=w(a?.value),t=h(()=>e.value!==void 0);return[h(()=>t.value?e.value:s.value),function(i){return t.value||(s.value=i),o?.(i)}]}function Z(e){return[e.screenX,e.screenY]}function Ee(){let e=w([-1,-1]);return{wasMoved(o){let a=Z(o);return e.value[0]===a[0]&&e.value[1]===a[1]?!1:(e.value=a,!0)},update(o){e.value=Z(o)}}}function Be(e,o){return e===o}var Ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ae||{}),Ce=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ce||{}),Me=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Me||{});function Ne(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let pe=Symbol("ListboxContext");function C(e){let o=te(pe,null);if(o===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,C),a}return o}let je=B({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Be},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:a,emit:s}){let t=w(1),i=w(null),u=w(null),d=w(null),f=w([]),l=w(""),n=w(null),L=w(1);function O(r=v=>v){let v=n.value!==null?f.value[n.value]:null,c=Re(r(f.value.slice()),S=>m(S.dataRef.domRef)),b=v?c.indexOf(v):null;return b===-1&&(b=null),{options:c,activeOptionIndex:b}}let I=h(()=>e.multiple?1:0),[R,_]=Te(h(()=>e.modelValue===void 0?D(I.value,{[1]:[],[0]:void 0}):e.modelValue),r=>s("update:modelValue",r),h(()=>e.defaultValue)),p={listboxState:t,value:R,mode:I,compare(r,v){if(typeof e.by=="string"){let c=e.by;return r?.[c]===v?.[c]}return e.by(r,v)},orientation:h(()=>e.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:u,optionsRef:d,disabled:h(()=>e.disabled),options:f,searchQuery:l,activeOptionIndex:n,activationTrigger:L,closeListbox(){e.disabled||t.value!==1&&(t.value=1,n.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(r,v,c){if(e.disabled||t.value===1)return;let b=O(),S=ke(r===y.Specific?{focus:y.Specific,id:v}:{focus:r},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});l.value="",n.value=S,L.value=c??1,f.value=b.options},search(r){if(e.disabled||t.value===1)return;let v=l.value!==""?0:1;l.value+=r.toLowerCase();let c=(n.value!==null?f.value.slice(n.value+v).concat(f.value.slice(0,n.value+v)):f.value).find(S=>S.dataRef.textValue.startsWith(l.value)&&!S.dataRef.disabled),b=c?f.value.indexOf(c):-1;b===-1||b===n.value||(n.value=b,L.value=1)},clearSearch(){e.disabled||t.value!==1&&l.value!==""&&(l.value="")},registerOption(r,v){let c=O(b=>[...b,{id:r,dataRef:v}]);f.value=c.options,n.value=c.activeOptionIndex},unregisterOption(r){let v=O(c=>{let b=c.findIndex(S=>S.id===r);return b!==-1&&c.splice(b,1),c});f.value=v.options,n.value=v.activeOptionIndex,L.value=1},select(r){e.disabled||_(D(I.value,{[0]:()=>r,[1]:()=>{let v=P(p.value.value).slice(),c=P(r),b=v.findIndex(S=>p.compare(c,P(S)));return b===-1?v.push(c):v.splice(b,1),v}}))}};_e([u,d],(r,v)=>{var c;p.closeListbox(),ie(v,ue.Loose)||(r.preventDefault(),(c=m(u))==null||c.focus())},h(()=>t.value===0)),le(pe,p),Ve(h(()=>D(t.value,{[0]:F.Open,[1]:F.Closed})));let x=h(()=>{var r;return(r=m(u))==null?void 0:r.closest("form")});return j(()=>{oe([x],()=>{if(!x.value||e.defaultValue===void 0)return;function r(){p.select(e.defaultValue)}return x.value.addEventListener("reset",r),()=>{var v;(v=x.value)==null||v.removeEventListener("reset",r)}},{immediate:!0})}),()=>{let{name:r,modelValue:v,disabled:c,...b}=e,S={open:t.value===0,disabled:c,value:R.value};return H(ne,[...r!=null&&R.value!=null?se({[r]:R.value}).map(([T,ce])=>H(ye,Se({features:Oe.Hidden,key:T,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:T,value:ce}))):[],A({ourProps:{},theirProps:{...a,...we(b,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:S,slots:o,attrs:a,name:"Listbox"})])}}});B({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${z()}`}},setup(e,{attrs:o,slots:a}){let s=C("ListboxLabel");function t(){var i;(i=m(s.buttonRef))==null||i.focus({preventScroll:!0})}return()=>{let i={open:s.listboxState.value===0,disabled:s.disabled.value},{id:u,...d}=e,f={id:u,ref:s.labelRef,onClick:t};return A({ourProps:f,theirProps:d,slot:i,attrs:o,slots:a,name:"ListboxLabel"})}}});let Fe=B({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${z()}`}},setup(e,{attrs:o,slots:a,expose:s}){let t=C("ListboxButton");s({el:t.buttonRef,$el:t.buttonRef});function i(l){switch(l.key){case g.Space:case g.Enter:case g.ArrowDown:l.preventDefault(),t.openListbox(),V(()=>{var n;(n=m(t.optionsRef))==null||n.focus({preventScroll:!0}),t.value.value||t.goToOption(y.First)});break;case g.ArrowUp:l.preventDefault(),t.openListbox(),V(()=>{var n;(n=m(t.optionsRef))==null||n.focus({preventScroll:!0}),t.value.value||t.goToOption(y.Last)});break}}function u(l){switch(l.key){case g.Space:l.preventDefault();break}}function d(l){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),V(()=>{var n;return(n=m(t.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(l.preventDefault(),t.openListbox(),Ne(()=>{var n;return(n=m(t.optionsRef))==null?void 0:n.focus({preventScroll:!0})})))}let f=Le(h(()=>({as:e.as,type:o.type})),t.buttonRef);return()=>{var l,n;let L={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:O,...I}=e,R={ref:t.buttonRef,id:O,type:f.value,"aria-haspopup":"listbox","aria-controls":(l=m(t.optionsRef))==null?void 0:l.id,"aria-expanded":t.disabled.value?void 0:t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(n=m(t.labelRef))==null?void 0:n.id,O].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:i,onKeyup:u,onClick:d};return A({ourProps:R,theirProps:I,slot:L,attrs:o,slots:a,name:"ListboxButton"})}}}),ze=B({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${z()}`}},setup(e,{attrs:o,slots:a,expose:s}){let t=C("ListboxOptions"),i=w(null);s({el:t.optionsRef,$el:t.optionsRef});function u(l){switch(i.value&&clearTimeout(i.value),l.key){case g.Space:if(t.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),t.search(l.key);case g.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex.value!==null){let n=t.options.value[t.activeOptionIndex.value];t.select(n.dataRef.value)}t.mode.value===0&&(t.closeListbox(),V(()=>{var n;return(n=m(t.buttonRef))==null?void 0:n.focus({preventScroll:!0})}));break;case D(t.orientation.value,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return l.preventDefault(),l.stopPropagation(),t.goToOption(y.Next);case D(t.orientation.value,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),t.goToOption(y.Previous);case g.Home:case g.PageUp:return l.preventDefault(),l.stopPropagation(),t.goToOption(y.First);case g.End:case g.PageDown:return l.preventDefault(),l.stopPropagation(),t.goToOption(y.Last);case g.Escape:l.preventDefault(),l.stopPropagation(),t.closeListbox(),V(()=>{var n;return(n=m(t.buttonRef))==null?void 0:n.focus({preventScroll:!0})});break;case g.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(t.search(l.key),i.value=setTimeout(()=>t.clearSearch(),350));break}}let d=De(),f=h(()=>d!==null?d.value===F.Open:t.listboxState.value===0);return()=>{var l,n,L,O;let I={open:t.listboxState.value===0},{id:R,..._}=e,p={"aria-activedescendant":t.activeOptionIndex.value===null||(l=t.options.value[t.activeOptionIndex.value])==null?void 0:l.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(O=(n=m(t.labelRef))==null?void 0:n.id)!=null?O:(L=m(t.buttonRef))==null?void 0:L.id,"aria-orientation":t.orientation.value,id:R,onKeydown:u,role:"listbox",tabIndex:0,ref:t.optionsRef};return A({ourProps:p,theirProps:_,slot:I,attrs:o,slots:a,features:G.RenderStrategy|G.Static,visible:f.value,name:"ListboxOptions"})}}}),Ue=B({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${z()}`}},setup(e,{slots:o,attrs:a,expose:s}){let t=C("ListboxOption"),i=w(null);s({el:i,$el:i});let u=h(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===e.id:!1),d=h(()=>D(t.mode.value,{[0]:()=>t.compare(P(t.value.value),P(e.value)),[1]:()=>P(t.value.value).some(p=>t.compare(P(p),P(e.value)))})),f=h(()=>D(t.mode.value,{[1]:()=>{var p;let x=P(t.value.value);return((p=t.options.value.find(r=>x.some(v=>t.compare(P(v),P(r.dataRef.value)))))==null?void 0:p.id)===e.id},[0]:()=>d.value})),l=h(()=>({disabled:e.disabled,value:e.value,textValue:"",domRef:i}));j(()=>{var p,x;let r=(x=(p=m(i))==null?void 0:p.textContent)==null?void 0:x.toLowerCase().trim();r!==void 0&&(l.value.textValue=r)}),j(()=>t.registerOption(e.id,l)),be(()=>t.unregisterOption(e.id)),j(()=>{oe([t.listboxState,d],()=>{t.listboxState.value===0&&(!d.value||D(t.mode.value,{[1]:()=>{f.value&&t.goToOption(y.Specific,e.id)},[0]:()=>{t.goToOption(y.Specific,e.id)}}))},{immediate:!0})}),ae(()=>{t.listboxState.value===0&&(!u.value||t.activationTrigger.value!==0&&V(()=>{var p,x;return(x=(p=m(i))==null?void 0:p.scrollIntoView)==null?void 0:x.call(p,{block:"nearest"})}))});function n(p){if(e.disabled)return p.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),V(()=>{var x;return(x=m(t.buttonRef))==null?void 0:x.focus({preventScroll:!0})}))}function L(){if(e.disabled)return t.goToOption(y.Nothing);t.goToOption(y.Specific,e.id)}let O=Ee();function I(p){O.update(p)}function R(p){!O.wasMoved(p)||e.disabled||u.value||t.goToOption(y.Specific,e.id,0)}function _(p){!O.wasMoved(p)||e.disabled||!u.value||t.goToOption(y.Nothing)}return()=>{let{disabled:p}=e,x={active:u.value,selected:d.value,disabled:p},{id:r,value:v,disabled:c,...b}=e,S={id:r,ref:i,role:"option",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,"aria-selected":d.value,disabled:void 0,onClick:n,onFocus:L,onPointerenter:I,onMouseenter:I,onPointermove:R,onMousemove:R,onPointerleave:_,onMouseleave:_};return A({ourProps:S,theirProps:b,slot:x,attrs:a,slots:o,name:"ListboxOption"})}}});const $e={class:"relative mt-1"},He={class:"block truncate"},Ke={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},qe={__name:"Dropdown",props:{modelValue:{type:Object},options:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:o}){const s=fe(e,"modelValue",o);return(t,i)=>(N(),K(k(je),{modelValue:k(s),"onUpdate:modelValue":i[0]||(i[0]=u=>ge(s)?s.value=u:null)},{default:M(()=>[E("div",$e,[U(k(Fe),{class:"dropdown-button w-full focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:M(()=>[E("span",He,[q(t.$slots,"button",Q(J(k(s))),()=>[X(Y(k(s)),1)],!0)]),E("span",Ke,[U(k(Pe),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:3}),U(k(ze),{class:"dropdown-options focus:outline-none sm:text-sm"},{default:M(()=>[(N(!0),ee(ne,null,xe(e.options,(u,d)=>(N(),K(k(Ue),{as:"template",key:d,value:u},{default:M(({active:f,selected:l})=>[E("li",{class:W([f?"bg-amber-100 text-amber-900":"text-gray-900","dropdown-option"])},[E("span",{class:W([l?"font-semibold":"font-normal","block truncate"])},[q(t.$slots,"option",Q(J(u)),()=>[X(Y(u),1)],!0)],2)],2)]),_:2},1032,["value"]))),128))]),_:3})])]),_:3},8,["modelValue"]))}},Xe=me(qe,[["__scopeId","data-v-32356699"]]);export{Xe as D};
