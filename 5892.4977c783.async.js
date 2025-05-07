!(function(){"use strict";var It=Object.defineProperty,Rt=Object.defineProperties;var Mt=Object.getOwnPropertyDescriptors;var fn=Object.getOwnPropertySymbols;var kr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var Er=(A,s,e)=>s in A?It(A,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):A[s]=e,se=(A,s)=>{for(var e in s||(s={}))kr.call(s,e)&&Er(A,e,s[e]);if(fn)for(var e of fn(s))Pr.call(s,e)&&Er(A,e,s[e]);return A},ur=(A,s)=>Rt(A,Mt(s));var dr=(A,s)=>{var e={};for(var n in A)kr.call(A,n)&&s.indexOf(n)<0&&(e[n]=A[n]);if(A!=null&&fn)for(var n of fn(A))s.indexOf(n)<0&&Pr.call(A,n)&&(e[n]=A[n]);return e};(self.webpackChunktiger_ui=self.webpackChunktiger_ui||[]).push([[5892],{1238:function(A,s,e){e.d(s,{E_:function(){return N},nc:function(){return M}});var n=e(75271);function d(y){var u=[];if(y.length===0)return"";if(typeof y[0]!="string")throw new TypeError("Url must be a string. Received "+y[0]);if(y[0].match(/^[^/:]+:\/*$/)&&y.length>1){var C=y.shift();y[0]=C+y[0]}y[0].match(/^file:\/\/\//)?y[0]=y[0].replace(/^([^/:]+):\/*/,"$1:///"):y[0]=y[0].replace(/^([^/:]+):\/*/,"$1://");for(var Z=0;Z<y.length;Z++){var _=y[Z];if(typeof _!="string")throw new TypeError("Url must be a string. Received "+_);_!==""&&(Z>0&&(_=_.replace(/^[\/]+/,"")),Z<y.length-1?_=_.replace(/[\/]+$/,""):_=_.replace(/[\/]+$/,"/"),u.push(_))}var g=u.join("/");g=g.replace(/\/(\?|&|#[^!])/g,"$1");var f=g.split("?");return g=f.shift()+(f.length>0?"?":"")+f.join("&"),g}function o(){var y;return typeof arguments[0]=="object"?y=arguments[0]:y=[].slice.call(arguments),d(y)}var T="https://unpkg.com",w="https://registry.npmmirror.com",K=function(u){var C=u.pkg,Z=u.version,_=Z===void 0?"latest":Z,g=u.path,f=u.proxy;switch(f){case"unpkg":return o(T,"".concat(C,"@").concat(_),g);default:return o(w,C,_,"files",g)}},J=e(52676),N=(0,n.createContext)(null),W=null,H=function(u){var C=u.pkg,Z=u.version,_=u.path;return K({path:_,pkg:C,proxy:"aliyun",version:Z})},M=function(){var u=(0,n.useContext)(N);return u?(u==null?void 0:u.proxy)!=="custom"?function(C){var Z=C.pkg,_=C.version,g=C.path;return K({path:g,pkg:Z,proxy:u.proxy,version:_})}:(u==null?void 0:u.customCdnFn)||H:H},j=null},50289:function(A,s,e){e.d(s,{Z:function(){return At}});var n=e(13800),d=e(49124),o=e(75271),T=e(82187),w=e.n(T),K=e(85275),J=e(67332),N=e(8792),W=e(45202),H=e(12910),M=e(79880),j=e(10548);const y=r=>{const{componentCls:p,colorText:c,fontSize:a,lineHeight:O,fontFamily:I}=r;return{[p]:{color:c,fontSize:a,lineHeight:O,fontFamily:I}}},u=()=>({});var C=(0,j.I$)("App",y,u);const Z=()=>o.useContext(M.Z),_=r=>{const{prefixCls:p,children:c,className:a,rootClassName:O,message:I,notification:ne,style:de,component:ce="div"}=r,{getPrefixCls:ye}=(0,o.useContext)(J.E_),he=ye("app",p),[_e,je,xe]=C(he),Ce=w()(je,he,a,O,xe),be=(0,o.useContext)(M.J),ve=o.useMemo(()=>({message:Object.assign(Object.assign({},be.message),I),notification:Object.assign(Object.assign({},be.notification),ne)}),[I,ne,be.message,be.notification]),[ln,lr]=(0,N.Z)(ve.message),[un,ge]=(0,H.Z)(ve.notification),[dn,jt]=(0,W.Z)(),Et=o.useMemo(()=>({message:ln,notification:un,modal:dn}),[ln,un,dn]);(0,K.ln)("App")(!(xe&&ce===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const kt=ce===!1?o.Fragment:ce,Pt={className:Ce,style:de};return _e(o.createElement(M.Z.Provider,{value:Et},o.createElement(M.J.Provider,{value:ve},o.createElement(kt,Object.assign({},ce===!1?void 0:Pt),jt,lr,ge,c))))};_.useApp=Z;var g=_,f=e(66270),v=e(42569),b=e(1238),x=function(p){var c=document.createElement("link");return c.rel="stylesheet",c.href=p,c},m=(0,o.memo)(function(r){var p=r.url,c=(0,o.useRef)(!1);return(0,o.useEffect)(function(){if(!c.current){c.current=!0;var a=x(p);document.head.append(a)}},[]),null}),L=m,E=e(2975),k,z,h,X,q,$,re,U,D=function(p){var c=p.css,a=p.token,O=p.isDarkMode,I=(0,f.F4)(k||(k=(0,E.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:c(z||(z=(0,E.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:c(h||(h=(0,E.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:c(X||(X=(0,E.Z)([`
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
    `])),a.colorFill,a.motionEaseOut),gradientAnimation:c(q||(q=(0,E.Z)([`
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
    `])),a.gold,a.magenta,a.geekblue,a.cyan,I),markdown:c($||($=(0,E.Z)([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),a.colorTextSecondary,a.colorTextDescription,a.fontFamilyCode,a.colorFillSecondary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorBgLayout,O?a.colorText:"#333",O?a.colorTextSecondary:"#000",O?a.colorTextSecondary:"#000",a.colorTextSecondary,a.colorBorder,a.colorBorderSecondary,a.colorFillTertiary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorTextSecondary,a.colorTextSecondary,a.motionEaseOut,a.colorBorder,a.colorFillTertiary,a.borderRadius,a.colorBorderSecondary,a.colorFillQuaternary,a.colorBorderSecondary,a.fontFamilyCode),noScrollbar:c(re||(re=(0,E.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:c(U||(U=(0,E.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),a.colorTextSecondary,a.colorText)}},R=e(76314),P=e(34668),S=e(58673),Q=e(66711),fe=e(28019),F=e(56052),G=e(33918),oe=e(13795),ie="[object Symbol]";function me(r){return typeof r=="symbol"||(0,oe.Z)(r)&&(0,G.Z)(r)==ie}var Fe=me,pn=1/0,Le=Q.Z?Q.Z.prototype:void 0,ze=Le?Le.toString:void 0;function Ue(r){if(typeof r=="string")return r;if((0,F.Z)(r))return(0,fe.Z)(r,Ue)+"";if(Fe(r))return ze?ze.call(r):"";var p=r+"";return p=="0"&&1/r==-pn?"-0":p}var Ne=Ue;function Be(r){return r==null?"":Ne(r)}var Oe=Be;function vn(r,p,c){var a=-1,O=r.length;p<0&&(p=-p>O?0:O+p),c=c>O?O:c,c<0&&(c+=O),O=p>c?0:c-p>>>0,p>>>=0;for(var I=Array(O);++a<O;)I[a]=r[a+p];return I}var He=vn;function We(r,p,c){var a=r.length;return c=c===void 0?a:c,!p&&c>=a?r:He(r,p,c)}var Ee=We,Ge="\\ud800-\\udfff",gn="\\u0300-\\u036f",bn="\\ufe20-\\ufe2f",mn="\\u20d0-\\u20ff",hn=gn+bn+mn,yn="\\ufe0e\\ufe0f",_n="\\u200d",xn=RegExp("["+_n+Ge+hn+yn+"]");function Sn(r){return xn.test(r)}var ke=Sn;function Tn(r){return r.split("")}var Cn=Tn,Ke="\\ud800-\\udfff",On="\\u0300-\\u036f",Zn="\\ufe20-\\ufe2f",wn="\\u20d0-\\u20ff",Pe=On+Zn+wn,An="\\ufe0e\\ufe0f",jn="["+Ke+"]",Ie="["+Pe+"]",Re="\\ud83c[\\udffb-\\udfff]",En="(?:"+Ie+"|"+Re+")",Je="[^"+Ke+"]",Ve="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="\\u200d",Ye=En+"?",Xe="["+An+"]?",Pn="(?:"+kn+"(?:"+[Je,Ve,$e].join("|")+")"+Xe+Ye+")*",In=Xe+Ye+Pn,Rn="(?:"+[Je+Ie+"?",Ie,Ve,$e,jn].join("|")+")",Qe=RegExp(Re+"(?="+Re+")|"+Rn+In,"g");function Mn(r){return r.match(Qe)||[]}var Dn=Mn;function Fn(r){return ke(r)?Dn(r):Cn(r)}var Ln=Fn;function qe(r){return function(p){p=Oe(p);var c=ke(p)?Ln(p):void 0,a=c?c[0]:p.charAt(0),O=c?Ee(c,1).join(""):p.slice(1);return a[r]()+O}}var zn=qe,Un=zn("toUpperCase"),en=Un;function Nn(r){return en(Oe(r).toLowerCase())}var nn=Nn;function rn(r,p,c,a){var O=-1,I=r==null?0:r.length;for(a&&I&&(c=r[++O]);++O<I;)c=p(c,r[O],O,r);return c}var Bn=rn;function Hn(r){return function(p){return r==null?void 0:r[p]}}var Wn=Hn,Gn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Kn=Wn(Gn),Jn=Kn,Vn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$n="\\u0300-\\u036f",Yn="\\ufe20-\\ufe2f",Xn="\\u20d0-\\u20ff",Qn=$n+Yn+Xn,qn="["+Qn+"]",er=RegExp(qn,"g");function nr(r){return r=Oe(r),r&&r.replace(Vn,Jn).replace(er,"")}var rr=nr,tr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ar(r){return r.match(tr)||[]}var or=ar,ir=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function sr(r){return ir.test(r)}var cr=sr,tn="\\ud800-\\udfff",t="\\u0300-\\u036f",i="\\ufe20-\\ufe2f",l="\\u20d0-\\u20ff",B=t+i+l,Y="\\u2700-\\u27bf",ee="a-z\\xdf-\\xf6\\xf8-\\xff",ae="\\xac\\xb1\\xd7\\xf7",V="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",te="\\u2000-\\u206f",an=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",le="A-Z\\xc0-\\xd6\\xd8-\\xde",Se="\\ufe0e\\ufe0f",Ze=ae+V+te+an,we="['\u2019]",Me="["+Ze+"]",Ir="["+B+"]",fr="\\d+",Rr="["+Y+"]",pr="["+ee+"]",vr="[^"+tn+Ze+fr+Y+ee+le+"]",Mr="\\ud83c[\\udffb-\\udfff]",Dr="(?:"+Ir+"|"+Mr+")",Fr="[^"+tn+"]",gr="(?:\\ud83c[\\udde6-\\uddff]){2}",br="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="["+le+"]",Lr="\\u200d",mr="(?:"+pr+"|"+vr+")",zr="(?:"+Ae+"|"+vr+")",hr="(?:"+we+"(?:d|ll|m|re|s|t|ve))?",yr="(?:"+we+"(?:D|LL|M|RE|S|T|VE))?",_r=Dr+"?",xr="["+Se+"]?",Ur="(?:"+Lr+"(?:"+[Fr,gr,br].join("|")+")"+xr+_r+")*",Nr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Br="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hr=xr+_r+Ur,Wr="(?:"+[Rr,gr,br].join("|")+")"+Hr,Gr=RegExp([Ae+"?"+pr+"+"+hr+"(?="+[Me,Ae,"$"].join("|")+")",zr+"+"+yr+"(?="+[Me,Ae+mr,"$"].join("|")+")",Ae+"?"+mr+"+"+hr,Ae+"+"+yr,Br,Nr,fr,Wr].join("|"),"g");function Kr(r){return r.match(Gr)||[]}var Jr=Kr;function Vr(r,p,c){return r=Oe(r),p=c?void 0:p,p===void 0?cr(r)?Jr(r):or(r):r.match(p)||[]}var $r=Vr,Yr="['\u2019]",Xr=RegExp(Yr,"g");function Qr(r){return function(p){return Bn($r(rr(p).replace(Xr,"")),r,"")}}var qr=Qr,et=qr(function(r,p,c){return p=p.toLowerCase(),r+(c?nn(p):p)}),nt=et,ue=e(89853),rt=function(p){var c,a=p.name,O=p.scale,I=p.appearance;return c={},(0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)(c,"".concat(a,"Bg"),O["".concat(I,"A")][1]),"".concat(a,"BgHover"),O["".concat(I,"A")][2]),"".concat(a,"Border"),O[I][4]),"".concat(a,"BorderSecondary"),O[I][3]),"".concat(a,"BorderHover"),O[I][5]),"".concat(a,"Hover"),O[I][10]),"".concat(a),O[I][9]),"".concat(a,"Active"),O[I][7]),"".concat(a,"TextHover"),O["".concat(I,"A")][10]),"".concat(a,"Text"),O["".concat(I,"A")][9]),(0,S.Z)(c,"".concat(a,"TextActive"),O["".concat(I,"A")][7])},tt=function(p){var c=p.name,a=p.scale,O=p.appearance,I={},ne=(0,P.Z)(a[O].entries()),de;try{for(ne.s();!(de=ne.n()).done;){var ce=(0,R.Z)(de.value,2),ye=ce[0],he=ce[1];ye===0||ye===12||(I["".concat(c).concat(ye)]=he)}}catch(ve){ne.e(ve)}finally{ne.f()}var _e=(0,P.Z)(a["".concat(O,"A")].entries()),je;try{for(_e.s();!(je=_e.n()).done;){var xe=(0,R.Z)(je.value,2),Ce=xe[0],be=xe[1];Ce===0||Ce===12||(I["".concat(c).concat(Ce,"A")]=be)}}catch(ve){_e.e(ve)}finally{_e.f()}return(0,n.Z)((0,n.Z)({},I),rt({appearance:O,name:c,scale:a}))},at=function(p){for(var c=p.isDarkMode,a={},O=0,I=Object.entries(ue._);O<I.length;O++){var ne=(0,R.Z)(I[O],2),de=ne[0],ce=ne[1];a=(0,n.Z)((0,n.Z)({},a),tt({appearance:c?"dark":"light",name:nt(de),scale:ce}))}return a},pe=function(p){var c=p.type,a=p.scale,O=p.appearance,I=nn(c),ne=O==="dark";return(0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)({},"color".concat(I,"Bg"),a[O][1]),"color".concat(I,"BgHover"),a[O][2]),"color".concat(I,"Border"),a[O][4]),"color".concat(I,"BorderHover"),a[O][ne?5:3]),"color".concat(I,"Hover"),a[O][ne?10:8]),"color".concat(I),a[O][9]),"color".concat(I,"Active"),a[O][ne?7:10]),"color".concat(I,"TextHover"),a[O][ne?10:8]),"color".concat(I,"Text"),a[O][9]),"color".concat(I,"TextActive"),a[O][ne?7:10])},on=function(p){var c=p.scale,a=p.appearance;return{colorBgContainer:a==="dark"?c[a][1]:c[a][0],colorBgElevated:a==="dark"?c[a][2]:c[a][0],colorBgLayout:a==="dark"?c[a][0]:c[a][1],colorBgMask:c.lightA[8],colorBgSpotlight:c[a][5],colorBorder:c[a][4],colorBorderSecondary:c[a][3],colorFill:c["".concat(a,"A")][3],colorFillQuaternary:c["".concat(a,"A")][0],colorFillSecondary:c["".concat(a,"A")][2],colorFillTertiary:c["".concat(a,"A")][1],colorText:c[a][12],colorTextQuaternary:c[a][6],colorTextSecondary:c[a][10],colorTextTertiary:c[a][8]}},Sr={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},ot=pe({appearance:"dark",scale:ue._.bnw,type:"Primary"}),Tr=on({appearance:"dark",scale:ue._.gray}),it=pe({appearance:"dark",scale:ue._.lime,type:"Success"}),st=pe({appearance:"dark",scale:ue._.gold,type:"Warning"}),ct=pe({appearance:"dark",scale:ue._.red,type:"Error"}),sn=pe({appearance:"dark",scale:ue._.blue,type:"Info"}),lt=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},ot),Tr),it),st),ct),sn),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:sn.colorInfoText,colorLinkActive:sn.colorInfoTextActive,colorLinkHover:sn.colorInfoTextHover,colorTextLightSolid:Tr.colorBgLayout}),ut=lt,dt=function(p,c){var a=p.primaryColor,O=p.neutralColor,I={},ne={},de=ue._[a];de&&(I=pe({appearance:"dark",scale:de,type:"Primary"}));var ce=Sr[O];return ce&&(ne=on({appearance:"dark",scale:ce})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},c),ut),I),ne)},ft=pe({appearance:"light",scale:ue._.bnw,type:"Primary"}),Cr=on({appearance:"light",scale:ue._.gray}),pt=pe({appearance:"light",scale:ue._.green,type:"Success"}),vt=pe({appearance:"light",scale:ue._.orange,type:"Warning"}),gt=pe({appearance:"light",scale:ue._.volcano,type:"Error"}),cn=pe({appearance:"light",scale:ue._.geekblue,type:"Info"}),bt=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},ft),Cr),pt),vt),gt),cn),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:cn.colorInfoText,colorLinkActive:cn.colorInfoTextActive,colorLinkHover:cn.colorInfoTextHover,colorTextLightSolid:Cr.colorBgLayout}),mt=bt,ht=function(p,c){var a=p.primaryColor,O=p.neutralColor,I={},ne={},de=ue._[a];de&&(I=pe({appearance:"light",scale:de,type:"Primary"}));var ce=Sr[O];return ce&&(ne=on({appearance:"light",scale:ce})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},c),mt),I),ne)},Or='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',yt='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',Zr='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',_t="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",xt={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[yt,Zr,Or].join(","),fontFamilyCode:[_t,Zr,Or].join(",")},St=function(p){var c=p.neutralColor,a=p.appearance,O=p.primaryColor,I=a==="dark";return{algorithm:I?dt:ht,token:(0,n.Z)((0,n.Z)({},xt),{},{neutralColor:c,primaryColor:O})}},De=e(71035),wr,Tt=function(r){return(0,f.iv)(wr||(wr=(0,E.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
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
    padding-block: 4px;
    padding-inline: 8px;

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

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }
`])),r.prefixCls,(0,De.XV)(r.colorPrimary),r.prefixCls,r.prefixCls,(0,De.XV)(r.colorPrimary),(0,De.XV)(r.colorPrimary),(0,De.XV)(r.colorPrimaryActive),r.prefixCls,r.colorBgLayout,r.colorText,r.borderRadiusSM,r.prefixCls,r.colorText,r.prefixCls,r.colorBgContainer,r.prefixCls,r.prefixCls,r.prefixCls,r.stylish.blur,r.borderRadiusLG,(0,De.m4)(r.colorBgMask,.1),r.prefixCls,r.colorBorderSecondary,r.boxShadowSecondary,r.prefixCls,r.colorBorderSecondary,r.borderRadius,r.boxShadowSecondary)},Ar,Ct=function(r){return(0,f.iv)(Ar||(Ar=(0,E.Z)([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),r.isDarkMode?"dark":"light",r.fontFamily,r.fontSize,r.colorTextBase,r.colorBgLayout,r.fontFamilyCode,r.fontFamilyCode,r.yellow9,r.colorFill)},Ot=(0,f.vJ)(function(r){var p=r.theme;return[Ct(p),Tt(p)]}),Zt=Ot,Te=e(52676),wt=["children","customStylish","customToken","enableCustomFonts","enableGlobalStyle","customFonts","customTheme","className","style","theme"],jr=(0,o.memo)(function(r){var p=r.children,c=r.customStylish,a=r.customToken,O=r.enableCustomFonts,I=O===void 0?!0:O,ne=r.enableGlobalStyle,de=ne===void 0?!0:ne,ce=r.customFonts,ye=r.customTheme,he=ye===void 0?{}:ye,_e=r.className,je=r.style,xe=r.theme,Ce=(0,d.Z)(r,wt),be=(0,b.nc)(),ve=ce||[be({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),be({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),be({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),be({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],ln=(0,o.useCallback)(function(ge){return(0,n.Z)((0,n.Z)({},D(ge)),c==null?void 0:c(ge))},[c]),lr=(0,o.useCallback)(function(ge){return(0,n.Z)((0,n.Z)({},at(ge)),a==null?void 0:a(ge))},[a]),un=(0,o.useCallback)(function(ge){var dn=St({appearance:ge,neutralColor:he.neutralColor,primaryColor:he.primaryColor});return(0,v.Z)(dn,xe)},[he.primaryColor,he.neutralColor,xe]);return(0,Te.jsxs)(Te.Fragment,{children:[I&&(ve==null?void 0:ve.length)>0&&ve.map(function(ge){return(0,Te.jsx)(L,{url:ge},ge)}),(0,Te.jsx)(f.V9,{speedy:!0,children:(0,Te.jsxs)(f.f6,(0,n.Z)((0,n.Z)({customStylish:ln,customToken:lr},Ce),{},{theme:un,children:[de&&(0,Te.jsx)(Zt,{}),(0,Te.jsx)(g,{className:_e,style:(0,n.Z)({minHeight:"inherit",width:"inherit"},je),children:p})]}))})]})});jr.displayName="LobeThemeProvider";var At=jr},10535:function(A,s,e){var n=e(70867),d=e(75271),o=e(52676),T=(0,d.memo)(function(){return(0,o.jsxs)(n.ql,{children:[(0,o.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,o.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,o.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,o.jsx)("link",{href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/site.webmanifest",rel:"manifest"}),(0,o.jsx)("link",{color:"#000000",href:"https://registry.npmmirror.com/@lobehub/assets-favicons/1.1.0/files/assets/safari-pinned-tab.svg",rel:"mask-icon"}),(0,o.jsx)("meta",{content:"LobeHub",name:"apple-mobile-web-app-title"}),(0,o.jsx)("meta",{content:"LobeHub",name:"application-name"}),(0,o.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,o.jsx)("meta",{content:"#000000",name:"theme-color"})]})});s.Z=T},29345:function(A,s,e){e.d(s,{f:function(){return o}});var n=e(79192),d=e(92221),o=(0,n.Ue)()((0,d.tJ)(function(){return{themeMode:"auto"}},{name:"ANTD_STYLE_DOC_STORE"}))},3341:function(A){A.exports=function s(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var d,o,T;if(Array.isArray(e)){if(d=e.length,d!=n.length)return!1;for(o=d;o--!==0;)if(!s(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(T=Object.keys(e),d=T.length,d!==Object.keys(n).length)return!1;for(o=d;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,T[o]))return!1;for(o=d;o--!==0;){var w=T[o];if(!s(e[w],n[w]))return!1}return!0}return e!==e&&n!==n}},85336:function(A,s,e){var n=e(75271);function d(j,y){return j===y&&(j!==0||1/j===1/y)||j!==j&&y!==y}var o=typeof Object.is=="function"?Object.is:d,T=n.useState,w=n.useEffect,K=n.useLayoutEffect,J=n.useDebugValue;function N(j,y){var u=y(),C=T({inst:{value:u,getSnapshot:y}}),Z=C[0].inst,_=C[1];return K(function(){Z.value=u,Z.getSnapshot=y,W(Z)&&_({inst:Z})},[j,u,y]),w(function(){return W(Z)&&_({inst:Z}),j(function(){W(Z)&&_({inst:Z})})},[j]),J(u),u}function W(j){var y=j.getSnapshot;j=j.value;try{var u=y();return!o(j,u)}catch(C){return!0}}function H(j,y){return y()}var M=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?H:N;s.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:M},48626:function(A,s,e){var n=e(75271),d=e(4060);function o(H,M){return H===M&&(H!==0||1/H===1/M)||H!==H&&M!==M}var T=typeof Object.is=="function"?Object.is:o,w=d.useSyncExternalStore,K=n.useRef,J=n.useEffect,N=n.useMemo,W=n.useDebugValue;s.useSyncExternalStoreWithSelector=function(H,M,j,y,u){var C=K(null);if(C.current===null){var Z={hasValue:!1,value:null};C.current=Z}else Z=C.current;C=N(function(){function g(m){if(!f){if(f=!0,v=m,m=y(m),u!==void 0&&Z.hasValue){var L=Z.value;if(u(L,m))return b=L}return b=m}if(L=b,T(v,m))return L;var E=y(m);return u!==void 0&&u(L,E)?L:(v=m,b=E)}var f=!1,v,b,x=j===void 0?null:j;return[function(){return g(M())},x===null?void 0:function(){return g(x())}]},[M,j,y,u]);var _=w(H,C[0],C[1]);return J(function(){Z.hasValue=!0,Z.value=_},[_]),W(_),_}},4060:function(A,s,e){A.exports=e(85336)},42598:function(A,s,e){A.exports=e(48626)},34668:function(A,s,e){e.d(s,{Z:function(){return d}});var n=e(20802);function d(o,T){var w=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!w){if(Array.isArray(o)||(w=(0,n.Z)(o))||T&&o&&typeof o.length=="number"){w&&(o=w);var K=0,J=function(){};return{s:J,n:function(){return K>=o.length?{done:!0}:{done:!1,value:o[K++]}},e:function(j){throw j},f:J}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N,W=!0,H=!1;return{s:function(){w=w.call(o)},n:function(){var j=w.next();return W=j.done,j},e:function(j){H=!0,N=j},f:function(){try{W||w.return==null||w.return()}finally{if(H)throw N}}}}},11779:function(A,s,e){e.d(s,{Z:function(){return _}});function n(){this.__data__=[],this.size=0}var d=n,o=e(54523);function T(g,f){for(var v=g.length;v--;)if((0,o.Z)(g[v][0],f))return v;return-1}var w=T,K=Array.prototype,J=K.splice;function N(g){var f=this.__data__,v=w(f,g);if(v<0)return!1;var b=f.length-1;return v==b?f.pop():J.call(f,v,1),--this.size,!0}var W=N;function H(g){var f=this.__data__,v=w(f,g);return v<0?void 0:f[v][1]}var M=H;function j(g){return w(this.__data__,g)>-1}var y=j;function u(g,f){var v=this.__data__,b=w(v,g);return b<0?(++this.size,v.push([g,f])):v[b][1]=f,this}var C=u;function Z(g){var f=-1,v=g==null?0:g.length;for(this.clear();++f<v;){var b=g[f];this.set(b[0],b[1])}}Z.prototype.clear=d,Z.prototype.delete=W,Z.prototype.get=M,Z.prototype.has=y,Z.prototype.set=C;var _=Z},19385:function(A,s,e){var n=e(47137),d=e(99615),o=(0,n.Z)(d.Z,"Map");s.Z=o},91380:function(A,s,e){e.d(s,{Z:function(){return fe}});var n=e(47137),d=(0,n.Z)(Object,"create"),o=d;function T(){this.__data__=o?o(null):{},this.size=0}var w=T;function K(F){var G=this.has(F)&&delete this.__data__[F];return this.size-=G?1:0,G}var J=K,N="__lodash_hash_undefined__",W=Object.prototype,H=W.hasOwnProperty;function M(F){var G=this.__data__;if(o){var oe=G[F];return oe===N?void 0:oe}return H.call(G,F)?G[F]:void 0}var j=M,y=Object.prototype,u=y.hasOwnProperty;function C(F){var G=this.__data__;return o?G[F]!==void 0:u.call(G,F)}var Z=C,_="__lodash_hash_undefined__";function g(F,G){var oe=this.__data__;return this.size+=this.has(F)?0:1,oe[F]=o&&G===void 0?_:G,this}var f=g;function v(F){var G=-1,oe=F==null?0:F.length;for(this.clear();++G<oe;){var ie=F[G];this.set(ie[0],ie[1])}}v.prototype.clear=w,v.prototype.delete=J,v.prototype.get=j,v.prototype.has=Z,v.prototype.set=f;var b=v,x=e(11779),m=e(19385);function L(){this.size=0,this.__data__={hash:new b,map:new(m.Z||x.Z),string:new b}}var E=L;function k(F){var G=typeof F;return G=="string"||G=="number"||G=="symbol"||G=="boolean"?F!=="__proto__":F===null}var z=k;function h(F,G){var oe=F.__data__;return z(G)?oe[typeof G=="string"?"string":"hash"]:oe.map}var X=h;function q(F){var G=X(this,F).delete(F);return this.size-=G?1:0,G}var $=q;function re(F){return X(this,F).get(F)}var U=re;function D(F){return X(this,F).has(F)}var R=D;function P(F,G){var oe=X(this,F),ie=oe.size;return oe.set(F,G),this.size+=oe.size==ie?0:1,this}var S=P;function Q(F){var G=-1,oe=F==null?0:F.length;for(this.clear();++G<oe;){var ie=F[G];this.set(ie[0],ie[1])}}Q.prototype.clear=E,Q.prototype.delete=$,Q.prototype.get=U,Q.prototype.has=R,Q.prototype.set=S;var fe=Q},66711:function(A,s,e){var n=e(99615),d=n.Z.Symbol;s.Z=d},36858:function(A,s,e){e.d(s,{Z:function(){return M}});function n(j,y){for(var u=-1,C=Array(j);++u<j;)C[u]=y(u);return C}var d=n,o=e(65380),T=e(56052),w=e(45673),K=e(99313),J=e(52176),N=Object.prototype,W=N.hasOwnProperty;function H(j,y){var u=(0,T.Z)(j),C=!u&&(0,o.Z)(j),Z=!u&&!C&&(0,w.Z)(j),_=!u&&!C&&!Z&&(0,J.Z)(j),g=u||C||Z||_,f=g?d(j.length,String):[],v=f.length;for(var b in j)(y||W.call(j,b))&&!(g&&(b=="length"||Z&&(b=="offset"||b=="parent")||_&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||(0,K.Z)(b,v)))&&f.push(b);return f}var M=H},28019:function(A,s){function e(n,d){for(var o=-1,T=n==null?0:n.length,w=Array(T);++o<T;)w[o]=d(n[o],o,n);return w}s.Z=e},33918:function(A,s,e){e.d(s,{Z:function(){return Z}});var n=e(66711),d=Object.prototype,o=d.hasOwnProperty,T=d.toString,w=n.Z?n.Z.toStringTag:void 0;function K(_){var g=o.call(_,w),f=_[w];try{_[w]=void 0;var v=!0}catch(x){}var b=T.call(_);return v&&(g?_[w]=f:delete _[w]),b}var J=K,N=Object.prototype,W=N.toString;function H(_){return W.call(_)}var M=H,j="[object Null]",y="[object Undefined]",u=n.Z?n.Z.toStringTag:void 0;function C(_){return _==null?_===void 0?y:j:u&&u in Object(_)?J(_):M(_)}var Z=C},32126:function(A,s){function e(n,d){var o=-1,T=n.length;for(d||(d=Array(T));++o<T;)d[o]=n[o];return d}s.Z=e},97889:function(A,s){var e=typeof global=="object"&&global&&global.Object===Object&&global;s.Z=e},47137:function(A,s,e){e.d(s,{Z:function(){return E}});var n=e(6359),d=e(99615),o=d.Z["__core-js_shared__"],T=o,w=function(){var k=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return k?"Symbol(src)_1."+k:""}();function K(k){return!!w&&w in k}var J=K,N=e(82433),W=Function.prototype,H=W.toString;function M(k){if(k!=null){try{return H.call(k)}catch(z){}try{return k+""}catch(z){}}return""}var j=M,y=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,C=Function.prototype,Z=Object.prototype,_=C.toString,g=Z.hasOwnProperty,f=RegExp("^"+_.call(g).replace(y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(k){if(!(0,N.Z)(k)||J(k))return!1;var z=(0,n.Z)(k)?f:u;return z.test(j(k))}var b=v;function x(k,z){return k==null?void 0:k[z]}var m=x;function L(k,z){var h=m(k,z);return b(h)?h:void 0}var E=L},99313:function(A,s){var e=9007199254740991,n=/^(?:0|[1-9]\d*)$/;function d(o,T){var w=typeof o;return T=T==null?e:T,!!T&&(w=="number"||w!="symbol"&&n.test(o))&&o>-1&&o%1==0&&o<T}s.Z=d},5196:function(A,s){var e=Object.prototype;function n(d){var o=d&&d.constructor,T=typeof o=="function"&&o.prototype||e;return d===T}s.Z=n},45635:function(A,s){function e(n,d){return function(o){return n(d(o))}}s.Z=e},99615:function(A,s,e){var n=e(97889),d=typeof self=="object"&&self&&self.Object===Object&&self,o=n.Z||d||Function("return this")();s.Z=o},54523:function(A,s){function e(n,d){return n===d||n!==n&&d!==d}s.Z=e},65380:function(A,s,e){e.d(s,{Z:function(){return H}});var n=e(33918),d=e(13795),o="[object Arguments]";function T(M){return(0,d.Z)(M)&&(0,n.Z)(M)==o}var w=T,K=Object.prototype,J=K.hasOwnProperty,N=K.propertyIsEnumerable,W=w(function(){return arguments}())?w:function(M){return(0,d.Z)(M)&&J.call(M,"callee")&&!N.call(M,"callee")},H=W},56052:function(A,s){var e=Array.isArray;s.Z=e},49634:function(A,s,e){var n=e(6359),d=e(34424);function o(T){return T!=null&&(0,d.Z)(T.length)&&!(0,n.Z)(T)}s.Z=o},45673:function(A,s,e){e.d(s,{Z:function(){return H}});var n=e(99615);function d(){return!1}var o=d,T=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=T&&typeof module=="object"&&module&&!module.nodeType&&module,K=w&&w.exports===T,J=K?n.Z.Buffer:void 0,N=J?J.isBuffer:void 0,W=N||o,H=W},6359:function(A,s,e){var n=e(33918),d=e(82433),o="[object AsyncFunction]",T="[object Function]",w="[object GeneratorFunction]",K="[object Proxy]";function J(N){if(!(0,d.Z)(N))return!1;var W=(0,n.Z)(N);return W==T||W==w||W==o||W==K}s.Z=J},34424:function(A,s){var e=9007199254740991;function n(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=e}s.Z=n},82433:function(A,s){function e(n){var d=typeof n;return n!=null&&(d=="object"||d=="function")}s.Z=e},13795:function(A,s){function e(n){return n!=null&&typeof n=="object"}s.Z=e},52176:function(A,s,e){e.d(s,{Z:function(){return oe}});var n=e(33918),d=e(34424),o=e(13795),T="[object Arguments]",w="[object Array]",K="[object Boolean]",J="[object Date]",N="[object Error]",W="[object Function]",H="[object Map]",M="[object Number]",j="[object Object]",y="[object RegExp]",u="[object Set]",C="[object String]",Z="[object WeakMap]",_="[object ArrayBuffer]",g="[object DataView]",f="[object Float32Array]",v="[object Float64Array]",b="[object Int8Array]",x="[object Int16Array]",m="[object Int32Array]",L="[object Uint8Array]",E="[object Uint8ClampedArray]",k="[object Uint16Array]",z="[object Uint32Array]",h={};h[f]=h[v]=h[b]=h[x]=h[m]=h[L]=h[E]=h[k]=h[z]=!0,h[T]=h[w]=h[_]=h[K]=h[g]=h[J]=h[N]=h[W]=h[H]=h[M]=h[j]=h[y]=h[u]=h[C]=h[Z]=!1;function X(ie){return(0,o.Z)(ie)&&(0,d.Z)(ie.length)&&!!h[(0,n.Z)(ie)]}var q=X;function $(ie){return function(me){return ie(me)}}var re=$,U=e(97889),D=typeof exports=="object"&&exports&&!exports.nodeType&&exports,R=D&&typeof module=="object"&&module&&!module.nodeType&&module,P=R&&R.exports===D,S=P&&U.Z.process,Q=function(){try{var ie=R&&R.require&&R.require("util").types;return ie||S&&S.binding&&S.binding("util")}catch(me){}}(),fe=Q,F=fe&&fe.isTypedArray,G=F?re(F):q,oe=G},42569:function(A,s,e){e.d(s,{Z:function(){return tn}});var n=e(11779);function d(){this.__data__=new n.Z,this.size=0}var o=d;function T(t){var i=this.__data__,l=i.delete(t);return this.size=i.size,l}var w=T;function K(t){return this.__data__.get(t)}var J=K;function N(t){return this.__data__.has(t)}var W=N,H=e(19385),M=e(91380),j=200;function y(t,i){var l=this.__data__;if(l instanceof n.Z){var B=l.__data__;if(!H.Z||B.length<j-1)return B.push([t,i]),this.size=++l.size,this;l=this.__data__=new M.Z(B)}return l.set(t,i),this.size=l.size,this}var u=y;function C(t){var i=this.__data__=new n.Z(t);this.size=i.size}C.prototype.clear=o,C.prototype.delete=w,C.prototype.get=J,C.prototype.has=W,C.prototype.set=u;var Z=C,_=e(47137),g=function(){try{var t=(0,_.Z)(Object,"defineProperty");return t({},"",{}),t}catch(i){}}(),f=g;function v(t,i,l){i=="__proto__"&&f?f(t,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):t[i]=l}var b=v,x=e(54523);function m(t,i,l){(l!==void 0&&!(0,x.Z)(t[i],l)||l===void 0&&!(i in t))&&b(t,i,l)}var L=m;function E(t){return function(i,l,B){for(var Y=-1,ee=Object(i),ae=B(i),V=ae.length;V--;){var te=ae[t?V:++Y];if(l(ee[te],te,ee)===!1)break}return i}}var k=E,z=k(),h=z,X=e(99615),q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$=q&&typeof module=="object"&&module&&!module.nodeType&&module,re=$&&$.exports===q,U=re?X.Z.Buffer:void 0,D=U?U.allocUnsafe:void 0;function R(t,i){if(i)return t.slice();var l=t.length,B=D?D(l):new t.constructor(l);return t.copy(B),B}var P=R,S=X.Z.Uint8Array,Q=S;function fe(t){var i=new t.constructor(t.byteLength);return new Q(i).set(new Q(t)),i}var F=fe;function G(t,i){var l=i?F(t.buffer):t.buffer;return new t.constructor(l,t.byteOffset,t.length)}var oe=G,ie=e(32126),me=e(82433),Fe=Object.create,pn=function(){function t(){}return function(i){if(!(0,me.Z)(i))return{};if(Fe)return Fe(i);t.prototype=i;var l=new t;return t.prototype=void 0,l}}(),Le=pn,ze=e(45635),Ue=(0,ze.Z)(Object.getPrototypeOf,Object),Ne=Ue,Be=e(5196);function Oe(t){return typeof t.constructor=="function"&&!(0,Be.Z)(t)?Le(Ne(t)):{}}var vn=Oe,He=e(65380),We=e(56052),Ee=e(49634),Ge=e(13795);function gn(t){return(0,Ge.Z)(t)&&(0,Ee.Z)(t)}var bn=gn,mn=e(45673),hn=e(6359),yn=e(33918),_n="[object Object]",xn=Function.prototype,Sn=Object.prototype,ke=xn.toString,Tn=Sn.hasOwnProperty,Cn=ke.call(Object);function Ke(t){if(!(0,Ge.Z)(t)||(0,yn.Z)(t)!=_n)return!1;var i=Ne(t);if(i===null)return!0;var l=Tn.call(i,"constructor")&&i.constructor;return typeof l=="function"&&l instanceof l&&ke.call(l)==Cn}var On=Ke,Zn=e(52176);function wn(t,i){if(!(i==="constructor"&&typeof t[i]=="function")&&i!="__proto__")return t[i]}var Pe=wn,An=Object.prototype,jn=An.hasOwnProperty;function Ie(t,i,l){var B=t[i];(!(jn.call(t,i)&&(0,x.Z)(B,l))||l===void 0&&!(i in t))&&b(t,i,l)}var Re=Ie;function En(t,i,l,B){var Y=!l;l||(l={});for(var ee=-1,ae=i.length;++ee<ae;){var V=i[ee],te=B?B(l[V],t[V],V,l,t):void 0;te===void 0&&(te=t[V]),Y?b(l,V,te):Re(l,V,te)}return l}var Je=En,Ve=e(36858);function $e(t){var i=[];if(t!=null)for(var l in Object(t))i.push(l);return i}var kn=$e,Ye=Object.prototype,Xe=Ye.hasOwnProperty;function Pn(t){if(!(0,me.Z)(t))return kn(t);var i=(0,Be.Z)(t),l=[];for(var B in t)B=="constructor"&&(i||!Xe.call(t,B))||l.push(B);return l}var In=Pn;function Rn(t){return(0,Ee.Z)(t)?(0,Ve.Z)(t,!0):In(t)}var Qe=Rn;function Mn(t){return Je(t,Qe(t))}var Dn=Mn;function Fn(t,i,l,B,Y,ee,ae){var V=Pe(t,l),te=Pe(i,l),an=ae.get(te);if(an){L(t,l,an);return}var le=ee?ee(V,te,l+"",t,i,ae):void 0,Se=le===void 0;if(Se){var Ze=(0,We.Z)(te),we=!Ze&&(0,mn.Z)(te),Me=!Ze&&!we&&(0,Zn.Z)(te);le=te,Ze||we||Me?(0,We.Z)(V)?le=V:bn(V)?le=(0,ie.Z)(V):we?(Se=!1,le=P(te,!0)):Me?(Se=!1,le=oe(te,!0)):le=[]:On(te)||(0,He.Z)(te)?(le=V,(0,He.Z)(V)?le=Dn(V):(!(0,me.Z)(V)||(0,hn.Z)(V))&&(le=vn(te))):Se=!1}Se&&(ae.set(te,le),Y(le,te,B,ee,ae),ae.delete(te)),L(t,l,le)}var Ln=Fn;function qe(t,i,l,B,Y){t!==i&&h(i,function(ee,ae){if(Y||(Y=new Z),(0,me.Z)(ee))Ln(t,i,ae,l,qe,B,Y);else{var V=B?B(Pe(t,ae),ee,ae+"",t,i,Y):void 0;V===void 0&&(V=ee),L(t,ae,V)}},Qe)}var zn=qe;function Un(t){return t}var en=Un;function Nn(t,i,l){switch(l.length){case 0:return t.call(i);case 1:return t.call(i,l[0]);case 2:return t.call(i,l[0],l[1]);case 3:return t.call(i,l[0],l[1],l[2])}return t.apply(i,l)}var nn=Nn,rn=Math.max;function Bn(t,i,l){return i=rn(i===void 0?t.length-1:i,0),function(){for(var B=arguments,Y=-1,ee=rn(B.length-i,0),ae=Array(ee);++Y<ee;)ae[Y]=B[i+Y];Y=-1;for(var V=Array(i+1);++Y<i;)V[Y]=B[Y];return V[i]=l(ae),nn(t,this,V)}}var Hn=Bn;function Wn(t){return function(){return t}}var Gn=Wn,Kn=f?function(t,i){return f(t,"toString",{configurable:!0,enumerable:!1,value:Gn(i),writable:!0})}:en,Jn=Kn,Vn=800,$n=16,Yn=Date.now;function Xn(t){var i=0,l=0;return function(){var B=Yn(),Y=$n-(B-l);if(l=B,Y>0){if(++i>=Vn)return arguments[0]}else i=0;return t.apply(void 0,arguments)}}var Qn=Xn,qn=Qn(Jn),er=qn;function nr(t,i){return er(Hn(t,i,en),t+"")}var rr=nr,tr=e(99313);function ar(t,i,l){if(!(0,me.Z)(l))return!1;var B=typeof i;return(B=="number"?(0,Ee.Z)(l)&&(0,tr.Z)(i,l.length):B=="string"&&i in l)?(0,x.Z)(l[i],t):!1}var or=ar;function ir(t){return rr(function(i,l){var B=-1,Y=l.length,ee=Y>1?l[Y-1]:void 0,ae=Y>2?l[2]:void 0;for(ee=t.length>3&&typeof ee=="function"?(Y--,ee):void 0,ae&&or(l[0],l[1],ae)&&(ee=Y<3?void 0:ee,Y=1),i=Object(i);++B<Y;){var V=l[B];V&&t(i,V,B,ee)}return i})}var sr=ir,cr=sr(function(t,i,l){zn(t,i,l)}),tn=cr},79192:function(A,s,e){e.d(s,{Ue:function(){return j}});const n=u=>{let C;const Z=new Set,_=(L,E)=>{const k=typeof L=="function"?L(C):L;if(!Object.is(k,C)){const z=C;C=(E!=null?E:typeof k!="object"||k===null)?k:Object.assign({},C,k),Z.forEach(h=>h(C,z))}},g=()=>C,x={setState:_,getState:g,getInitialState:()=>m,subscribe:L=>(Z.add(L),()=>Z.delete(L)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),Z.clear()}},m=C=u(_,g,x);return x},d=u=>u?n(u):n;var o=u=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."),d(u)),T=e(75271),w=e(42598);const{useDebugValue:K}=T,{useSyncExternalStoreWithSelector:J}=w;let N=!1;const W=u=>u;function H(u,C=W,Z){Z&&!N&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),N=!0);const _=J(u.subscribe,u.getState,u.getServerState||u.getInitialState,C,Z);return K(_),_}const M=u=>{typeof u!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const C=typeof u=="function"?d(u):u,Z=(_,g)=>H(C,_,g);return Object.assign(Z,C),Z},j=u=>u?M(u):M;var y=u=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),j(u))},92221:function(A,s,e){e.d(s,{mW:function(){return J},tJ:function(){return _}});const n=(g,f)=>(v,b,x)=>(x.dispatch=m=>(v(L=>g(L,m),!1,m),m),x.dispatchFromDevtools=!0,se({dispatch:(...m)=>x.dispatch(...m)},f)),d=null,o=new Map,T=g=>{const f=o.get(g);return f?Object.fromEntries(Object.entries(f.stores).map(([v,b])=>[v,b.getState()])):{}},w=(g,f,v)=>{if(g===void 0)return{type:"untracked",connection:f.connect(v)};const b=o.get(v.name);if(b)return se({type:"tracked",store:g},b);const x={connection:f.connect(v),stores:{}};return o.set(v.name,x),se({type:"tracked",store:g},x)},J=(g,f={})=>(v,b,x)=>{const U=f,{enabled:m,anonymousActionType:L,store:E}=U,k=dr(U,["enabled","anonymousActionType","store"]);let z;try{z=(m!=null?m:!0)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(R){}if(!z)return m&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),g(v,b,x);const D=w(E,z,k),{connection:h}=D,X=dr(D,["connection"]);let q=!0;x.setState=(R,P,S)=>{const Q=v(R,P);if(!q)return Q;const fe=S===void 0?{type:L||"anonymous"}:typeof S=="string"?{type:S}:S;return E===void 0?(h==null||h.send(fe,b()),Q):(h==null||h.send(ur(se({},fe),{type:`${E}/${fe.type}`}),ur(se({},T(k.name)),{[E]:x.getState()})),Q)};const $=(...R)=>{const P=q;q=!1,v(...R),q=P},re=g(x.setState,b,x);if(X.type==="untracked"?h==null||h.init(re):(X.stores[X.store]=x,h==null||h.init(Object.fromEntries(Object.entries(X.stores).map(([R,P])=>[R,R===X.store?re:P.getState()])))),x.dispatchFromDevtools&&typeof x.dispatch=="function"){let R=!1;const P=x.dispatch;x.dispatch=(...S)=>{S[0].type==="__setState"&&!R&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),R=!0),P(...S)}}return h.subscribe(R=>{var P;switch(R.type){case"ACTION":if(typeof R.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return N(R.payload,S=>{if(S.type==="__setState"){if(E===void 0){$(S.state);return}Object.keys(S.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const Q=S.state[E];if(Q==null)return;JSON.stringify(x.getState())!==JSON.stringify(Q)&&$(Q);return}x.dispatchFromDevtools&&typeof x.dispatch=="function"&&x.dispatch(S)});case"DISPATCH":switch(R.payload.type){case"RESET":return $(re),E===void 0?h==null?void 0:h.init(x.getState()):h==null?void 0:h.init(T(k.name));case"COMMIT":if(E===void 0){h==null||h.init(x.getState());return}return h==null?void 0:h.init(T(k.name));case"ROLLBACK":return N(R.state,S=>{if(E===void 0){$(S),h==null||h.init(x.getState());return}$(S[E]),h==null||h.init(T(k.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return N(R.state,S=>{if(E===void 0){$(S);return}JSON.stringify(x.getState())!==JSON.stringify(S[E])&&$(S[E])});case"IMPORT_STATE":{const{nextLiftedState:S}=R.payload,Q=(P=S.computedStates.slice(-1)[0])==null?void 0:P.state;if(!Q)return;$(E===void 0?Q:Q[E]),h==null||h.send(null,S);return}case"PAUSE_RECORDING":return q=!q}return}}),re},N=(g,f)=>{let v;try{v=JSON.parse(g)}catch(b){console.error("[zustand devtools middleware] Could not parse the received json",b)}v!==void 0&&f(v)},W=g=>(f,v,b)=>{const x=b.subscribe;return b.subscribe=(L,E,k)=>{let z=L;if(E){const h=(k==null?void 0:k.equalityFn)||Object.is;let X=L(b.getState());z=q=>{const $=L(q);if(!h(X,$)){const re=X;E(X=$,re)}},k!=null&&k.fireImmediately&&E(X,X)}return x(z)},g(f,v,b)},H=null,M=(g,f)=>(...v)=>Object.assign({},g,f(...v));function j(g,f){let v;try{v=g()}catch(x){return}return{getItem:x=>{var m;const L=k=>k===null?null:JSON.parse(k,f==null?void 0:f.reviver),E=(m=v.getItem(x))!=null?m:null;return E instanceof Promise?E.then(L):L(E)},setItem:(x,m)=>v.setItem(x,JSON.stringify(m,f==null?void 0:f.replacer)),removeItem:x=>v.removeItem(x)}}const y=g=>f=>{try{const v=g(f);return v instanceof Promise?v:{then(b){return y(b)(v)},catch(b){return this}}}catch(v){return{then(b){return this},catch(b){return y(b)(v)}}}},u=(g,f)=>(v,b,x)=>{let m=se({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:D=>D,version:0,merge:(D,R)=>se(se({},R),D)},f),L=!1;const E=new Set,k=new Set;let z;try{z=m.getStorage()}catch(D){}if(!z)return g((...D)=>{console.warn(`[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`),v(...D)},b,x);const h=y(m.serialize),X=()=>{const D=m.partialize(se({},b()));let R;const P=h({state:D,version:m.version}).then(S=>z.setItem(m.name,S)).catch(S=>{R=S});if(R)throw R;return P},q=x.setState;x.setState=(D,R)=>{q(D,R),X()};const $=g((...D)=>{v(...D),X()},b,x);let re;const U=()=>{var D;if(!z)return;L=!1,E.forEach(P=>P(b()));const R=((D=m.onRehydrateStorage)==null?void 0:D.call(m,b()))||void 0;return y(z.getItem.bind(z))(m.name).then(P=>{if(P)return m.deserialize(P)}).then(P=>{if(P)if(typeof P.version=="number"&&P.version!==m.version){if(m.migrate)return m.migrate(P.state,P.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return P.state}).then(P=>{var S;return re=m.merge(P,(S=b())!=null?S:$),v(re,!0),X()}).then(()=>{R==null||R(re,void 0),L=!0,k.forEach(P=>P(re))}).catch(P=>{R==null||R(void 0,P)})};return x.persist={setOptions:D=>{m=se(se({},m),D),D.getStorage&&(z=D.getStorage())},clearStorage:()=>{z==null||z.removeItem(m.name)},getOptions:()=>m,rehydrate:()=>U(),hasHydrated:()=>L,onHydrate:D=>(E.add(D),()=>{E.delete(D)}),onFinishHydration:D=>(k.add(D),()=>{k.delete(D)})},U(),re||$},C=(g,f)=>(v,b,x)=>{let m=se({storage:j(()=>localStorage),partialize:U=>U,version:0,merge:(U,D)=>se(se({},D),U)},f),L=!1;const E=new Set,k=new Set;let z=m.storage;if(!z)return g((...U)=>{console.warn(`[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`),v(...U)},b,x);const h=()=>{const U=m.partialize(se({},b()));return z.setItem(m.name,{state:U,version:m.version})},X=x.setState;x.setState=(U,D)=>{X(U,D),h()};const q=g((...U)=>{v(...U),h()},b,x);x.getInitialState=()=>q;let $;const re=()=>{var U,D;if(!z)return;L=!1,E.forEach(P=>{var S;return P((S=b())!=null?S:q)});const R=((D=m.onRehydrateStorage)==null?void 0:D.call(m,(U=b())!=null?U:q))||void 0;return y(z.getItem.bind(z))(m.name).then(P=>{if(P)if(typeof P.version=="number"&&P.version!==m.version){if(m.migrate)return m.migrate(P.state,P.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return P.state}).then(P=>{var S;return $=m.merge(P,(S=b())!=null?S:q),v($,!0),h()}).then(()=>{R==null||R($,void 0),$=b(),L=!0,k.forEach(P=>P($))}).catch(P=>{R==null||R(void 0,P)})};return x.persist={setOptions:U=>{m=se(se({},m),U),U.storage&&(z=U.storage)},clearStorage:()=>{z==null||z.removeItem(m.name)},getOptions:()=>m,rehydrate:()=>re(),hasHydrated:()=>L,onHydrate:U=>(E.add(U),()=>{E.delete(U)}),onFinishHydration:U=>(k.add(U),()=>{k.delete(U)})},m.skipHydration||re(),$||q},_=(g,f)=>"getStorage"in f||"serialize"in f||"deserialize"in f?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),u(g,f)):C(g,f)}}]);
}());