"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[977],{6977:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var l=a(3396),o=a(4870),n=a(9733),c=a(6431),u=a(6329),d=a(5743),s=a(2483),i=a(65);const r={class:"body"},p={class:"page"},h={class:"top"},m={class:"main"},g=(0,l.Uk)("新款"),v=(0,l.Uk)("上新"),k={class:"checked"},_={class:"submit"},f=(0,l.Uk)("全选");var b={__name:"Shopping",setup(e){let t=(0,s.tv)(),a=(0,i.oR)(),b=(0,o.qj)({project_id:240}),w=(0,o.iH)([]),V=(0,o.iH)("");async function C(){let e=await(0,d.U2)("/shoppingCart",b);e.result.forEach((e=>{e.checked=!0})),w.value=e.result,V.value="购物车("+w.value.length+")"}(0,u.Am)(),C();const y=(e,t)=>{(0,d.gz)(`/shoppingCart/${e}`,{num:t}).then((e=>{console.log(e)}))},U=(0,l.Fl)({get(){let e=!1;return w.value.length&&(e=w.value.every((e=>e.checked))),e},set(e){(0,u.Am)(),w.value.forEach((t=>{t.checked=e}))}}),W=(0,l.Fl)((()=>{(0,u.Am)();let e=0;return w.value.forEach((t=>{t.checked&&(e+=t.s_good.price*t.num*100)})),e})),A=e=>{a.commit("changeRouterType","push"),t.push(`/shoppage?key=${e}`)},x=()=>{(0,u.Am)(),a.commit("changeRouterType","back"),history.back()},S=async()=>{let e=w.value.filter((e=>e.checked)).length;e?c.V.confirm({title:"小xu提示",theme:"round-button",message:"是否删除?"}).then((()=>{w.value.map((async e=>{if(e.checked){await(0,d.IV)(`/shoppingCart/${e.id}`);(0,u.Am)("删除成功!"),C()}}))})).catch((()=>{})):(0,n.F)("请选择商品")},E=e=>{c.V.confirm({title:"小xu提示",message:"是否删除?"}).then((()=>{(0,d.IV)(`/shoppingCart/${e}`).then((e=>{(0,u.Am)("删除成功!"),C()}))})).catch((()=>{}))},F=()=>{let e=[],l=w.value.filter((e=>e.checked));a.state.shoporder.cradList=l,l.forEach((t=>{e.push(t.id)})),l.length?((0,u.Am)(),t.push("/orderpage")):(0,n.F)("请选择商品")};return(e,t)=>{const a=(0,l.up)("van-nav-bar"),n=(0,l.up)("van-tag"),c=(0,l.up)("van-stepper"),u=(0,l.up)("van-card"),d=(0,l.up)("van-button"),s=(0,l.up)("van-swipe-cell"),i=(0,l.up)("van-checkbox"),b=(0,l.up)("van-submit-bar");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",p,[(0,l._)("div",h,[(0,l.Wm)(a,{title:(0,o.SU)(V),"left-arrow":"",onClickLeft:x,"right-text":"删除",onClickRight:S},null,8,["title"])]),(0,l._)("div",m,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,o.SU)(w),(e=>((0,l.wg)(),(0,l.iD)("div",{class:"card",key:e.id},[(0,l.Wm)(s,null,{right:(0,l.w5)((()=>[(0,l.Wm)(d,{square:"",text:"删除",type:"danger",class:"delete-button",onClick:t=>E(e.id)},null,8,["onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(u,{price:e.s_good.price,desc:e.s_good.desc,title:e.s_good.name,thumb:e.s_good.s_goods_photos[0].path,onClickThumb:t=>A(e.s_good.id)},{tags:(0,l.w5)((()=>[(0,l.Wm)(n,{plain:"",type:"danger"},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(n,{plain:"",type:"danger"},{default:(0,l.w5)((()=>[v])),_:1})])),footer:(0,l.w5)((()=>[(0,l.Wm)(c,{modelValue:e.num,"onUpdate:modelValue":t=>e.num=t,onChange:t=>y(e.id,e.num)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:2},1032,["price","desc","title","thumb","onClickThumb"])])),_:2},1024),(0,l._)("div",k,[(0,l.Wm)(i,{modelValue:e.checked,"onUpdate:modelValue":t=>e.checked=t,"checked-color":"#ee0a24"},null,8,["modelValue","onUpdate:modelValue"])])])))),128)),(0,l._)("div",_,[(0,l.Wm)(b,{price:(0,o.SU)(W),"button-text":"结算",onSubmit:F},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{modelValue:(0,o.SU)(U),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.dq)(U)?U.value=e:null),"checked-color":"#ee0a24"},{default:(0,l.w5)((()=>[f])),_:1},8,["modelValue"])])),_:1},8,["price"])])])])])}}},w=a(89);const V=(0,w.Z)(b,[["__scopeId","data-v-d54163e0"]]);var C=V}}]);
//# sourceMappingURL=977.61ee7b6d.js.map