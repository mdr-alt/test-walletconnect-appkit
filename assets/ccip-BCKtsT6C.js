import{aR as p,aS as w,aT as b,aU as h,aV as m,aW as O,aX as L,aY as E,aZ as x,a_ as y,a$ as R}from"./index-DgFRytIP.js";class M extends p{constructor({callbackSelector:e,cause:a,data:n,extraData:c,sender:u,urls:t}){var i;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(i=a.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(d=>`    ${w(d)}`)],`  Sender: ${u}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class $ extends p{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${b(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class S extends p{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function A(r,e){if(!h(r,{strict:!1}))throw new m({address:r});if(!h(e,{strict:!1}))throw new m({address:e});return r.toLowerCase()===e.toLowerCase()}const P="0x556f1830",q={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function T(r,{blockNumber:e,blockTag:a,data:n,to:c}){const{args:u}=O({data:n,abi:[q]}),[t,i,d,s,o]=u,{ccipRead:f}=r,g=f&&typeof(f==null?void 0:f.request)=="function"?f.request:v;try{if(!A(c,t))throw new S({sender:t,to:c});const l=await g({data:d,sender:t,urls:i}),{data:k}=await L(r,{blockNumber:e,blockTag:a,data:E([s,x([{type:"bytes"},{type:"bytes"}],[l,o])]),to:c});return k}catch(l){throw new M({callbackSelector:s,cause:l,data:n,extraData:o,sender:t,urls:i})}}async function v({data:r,sender:e,urls:a}){var c;let n=new Error("An unknown error occurred.");for(let u=0;u<a.length;u++){const t=a[u],i=t.includes("{data}")?"GET":"POST",d=i==="POST"?{data:r,sender:e}:void 0;try{const s=await fetch(t.replace("{sender}",e).replace("{data}",r),{body:JSON.stringify(d),method:i});let o;if((c=s.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?o=(await s.json()).data:o=await s.text(),!s.ok){n=new y({body:d,details:o!=null&&o.error?b(o.error):s.statusText,headers:s.headers,status:s.status,url:t});continue}if(!R(o)){n=new $({result:o,url:t});continue}return o}catch(s){n=new y({body:d,details:s.message,url:t})}}throw n}export{v as ccipRequest,T as offchainLookup,q as offchainLookupAbiItem,P as offchainLookupSignature};
