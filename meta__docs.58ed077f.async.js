"use strict";(self.webpackChunktiger_ui=self.webpackChunktiger_ui||[]).push([[1904],{43484:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-radio-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Radio,l.abrupt("return",{default:function(){return a.createElement(s,null,"\u7537")}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-radio-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Radio} from 'tiger-ui';

export default () => {
  return <Radio>\u7537</Radio>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-radio-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=g.sent,s=n.Radio,t=n.Space,g.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=g.sent,m=l.useState,g.abrupt("return",{default:function(){var h=m(!1),B=E()(h,2),P=B[0],I=B[1];return a.createElement(t,null,a.createElement(s,{checked:!1},"\u53D7\u63A7false"),a.createElement(s,{checked:P,onChange:I},P?"true":"false"))}});case 10:case"end":return g.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-radio-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Radio, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Space>
      <Radio
        checked={false}
      >\u53D7\u63A7false</Radio>
      <Radio
        checked={checked}
        onChange={setChecked}
      >{checked ? 'true' : 'false'}</Radio>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},40594:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-alert-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Alert,n.abrupt("return",{default:function(){return o.createElement(d,{message:"message"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-alert-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Alert} from 'tiger-ui';

export default () => {
  return <Alert message={'message'} />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-alert-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Alert,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,{direction:"vertical",block:!0},["success","info","error","warning"].map(function(l){return o.createElement(d,{key:l,type:l,message:"message"})}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-alert-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Alert, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    {
      [
        'success',
        'info',
        'error',
        'warning'
      ].map(type => {
        return (
          <Alert
            key={type}
            type={type}
            message={'message'}
          />
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-alert-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Alert,n.abrupt("return",{default:function(){return o.createElement(d,{closable:!0,message:"message",description:"description"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-alert-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Alert} from 'tiger-ui';

export default () => {
  return <Alert
    closable
    message={'message'}
    description={'description'}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-alert-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Alert,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,{direction:"vertical",block:!0},["success","info","error","warning"].map(function(l){return o.createElement(d,{showIcon:!0,closable:!0,key:l,type:l,message:"message",description:"description"})}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-alert-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Alert, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    {
      [
        'success',
        'info',
        'error',
        'warning'
      ].map(type => {
        return (
          <Alert
            showIcon
            closable
            key={type}
            type={type}
            message={'message'}
            description={'description'}
          />
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-alert-demo-4":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Alert,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,{direction:"vertical",block:!0},["success","info","error","warning"].map(function(l){return o.createElement(d,{showIcon:!0,icon:"(\u56FE\u6807)",key:l,type:l,message:"message",description:"description"})}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-alert-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Alert, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    {
      [
        'success',
        'info',
        'error',
        'warning'
      ].map(type => {
        return (
          <Alert
            showIcon
            icon={'(\u56FE\u6807)'}
            key={type}
            type={type}
            message={'message'}
            description={'description'}
          />
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-alert-demo-5":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Alert,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(d,{loop:!0,showIcon:!0,type:"success",message:"\u606D\u559C\u60A8\u4E2D\u59561\u5757\u94B1\uFF01",description:"\u4E2D\u5956\u8005\u90FD\u662F\u5929\u8FD0\u52A0\u8EAB\u4E4B\u4EBA\u3002"})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-alert-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Alert, Space} from 'tiger-ui';

export default () => {
  return (
    <Alert
      loop
      showIcon
      type={'success'}
      message={'\u606D\u559C\u60A8\u4E2D\u59561\u5757\u94B1\uFF01'}
      description={'\u4E2D\u5956\u8005\u90FD\u662F\u5929\u8FD0\u52A0\u8EAB\u4E4B\u4EBA\u3002'}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},49109:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-button-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Button,l.abrupt("return",{default:function(){return a.createElement(s,null,"\u70B9\u6211\u4E00\u4E0B")}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button} from 'tiger-ui';

export default () => {
  return <Button>\u70B9\u6211\u4E00\u4E0B</Button>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-button-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,null,["small","middle","large"].map(function(g){return a.createElement(s,{size:g,key:g},g)}))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['small', 'middle', 'large'].map(size => {
        return <Button size={size} key={size}>{size}</Button>
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-button-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,null,["primary","dashed","default","text","dotted"].map(function(g){return a.createElement(s,{type:g,key:g},g)}))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
        return <Button type={type} key={type}>{type}</Button>
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-button-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,null,["primary","dashed","default","text","dotted"].map(function(g){return a.createElement(s,{type:g,danger:!0,key:g},g)}))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
        return <Button type={type} danger key={type}>{type}</Button>
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-button-demo-4":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,{direction:"vertical"},a.createElement(t,null,["primary","dashed","default","text","dotted"].map(function(g){return a.createElement(s,{type:g,disabled:!0,key:g},g)})),a.createElement(t,null,["primary","dashed","default","text","dotted"].map(function(g){return a.createElement(s,{type:g,disabled:!0,danger:!0,key:"_"+g},g)})))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'}>
    <Space>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button type={type} disabled key={type}>{type}</Button>
        })
      }
    </Space>
    <Space>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button type={type} disabled danger key={'_' + type}>{type}</Button>
        })
      }
    </Space>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-button-demo-5":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,{style:{background:"#c2c2c2",padding:16},block:!0,direction:"vertical"},a.createElement(t,{block:!0},["primary","dashed","default","text","dotted"].map(function(g){return a.createElement(s,{ghost:!0,type:g,key:g},g)})),a.createElement(t,{block:!0},["primary","dashed","default","text","dotted"].map(function(g){return a.createElement(s,{ghost:!0,danger:!0,type:g,key:g+"danger"},g)})))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Space} from 'tiger-ui';

export default () => {
  return <Space style={{ background: '#c2c2c2', padding: 16 }} block direction={'vertical'}>
    <Space block>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button ghost type={type} key={type}>{type}</Button>
        })
      }
    </Space>
    <Space block>
      {
        ['primary', 'dashed', 'default', 'text', 'dotted'].map(type => {
          return <Button ghost danger type={type} key={type + 'danger'}>{type}</Button>
        })
      }
    </Space>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-button-demo-6":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=g.sent,s=n.Button,t=n.Space,g.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=g.sent,m=l.useState,g.abrupt("return",{default:function(){var h=m(!1),B=E()(h,2),P=B[0],I=B[1];function D(){I(!0),setTimeout(function(){I(!1)},2e3)}return a.createElement(t,null,a.createElement(s,{loading:P,onClick:D},"\u70B9\u51FB\u52A0\u8F7D"))}});case 10:case"end":return g.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-button-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  
  function handleClick () {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }
  
  return (
    <Space>
      <Button loading={loading} onClick={handleClick}>
        \u70B9\u51FB\u52A0\u8F7D
      </Button>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},88403:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-carousel-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Carousel,l.abrupt("return",{default:function(){return a.createElement(s,{style:{height:180,width:700}},a.createElement(s.Item,{style:{background:"red",height:"100%"}}),a.createElement(s.Item,{style:{background:"blue",height:"100%"}}),a.createElement(s.Item,{style:{background:"black",height:"100%"}}))}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-carousel-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Carousel} from 'tiger-ui';
export default () => {
  return (
    <Carousel style={{height: 180, width: 700}}>
      <Carousel.Item style={{background: 'red', height: '100%'}}></Carousel.Item>
      <Carousel.Item style={{background: 'blue', height: '100%'}}></Carousel.Item>
      <Carousel.Item style={{background: 'black', height: '100%'}}></Carousel.Item>
    </Carousel>
  )
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-carousel-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Carousel,l.abrupt("return",{default:function(){return a.createElement("div",{style:{height:180,width:700}},a.createElement(s,{autoplay:!0,items:[{key:"1",children:a.createElement("div",{style:{background:"red",height:"100%"}})},{key:"2",children:a.createElement("div",{style:{background:"blue",height:"100%"}})},{key:"2",children:a.createElement("div",{style:{background:"black",height:"100%"}})}]}))}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-carousel-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Carousel} from 'tiger-ui';
export default () => {
  return <div style={{height: 180, width: 700}}>
    <Carousel
      autoplay
      items={[
        {key: '1', children: <div style={{background: 'red', height: '100%'}} />},
        {key: '2', children: <div style={{background: 'blue', height: '100%'}} />},
        {key: '2', children: <div style={{background: 'black', height: '100%'}} />},
      ]}
    />
  </div>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-carousel-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Carousel,t=n.Space,l=n.Button,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r("rect"),P=E()(B,2),I=P[0],D=P[1];return a.createElement(t,{block:!0,direction:"vertical"},a.createElement(t,null,["dot","rect","line"].map(function(S){return a.createElement(l,{stayFocus:!0,key:S,onClick:function(){return D(S)}},S)})),a.createElement(s,{style:{height:180,width:700},autoplay:!0,type:I,items:[{key:"1",children:a.createElement("div",{style:{background:"red",height:"100%"}})},{key:"2",children:a.createElement("div",{style:{background:"blue",height:"100%"}})},{key:"2",children:a.createElement("div",{style:{background:"black",height:"100%"}})}]}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-carousel-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Carousel, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [type, setType] = useState('rect');
  return <Space block direction={'vertical'}>
    <Space>
      {['dot', 'rect', 'line'].map(type => {
        return (
          <Button stayFocus key={type} onClick={() => setType(type)}>
            {type}
          </Button>
        )
      })}
    </Space>
    <Carousel
      style={{height: 180, width: 700}}
      autoplay
      type={type}
      items={[
        {key: '1', children: <div style={{background: 'red', height: '100%'}}/>},
        {key: '2', children: <div style={{background: 'blue', height: '100%'}}/>},
        {key: '2', children: <div style={{background: 'black', height: '100%'}}/>},
      ]}
    />
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-carousel-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Carousel,t=n.Space,l=n.Button,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(0),P=E()(B,2),I=P[0],D=P[1],S=[{key:"1",children:a.createElement("div",{style:{background:"red",height:"100%"}})},{key:"2",children:a.createElement("div",{style:{background:"blue",height:"100%"}})},{key:"3",children:a.createElement("div",{style:{background:"black",height:"100%"}})}];return a.createElement(t,{block:!0,direction:"vertical"},a.createElement(t,null,S.map(function(M,b){var L=b;return a.createElement(l,{focus:L===I,stayFocus:!0,onClick:function(){return D(L)}},b+1)})),a.createElement(s,{style:{height:180,width:700},autoplay:!0,current:I,items:S,onChange:D}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-carousel-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Carousel, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [current, setCurrent] = useState(0);
  
  const options = [
    {key: '1', children: <div style={{background: 'red', height: '100%'}}/>},
    {key: '2', children: <div style={{background: 'blue', height: '100%'}}/>},
    {key: '3', children: <div style={{background: 'black', height: '100%'}}/>},
  ];
  
  return <Space block direction={'vertical'}>
    <Space>
      {options.map((_, index) => {
        const step = index;
        return (
          <Button 
            focus={step === current}
            stayFocus
            onClick={() => setCurrent(step)}
          >
            {index + 1}
          </Button>
        )
      })}
    </Space>
    <Carousel
      style={{height: 180, width: 700}}
      autoplay
      current={current}
      items={options}
      onChange={setCurrent}
    />
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-carousel-demo-4":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Carousel,t=n.Space,l=n.Button,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(2e3),P=E()(B,2),I=P[0],D=P[1],S=[{key:"1",children:a.createElement("div",{style:{background:"red",height:"100%"}})},{key:"2",children:a.createElement("div",{style:{background:"blue",height:"100%"}})},{key:"3",children:a.createElement("div",{style:{background:"black",height:"100%"}})}];return a.createElement(t,{block:!0,direction:"vertical"},a.createElement(t,null,[500,1e3,2e3].map(function(M){return a.createElement(l,{key:M,onClick:function(){return D(M)}},M," ms")})),a.createElement(s,{autoplay:!0,autoplayDelay:I,items:S,style:{height:180,width:700}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-carousel-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Carousel, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [delay, setDelay] = useState(2000);
  const options = [
    {key: '1', children: <div style={{background: 'red', height: '100%'}}/>},
    {key: '2', children: <div style={{background: 'blue', height: '100%'}}/>},
    {key: '3', children: <div style={{background: 'black', height: '100%'}}/>},
  ];
  
  return <Space block direction={'vertical'}>
    <Space>
      {
        [500, 1000, 2000].map(delay => {
          return (
            <Button key={delay} onClick={() => setDelay(delay)}>
              {delay} ms
            </Button>
          )
        })
      }
    </Space>
    <Carousel
      autoplay
      autoplayDelay={delay}
      items={options}
      style={{height: 180, width: 700}}
    />
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},47403:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-checkbox-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Checkbox,l.abrupt("return",{default:function(){return a.createElement(s,null,"\u590D\u9009\u6846")}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-checkbox-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Checkbox} from 'tiger-ui';

export default () => {
  return <Checkbox>\u590D\u9009\u6846</Checkbox>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-checkbox-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Checkbox,t=n.Space,l=n.Button,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=E()(B,2),I=P[0],D=P[1],S=r(!1),M=E()(S,2),b=M[0],L=M[1],T=r(!1),R=E()(T,2),j=R[0],K=R[1];return a.createElement(t,{size:16,direction:"vertical"},a.createElement(t,{size:16},["A","B","C","D","E"].map(function(A){return a.createElement(s,{key:A,disabled:b,checked:I,indeterminate:j},A)})),a.createElement(t,{size:16},a.createElement(l,{disabled:j,type:"primary",onClick:function(){return D(function(U){return!U})}},"toggle ",I?"unChecked":"checked"),a.createElement(l,{type:"primary",onClick:function(){return K(function(U){return!U})}},"toggle ",j?"unIndeterminate":"indeterminate"),a.createElement(l,{type:"primary",onClick:function(){return L(function(U){return!U})}},"toggle ",b?"unDisabled":"disabled")))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-checkbox-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Checkbox, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  
  return <Space size={16} direction={'vertical'}>
    <Space size={16}>
      {
        ['A', 'B', 'C', 'D', 'E'].map(x => {
          return (
            <Checkbox
              key={x}
              disabled={disabled}
              checked={checked}
              indeterminate={indeterminate}
            >
              {x}
            </Checkbox>
          )
        })
      }
    </Space>
    <Space size={16}>
      <Button disabled={indeterminate} type={'primary'} onClick={() => setChecked(v => !v)}>
        toggle {checked ? 'unChecked' : 'checked'}
      </Button>
      <Button type={'primary'} onClick={() => setIndeterminate(v => !v)}>
        toggle {indeterminate ? 'unIndeterminate' : 'indeterminate'}
      </Button>
      <Button type={'primary'} onClick={() => setDisabled(v => !v)}>
        toggle {disabled ? 'unDisabled' : 'disabled'}
      </Button>
    </Space>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-checkbox-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g,p;return o()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=B.sent,s=n.Checkbox,t=n.Space,B.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=B.sent,m=l.useMemo,r=l.useState,g=["apple","orange","banana","grape"],p=new Set(["banana"]),B.abrupt("return",{default:function(){var I=r(p),D=E()(I,2),S=D[0],M=D[1],b=S.size&&S.size!==g.length,L=S.size===g.length;function T(){M(new Set(S.size===g.length?[]:g))}function R(j,K){K?S.delete(j):S.add(j),M(new Set(S))}return a.createElement(t,{size:16,direction:"vertical",style:{width:"100%"}},a.createElement(s,{checked:L,indeterminate:b,onClick:T},"\u6C34\u679C"),a.createElement("div",{style:{height:1,background:"#e8e8e8"}}),a.createElement(t,{size:16},g.map(function(j){var K=S.has(j);return a.createElement(s,{key:j,checked:K,onChange:function(){return R(j,K)}},j)})))}});case 13:case"end":return B.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-checkbox-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Checkbox, Space } from 'tiger-ui';
import { useMemo, useState } from 'react';

const list = ['apple', 'orange', 'banana', 'grape']
const INITIAL = new Set(['banana'])
export default () => {
  const [types, setTypes] = useState(INITIAL);
  const indeterminate = types.size && types.size !== list.length;
  const checked = types.size === list.length
  
  function handleClick () {
    setTypes(new Set(types.size === list.length ? [] : list));
  }

  function handleChooseItem (type, checked) {
    checked ? types.delete(type) : types.add(type);
    setTypes(new Set(types));
  }
  
  return (
    <Space size={16} direction={'vertical'} style={{width: '100%'}}>
      <Checkbox checked={checked} indeterminate={indeterminate} onClick={handleClick}>\u6C34\u679C</Checkbox>
      <div style={{height: 1, background: '#e8e8e8'}} />
      <Space size={16}>
        {
          list.map(type => {
            const checked = types.has(type);
            return (
              <Checkbox
                key={type}
                checked={checked}
                onChange={() => handleChooseItem(type, checked)}
              >
                {type}
              </Checkbox>
            )
          })
        }
      </Space>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-checkbox-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Checkbox,t=n.Space,l=n.Button,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=E()(B,2),I=P[0],D=P[1];return a.createElement(t,{size:16,direction:"vertical"},a.createElement(t,{size:16},a.createElement(s,{disabled:I,defaultChecked:!0},"\u9ED8\u8BA4\u9009\u4E2D"),a.createElement(s,{disabled:I,indeterminate:!0},"\u534A\u9009\u4E2D"),a.createElement(s,{disabled:I},"\u9ED8\u8BA4")),a.createElement(l,{type:"primary",onClick:function(){return D(!I)}},"toggle ",I?"unDisabled":"disabled"))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-checkbox-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Checkbox, Space, Button} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [disabled, setDisabled] = useState(false);
  
  return <Space size={16} direction={'vertical'}>
    <Space size={16}>
      <Checkbox disabled={disabled} defaultChecked>\u9ED8\u8BA4\u9009\u4E2D</Checkbox>
      <Checkbox disabled={disabled} indeterminate>\u534A\u9009\u4E2D</Checkbox>
      <Checkbox disabled={disabled}>\u9ED8\u8BA4</Checkbox>
    </Space>
    <Button type={'primary'} onClick={() => setDisabled(!disabled)}>
      toggle {disabled ? 'unDisabled' : 'disabled'}
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},7861:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-collapse-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Collapse,u=i.Input,s.abrupt("return",{default:function(){return o.createElement(d,{options:[{key:"1",label:"\u9875\u9762\u4E00",children:o.createElement(u,null)},{key:"2",label:"\u9875\u9762\u4E8C",children:o.createElement("div",null,"22")},{key:"3",label:"\u9875\u9762\u4E09",children:o.createElement("div",null,"33")},{key:"4",label:"\u9875\u9762\u56DB",children:o.createElement("div",null,"44")}]})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-collapse-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    options={[
      {key: '1', label: '\u9875\u9762\u4E00', children: <Input />},
      {key: '2', label: '\u9875\u9762\u4E8C', children: <div>22</div>},
      {key: '3', label: '\u9875\u9762\u4E09', children: <div>33</div>},
      {key: '4', label: '\u9875\u9762\u56DB', children: <div>44</div>},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-collapse-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Collapse,u=i.Input,s.abrupt("return",{default:function(){return o.createElement(d,{accordion:!0,options:[{key:"1",label:"\u9875\u9762\u4E00",children:o.createElement(u,null)},{key:"2",label:"\u9875\u9762\u4E8C",children:o.createElement("div",null,"22")},{key:"3",label:"\u9875\u9762\u4E09",children:o.createElement("div",null,"33")},{key:"4",label:"\u9875\u9762\u56DB",children:o.createElement("div",null,"44")}]})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-collapse-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    accordion
    options={[
      {key: '1', label: '\u9875\u9762\u4E00', children: <Input />},
      {key: '2', label: '\u9875\u9762\u4E8C', children: <div>22</div>},
      {key: '3', label: '\u9875\u9762\u4E09', children: <div>33</div>},
      {key: '4', label: '\u9875\u9762\u56DB', children: <div>44</div>},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-collapse-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Collapse,n.abrupt("return",{default:function(){return o.createElement(d,{accordion:!0,value:["1","2"],options:[{key:"1",label:"\u9875\u9762\u4E00",children:o.createElement("div",null,"11")},{key:"2",label:"\u9875\u9762\u4E8C",children:o.createElement("div",null,"22")},{key:"3",label:"\u9875\u9762\u4E09",children:o.createElement("div",null,"33")},{key:"4",label:"\u9875\u9762\u56DB",children:o.createElement("div",null,"44")}]})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-collapse-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Collapse} from 'tiger-ui';

export default () => {
  return <Collapse
    accordion
    value={['1', '2']}
    options={[
      {key: '1', label: '\u9875\u9762\u4E00', children: <div>11</div>},
      {key: '2', label: '\u9875\u9762\u4E8C', children: <div>22</div>},
      {key: '3', label: '\u9875\u9762\u4E09', children: <div>33</div>},
      {key: '4', label: '\u9875\u9762\u56DB', children: <div>44</div>},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-collapse-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Collapse,u=i.Input,s.abrupt("return",{default:function(){return o.createElement(d,{destroy:!0,accordion:!0,options:[{key:"1",label:"\u9875\u9762\u4E00",children:o.createElement(u,null)},{key:"2",label:"\u9875\u9762\u4E8C",children:o.createElement("div",null,"22")},{key:"3",label:"\u9875\u9762\u4E09",children:o.createElement("div",null,"33")},{key:"4",label:"\u9875\u9762\u56DB",children:o.createElement("div",null,"44")}]})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-collapse-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    destroy
    accordion
    options={[
      {key: '1', label: '\u9875\u9762\u4E00', children: <Input />},
      {key: '2', label: '\u9875\u9762\u4E8C', children: <div>22</div>},
      {key: '3', label: '\u9875\u9762\u4E09', children: <div>33</div>},
      {key: '4', label: '\u9875\u9762\u56DB', children: <div>44</div>},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-collapse-demo-4":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Collapse,u=i.Input,s.abrupt("return",{default:function(){return o.createElement(d,{destroy:!0,icon:"\u5C55\u5F00",accordion:!0,options:[{key:"1",label:"\u9875\u9762\u4E00",children:o.createElement(u,null)},{key:"2",label:"\u9875\u9762\u4E8C",children:o.createElement("div",null,"22")},{key:"3",label:"\u9875\u9762\u4E09",children:o.createElement("div",null,"33")},{key:"4",label:"\u9875\u9762\u56DB",children:o.createElement("div",null,"44")}]})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-collapse-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Collapse, Input} from 'tiger-ui';

export default () => {
  return <Collapse
    destroy
    icon={'\u5C55\u5F00'}
    accordion
    options={[
      {key: '1', label: '\u9875\u9762\u4E00', children: <Input />},
      {key: '2', label: '\u9875\u9762\u4E8C', children: <div>22</div>},
      {key: '3', label: '\u9875\u9762\u4E09', children: <div>33</div>},
      {key: '4', label: '\u9875\u9762\u56DB', children: <div>44</div>},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},96682:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return a}});var c=e(90228),E=e.n(c),O=e(87999),o=e.n(O),C=e(75271),f=e(61713),a={"docs-components-counter-demo-0":{component:C.memo(C.lazy(o()(E()().mark(function i(){var d,u;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return d=s.sent,u=d.Counter,s.abrupt("return",{default:function(){return C.createElement(u,{end:100})}});case 5:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-components-counter-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      end={100}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":f},renderOpts:{compile:function(){var i=o()(E()().mark(function u(){var n,s=arguments;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(8296).then(e.bind(e,88296));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,s));case 3:case"end":return l.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}},"docs-components-counter-demo-1":{component:C.memo(C.lazy(o()(E()().mark(function i(){var d,u;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return d=s.sent,u=d.Counter,s.abrupt("return",{default:function(){return C.createElement(u,{start:999,end:1e5})}});case 5:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-components-counter-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      start={999}
      end={100000}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":f},renderOpts:{compile:function(){var i=o()(E()().mark(function u(){var n,s=arguments;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(8296).then(e.bind(e,88296));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,s));case 3:case"end":return l.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}},"docs-components-counter-demo-2":{component:C.memo(C.lazy(o()(E()().mark(function i(){var d,u;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return d=s.sent,u=d.Counter,s.abrupt("return",{default:function(){return C.createElement(u,{start:999,end:1e5,duration:10*1e3})}});case 5:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-components-counter-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      start={999}
      end={100000}
      duration={10 * 1000}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":f},renderOpts:{compile:function(){var i=o()(E()().mark(function u(){var n,s=arguments;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(8296).then(e.bind(e,88296));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,s));case 3:case"end":return l.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}},"docs-components-counter-demo-3":{component:C.memo(C.lazy(o()(E()().mark(function i(){var d,u;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return d=s.sent,u=d.Counter,s.abrupt("return",{default:function(){return C.createElement(u,{start:999,end:1e5,timeSplit:10})}});case 5:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-components-counter-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Counter} from 'tiger-ui';

export default () => {
  return (
    <Counter
      start={999}
      end={100000}
      timeSplit={10}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":f},renderOpts:{compile:function(){var i=o()(E()().mark(function u(){var n,s=arguments;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(8296).then(e.bind(e,88296));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,s));case 3:case"end":return l.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}},"docs-components-counter-demo-4":{component:C.memo(C.lazy(o()(E()().mark(function i(){var d,u,n,s,t,l;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=r.sent,u=d.useRef,r.next=6,Promise.resolve().then(e.bind(e,61713));case 6:return n=r.sent,s=n.Counter,t=n.Button,l=n.Space,r.abrupt("return",{default:function(){var p=u(null);return C.createElement(l,null,C.createElement(t,{onClick:function(){var B,P;(B=p.current)===null||B===void 0||(P=B.replay)===null||P===void 0||P.call(B)}},"\u91CD\u65B0\u64AD\u653E"),C.createElement(s,{ref:p,start:999,end:1e5,timeSplit:10}))}});case 11:case"end":return r.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-components-counter-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {useRef} from 'react';
import {Counter, Button, Space} from 'tiger-ui';

export default () => {
  const ref = useRef(null);
  return (
    <Space>
      <Button
        onClick={() => {
          ref.current?.replay?.()
        }}
      >\u91CD\u65B0\u64AD\u653E</Button>
      <Counter
        ref={ref}
        start={999}
        end={100000}
        timeSplit={10}
      />
    </Space>
  );
}`},react:{type:"NPM",value:"18.3.1"},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{react:v||(v=e.t(C,2)),"tiger-ui":f},renderOpts:{compile:function(){var i=o()(E()().mark(function u(){var n,s=arguments;return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(8296).then(e.bind(e,88296));case 2:return l.abrupt("return",(n=l.sent).default.apply(n,s));case 3:case"end":return l.stop()}},u)}));function d(){return i.apply(this,arguments)}return d}()}}}},62001:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return n}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d=e(11333),u=e.n(d),n={"docs-components-datepicker-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function s(){var t,l;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return t=r.sent,l=t.DatePicker,r.abrupt("return",{default:function(){return a.createElement(l,null)}});case 5:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-datepicker-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {DatePicker} from 'tiger-ui';

export default () => {
  return <DatePicker />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var s=f()(o()().mark(function l(){var m,r=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(8296).then(e.bind(e,88296));case 2:return p.abrupt("return",(m=p.sent).default.apply(m,r));case 3:case"end":return p.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"docs-components-datepicker-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function s(){var t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return t=p.sent,l=t.DatePicker,p.next=6,Promise.resolve().then(e.t.bind(e,11333,23));case 6:return m=p.sent,r=m.default,p.abrupt("return",{default:function(){return a.createElement(l,{value:r()})}});case 9:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-datepicker-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {DatePicker} from 'tiger-ui';
import moment from 'moment';

export default () => {
  return (
    <DatePicker
      value={moment()}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},moment:{type:"NPM",value:"2.30.1"}},entry:"index.jsx"},context:{"tiger-ui":i,moment:d},renderOpts:{compile:function(){var s=f()(o()().mark(function l(){var m,r=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(8296).then(e.bind(e,88296));case 2:return p.abrupt("return",(m=p.sent).default.apply(m,r));case 3:case"end":return p.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"docs-components-datepicker-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function s(){var t,l,m,r,g,p;return o()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return t=B.sent,l=t.DatePicker,B.next=6,Promise.resolve().then(e.t.bind(e,11333,23));case 6:return m=B.sent,r=m.default,B.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return g=B.sent,p=g.useState,B.abrupt("return",{default:function(){var I=p(r()),D=E()(I,2),S=D[0],M=D[1];return a.createElement(l,{value:S,onChange:function(L){return M(L)}})}});case 13:case"end":return B.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-datepicker-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {DatePicker} from 'tiger-ui';
import moment from 'moment';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(moment());
  return (
    <DatePicker
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},moment:{type:"NPM",value:"2.30.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,moment:d,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var s=f()(o()().mark(function l(){var m,r=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(8296).then(e.bind(e,88296));case 2:return p.abrupt("return",(m=p.sent).default.apply(m,r));case 3:case"end":return p.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}}}},6241:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(90228),E=e.n(c),O=e(48305),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-dialog-demo-0":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g;return E()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Dialog,l=n.message,m=n.Input,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){var P=g(!1),I=o()(P,2),D=I[0],S=I[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return S(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(t,{title:"\u6807\u9898",visible:D,onCancel:function(){return S(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(m,null)))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Dialog, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>

    <Dialog
      title={'\u6807\u9898'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Dialog>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-dialog-demo-1":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Dialog,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(t,{title:"\u6807\u9898",mask:!1,visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>

    <Dialog
      title={'\u6807\u9898'}
      mask={false}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-dialog-demo-2":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Dialog,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(t,{title:"\u6807\u9898",maskClosable:!1,visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>

    <Dialog
      title={'\u6807\u9898'}
      maskClosable={false}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-dialog-demo-3":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Dialog,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(t,{title:"\u6807\u9898",closeIcon:"\u5173\u95ED",visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>

    <Dialog
      title={'\u6807\u9898'}
      closeIcon={'\u5173\u95ED'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-dialog-demo-4":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Dialog,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(t,{title:"\u6807\u9898",closeIcon:"\u5173\u95ED",visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")},okText:"\u4FDD\u5B58",cancelText:"\u5173\u95ED"}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Dialog, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>

    <Dialog
      title={'\u6807\u9898'}
      closeIcon={'\u5173\u95ED'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
      okText={'\u4FDD\u5B58'}
      cancelText={'\u5173\u95ED'}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-dialog-demo-5":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g;return E()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Dialog,l=n.message,m=n.Input,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){var P=g(!1),I=o()(P,2),D=I[0],S=I[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return S(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(t,{title:"\u6807\u9898",destroyOnClose:!0,visible:D,onCancel:function(){return S(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(m,null)))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Dialog, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>

    <Dialog
      title={'\u6807\u9898'}
      destroyOnClose
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Dialog>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-dialog-demo-6":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g,p,h;return E()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=P.sent,s=n.Space,t=n.Select,l=n.Button,m=n.Dialog,r=n.message,g=n.Input,P.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return p=P.sent,h=p.useState,P.abrupt("return",{default:function(){var D="300",S=h(D),M=o()(S,2),b=M[0],L=M[1],T=h(!1),R=o()(T,2),j=R[0],K=R[1];return a.createElement(a.Fragment,null,a.createElement(s,null,a.createElement(t,{value:b,onChange:L,style:{width:150}},[100,200,300,400,500,600,700,800,900].map(function(A){return a.createElement(t.Option,{key:A},A,"ms","".concat(A)===D?"\uFF08\u9ED8\u8BA4\uFF09":"")})),a.createElement(l,{onClick:function(){return K(!0)}},"\u6253\u5F00\u5F39\u7A97")),a.createElement(m,{title:"\u6807\u9898",destroyOnClose:!0,visible:j,animationDuration:Number(b),onCancel:function(){return K(!1)},onOk:function(){return r.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(g,null)))}});case 14:case"end":return P.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-dialog-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Select, Button, Dialog, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const DEFAULT = '300';
  const [delay, setDelay] = useState(DEFAULT);
  const [open, setOpen] = useState(false);
  
  return <>
    <Space>
      <Select
        value={delay}
        onChange={setDelay}
        style={{width: 150}}
      >
        {
          [
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900
          ].map(x => {
            return (
              <Select.Option key={x}>
                {x}ms{\`\${x}\` === DEFAULT ? '\uFF08\u9ED8\u8BA4\uFF09' : ''}
              </Select.Option>
            )
          })
        }
      </Select>
      <Button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</Button>
    </Space>
    
    <Dialog
      title={'\u6807\u9898'}
      destroyOnClose
      visible={open}
      animationDuration={Number(delay)}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Dialog>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},17294:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(90228),E=e.n(c),O=e(48305),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-drawer-demo-0":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g;return E()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Drawer,l=n.message,m=n.Input,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){var P=g(!1),I=o()(P,2),D=I[0],S=I[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return S(!0)}},"\u6253\u5F00\u62BD\u5C49"),a.createElement(t,{title:"\u6807\u9898",visible:D,onCancel:function(){return S(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(m,null)))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>

    <Drawer
      title={'\u6807\u9898'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Drawer>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-1":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Drawer,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u62BD\u5C49"),a.createElement(t,{title:"\u6807\u9898",mask:!1,visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>

    <Drawer
      title={'\u6807\u9898'}
      mask={false}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-2":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Drawer,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u62BD\u5C49"),a.createElement(t,{title:"\u6807\u9898",maskClosable:!1,visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>

    <Drawer
      title={'\u6807\u9898'}
      maskClosable={false}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-3":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Drawer,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u62BD\u5C49"),a.createElement(t,{title:"\u6807\u9898",closeIcon:"\u5173\u95ED",visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>

    <Drawer
      title={'\u6807\u9898'}
      closeIcon={'\u5173\u95ED'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-4":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Button,t=n.Drawer,l=n.message,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return D(!0)}},"\u6253\u5F00\u62BD\u5C49"),a.createElement(t,{title:"\u6807\u9898",visible:I,onCancel:function(){return D(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")},okText:"\u4FDD\u5B58",cancelText:"\u5173\u95ED"}))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Drawer, message} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>

    <Drawer
      title={'\u6807\u9898'}
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
      okText={'\u4FDD\u5B58'}
      cancelText={'\u5173\u95ED'}
    />
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-5":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g;return E()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Drawer,l=n.message,m=n.Input,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){var P=g(!1),I=o()(P,2),D=I[0],S=I[1];return a.createElement(a.Fragment,null,a.createElement(s,{onClick:function(){return S(!0)}},"\u6253\u5F00\u62BD\u5C49"),a.createElement(t,{title:"\u6807\u9898",destroyOnClose:!0,visible:D,onCancel:function(){return S(!1)},onOk:function(){return l.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(m,null)))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return <>
    <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>

    <Drawer
      title={'\u6807\u9898'}
      destroyOnClose
      visible={open}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Drawer>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-6":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g,p,h;return E()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=P.sent,s=n.Space,t=n.Select,l=n.Button,m=n.Drawer,r=n.message,g=n.Input,P.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return p=P.sent,h=p.useState,P.abrupt("return",{default:function(){var D="300",S=h(D),M=o()(S,2),b=M[0],L=M[1],T=h(!1),R=o()(T,2),j=R[0],K=R[1];return a.createElement(a.Fragment,null,a.createElement(s,null,a.createElement(t,{value:b,onChange:L,style:{width:150}},[100,200,300,400,500,600,700,800,900].map(function(A){return a.createElement(t.Option,{key:A},A,"ms","".concat(A)===D?"\uFF08\u9ED8\u8BA4\uFF09":"")})),a.createElement(l,{onClick:function(){return K(!0)}},"\u6253\u5F00\u62BD\u5C49")),a.createElement(m,{title:"\u6807\u9898",destroyOnClose:!0,visible:j,animationDuration:Number(b),onCancel:function(){return K(!1)},onOk:function(){return r.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(g,null)))}});case 14:case"end":return P.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Select, Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const DEFAULT = '300';
  const [delay, setDelay] = useState(DEFAULT);
  const [open, setOpen] = useState(false);
  
  return <>
    <Space>
      <Select
        value={delay}
        onChange={setDelay}
        style={{width: 150}}
      >
        {
          [
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900
          ].map(x => {
            return (
              <Select.Option key={x}>
                {x}ms{\`\${x}\` === DEFAULT ? '\uFF08\u9ED8\u8BA4\uFF09' : ''}
              </Select.Option>
            )
          })
        }
      </Select>
      <Button onClick={() => setOpen(true)}>\u6253\u5F00\u62BD\u5C49</Button>
    </Space>
    
    <Drawer
      title={'\u6807\u9898'}
      destroyOnClose
      visible={open}
      animationDuration={Number(delay)}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Drawer>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drawer-demo-7":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r,g,p,h;return E()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=P.sent,s=n.Space,t=n.Select,l=n.Button,m=n.Drawer,r=n.message,g=n.Input,P.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return p=P.sent,h=p.useState,P.abrupt("return",{default:function(){var D=h("right"),S=o()(D,2),M=S[0],b=S[1],L=h(!1),T=o()(L,2),R=T[0],j=T[1];return a.createElement(a.Fragment,null,a.createElement(s,null,["top","right","bottom","left"].map(function(K){return a.createElement(l,{key:K,onClick:function(){b(K),j(!0)}},K)})),a.createElement(m,{title:"\u6807\u9898",visible:R,placement:M,onCancel:function(){return j(!1)},onOk:function(){return r.success("\u8BF7\u6C42\u6210\u529F")}},a.createElement(g,null)))}});case 14:case"end":return P.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drawer-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Select, Button, Drawer, message, Input} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [placement, setPlacement] = useState('right');
  const [open, setOpen] = useState(false);
  
  return <>
    <Space>
      {
        [
          'top',
          'right',
          'bottom',
          'left',
        ].map(x => {
          return (
            <Button
              key={x}
              onClick={() => {
                setPlacement(x);
                setOpen(true);
              }}>{x}</Button>
          )
        })
      }
    </Space>
    
    <Drawer
      title={'\u6807\u9898'}
      visible={open}
      placement={placement}
      onCancel={() => setOpen(false)}
      onOk={() => message.success('\u8BF7\u6C42\u6210\u529F')}
    >
      <Input />
    </Drawer>
  </>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},7392:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-drop-down-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.DropDown,l.abrupt("return",{default:function(){return a.createElement(s,{popupPanel:a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!")},a.createElement("div",{style:{cursor:"pointer"}},"\u70B9\u51FB\u663E\u793A\u4E0B\u62C9"))}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drop-down-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {DropDown} from 'tiger-ui';

export default () => {
  return (
    <DropDown
      popupPanel={
        <div style={{padding: '12px 16px'}}>hello DropDown!</div>
      }
    >
      <div style={{cursor: 'pointer'}}>\u70B9\u51FB\u663E\u793A\u4E0B\u62C9</div>
    </DropDown>
  )
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-drop-down-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.DropDown,t=n.Space,l=n.Button,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=E()(B,2),I=P[0],D=P[1];return a.createElement(s,{open:I,popupPanel:a.createElement(a.Fragment,null,a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"),a.createElement("div",{style:{padding:"12px 16px"}},"hello DropDown!"))},a.createElement(t,{block:!0},a.createElement(l,{type:"primary",onClick:function(){return D(!0)}},"\u5C55\u5F00"),a.createElement(l,{type:"primary",onClick:function(){return D(!1)}},"\u6536\u8D77")))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-drop-down-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { DropDown, Space, Button } from 'tiger-ui';
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <DropDown
      open={open}
      popupPanel={
        <>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
          <div style={{ padding: '12px 16px' }}>hello DropDown!</div>
        </>
      }
    >
      <Space block>
        <Button type={'primary'} onClick={() => setOpen(true)}>\u5C55\u5F00</Button>
        <Button type={'primary'} onClick={() => setOpen(false)}>\u6536\u8D77</Button>
      </Space>
    </DropDown>
  )
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},8547:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-empty-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Empty,n.abrupt("return",{default:function(){return o.createElement(d,null)}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-empty-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Empty} from 'tiger-ui';

export default () => {
  return <Empty />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-empty-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Empty,n.abrupt("return",{default:function(){return o.createElement(d,{bordered:!0})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-empty-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Empty} from 'tiger-ui';

export default () => {
  return <Empty bordered/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-empty-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Empty,n.abrupt("return",{default:function(){return o.createElement(d,{message:"\u4E00\u6BB5\u6D4B\u8BD5\u7528\u7684\u6D88\u606F\u5185\u5BB9"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-empty-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Empty} from 'tiger-ui';

export default () => {
  return <Empty message={'\u4E00\u6BB5\u6D4B\u8BD5\u7528\u7684\u6D88\u606F\u5185\u5BB9'}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-empty-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Empty,n.abrupt("return",{default:function(){return o.createElement(d,{type:"fill",message:"\u4E00\u6BB5\u6D4B\u8BD5\u7528\u7684\u6D88\u606F\u5185\u5BB9"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-empty-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Empty} from 'tiger-ui';

export default () => {
  return <Empty type='fill' message={'\u4E00\u6BB5\u6D4B\u8BD5\u7528\u7684\u6D88\u606F\u5185\u5BB9'}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},90671:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(90228),E=e.n(c),O=e(48305),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-global-demo-0":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Space,t=n.Button,l=n.ConfigProvider,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(void 0),P=o()(B,2),I=P[0],D=P[1];return a.createElement(l,{theme:{primary:I}},a.createElement(s,{direction:"vertical"},a.createElement(s,null,a.createElement(t,{onClick:function(){return D("red")}},"\u8BBE\u7F6E\u7EA2\u8272"),a.createElement(t,{onClick:function(){return D("blue")}},"\u8BBE\u7F6E\u84DD\u8272"),a.createElement(t,{onClick:function(){return D()}},"\u6062\u590D")),"\u793A\u4F8B\uFF1A",a.createElement(t,{type:"primary"},"\u6309\u94AE")))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-global-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Button, ConfigProvider} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [primary, setPrimary] = useState(undefined);

  return <ConfigProvider
    theme={{
      primary
    }}
  >
    <Space direction={'vertical'}>
      <Space>
        <Button onClick={() => setPrimary('red')}>\u8BBE\u7F6E\u7EA2\u8272</Button>
        <Button onClick={() => setPrimary('blue')}>\u8BBE\u7F6E\u84DD\u8272</Button>
        <Button onClick={() => setPrimary()}>\u6062\u590D</Button>
      </Space>
      \u793A\u4F8B\uFF1A
      <Button type={'primary'}>\u6309\u94AE</Button>
    </Space>
  </ConfigProvider>
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},29311:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-image-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Image,n.abrupt("return",{default:function(){return o.createElement(d,{src:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-image-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Image} from 'tiger-ui';

export default () => {
  return <Image
    src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-image-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Image,n.abrupt("return",{default:function(){return o.createElement(d,{width:32,height:32,src:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-image-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Image} from 'tiger-ui';

export default () => {
  return <Image
    width={32}
    height={32}
    src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-image-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Image,n.abrupt("return",{default:function(){return o.createElement(d,{preview:!0,src:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-image-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Image} from 'tiger-ui';

export default () => {
  return <Image
    preview
    src={'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg'}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},78422:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-input-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Input,n.abrupt("return",{default:function(){return o.createElement(d,null)}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Input} from 'tiger-ui';

export default () => {
  return <Input />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Input,n.abrupt("return",{default:function(){return o.createElement(d,{placeholder:"\u4E00\u7AEF\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Input} from 'tiger-ui';

export default () => {
  return <Input placeholder={'\u4E00\u7AEF\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26'}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Input,n.abrupt("return",{default:function(){return o.createElement(d,{maxLength:10})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Input} from 'tiger-ui';

export default () => {
  return <Input maxLength={10}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Input,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,{direction:"vertical"},o.createElement(d,{maxLength:10,prefix:"prefix"}),o.createElement(d,{maxLength:10,suffix:"suffix"}),o.createElement(d,{maxLength:10,prefix:"prefix",suffix:"suffix"}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Input, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'}>
    <Input maxLength={10} prefix={'prefix'}/>
    <Input maxLength={10} suffix={'suffix'}/>
    <Input maxLength={10} prefix={'prefix'} suffix={'suffix'}/>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-demo-4":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Input,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,{direction:"vertical",block:!0},o.createElement(d,{disabled:!0}),o.createElement(d,{maxLength:10,prefix:"prefix",disabled:!0}),o.createElement(d,{maxLength:10,suffix:"suffix",disabled:!0}),o.createElement(d,{maxLength:10,prefix:"prefix",suffix:"suffix",disabled:!0}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Input, Space} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'} block>
    <Input disabled/>
    <Input maxLength={10} prefix={'prefix'} disabled/>
    <Input maxLength={10} suffix={'suffix'} disabled/>
    <Input maxLength={10} prefix={'prefix'} suffix={'suffix'} disabled/>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},81490:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-input-number-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.InputNumber,n.abrupt("return",{default:function(){return o.createElement(d,null)}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-number-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-number-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.InputNumber,n.abrupt("return",{default:function(){return o.createElement(d,{step:10})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-number-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber step={10}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-number-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.InputNumber,n.abrupt("return",{default:function(){return o.createElement(d,{min:10,max:100,step:10})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-number-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber min={10} max={100} step={10}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-input-number-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.InputNumber,n.abrupt("return",{default:function(){return o.createElement(d,{min:10,max:100,step:10,prefix:"prefix"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-input-number-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {InputNumber} from 'tiger-ui';

export default () => {
  return <InputNumber
    min={10}
    max={100}
    step={10}
    prefix={'prefix'}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},14145:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-message-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.message,m.abrupt("return",{default:function(){return a.createElement(s,{onClick:function(){return t.success("\u64CD\u4F5C\u6210\u529F")}},"success")}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, message} from 'tiger-ui';

export default () => {
  return <Button onClick={() => message.success('\u64CD\u4F5C\u6210\u529F')}>success</Button>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-message-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.message,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){var P=g(""),I=E()(P,2),D=I[0],S=I[1];return a.createElement(m,null,a.createElement(l,{value:D,onChange:function(b){return S(b.target.value)}}),a.createElement(s,{onClick:function(){return t.success(D)}},"success"))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState('')
  return <Space>
    <Input value={value} onChange={e => setValue(e.target.value)}/>
    <Button onClick={() => message.success(value)}>success</Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-message-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.message,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){return a.createElement(m,null,["success","warn","warning","error","info"].map(function(P){return a.createElement(s,{key:P,onClick:function(){var D;return t==null||(D=t[P])===null||D===void 0?void 0:D.call(t,P)}},P)}))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    {
      ['success', 'warn', 'warning', 'error', 'info'].map(type => {
        return (
          <Button 
            key={type}
            onClick={() => message?.[type]?.(type)}
          >
            {type}
          </Button>
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-message-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.message,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){return a.createElement(m,null,a.createElement(s,{onClick:function(){return t.open({type:"success",content:"1s",duration:1e3})}},"1s"),a.createElement(s,{onClick:function(){return t.open({type:"success",content:"3s",duration:3e3})}},"3s"),a.createElement(s,{onClick:function(){return t.open({type:"success",content:"1000s",duration:1e3*1e3})}},"1000s"))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '1s',
        duration: 1000
      })}
    >
      1s
    </Button>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '3s',
        duration: 3000
      })}
    >
      3s
    </Button>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '1000s',
        duration: 1000 * 1000
      })}
    >
      1000s
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-message-demo-4":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.message,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){return a.createElement(m,null,a.createElement(s,{onClick:function(){return t.open({type:"success",content:"0.4s",animationDuration:400})}},"0.4s"),a.createElement(s,{onClick:function(){return t.open({type:"success",content:"1.5s",animationDuration:1500})}},"1.5s"))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, message, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '0.4s',
        animationDuration: 400
      })}
    >
      0.4s
    </Button>
    <Button
      onClick={() => message.open({
        type: 'success',
        content: '1.5s',
        animationDuration: 1500
      })}
    >
      1.5s
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-message-demo-5":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=r.sent,s=n.Button,t=n.message,l=n.Space,r.abrupt("return",{default:function(){return a.createElement(l,null,["success","warn","warning","error","info"].map(function(p){return a.createElement(s,{key:p,onClick:function(){return t.open({type:p,content:p,duration:3e3,animationDuration:500,onClose:function(){console.log("close: ",p)}})}},p)}))}});case 7:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, message, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['success', 'warn', 'warning', 'error', 'info'].map(type => {
        return (
          <Button
            key={type}
            onClick={() => message.open({
              type,
              content: type,
              duration: 3000,
              animationDuration: 500,
              onClose () {
                console.log('close: ', type)
              }
            })}
          >
            {type}
          </Button>
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},88460:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-notification-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Button,t=n.Notification,m.abrupt("return",{default:function(){return a.createElement(s,{onClick:function(){return t.success({message:"\u64CD\u4F5C\u6210\u529F"})}},"success")}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification} from 'tiger-ui';

export default () => {
  return (
    <Button
      onClick={() => Notification.success({
        message: '\u64CD\u4F5C\u6210\u529F'
      })}
    >
      success
    </Button>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-notification-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Notification,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){var P=g(""),I=E()(P,2),D=I[0],S=I[1];return a.createElement(m,null,a.createElement(l,{value:D,onChange:function(b){return S(b.target.value)}}),a.createElement(s,{onClick:function(){return t.success({message:D})}},"success"))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [message, setMessage] = useState('')
  return <Space>
    <Input value={message} onChange={e => setMessage(e.target.value)}/>
    <Button onClick={() => Notification.success({message})}>success</Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-notification-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Notification,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){return a.createElement(m,null,["success","warn","warning","error","info"].map(function(P){return a.createElement(s,{key:P,onClick:function(){var D;return t==null||(D=t[P])===null||D===void 0?void 0:D.call(t,{message:P})}},P)}))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    {
      ['success', 'warn', 'warning', 'error', 'info'].map(type => {
        return (
          <Button 
            key={type}
            onClick={() => Notification?.[type]?.({message: type})}
          >
            {type}
          </Button>
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-notification-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Notification,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){return a.createElement(m,null,a.createElement(s,{onClick:function(){return t.open({type:"success",message:"1s",duration:1e3})}},"1s"),a.createElement(s,{onClick:function(){return t.open({type:"success",message:"1s",duration:3e3})}},"3s"))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.open({
        type: 'success',
        message: '1s',
        duration: 1000
      })}
    >
      1s
    </Button>
    <Button
      onClick={() => Notification.open({
        type: 'success',
        message: '1s',
        duration: 3000
      })}
    >
      3s
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-notification-demo-4":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Button,t=n.Notification,l=n.Input,m=n.Space,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return r=h.sent,g=r.useState,h.abrupt("return",{default:function(){return a.createElement(m,null,a.createElement(s,{onClick:function(){return t.open({type:"success",closable:!1,message:"0.4s"})}},"\u6253\u5F00"))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification, Input, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.open({
        type: 'success',
        closable: false,
        message: '0.4s',
      })}
    >
      \u6253\u5F00
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-notification-demo-5":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=r.sent,s=n.Button,t=n.Notification,l=n.Space,r.abrupt("return",{default:function(){return a.createElement(l,null,a.createElement(s,{onClick:function(){return t.success({duration:0,message:"\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u5173\u95ED",onClose:function(){console.log("close")}})}},"\u6253\u5F00"))}});case 7:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.success({
        duration: 0,
        message: '\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u5173\u95ED',
        onClose () {
          console.log('close')
        }
      })}
    >
      \u6253\u5F00
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-notification-demo-6":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=r.sent,s=n.Button,t=n.Notification,l=n.Space,r.abrupt("return",{default:function(){return a.createElement(l,null,a.createElement(s,{onClick:function(){return t.success({message:"\u4E00\u6BB5\u6D88\u606F",description:"\u4E00\u6BB5\u5185\u5BB9",onClose:function(){console.log("close")}})}},"\u6253\u5F00"))}});case 7:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-notification-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Button, Notification, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Button
      onClick={() => Notification.success({
        message: '\u4E00\u6BB5\u6D88\u606F',
        description: '\u4E00\u6BB5\u5185\u5BB9',
        onClose () {
          console.log('close')
        }
      })}
    >
      \u6253\u5F00
    </Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},51239:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-pagination-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{total:51})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination total={51}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-pagination-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{total:31,current:5,pageSize:5})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination total={31} current={5} pageSize={5}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-pagination-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{mini:!0,total:31,current:5,pageSize:5})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination mini total={31} current={5} pageSize={5}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-pagination-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{disabled:!0,total:101,current:5,pageSize:5})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination disabled total={101} current={5} pageSize={5}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-pagination-demo-4":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{showTotal:!1,total:101,current:5,pageSize:5})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination showTotal={false} total={101} current={5} pageSize={5}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-pagination-demo-5":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{showTotal:!1,total:101,current:5,pageSize:5,prev:"\u524D\u4E00\u9875",next:"\u4E0B\u4E00\u9875",moveLeft:"\u5DE6\u79FB",moveRight:"\u53F3\u79FB"})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination
    showTotal={false}
    total={101}
    current={5}
    pageSize={5}
    prev={'\u524D\u4E00\u9875'}
    next={'\u4E0B\u4E00\u9875'}
    moveLeft={'\u5DE6\u79FB'}
    moveRight={'\u53F3\u79FB'}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-pagination-demo-6":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Pagination,n.abrupt("return",{default:function(){return o.createElement(d,{showTotal:!1,total:101,pageSize:5,pureSize:!0})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-pagination-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Pagination} from 'tiger-ui';

export default () => {
  return <Pagination
    showTotal={false}
    total={101}
    pageSize={5}
    pureSize
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},48655:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-popover-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Popover,l.abrupt("return",{default:function(){return a.createElement(s,{content:"\u6807\u9898"},a.createElement("span",null,"hover me"))}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-popover-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Popover} from 'tiger-ui';

export default () => {
  return <Popover content={'\u6807\u9898'}>
    <span>hover me</span>
  </Popover>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-popover-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Popover,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(s,{title:"\u6807\u9898",content:a.createElement(t,{direction:"vertical"},a.createElement("span",null,"content"),a.createElement("span",null,"content"))},a.createElement("span",null,"hove me"))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-popover-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Popover, Space} from 'tiger-ui';

export default () => {
  return (
    <Popover
      title='\u6807\u9898'
      content={(
        <Space direction={'vertical'}>
          <span>content</span>
          <span>content</span>
        </Space>
      )}
    >
      <span>hove me</span>
    </Popover>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-popover-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.Popover,t=n.Space,l=n.Button,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=h.sent,r=m.useState,g=["pink","red","yellow","orange","cyan","green","blue","purple","magenta","gold","lime"],h.abrupt("return",{default:function(){var P=r("#000"),I=E()(P,2),D=I[0],S=I[1];return a.createElement(t,{style:{width:"100%"},direction:"vertical"},a.createElement("h3",null,"Presets "),a.createElement(t,{wrap:!0},g.map(function(M){return a.createElement(s,{title:"prompt text",key:M,color:M},a.createElement(l,null,M))})),a.createElement("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272 "),a.createElement(t,null,a.createElement(s,{color:D,title:"prompt text"},a.createElement("input",{type:"color",onChange:function(b){S(b.target.value)}}))))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-popover-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Popover, Space, Button} from 'tiger-ui';
import {useState} from 'react';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'gold',
  'lime',
];

export default () => {
  const [customColor, setCustomColor] = useState('#000');
  return (
    <Space style={{width: '100%'}} direction={'vertical'}>
      <h3>Presets </h3>
      <Space wrap>
        {
          colors.map(color => {
            return (
              <Popover title={'prompt text'} key={color} color={color}>
                <Button>{color}</Button>
              </Popover>
            )
          })
        }
      </Space>
      <h3>\u81EA\u5B9A\u4E49\u989C\u8272 </h3>
      <Space>
        <Popover color={customColor} title={'prompt text'}>
          <input
            type={'color'}
            onChange={e => {
              setCustomColor(e.target.value)
            }}
          />
        </Popover>
      </Space>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},41780:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(90228),E=e.n(c),O=e(48305),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-select-demo-0":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m;return E()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=g.sent,s=n.Select,t=n.Space,g.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=g.sent,m=l.useState,g.abrupt("return",{default:function(){var h=m(void 0),B=o()(h,2),P=B[0],I=B[1];return a.createElement(t,null,a.createElement(s,{value:P,onChange:I,options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}]}))}});case 10:case"end":return g.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-select-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Select, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState(undefined);
  return (
    <Space>
      <Select
        value={key}
        onChange={setKey}
        options={[
          {label: '\u9009\u9879\u4E00', value: '1'},
          {label: '\u9009\u9879\u4E8C', value: '2'},
          {label: '\u9009\u9879\u4E09', value: '3'},
        ]}
      />
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-select-demo-1":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=r.sent,s=n.Select,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return t=r.sent,l=t.useState,r.abrupt("return",{default:function(){var p=l(void 0),h=o()(p,2),B=h[0],P=h[1];return a.createElement(s,{block:!0,value:B,onChange:P,options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}]})}});case 9:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-select-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Select} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState(undefined);
  return (
    <Select
      block
      value={key}
      onChange={setKey}
      options={[
        {label: '\u9009\u9879\u4E00', value: '1'},
        {label: '\u9009\u9879\u4E8C', value: '2'},
        {label: '\u9009\u9879\u4E09', value: '3'},
      ]}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-select-demo-2":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=r.sent,s=n.Select,r.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return t=r.sent,l=t.useState,r.abrupt("return",{default:function(){var p=l(void 0),h=o()(p,2),B=h[0],P=h[1];return a.createElement(s,{block:!0,value:B,placeholder:"\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26",onChange:P,options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}]})}});case 9:case"end":return r.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-select-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Select} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [key, setKey] = useState(undefined);
  return (
    <Select
      block
      value={key}
      placeholder={'\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26'}
      onChange={setKey}
      options={[
        {label: '\u9009\u9879\u4E00', value: '1'},
        {label: '\u9009\u9879\u4E8C', value: '2'},
        {label: '\u9009\u9879\u4E09', value: '3'},
      ]}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-select-demo-3":{component:a.memo(a.lazy(f()(E()().mark(function u(){var n,s,t,l,m,r;return E()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Select,t=n.Button,l=n.Space,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(!1),P=o()(B,2),I=P[0],D=P[1],S=r(void 0),M=o()(S,2),b=M[0],L=M[1];return a.createElement(l,null,a.createElement(s,{style:{width:220},open:I,value:b,placeholder:"\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26",onChange:L,options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}]}),a.createElement(t,{type:"primary",onClick:function(){return D(!0)}},"\u663E\u793A"),a.createElement(t,{type:"primary",onClick:function(){return D(!1)}},"\u9690\u85CF"))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-select-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Select, Button, Space } from 'tiger-ui';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(undefined);
  return (
    <Space>
      <Select
        style={{width: 220}}
        open={visible}
        value={key}
        placeholder={'\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26'}
        onChange={setKey}
        options={[
          {label: '\u9009\u9879\u4E00', value: '1'},
          {label: '\u9009\u9879\u4E8C', value: '2'},
          {label: '\u9009\u9879\u4E09', value: '3'},
        ]}
        // onDropdownVisibleChange={setVisible}
      />
      <Button type={'primary'} onClick={() => setVisible(true)}>\u663E\u793A</Button>
      <Button type={'primary'} onClick={() => setVisible(false)}>\u9690\u85CF</Button>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(E()().mark(function s(){var t,l=arguments;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},43451:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-slider-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Slider,l.abrupt("return",{default:function(){return a.createElement(s,null)}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-slider-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Slider} from 'tiger-ui';

export default () => {
  return <Slider />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-slider-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=g.sent,s=n.Slider,t=n.Space,g.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=g.sent,m=l.useState,g.abrupt("return",{default:function(){var h=m(20),B=E()(h,2),P=B[0],I=B[1];return a.createElement(t,{block:!0,direction:"vertical"},a.createElement(s,{value:P}),a.createElement(s,{value:P,onChange:I}))}});case 10:case"end":return g.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-slider-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Slider, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(20);
  return <Space block direction={'vertical'}>
    <Slider value={value}/>
    <Slider value={value} onChange={setValue} />
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-slider-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Slider,l.abrupt("return",{default:function(){return a.createElement(s,{smooth:!0,defaultValue:50})}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-slider-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Slider} from 'tiger-ui';

export default () => {
  return <Slider smooth defaultValue={50}/>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},11173:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-space-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Space,t=n.Button,m.abrupt("return",{default:function(){return a.createElement(s,null,a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-space-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-space-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Space,t=n.Button,m.abrupt("return",{default:function(){return a.createElement(s,{direction:"vertical"},a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-space-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space direction={'vertical'}>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-space-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=p.sent,s=n.Space,t=n.Button,l=n.Slider,p.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=p.sent,r=m.useState,p.abrupt("return",{default:function(){var B=r(16),P=E()(B,2),I=P[0],D=P[1];return a.createElement(s,{direction:"vertical",block:!0},a.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},a.createElement(l,{style:{flex:1},value:I,onChange:D}),a.createElement("span",null,I,"px")),a.createElement(s,{size:I},a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE")))}});case 11:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-space-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Button, Slider} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(16);
  return <Space direction={'vertical'} block>
    <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
      <Slider style={{flex: 1}} value={value} onChange={setValue}/>
      <span>
        {value}px
      </span>
    </div>
    <Space size={value}>
      <Button>\u6309\u94AE</Button>
      <Button>\u6309\u94AE</Button>
      <Button>\u6309\u94AE</Button>
      <Button>\u6309\u94AE</Button>
    </Space>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-space-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Space,t=n.Button,m.abrupt("return",{default:function(){return a.createElement(s,{size:32,wrap:!0},a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"),a.createElement(t,null,"\u6309\u94AE"))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-space-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Space, Button} from 'tiger-ui';

export default () => {
  return <Space size={32} wrap>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
    <Button>\u6309\u94AE</Button>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},33121:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-switch-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Switch,l.abrupt("return",{default:function(){return a.createElement(s,null)}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-switch-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Switch} from 'tiger-ui';

export default () => {
  return <Switch />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-switch-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=g.sent,s=n.Switch,t=n.Space,g.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=g.sent,m=l.useState,g.abrupt("return",{default:function(){var h=m(!0),B=E()(h,2),P=B[0],I=B[1];return a.createElement(t,null,a.createElement(s,{checked:P}),a.createElement(s,{checked:P,onChange:I}))}});case 10:case"end":return g.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-switch-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Switch, Space} from 'tiger-ui';
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState(true);
  return <Space>
    <Switch checked={value}/>
    <Switch checked={value} onChange={setValue}/>
  </Space>
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-switch-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Switch,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(s,{defaultChecked:!0})}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-switch-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Switch, Space} from 'tiger-ui';

export default () => {
  return <Switch defaultChecked />
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-switch-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Switch,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,null,a.createElement(s,{disabled:!0,checked:!1}),a.createElement(s,{disabled:!0,defaultChecked:!0}))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-switch-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Switch, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Switch disabled checked={false}/>
    <Switch disabled defaultChecked={true}/>
  </Space>
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-switch-demo-4":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=m.sent,s=n.Switch,t=n.Space,m.abrupt("return",{default:function(){return a.createElement(t,null,a.createElement(s,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173"}),a.createElement(s,{style:{width:80},checkedChildren:"\u6B63\u786E",unCheckedChildren:"\u9519\u8BEF"}))}});case 6:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-switch-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Switch, Space} from 'tiger-ui';

export default () => {
  return <Space>
    <Switch
      checkedChildren={'\u5F00'}
      unCheckedChildren={'\u5173'}
    />
    <Switch
      style={{width: 80}}
      checkedChildren={'\u6B63\u786E'}
      unCheckedChildren={'\u9519\u8BEF'}
    />
  </Space>
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},92598:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-table-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Table,n.abrupt("return",{default:function(){return o.createElement(d,{dataSource:[{key:"1",name:"\u5510\u67D0\u4EBA",sex:"\u7537",age:23},{key:"2",name:"\u5510\u67D0\u4EBA",sex:"\u7537",age:23},{key:"3",name:"\u5510\u67D0\u4EBA",sex:"\u7537",age:23}],columns:[{dataIndex:"name",title:"\u59D3\u540D"},{dataIndex:"sex",title:"\u6027\u522B"},{dataIndex:"age",title:"\u5E74\u9F84"}]})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Table} from 'tiger-ui';

export default () => {
  return <Table
    dataSource={[
      {key: '1', name: '\u5510\u67D0\u4EBA', sex: '\u7537', age: 23},
      {key: '2', name: '\u5510\u67D0\u4EBA', sex: '\u7537', age: 23},
      {key: '3', name: '\u5510\u67D0\u4EBA', sex: '\u7537', age: 23},
    ]}
    columns={[
      {dataIndex: 'name', title: '\u59D3\u540D'},
      {dataIndex: 'sex', title: '\u6027\u522B'},
      {dataIndex: 'age', title: '\u5E74\u9F84'},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-table-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Table,n.abrupt("return",{default:function(){return o.createElement(d,{bordered:!0,dataSource:[{key:"1",name:"\u5510\u67D0\u4EBA",sex:"\u7537",age:23},{key:"2",name:"\u5510\u67D0\u4EBA",sex:"\u7537",age:23},{key:"3",name:"\u5510\u67D0\u4EBA",sex:"\u7537",age:23}],columns:[{dataIndex:"name",title:"\u59D3\u540D"},{dataIndex:"sex",title:"\u6027\u522B"},{dataIndex:"age",title:"\u5E74\u9F84"}]})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Table} from 'tiger-ui';

export default () => {
  return <Table
    bordered
    dataSource={[
      {key: '1', name: '\u5510\u67D0\u4EBA', sex: '\u7537', age: 23},
      {key: '2', name: '\u5510\u67D0\u4EBA', sex: '\u7537', age: 23},
      {key: '3', name: '\u5510\u67D0\u4EBA', sex: '\u7537', age: 23},
    ]}
    columns={[
      {dataIndex: 'name', title: '\u59D3\u540D'},
      {dataIndex: 'sex', title: '\u6027\u522B'},
      {dataIndex: 'age', title: '\u5E74\u9F84'},
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},85505:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-tabs-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Tabs,u=i.Input,s.abrupt("return",{default:function(){return o.createElement(d,{options:[{key:"1",label:"\u9009\u9879\u4E00",value:o.createElement(u,null)},{key:"2",label:"\u9009\u9879\u4E8C",value:o.createElement("div",null,"222")}]})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tabs-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tabs, Input} from 'tiger-ui';

export default () => {
  return <Tabs
    options={[
      {
        key: '1',
        label: '\u9009\u9879\u4E00',
        value: <Input />
      },
      {
        key: '2',
        label: '\u9009\u9879\u4E8C',
        value: <div>222</div>
      }
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-tabs-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Tabs,n.abrupt("return",{default:function(){return o.createElement(d,{activeKey:"2",options:[{key:"1",label:"\u9009\u9879\u4E00",value:o.createElement("div",null,"11")},{key:"2",label:"\u9009\u9879\u4E8C",value:o.createElement("div",null,"222")}]})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tabs-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tabs} from 'tiger-ui';

export default () => {
  return <Tabs
    activeKey={'2'}
    options={[
      {
        key: '1',
        label: '\u9009\u9879\u4E00',
        value: <div>11</div>
      },
      {
        key: '2',
        label: '\u9009\u9879\u4E8C',
        value: <div>222</div>
      }
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-tabs-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Tabs,n.abrupt("return",{default:function(){return o.createElement(d,{defaultActiveKey:"2",options:[{key:"1",label:"\u9009\u9879\u4E00",value:o.createElement("div",null,"11")},{key:"2",label:"\u9009\u9879\u4E8C",value:o.createElement("div",null,"222")}]})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tabs-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tabs} from 'tiger-ui';

export default () => {
  return <Tabs
    defaultActiveKey={'2'}
    options={[
      {
        key: '1',
        label: '\u9009\u9879\u4E00',
        value: <div>11</div>
      },
      {
        key: '2',
        label: '\u9009\u9879\u4E8C',
        value: <div>222</div>
      }
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-tabs-demo-3":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Tabs,u=i.Input,s.abrupt("return",{default:function(){return o.createElement(d,{destroy:!0,options:[{key:"1",label:"\u9009\u9879\u4E00",value:o.createElement(u,null)},{key:"2",label:"\u9009\u9879\u4E8C",value:o.createElement("div",null,"222")}]})}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tabs-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tabs, Input} from 'tiger-ui';

export default () => {
  return <Tabs
    destroy
    options={[
      {
        key: '1',
        label: '\u9009\u9879\u4E00',
        value: <Input />
      },
      {
        key: '2',
        label: '\u9009\u9879\u4E8C',
        value: <div>222</div>
      }
    ]}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},90585:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-tag-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Tag,n.abrupt("return",{default:function(){return o.createElement(d,null,"tag")}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tag} from 'tiger-ui';

export default () => {
  return <Tag>tag</Tag>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-tag-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Tag,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,null,["success","error","warn","info"].map(function(l){return o.createElement(d,{key:l,type:l},l)}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tag, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['success', 'error', 'warn', 'info'].map(type => {
        return (
          <Tag
            key={type}
            type={type}
          >
            {type}
          </Tag>
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-tag-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d,u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=s.sent,d=i.Tag,u=i.Space,s.abrupt("return",{default:function(){return o.createElement(u,null,["success","error","warn","info"].map(function(l,m){return o.createElement(d,{bordered:!1,key:l,type:l},l)}))}});case 6:case"end":return s.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-tag-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tag, Space} from 'tiger-ui';

export default () => {
  return <Space>
    {
      ['success', 'error', 'warn', 'info'].map((type, index) => {
        return (
          <Tag
            bordered={false}
            key={type}
            type={type}
          >
            {type}
          </Tag>
        )
      })
    }
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},84546:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return n}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d=e(11333),u=e.n(d),n={"docs-components-timepicker-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function s(){var t,l;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return t=r.sent,l=t.TimePicker,r.abrupt("return",{default:function(){return a.createElement(l,null)}});case 5:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-timepicker-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {TimePicker} from 'tiger-ui';

export default () => {
  return <TimePicker />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var s=f()(o()().mark(function l(){var m,r=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(8296).then(e.bind(e,88296));case 2:return p.abrupt("return",(m=p.sent).default.apply(m,r));case 3:case"end":return p.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"docs-components-timepicker-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function s(){var t,l,m,r,g,p,h;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return t=P.sent,l=t.TimePicker,m=t.Space,P.next=7,Promise.resolve().then(e.t.bind(e,11333,23));case 7:return r=P.sent,g=r.default,P.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return p=P.sent,h=p.useState,P.abrupt("return",{default:function(){var D=h(g()),S=E()(D,2),M=S[0],b=S[1];return a.createElement(m,{direction:"vertical"},a.createElement(m,null,"\u53EF\u9009\u62E9\uFF1A",a.createElement(l,{value:M,onChange:b})),a.createElement(m,null,"\u4E0D\u53EF\u9009\u62E9\uFF1A",a.createElement(l,{value:g()})))}});case 14:case"end":return P.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-timepicker-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { TimePicker, Space } from 'tiger-ui';
import moment from 'moment';
import { useState } from "react";

export default () => {
  const [value, setValue] = useState (moment());
  return <Space direction={'vertical'}>
    <Space>
      \u53EF\u9009\u62E9\uFF1A
      <TimePicker value={value} onChange={setValue} />
    </Space>
    <Space>
      \u4E0D\u53EF\u9009\u62E9\uFF1A
      <TimePicker value={moment()} />
    </Space>
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},moment:{type:"NPM",value:"2.30.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,moment:d,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var s=f()(o()().mark(function l(){var m,r=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(8296).then(e.bind(e,88296));case 2:return p.abrupt("return",(m=p.sent).default.apply(m,r));case 3:case"end":return p.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}},"docs-components-timepicker-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function s(){var t,l,m,r,g,p,h,B;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return t=I.sent,l=t.TimePicker,m=t.Space,r=t.Select,I.next=8,Promise.resolve().then(e.t.bind(e,11333,23));case 8:return g=I.sent,p=g.default,I.next=12,Promise.resolve().then(e.t.bind(e,75271,19));case 12:return h=I.sent,B=h.useState,I.abrupt("return",{default:function(){var S=B(""),M=E()(S,2),b=M[0],L=M[1];return a.createElement(m,null,a.createElement(l,{type:b}),a.createElement(r,{value:b,onChange:function(R){return L(R)},options:[{label:"hour",value:"hour"},{label:"minute",value:"minute"},{label:"second",value:"second"}]}))}});case 15:case"end":return I.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-components-timepicker-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { TimePicker, Space, Select } from 'tiger-ui';
import moment from 'moment';
import { useState } from "react";

export default () => {
  const [type, setType] = useState  ('');

  return <Space>
    <TimePicker type={type} />
    <Select
      value={type}
      onChange={(type) => setType(type)}
      options={[
        { label: 'hour', value: 'hour' },
        { label: 'minute', value: 'minute' },
        { label: 'second', value: 'second' },
      ]}
    />
  </Space>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},moment:{type:"NPM",value:"2.30.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,moment:d,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var s=f()(o()().mark(function l(){var m,r=arguments;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(8296).then(e.bind(e,88296));case 2:return p.abrupt("return",(m=p.sent).default.apply(m,r));case 3:case"end":return p.stop()}},l)}));function t(){return s.apply(this,arguments)}return t}()}}}},80487:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-tooltip-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.ToolTip,l.abrupt("return",{default:function(){return a.createElement(s,{title:"Hello React !"},a.createElement("span",null,"hove me"))}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {ToolTip} from 'tiger-ui';

export default () => {
  return <ToolTip title={'Hello React !'}>
    <span>hove me</span>
  </ToolTip>;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-tooltip-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.ToolTip,t=n.Space,l=n.Button,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=h.sent,r=m.useState,g=["pink","red","yellow","orange","cyan","green","blue","purple","magenta","gold","lime"],h.abrupt("return",{default:function(){var P=r("#000"),I=E()(P,2),D=I[0],S=I[1];return a.createElement(t,{style:{width:"100%"},direction:"vertical"},a.createElement("h3",null,"Presets "),a.createElement(t,{wrap:!0},g.map(function(M){return a.createElement(s,{title:"prompt text",key:M,color:M},a.createElement(l,null,M))})),a.createElement("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272 "),a.createElement(t,null,a.createElement(s,{color:D,title:"prompt text"},a.createElement("input",{type:"color",onChange:function(b){S(b.target.value)}}))))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {ToolTip, Space, Button} from 'tiger-ui';
import {useState} from 'react';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'gold',
  'lime',
];

export default () => {
  const [customColor, setCustomColor] = useState('#000');
  return (
    <Space style={{width: '100%'}} direction={'vertical'}>
      <h3>Presets </h3>
      <Space wrap>
        {
          colors.map(color => {
            return (
              <ToolTip title={'prompt text'} key={color} color={color}>
                <Button>{color}</Button>
              </ToolTip>
            )
          })
        }
      </Space>
      <h3>\u81EA\u5B9A\u4E49\u989C\u8272 </h3>
      <Space>
        <ToolTip color={customColor} title={'prompt text'}>
          <input
            type={'color'}
            onChange={e => {
              setCustomColor(e.target.value)
            }}
          />
        </ToolTip>
      </Space>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-tooltip-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=h.sent,s=n.ToolTip,t=n.Space,l=n.Button,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return m=h.sent,r=m.useState,g=["hover","focus","click","contextMenu"],h.abrupt("return",{default:function(){var P=r("#000"),I=E()(P,2),D=I[0],S=I[1];return a.createElement(t,{style:{width:"100%"},direction:"vertical"},a.createElement("b",null,"\u8BBE\u7F6E\u5355\u4E2A"),a.createElement(t,{wrap:!0},g.map(function(M){return a.createElement(s,{title:"prompt text",key:M,trigger:M},a.createElement(l,null,M))})),a.createElement("b",null,"\u8BBE\u7F6E\u591A\u4E2A"),a.createElement(s,{title:"prompt text",trigger:g},a.createElement(l,null,"hover me")))}});case 12:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tooltip-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {ToolTip, Space, Button} from 'tiger-ui';
import {useState} from 'react';

const triggers = [
  'hover',
  'focus',
  'click',
  'contextMenu'
];

export default () => {
  const [customColor, setCustomColor] = useState('#000');
  return (
    <Space style={{width: '100%'}} direction={'vertical'}>
      <b>\u8BBE\u7F6E\u5355\u4E2A</b>
      <Space wrap>
        {
          triggers.map(trigger => {
            return (
              <ToolTip title={'prompt text'} key={trigger} trigger={trigger}>
                <Button>{trigger}</Button>
              </ToolTip>
            )
          })
        }
      </Space>
      <b>\u8BBE\u7F6E\u591A\u4E2A</b>
      <ToolTip title={'prompt text'} trigger={triggers}>
        <Button>hover me</Button>
      </ToolTip>
    </Space>
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},49880:function($,y,e){var v;e.r(y),e.d(y,{demos:function(){return d}});var c=e(48305),E=e.n(c),O=e(90228),o=e.n(O),C=e(87999),f=e.n(C),a=e(75271),i=e(61713),d={"docs-components-tree-demo-0":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Tree,l.abrupt("return",{default:function(){var r=[{key:"1",title:"\u9879\u76EE\u4E00",children:[{key:"1-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"1-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"1-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"2",title:"\u9879\u76EE\u4E8C",children:[{key:"2-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"2-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"2-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"3",title:"\u9879\u76EE\u4E09",children:[{key:"3-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"3-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"3-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]}];return a.createElement(s,{treeData:r,onExpand:console.log})}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tree} from 'tiger-ui';

export default () => {
  const treeData = [
    {key: '1', title: '\u9879\u76EE\u4E00',
      children: [
        {key: '1-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '1-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '1-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '2', title: '\u9879\u76EE\u4E8C',
      children: [
        {key: '2-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '2-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '2-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '3', title: '\u9879\u76EE\u4E09',
      children: [
        {key: '3-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '3-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '3-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
  ]
  
  return (
    <Tree
      treeData={treeData}
      onExpand={console.log}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-tree-demo-1":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Tree,l.abrupt("return",{default:function(){var r=[{key:"1",title:"\u9879\u76EE\u4E00",children:[{key:"1-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"1-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"1-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"2",title:"\u9879\u76EE\u4E8C",children:[{key:"2-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"2-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"2-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"3",title:"\u9879\u76EE\u4E09",children:[{key:"3-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"3-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"3-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]}];return a.createElement(s,{showIcon:!0,treeData:r})}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tree} from 'tiger-ui';

export default () => {
  const treeData = [
    {key: '1', title: '\u9879\u76EE\u4E00',
      children: [
        {key: '1-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '1-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '1-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '2', title: '\u9879\u76EE\u4E8C',
      children: [
        {key: '2-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '2-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '2-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '3', title: '\u9879\u76EE\u4E09',
      children: [
        {key: '3-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '3-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '3-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
  ]
  
  return (
    <Tree
      showIcon
      treeData={treeData}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-tree-demo-2":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Tree,l.abrupt("return",{default:function(){var r=[{key:"1",title:"\u9879\u76EE\u4E00",children:[{key:"1-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"1-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"1-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"2",title:"\u9879\u76EE\u4E8C",children:[{key:"2-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"2-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"2-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"3",title:"\u9879\u76EE\u4E09",children:[{key:"3-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"3-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"3-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]}];return a.createElement(s,{showIcon:!0,defaultExpandedKeys:["1"],treeData:r})}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tree} from 'tiger-ui';

export default () => {
  const treeData = [
    {key: '1', title: '\u9879\u76EE\u4E00',
      children: [
        {key: '1-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '1-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '1-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '2', title: '\u9879\u76EE\u4E8C',
      children: [
        {key: '2-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '2-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '2-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '3', title: '\u9879\u76EE\u4E09',
      children: [
        {key: '3-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '3-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '3-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
  ]
  
  return (
    <Tree
      showIcon
      defaultExpandedKeys={['1']}
      treeData={treeData}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-tree-demo-3":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return n=l.sent,s=n.Tree,l.abrupt("return",{default:function(){var r=[{key:"1",title:"\u9879\u76EE\u4E00",children:[{key:"1-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"1-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"1-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"2",title:"\u9879\u76EE\u4E8C",children:[{key:"2-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"2-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"2-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]},{key:"3",title:"\u9879\u76EE\u4E09",children:[{key:"3-1",title:"\u53C2\u5EFA\u5355\u4F4D\u4E00"},{key:"3-2",title:"\u53C2\u5EFA\u5355\u4F4D\u4E8C"},{key:"3-3",title:"\u53C2\u5EFA\u5355\u4F4D\u4E09"}]}];return a.createElement(s,{showIcon:!0,multiple:!0,defaultExpandedKeys:["1","2"],treeData:r})}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Tree} from 'tiger-ui';

export default () => {
  const treeData = [
    {key: '1', title: '\u9879\u76EE\u4E00',
      children: [
        {key: '1-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '1-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '1-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '2', title: '\u9879\u76EE\u4E8C',
      children: [
        {key: '2-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '2-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '2-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
    {key: '3', title: '\u9879\u76EE\u4E09',
      children: [
        {key: '3-1', title: '\u53C2\u5EFA\u5355\u4F4D\u4E00'},
        {key: '3-2', title: '\u53C2\u5EFA\u5355\u4F4D\u4E8C'},
        {key: '3-3', title: '\u53C2\u5EFA\u5355\u4F4D\u4E09'},
      ]
    },
  ]
  
  return (
    <Tree
      showIcon
      multiple
      defaultExpandedKeys={['1', '2']}
      treeData={treeData}
    />
  );
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":i},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}},"docs-components-tree-demo-4":{component:a.memo(a.lazy(f()(o()().mark(function u(){var n,s,t,l,m,r,g,p,h;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return p=function(D){for(var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",b=[],L=0;L<D;L++){var T="".concat(M?"".concat(M,"-"):"").concat(L);g.push(T);var R=S?p(D,S-1,T):[];b.push({key:T,title:T,children:R})}return b},P.next=3,Promise.resolve().then(e.bind(e,61713));case 3:return n=P.sent,s=n.Tree,t=n.Button,l=n.Space,P.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return m=P.sent,r=m.useState,g=[],h=p(10),P.abrupt("return",{default:function(){var D=r(350),S=E()(D,2),M=S[0],b=S[1],L=M?"green":"red",T=M?"\u5F00\u542F":"\u5173\u95ED";return a.createElement(l,{direction:"vertical",style:{width:"100%"}},a.createElement(l,null,a.createElement(t,{type:"primary",onClick:function(){return b(M?void 0:350)}},M?"\u5173\u95ED\u865A\u62DF\u5217\u8868":"\u542F\u7528\u865A\u62DF\u5217\u8868"),a.createElement("span",null,"\u5F53\u524D\u72B6\u6001\uFF1A",a.createElement("span",{style:{color:L}},T))),a.createElement("div",{style:{height:350,overflowY:"auto"}},a.createElement(s,{height:M,defaultExpandedKeys:g,style:{border:"1px solid #e8e8e8"},treeData:h})))}});case 14:case"end":return P.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree, Button, Space } from 'tiger-ui';
import { useState, useMemo, useEffect } from "react";

let keys: string[] = [];

function mockTreeData(count: number, level: number = 2, key = '') {
  let treeData: TreeNode[] = [];
  for (let i = 0; i < count; i++) {
    const nodeKey = \`\${key ? \`\${key}-\` : ''}\${i}\`;
    keys.push(nodeKey);
    const children = level ? mockTreeData(count, level - 1, nodeKey) : [];
    treeData.push({
      key: nodeKey,
      title: nodeKey,
      children,
    });
  }
  return treeData;
}

const treeData = mockTreeData(10);
export default () => {
  const [height, setHeight] = useState<number>(350);
  const color = height ? 'green' : 'red';
  const name = height ? '\u5F00\u542F' : '\u5173\u95ED';

  return (
    <Space direction={'vertical'} style={{width: '100%'}}>
      <Space>
        <Button type={'primary'} onClick={() => setHeight(height ? undefined : 350)}>
          {height ? '\u5173\u95ED\u865A\u62DF\u5217\u8868' : '\u542F\u7528\u865A\u62DF\u5217\u8868'}
        </Button>
        <span>
          \u5F53\u524D\u72B6\u6001\uFF1A<span style={{color}}>{name}</span>
        </span>
      </Space>
      <div style={{ height: 350, overflowY: 'auto' }}>
        <Tree
          height={height}
          defaultExpandedKeys={keys}
          style={{ border: '1px solid #e8e8e8' }}
          treeData={treeData}
        />
      </div>
    </Space>
  )
}`},"tiger-ui":{type:"NPM",value:"0.0.17"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"tiger-ui":i,react:v||(v=e.t(a,2))},renderOpts:{compile:function(){var u=f()(o()().mark(function s(){var t,l=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(8296).then(e.bind(e,88296));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,l));case 3:case"end":return r.stop()}},s)}));function n(){return u.apply(this,arguments)}return n}()}}}},82027:function($,y,e){e.r(y),e.d(y,{demos:function(){return f}});var v=e(90228),c=e.n(v),E=e(87999),O=e.n(E),o=e(75271),C=e(61713),f={"docs-components-upload-demo-0":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Upload,n.abrupt("return",{default:function(){return o.createElement(d,null)}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-upload-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Upload} from 'tiger-ui';

export default () => {
  return <Upload
  
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-upload-demo-1":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Upload,n.abrupt("return",{default:function(){return o.createElement(d,{maxCount:2})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-upload-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Upload} from 'tiger-ui';

export default () => {
  return <Upload
    maxCount={2}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}},"docs-components-upload-demo-2":{component:o.memo(o.lazy(O()(c()().mark(function a(){var i,d;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,61713));case 2:return i=n.sent,d=i.Upload,n.abrupt("return",{default:function(){return o.createElement(d,{maxSize:1})}});case 5:case"end":return n.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-components-upload-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import {Upload} from 'tiger-ui';

export default () => {
  return <Upload
    maxSize={1}
  />;
}`},"tiger-ui":{type:"NPM",value:"0.0.17"}},entry:"index.jsx"},context:{"tiger-ui":C},renderOpts:{compile:function(){var a=O()(c()().mark(function d(){var u,n=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8296).then(e.bind(e,88296));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},d)}));function i(){return a.apply(this,arguments)}return i}()}}}},58282:function($,y,e){e.r(y),e.d(y,{demos:function(){return c}});var v=e(75271),c={}},57569:function($,y,e){e.r(y),e.d(y,{demos:function(){return c}});var v=e(75271),c={}},30107:function($,y,e){e.r(y),e.d(y,{demos:function(){return c}});var v=e(75271),c={}},16779:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},97676:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u9700\u8981\u5F00\u542FshowIcon\u3002",paraId:0,tocIndex:4},{value:"\u8BBE\u7F6Eloop\u5C5E\u6027\u3002",paraId:1,tocIndex:5}]},72895:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},94425:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"current\u662F\u4ECE0\u5F00\u59CB\u8BA1\u7B97\u6B65\u6570\u7684",paraId:0,tocIndex:3}]},14859:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u534A\u9009\u4E2D\u662F\u53D7\u63A7\u5C5E\u6027\uFF0C\u4EC5\u7528\u4E8E\u5C55\u793A\u72B6\u6001\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u9009\u4E2D\u3002",paraId:0,tocIndex:2}]},483:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u53D7\u63A7\u5C5E\u6027\u4F18\u5148\u7EA7\u8981\u9AD8\u4E8Eaccordion\uFF08\u624B\u98CE\u7434\u5C5E\u6027\uFF09\u3002",paraId:0,tocIndex:2}]},14017:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u503C\u8D8A\u5C0F\uFF0C\u8DF3\u52A8\u8D8A\u5FEB\u3002",paraId:0,tocIndex:3}]},23209:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},53700:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},27480:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u8BBE\u7F6Eplacement\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u4E3A",paraId:0,tocIndex:7},{value:"top",paraId:0,tocIndex:7},{value:"\u3001",paraId:0,tocIndex:7},{value:"right",paraId:0,tocIndex:7},{value:"\u3001",paraId:0,tocIndex:7},{value:"bottom",paraId:0,tocIndex:7},{value:"\u3001",paraId:0,tocIndex:7},{value:"left",paraId:0,tocIndex:7},{value:"\u3002",paraId:0,tocIndex:7}]},53773:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},72565:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},48530:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},81016:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},81782:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},68238:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},35944:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"-",paraId:0,tocIndex:6}]},30781:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"duration\u8BBE\u7F6E0\uFF0C\u5219\u6C38\u4E45\u505C\u7559\u3002",paraId:0,tocIndex:5},{value:"-",paraId:1,tocIndex:7}]},54501:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},53241:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u9884\u8BBE\u4E86\u4E00\u4E9B\u503C\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272\u3002",paraId:0,tocIndex:2},{value:`API \u540C ToolTip.
`,paraId:1,tocIndex:3}]},7598:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},30508:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},72:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},35161:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},81608:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},5338:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},16487:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},51142:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},3690:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u9884\u8BBE\u4E86\u4E00\u4E9B\u503C\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u989C\u8272\u3002",paraId:0,tocIndex:1},{value:"\u53EF\u4EE5\u8BBE\u7F6E\u5355\u4E2A\u89E6\u53D1\u65B9\u5F0F\uFF0C\u6216\u8005\u591A\u4E2A\u7684\u6570\u7EC4\u5F62\u5F0F\u3002",paraId:1,tocIndex:2},{value:"-",paraId:2,tocIndex:3}]},46958:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u8BBE\u7F6Eheight\u5C5E\u6027\uFF0C\u81EA\u52A8\u5F00\u542F\u865A\u62DF\u5217\u8868\u3002",paraId:0,tocIndex:4}]},67694:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},88122:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[]},73053:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"tiger-ui",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u4F7F\u7528 React \u5F00\u53D1\u7684\u7C7B antd \u524D\u7AEF\u7EC4\u4EF6\u5E93\u5F00\u6E90\u9879\u76EE\u3002",paraId:0,tocIndex:0},{value:`# \u514B\u9686\u9879\u76EE
git clone https://github.com/tangjiahui-cn/tiger-ui

# \u5B89\u88C5\u4F9D\u8D56
pnpm i

# \u542F\u52A8\u672C\u5730\u6587\u6863
pnpm docs

# \u6253\u5305\u4EA7\u7269
pnpm build
`,paraId:1,tocIndex:1}]},75797:function($,y,e){e.r(y),e.d(y,{texts:function(){return v}});const v=[{value:"\u4F7F\u7528 npm\u3002",paraId:0,tocIndex:0},{value:`npm install tiger-ui
`,paraId:1,tocIndex:0},{value:"\u4F7F\u7528 yarn\u3002",paraId:2,tocIndex:0},{value:`yarn add tiger-ui
`,paraId:3,tocIndex:0},{value:"\u4F7F\u7528 pnpm\u3002",paraId:4,tocIndex:0},{value:`pnpm add tiger-ui
`,paraId:5,tocIndex:0},{value:"\u63A8\u8350\u4F7F\u7528 pnpm \u8FDB\u884C\u5305\u4F9D\u8D56\u7BA1\u7406\uFF0C\u5176\u53EF\u4EE5\u907F\u514D\u5E7D\u7075\u4F9D\u8D56\u95EE\u9898\uFF0C\u4EE5\u53CA\u66F4\u597D\u7684\u8282\u7701\u8BA1\u7B97\u673A\u5B58\u50A8\u7A7A\u95F4\u3002",paraId:6,tocIndex:0},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u8FC7antd\uFF0C\u90A3\u4E48\u4F60\u5C06\u5F88\u5FEB\u4E0A\u624B\u3002",paraId:7,tocIndex:1},{value:`import { Button } from 'tiger-ui';

export default () => {
  return (
    <Button>\u6309\u94AE</Button>
  )
}
`,paraId:8,tocIndex:1}]}}]);
