import{a as S,j as T}from"./index.611757fd.js";import{d as D,e as E,r as h,c as w,o as A,B as p,C as _,F,aH as e,aG as o,u as a,aL as g,aM as b,b5 as I,b6 as N,ab as P,aV as j,b9 as H,bJ as J,bl as M,bK as U}from"./arco.2c5416d7.js";import{g as G,b as K}from"./index.f784c4f5.js";/* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css              */import{u as L}from"./height.1f954b6a.js";import"./chart.a2535dd4.js";import"./vue.aeffe802.js";const O={class:"container"},q={class:"container-header"},Q={class:"container-main"},R=["src"],W={key:1},ue=D({__name:"index",setup(X){const m=G(),d=E(!1),s=h({limit:20,page:1,username:"",nickname:""}),l=h({page:{page:1,limit:20,total:0},results:[]}),y=w(()=>({total:l.page.total,current:l.page.page,pageSize:l.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0,pageSizeOptions:[20,50,100,200,300,500]}));A(()=>{L()});const r=async()=>{d.value=!0;try{const n=await K.postForm("/api/admin/user/list",T(s));l.page=n.page,l.results=n.results}finally{d.value=!1}};r();const k=n=>{s.page=n,r()},v=n=>{s.limit=n,r()};return(n,u)=>{const f=I,c=N,x=P,z=j,C=H,i=J,V=M,B=U;return p(),_("div",O,[F("div",q,[e(C,{model:a(s),layout:"inline",size:a(m).table.size},{default:o(()=>[e(c,null,{default:o(()=>[e(f,{modelValue:a(s).username,"onUpdate:modelValue":u[0]||(u[0]=t=>a(s).username=t),placeholder:"\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),e(c,null,{default:o(()=>[e(f,{modelValue:a(s).nickname,"onUpdate:modelValue":u[1]||(u[1]=t=>a(s).nickname=t),placeholder:"\u6635\u79F0"},null,8,["modelValue"])]),_:1}),e(c,null,{default:o(()=>[e(z,{type:"primary","html-type":"submit",onClick:r},{icon:o(()=>[e(x)]),default:o(()=>[g(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"])]),F("div",Q,[e(B,{loading:a(d),data:a(l).results,size:a(m).table.size,bordered:a(m).table.bordered,pagination:a(y),"sticky-header":!0,style:{height:"100%"},"column-resizable":"",onPageChange:k,onPageSizeChange:v},{columns:o(()=>[e(i,{title:"\u7F16\u53F7","data-index":"id"}),e(i,{title:"\u5934\u50CF","data-index":"avatar"},{cell:o(({record:t})=>[e(V,null,{default:o(()=>[t.avatar?(p(),_("img",{key:0,src:t.avatar},null,8,R)):(p(),_("span",W,b(t.nickname),1))]),_:2},1024)]),_:1}),e(i,{title:"\u6635\u79F0","data-index":"nickname"}),e(i,{title:"\u90AE\u7BB1","data-index":"email"}),e(i,{title:"\u79EF\u5206","data-index":"score"}),e(i,{title:"\u662F\u5426\u7981\u8A00","data-index":"forbidden"},{cell:o(({record:t})=>[g(b(t.forbidden?"\u7981\u8A00":"-"),1)]),_:1}),e(i,{title:"\u6CE8\u518C\u65F6\u95F4","data-index":"createTime"},{cell:o(({record:t})=>[g(b(("useFormatDate"in n?n.useFormatDate:a(S))(t.createTime)),1)]),_:1})]),_:1},8,["loading","data","size","bordered","pagination"])])])}}});export{ue as default};
