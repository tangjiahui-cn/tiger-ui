!(function(){"use strict";var bn=Object.defineProperty,gn=Object.defineProperties;var vn=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var kr=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable;var _r=(T,b,o)=>b in T?bn(T,b,{enumerable:!0,configurable:!0,writable:!0,value:o}):T[b]=o,K=(T,b)=>{for(var o in b||(b={}))kr.call(b,o)&&_r(T,o,b[o]);if(He)for(var o of He(b))Tr.call(b,o)&&_r(T,o,b[o]);return T},or=(T,b)=>gn(T,vn(b));var ar=(T,b)=>{var o={};for(var a in T)kr.call(T,a)&&b.indexOf(a)<0&&(o[a]=T[a]);if(T!=null&&He)for(var a of He(T))b.indexOf(a)<0&&Tr.call(T,a)&&(o[a]=T[a]);return o};(self.webpackChunktiger_ui=self.webpackChunktiger_ui||[]).push([[2621],{69018:function(T,b,o){o.d(b,{E_:function(){return J},nc:function(){return G}});var a=o(50959);function E(l){var v=[];if(l.length===0)return"";if(typeof l[0]!="string")throw new TypeError("Url must be a string. Received "+l[0]);if(l[0].match(/^[^/:]+:\/*$/)&&l.length>1){var A=l.shift();l[0]=A+l[0]}l[0].match(/^file:\/\/\//)?l[0]=l[0].replace(/^([^/:]+):\/*/,"$1:///"):l[0]=l[0].replace(/^([^/:]+):\/*/,"$1://");for(var x=0;x<l.length;x++){var y=l[x];if(typeof y!="string")throw new TypeError("Url must be a string. Received "+y);y!==""&&(x>0&&(y=y.replace(/^[\/]+/,"")),x<l.length-1?y=y.replace(/[\/]+$/,""):y=y.replace(/[\/]+$/,"/"),v.push(y))}var g=v.join("/");g=g.replace(/\/(\?|&|#[^!])/g,"$1");var d=g.split("?");return g=d.shift()+(d.length>0?"?":"")+d.join("&"),g}function h(){var l;return typeof arguments[0]=="object"?l=arguments[0]:l=[].slice.call(arguments),E(l)}var M="https://unpkg.com",O="https://registry.npmmirror.com",Y=function(v){var A=v.pkg,x=v.version,y=x===void 0?"latest":x,g=v.path,d=v.proxy;switch(d){case"unpkg":return h(M,"".concat(A,"@").concat(y),g);default:return h(O,A,y,"files",g)}},V=o(11527),J=(0,a.createContext)(null),ee=null,z=function(v){var A=v.pkg,x=v.version,y=v.path;return Y({path:y,pkg:A,proxy:"aliyun",version:x})},G=function(){var v=(0,a.useContext)(J);return v?(v==null?void 0:v.proxy)!=="custom"?function(A){var x=A.pkg,y=A.version,g=A.path;return Y({path:g,pkg:x,proxy:v.proxy,version:y})}:(v==null?void 0:v.customCdnFn)||z:z},_=null},52592:function(T,b,o){o.d(b,{Z:function(){return un}});var a=o(22481),E=o(51282),h=o(84875),M=o.n(h),O=o(50959),Y=o(25465),V=o(717),J=o(67133),ee=o(33617);const z=O.createContext({});var _=O.createContext({message:{},notification:{},modal:{}}),l=o(7381);const v=n=>{const{componentCls:t,colorText:e,fontSize:r,lineHeight:i,fontFamily:f}=n;return{[t]:{color:e,fontSize:r,lineHeight:i,fontFamily:f}}};var A=(0,l.Z)("App",n=>[v(n)]);const x=()=>O.useContext(_),y=n=>{const{prefixCls:t,children:e,className:r,rootClassName:i,message:f,notification:D,style:F}=n,{getPrefixCls:H}=(0,O.useContext)(Y.E_),Q=H("app",t),[le,te]=A(Q),ge=M()(te,Q,r,i),oe=(0,O.useContext)(z),ae=O.useMemo(()=>({message:Object.assign(Object.assign({},oe.message),f),notification:Object.assign(Object.assign({},oe.notification),D)}),[f,D,oe.message,oe.notification]),[q,xe]=(0,V.Z)(ae.message),[jr,dn]=(0,ee.Z)(ae.notification),[wr,fn]=(0,J.Z)(),pn=O.useMemo(()=>({message:q,notification:jr,modal:wr}),[q,jr,wr]);return le(O.createElement(_.Provider,{value:pn},O.createElement(z.Provider,{value:ae},O.createElement("div",{className:ge,style:F},fn,xe,dn,e))))};y.useApp=x;var g=y,d=o(33334),u=o(69018),p=function(t){var e=document.createElement("link");return e.rel="stylesheet",e.href=t,e},s=(0,O.memo)(function(n){var t=n.url,e=(0,O.useRef)(!1);return(0,O.useEffect)(function(){if(!e.current){e.current=!0;var r=p(t);document.head.append(r)}},[]),null}),c=s,C=o(36656),k,U,Z,P,N,W,L,B,R=function(t){var e=t.css,r=t.token,i=t.isDarkMode,f=(0,d.F4)(k||(k=(0,C.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `]))),D=i?r.cyan9A:r.cyan11A,F=i?r.cyan2A:r.cyan6A;return{blur:e(U||(U=(0,C.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:e(Z||(Z=(0,C.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:e(P||(P=(0,C.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),r.colorFill,r.motionEaseOut),gradientAnimation:e(N||(N=(0,C.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),r.gold,r.magenta,r.geekblue,r.cyan,f),markdown:e(W||(W=(0,C.Z)([`
      color: `,`;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin-block-start: 0;
        margin-block-end: 0;

        font-size: 14px;
        line-height: 1.8;
        color: `,`;
        word-break: break-all;
        word-wrap: break-word;

        + * {
          margin-block-end: 0.5em;
        }
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;

        p {
          font-style: italic;
          color: `,`;
        }
      }

      p:not(:last-child) {
        margin-bottom: 1em;
      }

      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;
        border-radius: `,`px;

        > code {
          padding: 0 !important;
          border: none !important;
        }
      }

      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        font-size: `,`px;
        color: `,`;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding: 8px;

        border: 1px solid `,`;
        border-radius: `,`px;

        code {
          display: inline-flex;
        }
      }

      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
      }

      thead {
        tr {
          th {
            background: `,`;

            &:first-child {
              border-top-left-radius: `,`px;
              border-bottom-left-radius: `,`px;
            }

            &:last-child {
              border-top-right-radius: `,`px;
              border-bottom-right-radius: `,`px;
            }
          }
        }
      }

      > ol > li::marker {
        color: `,` !important;
      }

      > ul > li {
        line-height: 1.8;
        list-style-type: disc;

        &::marker {
          color: `,` !important;
        }
      }

      ol,
      ul {
        > li::marker {
          color: `,`;
        }
      }

      details {
        margin-bottom: 1em;
        padding: 12px 16px;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        transition: all 400ms `,`;
      }

      details[open] {
        summary {
          padding-bottom: 12px;
          border-bottom: 1px solid `,`;
        }
      }
    `])),r.colorText,r.colorText,r.colorTextDescription,r.colorLink,r.colorLinkHover,r.colorLinkActive,r.borderRadius,r.fontSizeSM,D,F,i?r.cyan1A:r.cyan6A,r.borderRadiusSM,r.colorBorderSecondary,r.borderRadius,r.colorFillTertiary,r.borderRadius,r.borderRadius,r.borderRadius,r.borderRadius,i?r.cyan9A:r.cyan10A,i?r.cyan9A:r.cyan10A,r.colorTextDescription,r.colorFillTertiary,r.colorBorderSecondary,r.borderRadiusLG,r.motionEaseOut,r.colorBorder),noScrollbar:e(L||(L=(0,C.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:e(B||(B=(0,C.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),r.colorTextSecondary,r.colorText)}},j=o(41171),S=o(30994);function m(n,t,e){var r=-1,i=n.length;t<0&&(t=-t>i?0:i+t),e=e>i?i:e,e<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var f=Array(i);++r<i;)f[r]=n[r+t];return f}var w=m;function $(n,t,e){var r=n.length;return e=e===void 0?r:e,!t&&e>=r?n:w(n,t,e)}var ie=$,Ne="\\ud800-\\udfff",Se="\\u0300-\\u036f",We="\\ufe20-\\ufe2f",Oe="\\u20d0-\\u20ff",Ce=Se+We+Oe,Be="\\ufe0e\\ufe0f",Je="\\u200d",Ge=RegExp("["+Je+Ne+Ce+Be+"]");function je(n){return Ge.test(n)}var ve=je;function ce(n){return n.split("")}var Ke=ce,me="\\ud800-\\udfff",$e="\\u0300-\\u036f",we="\\ufe20-\\ufe2f",_e="\\u20d0-\\u20ff",ke=$e+we+_e,Te="\\ufe0e\\ufe0f",Ye="["+me+"]",he="["+ke+"]",ye="\\ud83c[\\udffb-\\udfff]",Ve="(?:"+he+"|"+ye+")",Ae="[^"+me+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",Xe="\\u200d",Re=Ve+"?",De="["+Te+"]?",Qe="(?:"+Xe+"(?:"+[Ae,Pe,Ee].join("|")+")"+De+Re+")*",qe=De+Re+Qe,er="(?:"+[Ae+he+"?",he,Pe,Ee,Ye].join("|")+")",rr=RegExp(ye+"(?="+ye+")|"+er+qe,"g");function I(n){return n.match(rr)||[]}var re=I;function se(n){return ve(n)?re(n):Ke(n)}var nr=se;function pe(n){return function(t){t=(0,S.Z)(t);var e=ve(t)?nr(t):void 0,r=e?e[0]:t.charAt(0),i=e?ie(e,1).join(""):t.slice(1);return r[n]()+i}}var Ze=pe,Ar=Ze("toUpperCase"),Pr=Ar;function Er(n){return Pr((0,S.Z)(n).toLowerCase())}var ir=Er,Rr=o(51741),Dr=(0,Rr.Z)(function(n,t,e){return t=t.toLowerCase(),n+(e?ir(t):t)}),Zr=Dr,X=o(95891);function cr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function Ie(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?cr(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):cr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function sr(n,t){var e=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=Ir(n))||t&&n&&typeof n.length=="number"){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(Q){throw Q},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f=!0,D=!1,F;return{s:function(){e=e.call(n)},n:function(){var Q=e.next();return f=Q.done,Q},e:function(Q){D=!0,F=Q},f:function(){try{!f&&e.return!=null&&e.return()}finally{if(D)throw F}}}}function Ir(n,t){if(n){if(typeof n=="string")return lr(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return lr(n,t)}}function lr(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var Mr=function(t){var e,r=t.name,i=t.scale,f=t.appearance;return e={},(0,a.Z)(e,"".concat(r,"Bg"),i["".concat(f,"A")][1]),(0,a.Z)(e,"".concat(r,"BgHover"),i["".concat(f,"A")][2]),(0,a.Z)(e,"".concat(r,"Border"),i[f][4]),(0,a.Z)(e,"".concat(r,"BorderSecondary"),i[f][3]),(0,a.Z)(e,"".concat(r,"BorderHover"),i[f][5]),(0,a.Z)(e,"".concat(r,"Hover"),i[f][10]),(0,a.Z)(e,"".concat(r),i[f][9]),(0,a.Z)(e,"".concat(r,"Active"),i[f][7]),(0,a.Z)(e,"".concat(r,"TextHover"),i["".concat(f,"A")][10]),(0,a.Z)(e,"".concat(r,"Text"),i["".concat(f,"A")][9]),(0,a.Z)(e,"".concat(r,"TextActive"),i["".concat(f,"A")][7]),e},Lr=function(t){var e=t.name,r=t.scale,i=t.appearance,f={},D=sr(r[i].entries()),F;try{for(D.s();!(F=D.n()).done;){var H=(0,j.Z)(F.value,2),Q=H[0],le=H[1];Q===0||Q===12||(f["".concat(e).concat(Q)]=le)}}catch(xe){D.e(xe)}finally{D.f()}var te=sr(r["".concat(i,"A")].entries()),ge;try{for(te.s();!(ge=te.n()).done;){var oe=(0,j.Z)(ge.value,2),ae=oe[0],q=oe[1];ae===0||ae===12||(f["".concat(e).concat(ae,"A")]=q)}}catch(xe){te.e(xe)}finally{te.f()}return Ie(Ie({},f),Mr({appearance:i,name:e,scale:r}))},Ur=function(t){for(var e=t.isDarkMode,r={},i=0,f=Object.entries(X._);i<f.length;i++){var D=(0,j.Z)(f[i],2),F=D[0],H=D[1];r=Ie(Ie({},r),Lr({appearance:e?"dark":"light",name:Zr(F),scale:H}))}return r},ne=function(t){var e,r=t.type,i=t.scale,f=t.appearance,D=ir(r),F=f==="dark";return e={},(0,a.Z)(e,"color".concat(D,"Bg"),i[f][1]),(0,a.Z)(e,"color".concat(D,"BgHover"),i[f][2]),(0,a.Z)(e,"color".concat(D,"Border"),i[f][4]),(0,a.Z)(e,"color".concat(D,"BorderHover"),i[f][F?5:3]),(0,a.Z)(e,"color".concat(D,"Hover"),i[f][F?10:8]),(0,a.Z)(e,"color".concat(D),i[f][9]),(0,a.Z)(e,"color".concat(D,"Active"),i[f][F?7:10]),(0,a.Z)(e,"color".concat(D,"TextHover"),i[f][F?10:8]),(0,a.Z)(e,"color".concat(D,"Text"),i[f][9]),(0,a.Z)(e,"color".concat(D,"TextActive"),i[f][F?7:10]),e},Me=function(t){var e=t.scale,r=t.appearance;return{colorBgContainer:r==="dark"?e[r][1]:e[r][0],colorBgElevated:r==="dark"?e[r][2]:e[r][0],colorBgLayout:r==="dark"?e[r][0]:e[r][1],colorBgMask:e.lightA[8],colorBgSpotlight:e[r][5],colorBorder:e[r][4],colorBorderSecondary:e[r][3],colorFill:e["".concat(r,"A")][3],colorFillQuaternary:e["".concat(r,"A")][0],colorFillSecondary:e["".concat(r,"A")][2],colorFillTertiary:e["".concat(r,"A")][1],colorText:e[r][12],colorTextQuaternary:e[r][6],colorTextSecondary:e[r][10],colorTextTertiary:e[r][8]}},ur={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}};function dr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function ue(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?dr(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):dr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var Fr=ne({appearance:"dark",scale:X._.bnw,type:"Primary"}),fr=Me({appearance:"dark",scale:X._.gray}),zr=ne({appearance:"dark",scale:X._.lime,type:"Success"}),Hr=ne({appearance:"dark",scale:X._.gold,type:"Warning"}),Nr=ne({appearance:"dark",scale:X._.red,type:"Error"}),Le=ne({appearance:"dark",scale:X._.blue,type:"Info"}),Wr=ue(ue(ue(ue(ue(ue(ue({},Fr),fr),zr),Hr),Nr),Le),{},{boxShadow:"0 12px 20px 6px rgb(0 0 0 / 0.08)",boxShadowSecondary:"0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)",colorLink:Le.colorInfoText,colorLinkActive:Le.colorInfoTextActive,colorLinkHover:Le.colorInfoTextHover,colorTextLightSolid:fr.colorBgLayout}),Br=Wr;function pr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function Ue(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):pr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var Jr=function(t,e){var r=t.primaryColor,i=t.neutralColor,f={},D={},F=X._[r];F&&(f=ne({appearance:"dark",scale:F,type:"Primary"}));var H=ur[i];return H&&(D=Me({appearance:"dark",scale:H})),Ue(Ue(Ue(Ue({},e),Br),f),D)};function br(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function de(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?br(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):br(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var Gr=ne({appearance:"light",scale:X._.bnw,type:"Primary"}),gr=Me({appearance:"light",scale:X._.gray}),Kr=ne({appearance:"light",scale:X._.green,type:"Success"}),$r=ne({appearance:"light",scale:X._.orange,type:"Warning"}),Yr=ne({appearance:"light",scale:X._.volcano,type:"Error"}),Fe=ne({appearance:"light",scale:X._.geekblue,type:"Info"}),Vr=de(de(de(de(de(de(de({},Gr),gr),Kr),$r),Yr),Fe),{},{boxShadow:"0 12px 20px 6px rgb(104 112 118 / 0.08)",boxShadowSecondary:"0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)",colorLink:Fe.colorInfoText,colorLinkActive:Fe.colorInfoTextActive,colorLinkHover:Fe.colorInfoTextHover,colorTextLightSolid:gr.colorBgLayout}),Xr=Vr;function vr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function ze(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?vr(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):vr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var Qr=function(t,e){var r=t.primaryColor,i=t.neutralColor,f={},D={},F=X._[r];F&&(f=ne({appearance:"light",scale:F,type:"Primary"}));var H=ur[i];return H&&(D=Me({appearance:"light",scale:H})),ze(ze(ze(ze({},e),Xr),f),D)},mr='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',qr='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',hr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',en="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",rn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[qr,hr,mr].join(","),fontFamilyCode:[en,hr,mr].join(",")};function yr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function xr(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):yr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var nn=function(t){var e=t.neutralColor,r=t.appearance,i=t.primaryColor,f=r==="dark";return{algorithm:f?Jr:Qr,token:xr(xr({},rn),{},{neutralColor:e,primaryColor:i})}},tr=o(98930),Sr,tn=function(n){return(0,d.iv)(Sr||(Sr=(0,C.Z)([`
  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding: 4px 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-alert {
    span[role='img'] {
      align-self: flex-start;
      width: 16px;
      height: 16px;
      margin-top: 3px;
    }

    .`,`-alert-description {
      word-break: break-all;
      word-wrap: break-word;
    }

    &.`,`-alert-with-description {
      padding-block: 12px;
      padding-inline: 12px;

      .`,`-alert-message {
        font-size: 14px;
        font-weight: 600;
        word-break: break-all;
        word-wrap: break-word;
      }
    }
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),n.prefixCls,n.prefixCls,(0,tr.XV)(n.colorPrimary),(0,tr.XV)(n.colorPrimary),(0,tr.XV)(n.colorPrimaryActive),n.prefixCls,n.colorBgLayout,n.colorText,n.borderRadiusSM,n.prefixCls,n.colorText,n.prefixCls,n.colorBgContainer,n.prefixCls,n.prefixCls,n.prefixCls,n.prefixCls,n.prefixCls)},Or,on=function(n){return(0,d.iv)(Or||(Or=(0,C.Z)([`
  html,
  body {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    overflow-x: hidden;
    overflow-y: auto;

    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    vertical-align: baseline;

    color-scheme: dark;
    background-color: `,`;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-x: hidden;
    height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  p {
    word-wrap: break-word;
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    box-sizing: border-box;
    vertical-align: baseline;
  }

  @media only screen and (min-width: 574px) {
    * {
      ::-webkit-scrollbar {
        cursor: pointer;
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: transparent;
        border-radius: 2px;
        transition: background-color 500ms `,`;

        &:hover {
          background-color: `,`;
        }
      }

      ::-webkit-scrollbar-corner {
        display: none;
        width: 0;
        height: 0;
      }

      &:hover {
        ::-webkit-scrollbar-thumb {
          background-color: `,`;
        }
      }
    }
  }
`])),n.fontFamily,n.fontSize,n.colorTextBase,n.colorBgLayout,n.fontFamilyCode,n.fontFamilyCode,n.yellow9,n.motionEaseOut,n.colorText,n.colorFill)},an=(0,d.vJ)(function(n){var t=n.theme;return[on(t),tn(t)]}),cn=an,fe=o(11527),sn=["children","customStylish","customToken","enableWebfonts","webfonts","customTheme"];function Cr(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function be(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Cr(Object(e),!0).forEach(function(r){(0,a.Z)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Cr(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var ln=(0,O.memo)(function(n){var t=n.children,e=n.customStylish,r=n.customToken,i=n.enableWebfonts,f=i===void 0?!0:i,D=n.webfonts,F=n.customTheme,H=F===void 0?{}:F,Q=(0,E.Z)(n,sn),le=(0,u.nc)(),te=D||[le({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),le({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),le({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),le({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ge=(0,O.useCallback)(function(q){return be(be({},R(q)),e==null?void 0:e(q))},[e]),oe=(0,O.useCallback)(function(q){return be(be({},Ur(q)),r==null?void 0:r(q))},[r]),ae=(0,O.useCallback)(function(q){return nn({appearance:q,neutralColor:H.neutralColor,primaryColor:H.primaryColor})},[H.primaryColor,H.neutralColor]);return(0,fe.jsxs)(fe.Fragment,{children:[f&&(te==null?void 0:te.length)>0&&te.map(function(q){return(0,fe.jsx)(c,{url:q},q)}),(0,fe.jsx)(d.V9,{speedy:!0,children:(0,fe.jsxs)(d.f6,be(be({customStylish:ge,customToken:oe},Q),{},{theme:ae,children:[(0,fe.jsx)(cn,{}),(0,fe.jsx)(g,{style:{minHeight:"inherit",width:"inherit"},children:t})]}))})]})}),un=ln},91973:function(T,b,o){var a=o(20024),E=o(50959),h=o(11527),M=(0,E.memo)(function(){return(0,h.jsxs)(a.ql,{children:[(0,h.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,h.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,h.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,h.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,h.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,h.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,h.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,h.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,h.jsx)("meta",{content:"#000000",name:"theme-color"})]})});b.Z=M},50981:function(T,b,o){o.d(b,{f:function(){return h}});var a=o(90968),E=o(38973),h=(0,a.Ue)()((0,E.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(T){T.exports=function b(o,a){if(o===a)return!0;if(o&&a&&typeof o=="object"&&typeof a=="object"){if(o.constructor!==a.constructor)return!1;var E,h,M;if(Array.isArray(o)){if(E=o.length,E!=a.length)return!1;for(h=E;h--!==0;)if(!b(o[h],a[h]))return!1;return!0}if(o.constructor===RegExp)return o.source===a.source&&o.flags===a.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===a.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===a.toString();if(M=Object.keys(o),E=M.length,E!==Object.keys(a).length)return!1;for(h=E;h--!==0;)if(!Object.prototype.hasOwnProperty.call(a,M[h]))return!1;for(h=E;h--!==0;){var O=M[h];if(!b(o[O],a[O]))return!1}return!0}return o!==o&&a!==a}},2179:function(T,b,o){var a=o(50959),E=o(4322);function h(z,G){return z===G&&(z!==0||1/z===1/G)||z!==z&&G!==G}var M=typeof Object.is=="function"?Object.is:h,O=E.useSyncExternalStore,Y=a.useRef,V=a.useEffect,J=a.useMemo,ee=a.useDebugValue;b.useSyncExternalStoreWithSelector=function(z,G,_,l,v){var A=Y(null);if(A.current===null){var x={hasValue:!1,value:null};A.current=x}else x=A.current;A=J(function(){function g(c){if(!d){if(d=!0,u=c,c=l(c),v!==void 0&&x.hasValue){var C=x.value;if(v(C,c))return p=C}return p=c}if(C=p,M(u,c))return C;var k=l(c);return v!==void 0&&v(C,k)?C:(u=c,p=k)}var d=!1,u,p,s=_===void 0?null:_;return[function(){return g(G())},s===null?void 0:function(){return g(s())}]},[G,_,l,v]);var y=O(z,A[0],A[1]);return V(function(){x.hasValue=!0,x.value=y},[y]),ee(y),y}},7231:function(T,b,o){T.exports=o(2179)},66711:function(T,b,o){var a=o(99615),E=a.Z.Symbol;b.Z=E},28019:function(T,b){function o(a,E){for(var h=-1,M=a==null?0:a.length,O=Array(M);++h<M;)O[h]=E(a[h],h,a);return O}b.Z=o},33918:function(T,b,o){o.d(b,{Z:function(){return x}});var a=o(66711),E=Object.prototype,h=E.hasOwnProperty,M=E.toString,O=a.Z?a.Z.toStringTag:void 0;function Y(y){var g=h.call(y,O),d=y[O];try{y[O]=void 0;var u=!0}catch(s){}var p=M.call(y);return u&&(g?y[O]=d:delete y[O]),p}var V=Y,J=Object.prototype,ee=J.toString;function z(y){return ee.call(y)}var G=z,_="[object Null]",l="[object Undefined]",v=a.Z?a.Z.toStringTag:void 0;function A(y){return y==null?y===void 0?l:_:v&&v in Object(y)?V(y):G(y)}var x=A},51741:function(T,b,o){o.d(b,{Z:function(){return rr}});function a(I,re,se,nr){var pe=-1,Ze=I==null?0:I.length;for(nr&&Ze&&(se=I[++pe]);++pe<Ze;)se=re(se,I[pe],pe,I);return se}var E=a;function h(I){return function(re){return I==null?void 0:I[re]}}var M=h,O={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Y=M(O),V=Y,J=o(30994),ee=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,z="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",_="\\u20d0-\\u20ff",l=z+G+_,v="["+l+"]",A=RegExp(v,"g");function x(I){return I=(0,J.Z)(I),I&&I.replace(ee,V).replace(A,"")}var y=x,g=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function d(I){return I.match(g)||[]}var u=d,p=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function s(I){return p.test(I)}var c=s,C="\\ud800-\\udfff",k="\\u0300-\\u036f",U="\\ufe20-\\ufe2f",Z="\\u20d0-\\u20ff",P=k+U+Z,N="\\u2700-\\u27bf",W="a-z\\xdf-\\xf6\\xf8-\\xff",L="\\xac\\xb1\\xd7\\xf7",B="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",R="\\u2000-\\u206f",j=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",S="A-Z\\xc0-\\xd6\\xd8-\\xde",m="\\ufe0e\\ufe0f",w=L+B+R+j,$="['\u2019]",ie="["+w+"]",Ne="["+P+"]",Se="\\d+",We="["+N+"]",Oe="["+W+"]",Ce="[^"+C+w+Se+N+W+S+"]",Be="\\ud83c[\\udffb-\\udfff]",Je="(?:"+Ne+"|"+Be+")",Ge="[^"+C+"]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",ve="[\\ud800-\\udbff][\\udc00-\\udfff]",ce="["+S+"]",Ke="\\u200d",me="(?:"+Oe+"|"+Ce+")",$e="(?:"+ce+"|"+Ce+")",we="(?:"+$+"(?:d|ll|m|re|s|t|ve))?",_e="(?:"+$+"(?:D|LL|M|RE|S|T|VE))?",ke=Je+"?",Te="["+m+"]?",Ye="(?:"+Ke+"(?:"+[Ge,je,ve].join("|")+")"+Te+ke+")*",he="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ye="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ve=Te+ke+Ye,Ae="(?:"+[We,je,ve].join("|")+")"+Ve,Pe=RegExp([ce+"?"+Oe+"+"+we+"(?="+[ie,ce,"$"].join("|")+")",$e+"+"+_e+"(?="+[ie,ce+me,"$"].join("|")+")",ce+"?"+me+"+"+we,ce+"+"+_e,ye,he,Se,Ae].join("|"),"g");function Ee(I){return I.match(Pe)||[]}var Xe=Ee;function Re(I,re,se){return I=(0,J.Z)(I),re=se?void 0:re,re===void 0?c(I)?Xe(I):u(I):I.match(re)||[]}var De=Re,Qe="['\u2019]",qe=RegExp(Qe,"g");function er(I){return function(re){return E(De(y(re).replace(qe,"")),I,"")}}var rr=er},97889:function(T,b){var o=typeof global=="object"&&global&&global.Object===Object&&global;b.Z=o},99615:function(T,b,o){var a=o(97889),E=typeof self=="object"&&self&&self.Object===Object&&self,h=a.Z||E||Function("return this")();b.Z=h},56052:function(T,b){var o=Array.isArray;b.Z=o},13795:function(T,b){function o(a){return a!=null&&typeof a=="object"}b.Z=o},30994:function(T,b,o){o.d(b,{Z:function(){return A}});var a=o(66711),E=o(28019),h=o(56052),M=o(33918),O=o(13795),Y="[object Symbol]";function V(x){return typeof x=="symbol"||(0,O.Z)(x)&&(0,M.Z)(x)==Y}var J=V,ee=1/0,z=a.Z?a.Z.prototype:void 0,G=z?z.toString:void 0;function _(x){if(typeof x=="string")return x;if((0,h.Z)(x))return(0,E.Z)(x,_)+"";if(J(x))return G?G.call(x):"";var y=x+"";return y=="0"&&1/x==-ee?"-0":y}var l=_;function v(x){return x==null?"":l(x)}var A=v},90968:function(T,b,o){o.d(b,{Ue:function(){return z}});const a=_=>{let l;const v=new Set,A=(u,p)=>{const s=typeof u=="function"?u(l):u;if(!Object.is(s,l)){const c=l;l=(p!=null?p:typeof s!="object")?s:Object.assign({},l,s),v.forEach(C=>C(l,c))}},x=()=>l,d={setState:A,getState:x,subscribe:u=>(v.add(u),()=>v.delete(u)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),v.clear()}};return l=_(A,x,d),d},E=_=>_?a(_):a;var h=_=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),E(_)),M=o(50959),O=o(7231);const{useSyncExternalStoreWithSelector:Y}=O;let V=!1;function J(_,l=_.getState,v){v&&!V&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),V=!0);const A=Y(_.subscribe,_.getState,_.getServerState||_.getState,l,v);return(0,M.useDebugValue)(A),A}const ee=_=>{typeof _!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const l=typeof _=="function"?E(_):_,v=(A,x)=>J(l,A,x);return Object.assign(v,l),v},z=_=>_?ee(_):ee;var G=_=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),z(_))},38973:function(T,b,o){o.d(b,{mW:function(){return V},tJ:function(){return y}});const a=(g,d)=>(u,p,s)=>(s.dispatch=c=>(u(C=>g(C,c),!1,c),c),s.dispatchFromDevtools=!0,K({dispatch:(...c)=>s.dispatch(...c)},d)),E=null,h=new Map,M=g=>{const d=h.get(g);return d?Object.fromEntries(Object.entries(d.stores).map(([u,p])=>[u,p.getState()])):{}},O=(g,d,u)=>{if(g===void 0)return{type:"untracked",connection:d.connect(u)};const p=h.get(u.name);if(p)return K({type:"tracked",store:g},p);const s={connection:d.connect(u),stores:{}};return h.set(u.name,s),K({type:"tracked",store:g},s)},V=(g,d={})=>(u,p,s)=>{const R=d,{enabled:c,anonymousActionType:C,store:k}=R,U=ar(R,["enabled","anonymousActionType","store"]);let Z;try{Z=(c!=null?c:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(S){}if(!Z)return c&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),g(u,p,s);const j=O(k,Z,U),{connection:P}=j,N=ar(j,["connection"]);let W=!0;s.setState=(S,m,w)=>{const $=u(S,m);if(!W)return $;const ie=w===void 0?{type:C||"anonymous"}:typeof w=="string"?{type:w}:w;return k===void 0?(P==null||P.send(ie,p()),$):(P==null||P.send(or(K({},ie),{type:`${k}/${ie.type}`}),or(K({},M(U.name)),{[k]:s.getState()})),$)};const L=(...S)=>{const m=W;W=!1,u(...S),W=m},B=g(s.setState,p,s);if(N.type==="untracked"?P==null||P.init(B):(N.stores[N.store]=s,P==null||P.init(Object.fromEntries(Object.entries(N.stores).map(([S,m])=>[S,S===N.store?B:m.getState()])))),s.dispatchFromDevtools&&typeof s.dispatch=="function"){let S=!1;const m=s.dispatch;s.dispatch=(...w)=>{w[0].type==="__setState"&&!S&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),S=!0),m(...w)}}return P.subscribe(S=>{var m;switch(S.type){case"ACTION":if(typeof S.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return J(S.payload,w=>{if(w.type==="__setState"){if(k===void 0){L(w.state);return}Object.keys(w.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const $=w.state[k];if($==null)return;JSON.stringify(s.getState())!==JSON.stringify($)&&L($);return}s.dispatchFromDevtools&&typeof s.dispatch=="function"&&s.dispatch(w)});case"DISPATCH":switch(S.payload.type){case"RESET":return L(B),k===void 0?P==null?void 0:P.init(s.getState()):P==null?void 0:P.init(M(U.name));case"COMMIT":if(k===void 0){P==null||P.init(s.getState());return}return P==null?void 0:P.init(M(U.name));case"ROLLBACK":return J(S.state,w=>{if(k===void 0){L(w),P==null||P.init(s.getState());return}L(w[k]),P==null||P.init(M(U.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return J(S.state,w=>{if(k===void 0){L(w);return}JSON.stringify(s.getState())!==JSON.stringify(w[k])&&L(w[k])});case"IMPORT_STATE":{const{nextLiftedState:w}=S.payload,$=(m=w.computedStates.slice(-1)[0])==null?void 0:m.state;if(!$)return;L(k===void 0?$:$[k]),P==null||P.send(null,w);return}case"PAUSE_RECORDING":return W=!W}return}}),B},J=(g,d)=>{let u;try{u=JSON.parse(g)}catch(p){console.error("[zustand devtools middleware] Could not parse the received json",p)}u!==void 0&&d(u)},ee=g=>(d,u,p)=>{const s=p.subscribe;return p.subscribe=(C,k,U)=>{let Z=C;if(k){const P=(U==null?void 0:U.equalityFn)||Object.is;let N=C(p.getState());Z=W=>{const L=C(W);if(!P(N,L)){const B=N;k(N=L,B)}},U!=null&&U.fireImmediately&&k(N,N)}return s(Z)},g(d,u,p)},z=null,G=(g,d)=>(...u)=>Object.assign({},g,d(...u));function _(g,d){let u;try{u=g()}catch(s){return}return{getItem:s=>{var c;const C=U=>U===null?null:JSON.parse(U,d==null?void 0:d.reviver),k=(c=u.getItem(s))!=null?c:null;return k instanceof Promise?k.then(C):C(k)},setItem:(s,c)=>u.setItem(s,JSON.stringify(c,d==null?void 0:d.replacer)),removeItem:s=>u.removeItem(s)}}const l=g=>d=>{try{const u=g(d);return u instanceof Promise?u:{then(p){return l(p)(u)},catch(p){return this}}}catch(u){return{then(p){return this},catch(p){return l(p)(u)}}}},v=(g,d)=>(u,p,s)=>{let c=K({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:j=>j,version:0,merge:(j,S)=>K(K({},S),j)},d),C=!1;const k=new Set,U=new Set;let Z;try{Z=c.getStorage()}catch(j){}if(!Z)return g((...j)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),u(...j)},p,s);const P=l(c.serialize),N=()=>{const j=c.partialize(K({},p()));let S;const m=P({state:j,version:c.version}).then(w=>Z.setItem(c.name,w)).catch(w=>{S=w});if(S)throw S;return m},W=s.setState;s.setState=(j,S)=>{W(j,S),N()};const L=g((...j)=>{u(...j),N()},p,s);let B;const R=()=>{var j;if(!Z)return;C=!1,k.forEach(m=>m(p()));const S=((j=c.onRehydrateStorage)==null?void 0:j.call(c,p()))||void 0;return l(Z.getItem.bind(Z))(c.name).then(m=>{if(m)return c.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==c.version){if(c.migrate)return c.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var w;return B=c.merge(m,(w=p())!=null?w:L),u(B,!0),N()}).then(()=>{S==null||S(B,void 0),C=!0,U.forEach(m=>m(B))}).catch(m=>{S==null||S(void 0,m)})};return s.persist={setOptions:j=>{c=K(K({},c),j),j.getStorage&&(Z=j.getStorage())},clearStorage:()=>{Z==null||Z.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>R(),hasHydrated:()=>C,onHydrate:j=>(k.add(j),()=>{k.delete(j)}),onFinishHydration:j=>(U.add(j),()=>{U.delete(j)})},R(),B||L},A=(g,d)=>(u,p,s)=>{let c=K({storage:_(()=>localStorage),partialize:R=>R,version:0,merge:(R,j)=>K(K({},j),R)},d),C=!1;const k=new Set,U=new Set;let Z=c.storage;if(!Z)return g((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),u(...R)},p,s);const P=()=>{const R=c.partialize(K({},p()));return Z.setItem(c.name,{state:R,version:c.version})},N=s.setState;s.setState=(R,j)=>{N(R,j),P()};const W=g((...R)=>{u(...R),P()},p,s);let L;const B=()=>{var R,j;if(!Z)return;C=!1,k.forEach(m=>{var w;return m((w=p())!=null?w:W)});const S=((j=c.onRehydrateStorage)==null?void 0:j.call(c,(R=p())!=null?R:W))||void 0;return l(Z.getItem.bind(Z))(c.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==c.version){if(c.migrate)return c.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var w;return L=c.merge(m,(w=p())!=null?w:W),u(L,!0),P()}).then(()=>{S==null||S(L,void 0),L=p(),C=!0,U.forEach(m=>m(L))}).catch(m=>{S==null||S(void 0,m)})};return s.persist={setOptions:R=>{c=K(K({},c),R),R.storage&&(Z=R.storage)},clearStorage:()=>{Z==null||Z.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>B(),hasHydrated:()=>C,onHydrate:R=>(k.add(R),()=>{k.delete(R)}),onFinishHydration:R=>(U.add(R),()=>{U.delete(R)})},c.skipHydration||B(),L||W},y=(g,d)=>"getStorage"in d||"serialize"in d||"deserialize"in d?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),v(g,d)):A(g,d)}}]);
}());