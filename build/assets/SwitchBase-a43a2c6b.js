import{o as W,p as A,s as F,a as c,E as D,r as G,_ as H,j as C,v as J,q as K,n as M}from"./index-c937f9eb.js";import{x as Q,k as T,s as V}from"./index-6f8cb5f0.js";function X(e){return W("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:i,disabled:r,edge:a}=e,l={root:["root",i&&"checked",r&&"disabled",a&&`edge${K(a)}`],input:["input"]};return M(l,X,o)},ee=F(Q)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:D})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=G.forwardRef(function(o,i){const{autoFocus:r,checked:a,checkedIcon:l,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:P,inputProps:I,inputRef:j,name:E,onBlur:f,onChange:g,onFocus:m,readOnly:q,required:v=!1,tabIndex:z,type:d,value:b}=o,N=H(o,Y),[k,U]=T({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=V(),_=s=>{m&&m(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const x=s.target.checked;U(x),g&&g(s,x)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const $=d==="checkbox"||d==="radio",u=c({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Z(u);return C.jsxs(ee,c({component:"span",className:J(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:_,onBlur:L,ownerState:u,ref:i},N,{children:[C.jsx(se,c({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:n,id:$?P:void 0,name:E,onChange:O,readOnly:q,ref:j,required:v,ownerState:u,tabIndex:z,type:d},d==="checkbox"&&b===void 0?{}:{value:b},I)),k?l:R]}))}),ne=te;export{ne as S};