import{b as F,w,x as S,z as W,_ as z}from"./index.f784c4f5.js";import{d as T,e as A,r as U,B as b,aD as v,aG as u,aH as t,u as o,C as N,aI as L,aJ as G,aL as C,b5 as R,b6 as h,bL as M,bG as H,bP as J,aT as P,bk as $,aV as x,b9 as I,bF as Q,F as B,a4 as j,a5 as q,b8 as X,bK as Y,aS as K,bQ as Z,bR as ee}from"./arco.2c5416d7.js";/* empty css              *//* empty css               *//* empty css               */import{i as te}from"./index.611757fd.js";/* empty css               *//* empty css              *//* empty css              *//* empty css               */import"./chart.a2535dd4.js";import"./vue.aeffe802.js";const ue=T({__name:"CommonSettings",setup(g){const m=A(!1),e=U({siteTitle:"",siteDescription:"",siteKeywords:[],siteNotification:"",recommendTags:[],defaultNodeId:void 0,urlRedirect:!1,enableHideContent:!1,modules:{tweet:!1,topic:!1,article:!1}}),c=A([]),_=async()=>{const l=await F.get("/api/admin/sys-config/all");e.siteTitle=l.siteTitle,e.siteDescription=l.siteDescription,e.siteKeywords=l.siteKeywords,e.siteNotification=l.siteNotification,e.recommendTags=l.recommendTags,e.defaultNodeId=l.defaultNodeId,e.urlRedirect=l.urlRedirect,e.enableHideContent=l.enableHideContent,e.modules=l.modules,c.value=await F.get("/api/admin/topic-node/nodes")};_();const s=async()=>{m.value=!0;try{await F.post("/api/admin/sys-config/save",e),await _(),w("\u63D0\u4EA4\u6210\u529F")}catch(l){S(l)}finally{m.value=!1}};return(l,a)=>{const r=R,n=h,f=M,p=H,D=Q,V=J,d=P,y=$,k=x,E=I;return b(),v(E,{model:o(e),"auto-label-width":""},{default:u(()=>[t(n,{label:"\u7F51\u7AD9\u540D\u79F0"},{default:u(()=>[t(r,{modelValue:o(e).siteTitle,"onUpdate:modelValue":a[0]||(a[0]=i=>o(e).siteTitle=i),type:"text",placeholder:"\u7F51\u7AD9\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9\u63CF\u8FF0"},{default:u(()=>[t(f,{modelValue:o(e).siteDescription,"onUpdate:modelValue":a[1]||(a[1]=i=>o(e).siteDescription=i),"auto-size":{minRows:2,maxRows:5},placeholder:"\u7F51\u7AD9\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9\u5173\u952E\u5B57"},{default:u(()=>[t(p,{modelValue:o(e).siteKeywords,"onUpdate:modelValue":a[2]||(a[2]=i=>o(e).siteKeywords=i),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"\u7F51\u7AD9\u5173\u952E\u5B57"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u7F51\u7AD9\u516C\u544A"},{default:u(()=>[t(f,{modelValue:o(e).siteNotification,"onUpdate:modelValue":a[3]||(a[3]=i=>o(e).siteNotification=i),"auto-size":{minRows:2,maxRows:5},placeholder:"\u7F51\u7AD9\u516C\u544A\uFF08\u652F\u6301\u8F93\u5165HTML\uFF09"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u63A8\u8350\u6807\u7B7E"},{default:u(()=>[t(p,{modelValue:o(e).recommendTags,"onUpdate:modelValue":a[4]||(a[4]=i=>o(e).recommendTags=i),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"\u63A8\u8350\u6807\u7B7E"},null,8,["modelValue"])]),_:1}),t(n,{label:"\u9ED8\u8BA4\u8282\u70B9"},{default:u(()=>[t(p,{modelValue:o(e).defaultNodeId,"onUpdate:modelValue":a[5]||(a[5]=i=>o(e).defaultNodeId=i),placeholder:"\u53D1\u5E16\u9ED8\u8BA4\u8282\u70B9"},{default:u(()=>[(b(!0),N(G,null,L(o(c),i=>(b(),v(D,{key:i.id,label:i.name,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"\u529F\u80FD\u6A21\u5757"},{default:u(()=>[t(V,{modelValue:o(e).modules.tweet,"onUpdate:modelValue":a[6]||(a[6]=i=>o(e).modules.tweet=i),border:""},{default:u(()=>[C("\u52A8\u6001")]),_:1},8,["modelValue"]),t(V,{modelValue:o(e).modules.topic,"onUpdate:modelValue":a[7]||(a[7]=i=>o(e).modules.topic=i),border:""},{default:u(()=>[C("\u5E16\u5B50")]),_:1},8,["modelValue"]),t(V,{modelValue:o(e).modules.article,"onUpdate:modelValue":a[8]||(a[8]=i=>o(e).modules.article=i),border:""},{default:u(()=>[C("\u6587\u7AE0")]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"\u7AD9\u5916\u94FE\u63A5\u8DF3\u8F6C\u9875\u9762"},{default:u(()=>[t(y,{content:"\u5728\u8DF3\u8F6C\u524D\u9700\u624B\u52A8\u786E\u8BA4\u662F\u5426\u524D\u5F80\u8BE5\u7AD9\u5916\u94FE\u63A5",placement:"top"},{default:u(()=>[t(d,{modelValue:o(e).urlRedirect,"onUpdate:modelValue":a[9]||(a[9]=i=>o(e).urlRedirect=i)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u542F\u7528\u8BC4\u8BBA\u53EF\u89C1\u5185\u5BB9"},{default:u(()=>[t(y,{content:"\u53D1\u5E16\u65F6\u652F\u6301\u8BBE\u7F6E\u8BC4\u8BBA\u540E\u53EF\u89C1\u5185\u5BB9",placement:"top"},{default:u(()=>[t(d,{modelValue:o(e).enableHideContent,"onUpdate:modelValue":a[10]||(a[10]=i=>o(e).enableHideContent=i)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,null,{default:u(()=>[t(k,{type:"primary",loading:o(m),onClick:s},{default:u(()=>[C("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}}),oe={style:{"margin-top":"20px"}},le=T({__name:"NavSettings",setup(g){const m=A(!1),e=A([]),c=[{title:"\u6807\u9898",dataIndex:"title",slotName:"name"},{title:"\u94FE\u63A5",dataIndex:"url",slotName:"url"},{title:"",dataIndex:"operation",slotName:"operation"}],_=async()=>{const n=await F.get("/api/admin/sys-config/all");e.value=n.siteNavs};_();const s=n=>{e.value=n},l=(n,f)=>{e.value.splice(f,1)},a=(n,f)=>{e.value.splice(f+1,0,{})},r=async()=>{m.value=!0;try{if(e.value.some(n=>te(n.title,n.url))){W("\u8BF7\u68C0\u67E5\u4F60\u7684\u5BFC\u822A\u914D\u7F6E\uFF0C\u5BFC\u822A\u6807\u9898\u548C\u94FE\u63A5\u4E0D\u80FD\u4E3A\u7A7A");return}await F.post("/api/admin/sys-config/save",{siteNavs:e.value}),await _(),w("\u63D0\u4EA4\u6210\u529F")}catch(n){S(n)}finally{m.value=!1}};return(n,f)=>{const p=R,D=j,V=x,d=q,y=X,k=Y;return b(),N("div",null,[t(k,{columns:c,data:o(e),pagination:!1,draggable:{type:"handle",width:40},onChange:s},{name:u(({record:E})=>[t(p,{modelValue:E.title,"onUpdate:modelValue":i=>E.title=i},null,8,["modelValue","onUpdate:modelValue"])]),url:u(({record:E})=>[t(p,{modelValue:E.url,"onUpdate:modelValue":i=>E.url=i},null,8,["modelValue","onUpdate:modelValue"])]),operation:u(({record:E,rowIndex:i})=>[t(y,null,{default:u(()=>[t(V,{type:"primary",status:"danger",shape:"circle",onClick:O=>l(E,i)},{default:u(()=>[t(D)]),_:2},1032,["onClick"]),t(V,{type:"primary",status:"success",shape:"circle",onClick:O=>a(E,i)},{default:u(()=>[t(d)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data"]),B("div",oe,[t(V,{type:"primary",loading:o(m),onClick:r},{default:u(()=>[C("\u63D0\u4EA4")]),_:1},8,["loading"])])])}}}),ae=T({__name:"ScoreSettings",setup(g){const m=A(!1),e=U({postTopicScore:void 0,postCommentScore:void 0,checkInScore:void 0}),c=async()=>{const s=await F.get("/api/admin/sys-config/all");e.postTopicScore=s.scoreConfig.postTopicScore,e.postCommentScore=s.scoreConfig.postCommentScore,e.checkInScore=s.scoreConfig.checkInScore};c();const _=async()=>{m.value=!0;try{await F.post("/api/admin/sys-config/save",{scoreConfig:e}),await c(),w("\u63D0\u4EA4\u6210\u529F")}catch(s){S(s)}finally{m.value=!1}};return(s,l)=>{const a=K,r=h,n=x,f=I;return b(),v(f,{model:o(e),"auto-label-width":""},{default:u(()=>[t(r,{label:"\u53D1\u5E16\u79EF\u5206"},{default:u(()=>[t(a,{modelValue:o(e).postTopicScore,"onUpdate:modelValue":l[0]||(l[0]=p=>o(e).postTopicScore=p),min:1,mode:"button",placeholder:"\u53D1\u5E16\u83B7\u5F97\u79EF\u5206"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u8DDF\u5E16\u79EF\u5206"},{default:u(()=>[t(a,{modelValue:o(e).postCommentScore,"onUpdate:modelValue":l[1]||(l[1]=p=>o(e).postCommentScore=p),min:1,mode:"button",placeholder:"\u8DDF\u5E16\u83B7\u5F97\u79EF\u5206"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u7B7E\u5230\u79EF\u5206"},{default:u(()=>[t(a,{modelValue:o(e).checkInScore,"onUpdate:modelValue":l[2]||(l[2]=p=>o(e).checkInScore=p),min:1,mode:"button",placeholder:"\u7B7E\u5230\u83B7\u5F97\u79EF\u5206"},null,8,["modelValue"])]),_:1}),t(r,null,{default:u(()=>[t(n,{type:"primary",loading:o(m),onClick:_},{default:u(()=>[C("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}}),ne=T({__name:"SpamSettings",setup(g){const m=A(!1),e=U({topicCaptcha:void 0,createTopicEmailVerified:void 0,createArticleEmailVerified:void 0,createCommentEmailVerified:void 0,articlePending:void 0,userObserveSeconds:void 0,emailWhitelist:void 0}),c=async()=>{const s=await F.get("/api/admin/sys-config/all");e.topicCaptcha=s.topicCaptcha,e.createTopicEmailVerified=s.createTopicEmailVerified,e.createArticleEmailVerified=s.createArticleEmailVerified,e.createCommentEmailVerified=s.createCommentEmailVerified,e.articlePending=s.articlePending,e.userObserveSeconds=s.userObserveSeconds,e.emailWhitelist=s.emailWhitelist};c();const _=async()=>{m.value=!0;try{await F.post("/api/admin/sys-config/save",e),await c(),w("\u63D0\u4EA4\u6210\u529F")}catch(s){S(s)}finally{m.value=!1}};return(s,l)=>{const a=P,r=$,n=h,f=K,p=H,D=x,V=I;return b(),v(V,{model:o(e),"auto-label-width":""},{default:u(()=>[t(n,{label:"\u53D1\u5E16\u9A8C\u8BC1\u7801"},{default:u(()=>[t(r,{content:"\u53D1\u5E16\u65F6\u662F\u5426\u5F00\u542F\u9A8C\u8BC1\u7801\u6821\u9A8C",placement:"top"},{default:u(()=>[t(a,{modelValue:o(e).topicCaptcha,"onUpdate:modelValue":l[0]||(l[0]=d=>o(e).topicCaptcha=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u90AE\u7BB1\u9A8C\u8BC1\u540E\u53D1\u5E16"},{default:u(()=>[t(r,{content:"\u9700\u8981\u9A8C\u8BC1\u90AE\u7BB1\u540E\u624D\u80FD\u53D1\u5E16",placement:"top"},{default:u(()=>[t(a,{modelValue:o(e).createTopicEmailVerified,"onUpdate:modelValue":l[1]||(l[1]=d=>o(e).createTopicEmailVerified=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u90AE\u7BB1\u9A8C\u8BC1\u540E\u53D1\u8868\u6587\u7AE0"},{default:u(()=>[t(r,{content:"\u9700\u8981\u9A8C\u8BC1\u90AE\u7BB1\u540E\u624D\u80FD\u53D1\u8868\u6587\u7AE0",placement:"top"},{default:u(()=>[t(a,{modelValue:o(e).createArticleEmailVerified,"onUpdate:modelValue":l[2]||(l[2]=d=>o(e).createArticleEmailVerified=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u90AE\u7BB1\u9A8C\u8BC1\u540E\u8BC4\u8BBA"},{default:u(()=>[t(r,{content:"\u9700\u8981\u9A8C\u8BC1\u90AE\u7BB1\u540E\u624D\u80FD\u53D1\u8868\u8BC4\u8BBA",placement:"top"},{default:u(()=>[t(a,{modelValue:o(e).createCommentEmailVerified,"onUpdate:modelValue":l[3]||(l[3]=d=>o(e).createCommentEmailVerified=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u53D1\u8868\u6587\u7AE0\u5BA1\u6838"},{default:u(()=>[t(r,{content:"\u53D1\u5E03\u6587\u7AE0\u540E\u662F\u5426\u5F00\u542F\u5BA1\u6838",placement:"top"},{default:u(()=>[t(a,{modelValue:o(e).articlePending,"onUpdate:modelValue":l[4]||(l[4]=d=>o(e).articlePending=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u7528\u6237\u89C2\u5BDF\u671F(\u79D2)"},{default:u(()=>[t(r,{content:"\u89C2\u5BDF\u671F\u5185\u7528\u6237\u65E0\u6CD5\u53D1\u8868\u8BDD\u9898\u3001\u52A8\u6001\u7B49\u5185\u5BB9\uFF0C\u8BBE\u7F6E\u4E3A 0 \u8868\u793A\u65E0\u89C2\u5BDF\u671F\u3002",placement:"top"},{default:u(()=>[t(f,{modelValue:o(e).userObserveSeconds,"onUpdate:modelValue":l[5]||(l[5]=d=>o(e).userObserveSeconds=d),mode:"button",min:0,max:720},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"\u90AE\u7BB1\u767D\u540D\u5355"},{default:u(()=>[t(p,{modelValue:o(e).emailWhitelist,"onUpdate:modelValue":l[6]||(l[6]=d=>o(e).emailWhitelist=d),style:{width:"100%"},multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"\u90AE\u7BB1\u767D\u540D\u5355"},null,8,["modelValue"])]),_:1}),t(n,null,{default:u(()=>[t(D,{type:"primary",loading:o(m),onClick:_},{default:u(()=>[C("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}});const ie={class:"container"},se={class:"container-main"},de={class:"settings-container"},me={class:"settings-container"},ce={class:"settings-container"},re={class:"settings-container"},pe={__name:"index",setup(g){return(m,e)=>{const c=Z,_=ee;return b(),N("div",ie,[B("div",se,[t(_,{position:"top","lazy-load":"",animation:"","destroy-on-hide":""},{default:u(()=>[t(c,{key:"1",title:"\u901A\u7528\u914D\u7F6E"},{default:u(()=>[B("div",de,[t(ue)])]),_:1}),t(c,{key:"2",title:"\u5BFC\u822A\u914D\u7F6E"},{default:u(()=>[B("div",me,[t(le)])]),_:1}),t(c,{key:"3",title:"\u79EF\u5206\u914D\u7F6E"},{default:u(()=>[B("div",ce,[t(ae)])]),_:1}),t(c,{key:"4",title:"\u53CD\u4F5C\u5F0A\u914D\u7F6E"},{default:u(()=>[B("div",re,[t(ne)])]),_:1})]),_:1})])])}}},ve=z(pe,[["__scopeId","data-v-e3ab87b2"]]);export{ve as default};
