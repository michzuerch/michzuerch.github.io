(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6635da17"],{"37c6":function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var n=r("ade3"),a=(r("6ece"),r("0789")),i=r("a9ad"),s=r("fe6c"),o=r("a452"),c=r("7560"),l=r("80d2"),u=r("58df");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=Object(u["a"])(i["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]),b=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.$vuetify.rtl?"right":"left",Object(l["f"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(l["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["b"]:a["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(l["j"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=b},4442:function(e,t,r){"use strict";var n=r("9b25"),a=r.n(n);a.a},"615b":function(e,t,r){},"6ece":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c}));var n=r("b0af"),a=r("80d2"),i=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");n["a"]},"9b25":function(e,t,r){},a46c:function(e,t,r){e.exports=r.p+"img/about.443f068e.jpg"},b0af:function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("ade3"),a=(r("615b"),r("10d2")),i=r("2b0e"),s=r("37c6"),o=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),c=r("1c87"),l=r("58df");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(l["a"])(o,c["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return d({"v-card":!0},c["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var e=d({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=o.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},f820:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[r("v-img",{attrs:{height:"260px",src:e.background}},[r("v-card-title",{staticClass:"align-center fill-height"},[r("v-container",[r("v-row",[r("v-col",[r("h1",{staticClass:"animated zoomIn title font-weight-bold title-shadow"},[e._v(" Michael Zürcher ")])])],1),r("v-row",[r("v-col",[r("h2",{staticClass:"animated zoomIn subtitle-1 font-weight-medium title-shadow"},[e._v(" Programmierer und IT-Experte ")])])],1)],1)],1)],1),r("v-card-text",[r("h1",{staticClass:"title text-start pb-3"},[e._v(" Hallo mein Name ist Michael Zürcher... ")]),r("p",{staticClass:"text-start"},[e._v(" Als "),r("strong",[e._v("Java")]),e._v("-Programmierer habe ich mehr als 10 Jahren Erfahrung mit der Entwicklung von Internet-Lösungen mit Java. Meistens mit "),r("strong",[e._v("Linux")]),e._v(" und "),r("strong",[e._v("Java EE")]),e._v(", neuerdings auch mit "),r("strong",[e._v("Spring-Boot")]),e._v(" und "),r("strong",[e._v("Docker")]),e._v(". ")]),r("p",{staticClass:"text-start"},[e._v(" In den letzten Jahren hatte ich es mit verschiedenen Java-Frameworks zur Webprogrammierung zu tun: Zuerst JSP (Java Server Pages), dann Apache Struts, Java Server Faces und zuletzt "),r("strong",[e._v("Vaadin")]),e._v(". ")]),r("p",{staticClass:"text-start"},[e._v(" Weiterhin arbeite ich nun vermehrt mit Virtualisierungstechniken: "),r("strong",[e._v(" Docker, Openshift")]),e._v(" und "),r("strong",[e._v("Kubernetes")]),e._v(". ")]),r("div",{staticClass:"text-center pt-5"},[r("v-btn",{attrs:{large:"",rounded:"",color:"primary",href:"http://bit.ly/2o5G2JX",target:"_blank"}},[e._v(" Download CV "),r("v-icon",{staticClass:"pl-3",attrs:{dark:""}},[e._v(" mdi-cloud-download ")])],1)],1)])],1)},a=[],i={name:"About",data:function(){return{background:r("a46c")}}},s=i,o=(r("4442"),r("2877")),c=r("6544"),l=r.n(c),u=r("8336"),d=r("b0af"),h=r("99d9"),f=(r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0"),r("ade3")),b=(r("4b85"),r("2b0e")),g=r("d9f7"),p=r("80d2");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=["sm","md","lg","xl"],O=function(){return y.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),_=function(){return y.reduce((function(e,t){return e["offset"+Object(p["p"])(t)]={type:[String,Number],default:null},e}),{})}(),j=function(){return y.reduce((function(e,t){return e["order"+Object(p["p"])(t)]={type:[String,Number],default:null},e}),{})}(),w={col:Object.keys(O),offset:Object.keys(_),order:Object.keys(j)};function C(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var a=t.replace(e,"");n+="-".concat(a)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var k=new Map,S=b["a"].extend({name:"v-col",functional:!0,props:m({cols:{type:[Boolean,String,Number],default:!1}},O,{offset:{type:[String,Number],default:null}},_,{order:{type:[String,Number],default:null}},j,{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},justifySelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,n=t.data,a=t.children,i=(t.parent,"");for(var s in r)i+=String(r[s]);var o=k.get(i);return o||function(){var e,t;for(t in o=[],w)w[t].forEach((function(e){var n=r[e],a=C(t,e,n);a&&o.push(a)}));var n=o.some((function(e){return e.startsWith("col-")}));o.push((e={col:!n||!r.cols},Object(f["a"])(e,"col-".concat(r.cols),r.cols),Object(f["a"])(e,"offset-".concat(r.offset),r.offset),Object(f["a"])(e,"order-".concat(r.order),r.order),Object(f["a"])(e,"align-self-".concat(r.alignSelf),r.alignSelf),Object(f["a"])(e,"justify-self-".concat(r.justifySelf),r.justifySelf),e)),k.set(i,o)}(),e(r.tag,Object(g["a"])(n,{class:o}),a)}}),B=r("a523"),P=r("132d"),x=r("adda"),z=r("0fd9b"),E=Object(o["a"])(s,n,a,!1,null,"5fba3210",null);t["default"]=E.exports;l()(E,{VBtn:u["a"],VCard:d["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:S,VContainer:B["a"],VIcon:P["a"],VImg:x["a"],VRow:z["a"]})}}]);
//# sourceMappingURL=chunk-6635da17.cfd5c9fb.js.map