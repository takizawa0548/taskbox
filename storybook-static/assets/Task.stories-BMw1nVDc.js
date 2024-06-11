import{f as c}from"./index-DbZd88YG.js";import{j as s}from"./jsx-runtime-X2b_N9AH.js";function g({task:{id:a,title:o,state:n},onArchiveTask:x,onPinTask:A}){return s.jsxs("div",{className:`list-item ${n}`,children:[s.jsxs("label",{htmlFor:`archiveTask-${a}`,"aria-label":`archiveTask-${a}`,className:"checkbox",children:[s.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${a}`,checked:n==="TASK_ARCHIVED"}),s.jsx("span",{className:"checkbox-custom",onClick:()=>x(a)})]}),s.jsx("label",{htmlFor:`title-${a}`,"aria-label":o,className:"title",children:s.jsx("input",{type:"text",value:o,readOnly:!0,name:"title",id:`title-${a}`,placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",onClick:()=>A(a),id:`pinTask-${a}`,"aria-label":`pinTask-${a}`,children:s.jsx("span",{className:"icon-star"})},`pinTask-${a}`)]})}g.__docgenInfo={description:"",methods:[],displayName:"Task"};const _={onArchiveTask:c(),onPinTask:c()},b={component:g,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{..._}},e={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},t={args:{task:{...e.args.task,state:"TASK_PINNED"}}},r={args:{task:{...e.args.task,state:"TASK_ARCHIVED"}}};var i,l,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,k,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(k=t.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};var u,T,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const D=["ActionsData","Default","Pinned","Archived"],N=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:_,Archived:r,Default:e,Pinned:t,__namedExportsOrder:D,default:b},Symbol.toStringTag,{value:"Module"}));export{e as D,g as T,N as a};
