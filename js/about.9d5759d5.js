(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"37c6":function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var n=r("2fa7"),a=(r("6ece"),r("0789")),i=r("a9ad"),s=r("fe6c"),o=r("a452"),c=r("7560"),l=r("80d2"),u=r("58df");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=Object(u["a"])(i["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]),g=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.$vuetify.rtl?"right":"left",Object(l["e"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["b"]:a["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["e"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(l["k"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=g},"615b":function(e,t,r){},"6ece":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c}));var n=r("b0af"),a=r("80d2"),i=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");n["a"]},b0af:function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("2fa7"),a=(r("615b"),r("10d2")),i=r("2b0e"),s=r("37c6"),o=i["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),c=r("1c87"),l=r("58df");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(l["a"])(o,c["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return d({"v-card":!0},c["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var e=d({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=o.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b5d9:function(e,t,r){},f7f9:function(e,t,r){"use strict";var n=r("b5d9"),a=r.n(n);a.a},f820:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[r("v-img",{attrs:{height:"260px",src:"img/Background1lg.jpg"}},[r("v-card-title",{staticClass:"align-center fill-height"},[r("v-container",[r("v-row",[r("v-col",[r("h1",{staticClass:"animated zoomIn display-2 font-weight-black title-shadow"},[e._v(" Michael Zürcher ")])])],1),r("v-row",[r("v-col",[r("h2",{staticClass:"animated zoomIn headline font-weight-medium title-shadow"},[e._v(" Programmierer und IT-Experte ")])])],1)],1)],1)],1),r("v-card-text",[r("h1",{staticClass:"title text-start pb-3"},[e._v(" Hallo mein Name ist Michael Zürcher... ")]),r("p",{staticClass:"text-start"},[e._v(" Als "),r("strong",[e._v("Java")]),e._v("-Programmierer habe ich mehr als 10 Jahren Erfahrung mit der Entwicklung von Internet-Lösungen mit Java. Meistens mit "),r("strong",[e._v("Linux")]),e._v(" und "),r("strong",[e._v("Java EE")]),e._v(", neuerdings auch mit "),r("strong",[e._v("Spring-Boot")]),e._v(" und "),r("strong",[e._v("Docker")]),e._v(". ")]),r("p",{staticClass:"text-start"},[e._v(" In den letzten Jahren hatte ich es mit verschiedenen Java-Frameworks zur Webprogrammierung zu tun: Zuerst JSP (Java Server Pages), dann Apache Struts, Java Server Faces und zuletzt "),r("strong",[e._v("Vaadin")]),e._v(". ")]),r("p",{staticClass:"text-start"},[e._v(" Weiterhin arbeite ich nun vermehrt mit Virtualisierungstechniken: "),r("strong",[e._v(" Docker, Openshift")]),e._v(" und "),r("strong",[e._v("Kubernetes")]),e._v(". ")]),r("div",{staticClass:"text-center pt-5"},[r("v-btn",{attrs:{large:"",rounded:"",color:"primary",href:"http://bit.ly/2o5G2JX",target:"_blank"}},[e._v(" Download CV "),r("v-icon",{staticClass:"pl-3",attrs:{dark:""}},[e._v(" mdi-cloud-download ")])],1)],1)])],1)},a=[],i=(r("d3b7"),r("96cf"),r("89ba")),s={mounted:function(){this.getLocation()},methods:{getLocation:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:fetch("https://extreme-ip-lookup.com/json").then((function(e){return e.json()})).then((function(e){t.location=e.country,console.log("Country:",t.location)})).catch((function(e,t){console.log("Request failed:",e,t)}));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}},o=s,c=(r("f7f9"),r("2877")),l=r("6544"),u=r.n(l),d=r("8336"),h=r("b0af"),f=r("99d9"),g=(r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0"),r("2fa7")),p=(r("4b85"),r("2b0e")),v=r("d9f7"),b=r("80d2");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){Object(g["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=["sm","md","lg","xl"],_=function(){return O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),j=function(){return O.reduce((function(e,t){return e["offset"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),w=function(){return O.reduce((function(e,t){return e["order"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),k={col:Object.keys(_),offset:Object.keys(j),order:Object.keys(w)};function C(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var a=t.replace(e,"");n+="-".concat(a)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var B=new Map,S=p["default"].extend({name:"v-col",functional:!0,props:y({cols:{type:[Boolean,String,Number],default:!1}},_,{offset:{type:[String,Number],default:null}},j,{order:{type:[String,Number],default:null}},w,{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},justifySelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,n=t.data,a=t.children,i=(t.parent,"");for(var s in r)i+=String(r[s]);var o=B.get(i);return o||function(){var e,t;for(t in o=[],k)k[t].forEach((function(e){var n=r[e],a=C(t,e,n);a&&o.push(a)}));var n=o.some((function(e){return e.startsWith("col-")}));o.push((e={col:!n||!r.cols},Object(g["a"])(e,"col-".concat(r.cols),r.cols),Object(g["a"])(e,"offset-".concat(r.offset),r.offset),Object(g["a"])(e,"order-".concat(r.order),r.order),Object(g["a"])(e,"align-self-".concat(r.alignSelf),r.alignSelf),Object(g["a"])(e,"justify-self-".concat(r.justifySelf),r.justifySelf),e)),B.set(i,o)}(),e(r.tag,Object(v["a"])(n,{class:o}),a)}}),P=r("a523"),x=r("132d"),z=r("adda"),E=r("0fd9"),V=Object(c["a"])(o,n,a,!1,null,"26ae10ea",null);t["default"]=V.exports;u()(V,{VBtn:d["a"],VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:S,VContainer:P["a"],VIcon:x["a"],VImg:z["a"],VRow:E["a"]})}}]);
//# sourceMappingURL=about.9d5759d5.js.map