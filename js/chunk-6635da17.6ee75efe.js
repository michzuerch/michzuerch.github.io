(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6635da17"],{"37c6":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var n=r("2fa7"),a=(r("6ece"),r("0789")),i=r("a9ad"),s=r("fe6c"),o=r("a452"),c=r("7560"),l=r("80d2"),u=r("58df");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=Object(u["a"])(i["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]),g=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.$vuetify.rtl?"right":"left",Object(l["f"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(l["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["b"]:a["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(l["l"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=g},4442:function(t,e,r){"use strict";var n=r("9b25"),a=r.n(n);a.a},"615b":function(t,e,r){},"6ece":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));var n=r("b0af"),a=r("80d2"),i=Object(a["h"])("v-card__actions"),s=Object(a["h"])("v-card__subtitle"),o=Object(a["h"])("v-card__text"),c=Object(a["h"])("v-card__title");n["a"]},"9b25":function(t,e,r){},a46c:function(t,e,r){t.exports=r.p+"img/about.443f068e.jpg"},b0af:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("2fa7"),a=(r("615b"),r("10d2")),i=r("2b0e"),s=r("37c6"),o=i["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),c=r("1c87"),l=r("58df");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(l["a"])(o,c["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return d({"v-card":!0},c["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var t=d({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[r("v-img",{attrs:{height:"260px",src:t.background}},[r("v-card-title",{staticClass:"align-center fill-height"},[r("v-container",[r("v-row",[r("v-col",[r("h1",{staticClass:"animated zoomIn title font-weight-bold title-shadow"},[t._v(" Michael Zürcher ")])])],1),r("v-row",[r("v-col",[r("h2",{staticClass:"animated zoomIn subtitle-1 font-weight-medium title-shadow"},[t._v(" Programmierer und IT-Experte ")])])],1)],1)],1)],1),r("v-card-text",[r("h1",{staticClass:"title text-start pb-3"},[t._v(" Hallo mein Name ist Michael Zürcher... ")]),r("p",{staticClass:"text-start"},[t._v(" Als "),r("strong",[t._v("Java")]),t._v("-Programmierer habe ich mehr als 10 Jahren Erfahrung mit der Entwicklung von Internet-Lösungen mit Java. Meistens mit "),r("strong",[t._v("Linux")]),t._v(" und "),r("strong",[t._v("Java EE")]),t._v(", neuerdings auch mit "),r("strong",[t._v("Spring-Boot")]),t._v(" und "),r("strong",[t._v("Docker")]),t._v(". ")]),r("p",{staticClass:"text-start"},[t._v(" In den letzten Jahren hatte ich es mit verschiedenen Java-Frameworks zur Webprogrammierung zu tun: Zuerst JSP (Java Server Pages), dann Apache Struts, Java Server Faces und zuletzt "),r("strong",[t._v("Vaadin")]),t._v(". ")]),r("p",{staticClass:"text-start"},[t._v(" Weiterhin arbeite ich nun vermehrt mit Virtualisierungstechniken: "),r("strong",[t._v(" Docker, Openshift")]),t._v(" und "),r("strong",[t._v("Kubernetes")]),t._v(". ")]),r("div",{staticClass:"text-center pt-5"},[r("v-btn",{attrs:{large:"",rounded:"",color:"primary",href:"http://bit.ly/2o5G2JX",target:"_blank"}},[t._v(" Download CV "),r("v-icon",{staticClass:"pl-3",attrs:{dark:""}},[t._v(" mdi-cloud-download ")])],1)],1)])],1)},a=[],i={name:"About",data:function(){return{background:r("a46c")}}},s=i,o=(r("4442"),r("2877")),c=r("6544"),l=r.n(c),u=r("8336"),d=r("b0af"),h=r("99d9"),f=(r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0"),r("2fa7")),g=(r("4b85"),r("2b0e")),b=r("d9f7"),p=r("80d2");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach((function(e){Object(f["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=["sm","md","lg","xl"],O=function(){return y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),_=function(){return y.reduce((function(t,e){return t["offset"+Object(p["r"])(e)]={type:[String,Number],default:null},t}),{})}(),j=function(){return y.reduce((function(t,e){return t["order"+Object(p["r"])(e)]={type:[String,Number],default:null},t}),{})}(),w={col:Object.keys(O),offset:Object.keys(_),order:Object.keys(j)};function C(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var k=new Map,S=g["default"].extend({name:"v-col",functional:!0,props:m({cols:{type:[Boolean,String,Number],default:!1}},O,{offset:{type:[String,Number],default:null}},_,{order:{type:[String,Number],default:null}},j,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},justifySelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,n=e.data,a=e.children,i=(e.parent,"");for(var s in r)i+=String(r[s]);var o=k.get(i);return o||function(){var t,e;for(e in o=[],w)w[e].forEach((function(t){var n=r[t],a=C(e,t,n);a&&o.push(a)}));var n=o.some((function(t){return t.startsWith("col-")}));o.push((t={col:!n||!r.cols},Object(f["a"])(t,"col-".concat(r.cols),r.cols),Object(f["a"])(t,"offset-".concat(r.offset),r.offset),Object(f["a"])(t,"order-".concat(r.order),r.order),Object(f["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),Object(f["a"])(t,"justify-self-".concat(r.justifySelf),r.justifySelf),t)),k.set(i,o)}(),t(r.tag,Object(b["a"])(n,{class:o}),a)}}),B=r("a523"),P=r("132d"),x=r("adda"),z=r("0fd9b"),E=Object(o["a"])(s,n,a,!1,null,"5fba3210",null);e["default"]=E.exports;l()(E,{VBtn:u["a"],VCard:d["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:S,VContainer:B["a"],VIcon:P["a"],VImg:x["a"],VRow:z["a"]})}}]);
//# sourceMappingURL=chunk-6635da17.6ee75efe.js.map