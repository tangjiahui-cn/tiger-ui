"use strict";(self.webpackChunktiger_ui=self.webpackChunktiger_ui||[]).push([[6678],{76678:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var a=[Object.freeze(JSON.parse(`{"displayName":"Tasl","fileTypes":["tasl"],"name":"tasl","patterns":[{"include":"#comment"},{"include":"#namespace"},{"include":"#type"},{"include":"#class"},{"include":"#edge"}],"repository":{"class":{"begin":"(?:^\\\\s*)(class)\\\\b","beginCaptures":{"1":{"name":"keyword.control.tasl.class"}},"end":"$","patterns":[{"include":"#key"},{"include":"#export"},{"include":"#expression"}]},"comment":{"captures":{"1":{"name":"punctuation.definition.comment.tasl"}},"match":"(#).*$","name":"comment.line.number-sign.tasl"},"component":{"begin":"->","beginCaptures":{"0":{"name":"punctuation.separator.tasl.component"}},"end":"$","patterns":[{"include":"#expression"}]},"coproduct":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.block.tasl.coproduct"}},"end":"\\\\]","endCaptures":{"0":{"name":"punctuation.definition.block.tasl.coproduct"}},"patterns":[{"include":"#comment"},{"include":"#term"},{"include":"#option"}]},"datatype":{"match":"[a-zA-Z][a-zA-Z0-9]*:(?:[A-Za-z0-9\\\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})+","name":"string.regexp"},"edge":{"begin":"(?:^\\\\s*)(edge)\\\\b","beginCaptures":{"1":{"name":"keyword.control.tasl.edge"}},"end":"$","patterns":[{"include":"#key"},{"include":"#export"},{"match":"=/","name":"punctuation.separator.tasl.edge.source"},{"match":"/=>","name":"punctuation.separator.tasl.edge.target"},{"match":"=>","name":"punctuation.separator.tasl.edge"},{"include":"#expression"}]},"export":{"match":"::","name":"keyword.operator.tasl.export"},"expression":{"patterns":[{"include":"#literal"},{"include":"#uri"},{"include":"#product"},{"include":"#coproduct"},{"include":"#reference"},{"include":"#optional"},{"include":"#identifier"}]},"identifier":{"captures":{"1":{"name":"variable"}},"match":"([a-zA-Z][a-zA-Z0-9]*)\\\\b"},"key":{"match":"[a-zA-Z][a-zA-Z0-9]*:(?:[A-Za-z0-9\\\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})+","name":"markup.bold entity.name.class"},"literal":{"patterns":[{"include":"#datatype"}]},"namespace":{"captures":{"1":{"name":"keyword.control.tasl.namespace"},"2":{"patterns":[{"include":"#namespaceURI"},{"match":"[a-zA-Z][a-zA-Z0-9]*\\\\b","name":"entity.name"}]}},"match":"(?:^\\\\s*)(namespace)\\\\b(.*)"},"namespaceURI":{"match":"[a-z]+:[a-zA-Z0-9-._~:\\\\/?#\\\\[\\\\]@!$&'()*+,;%=]+","name":"markup.underline.link"},"option":{"begin":"<-","beginCaptures":{"0":{"name":"punctuation.separator.tasl.option"}},"end":"$","patterns":[{"include":"#expression"}]},"optional":{"begin":"\\\\?","beginCaptures":{"0":{"name":"keyword.operator"}},"end":"$","patterns":[{"include":"#expression"}]},"product":{"begin":"{","beginCaptures":{"0":{"name":"punctuation.definition.block.tasl.product"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tasl.product"}},"patterns":[{"include":"#comment"},{"include":"#term"},{"include":"#component"}]},"reference":{"captures":{"1":{"name":"markup.bold keyword.operator"},"2":{"patterns":[{"include":"#key"}]}},"match":"(\\\\*)\\\\s*(.*)"},"term":{"match":"[a-zA-Z][a-zA-Z0-9]*:(?:[A-Za-z0-9\\\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})+","name":"entity.other.tasl.key"},"type":{"begin":"(?:^\\\\s*)(type)\\\\b","beginCaptures":{"1":{"name":"keyword.control.tasl.type"}},"end":"$","patterns":[{"include":"#expression"}]},"uri":{"match":"<>","name":"variable.other.constant"}},"scopeName":"source.tasl"}`))]}}]);
