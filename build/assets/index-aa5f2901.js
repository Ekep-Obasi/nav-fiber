import{R as T,a as d,Y as S,q as u}from"./index-dba79d3c.js";import{i as E}from"./react-toastify.esm-8893b327.js";const m={[T]:"RSS link",[d]:"Twitter Handle",[S]:"Youtube channel"},C="Sources table",D="Queued sources",L="Topics",h="View Content",g="date",f="edge_count",y="alphabetically",N="https://twitter.com",R="IS_ALIAS",i={data:null,ids:[],total:0,filters:{muted:!1,sortBy:g,page:0,pageSize:50}},U=u((a,c)=>({...i,setTopics:async()=>{const{data:e,ids:p,filters:t}=c(),l=_(t);t.page===0&&a({data:null,ids:[],total:0});try{const s=await E(l),n=t.page===0?{}:{...e||{}},r=t.page===0?[]:[...p];s.data.forEach(o=>{n[o.ref_id]=o,r.push(o.ref_id)}),a({data:n,ids:r,total:s.topicCount})}catch(s){console.log(s)}},setFilters:e=>a({filters:{...c().filters,page:0,...e}}),terminate:()=>a(i)})),_=a=>({muted:a.muted?"True":"False",skip:String(a.page*a.pageSize),limit:String(a.pageSize),sort_by:a.sortBy,search:a.search||""});export{y as A,g as D,f as E,R as I,D as Q,C as S,N as T,h as V,L as a,m as s,U as u};