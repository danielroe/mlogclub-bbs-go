import{o as i,e as s,B as a,C as t,F as e,aJ as l,aI as c,u as _,aM as d}from"./arco.2c5416d7.js";import{u as m}from"./height.1f954b6a.js";import{b as u}from"./index.f784c4f5.js";import"./chart.a2535dd4.js";import"./vue.aeffe802.js";const p={class:"container"},f={class:"container-main"},h={class:"left"},g=e("div",{class:"right"}," 123 ",-1),w={__name:"index",setup(v){i(()=>{m(),r()});const o=s([]);s([]),s();const r=async()=>{o.value=await u.get("/api/admin/role/all_roles")};return(x,B)=>(a(),t("div",p,[e("div",f,[e("div",h,[e("ul",null,[(a(!0),t(l,null,c(_(o),n=>(a(),t("li",{key:n.id},d(n.name),1))),128))])]),g])]))}};export{w as default};
