import{r as c,j as t,s as h,b as f,T as L,F as d}from"./index-803fed4c.js";import{B as A}from"./index-78b80aab.js";import{u as S}from"./index-d9332946.js";import{r as B,t as z,F as N,C as j,B as F,V as y,v as O}from"./react-toastify.esm-a643f0aa.js";import{a as T}from"./index-2a0e37fe.js";import{A as E}from"./index-bac4ffc8.js";import"./index-9b72f612.js";import"./index-517eb19c.js";import"./Popover-09e72c26.js";import"./useSlotProps-ed176cd2.js";import"./Select-2d4c4a14.js";import"./Stack-66cc3c7c.js";import"./Popper-2570734d.js";const P=({selectedType:s,setSelectedType:i})=>{const[a,l]=c.useState([]);c.useEffect(()=>{(async()=>{try{const{data:n}=await B();l(n.edge_types)}catch(n){console.warn(n)}})()},[l]);const o=e=>({label:e,value:e}),p=e=>{i((e==null?void 0:e.value)||"")};return t.jsx(E,{onSelect:p,options:a.map(o),selectedValue:s?o(s):null})},R=({onSelect:s,selectedValue:i})=>{const[a=[]]=T(e=>{var n;return[(n=e==null?void 0:e.data)==null?void 0:n.nodes]}),l=e=>{const n=e?a.find(u=>u.ref_id===e.value):null;s(n||null)},o=e=>({label:e.name,value:e.ref_id,type:e.node_type}),p=e=>e.map(o);return t.jsx(E,{onSelect:l,options:p(a),selectedValue:i?o(i):null})},k=({from:s,onSelect:i,selectedType:a,setSelectedType:l,selectedToNode:o})=>t.jsxs(d,{mb:20,children:[t.jsx(d,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(d,{align:"center",direction:"row",children:t.jsx(V,{children:"Add edge"})})}),t.jsxs(I,{mb:12,children:[t.jsxs(x,{children:[t.jsx("div",{className:"label",children:"From"}),t.jsx("div",{children:s})]}),t.jsxs(x,{children:[t.jsx("div",{className:"label",children:"Type"}),t.jsx(P,{selectedType:a,setSelectedType:l})]}),t.jsxs(x,{children:[t.jsx("div",{className:"label",children:"To"}),t.jsx(R,{onSelect:i,selectedValue:o})]})]})]}),V=h(L)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,I=h(d).attrs({align:"stretch",direction:"row",justify:"flex-start"})`
  color: ${f.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${f.GRAY3};
  }
`,x=h(d)`
  flex: 1 1 100%;
  padding: 0 8px;
`,M=()=>{const{close:s}=S("addEdgeToNode"),i=z({mode:"onChange"}),[a,l]=c.useState(!1),[o,p]=c.useState("RELATION_TYPE"),[e,n]=T(m=>[m.selectedNode,m.addNewLink]),[u,g]=c.useState(!1),[r,_]=c.useState(null);c.useEffect(()=>{(async()=>{if(e){g(!0);try{}catch(C){console.error(C)}finally{g(!1)}}})()},[e]);const w=()=>{s()},b=async()=>{if(!(!r||!e)){w(),n({attributes:{},edge_type:o,source:e==null?void 0:e.ref_id,target:r.ref_id,sourcePosition:new y(e.x,e.y,e.z),targetPosition:new y(r.x,r.y,r.z),ref_id:`new_ref_${e==null?void 0:e.ref_id}`});try{await O({from:e.ref_id,to:r==null?void 0:r.ref_id,relationship:o})}catch(m){console.warn(m)}finally{l(!1)}}},v=a||!r||!o;return t.jsxs(N,{...i,children:[u?t.jsx(d,{align:"center",my:24,children:t.jsx(j,{color:f.BLUE_PRESS_STATE,size:24})}):t.jsx(k,{from:(e==null?void 0:e.name)||"",onSelect:_,selectedToNode:r,selectedType:o,setSelectedType:p}),t.jsxs(F,{color:"secondary",disabled:v,onClick:b,size:"large",variant:"contained",children:["Confirm",a&&t.jsx(j,{color:f.BLUE_PRESS_STATE,size:10})]})]})},ee=()=>{const{close:s}=S("addEdgeToNode");return t.jsx(A,{id:"addEdgeToNode",kind:"large",onClose:s,preventOutsideClose:!0,children:t.jsx(M,{})})};export{ee as AddNodeEdgeModal};