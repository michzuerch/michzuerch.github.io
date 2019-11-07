(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccfa8ec8"],{"37c6":function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var i=r("2fa7"),a=(r("6ece"),r("0789")),n=r("a9ad"),s=r("fe6c"),o=r("a452"),c=r("7560"),l=r("80d2"),d=r("58df");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=Object(d["a"])(n["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]),g=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(i["a"])(e,this.$vuetify.rtl?"right":"left",Object(l["e"])(this.normalizedValue,"%")),Object(i["a"])(e,"width",Object(l["e"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["b"]:a["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["e"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(l["k"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=g},"615b":function(e,t,r){},"6dc9":function(e,t,r){},"6ece":function(e,t,r){},"89f4":function(e,t,r){"use strict";var i=r("6dc9"),a=r.n(i);a.a},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c}));var i=r("b0af"),a=r("80d2"),n=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");i["a"]},b0af:function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("2fa7"),a=(r("615b"),r("10d2")),n=r("2b0e"),s=r("37c6"),o=n["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),c=r("1c87"),l=r("58df");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(l["a"])(o,c["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return u({"v-card":!0},c["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},a["a"].options.computed.classes.call(this))},styles:function(){var e=u({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=o.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,i=t.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b8fa:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[r("v-card-title",{staticClass:"title title-shadow text--primary text-center"},[e._v(" So können Sie mich kontaktieren: ")]),r("v-card-text",[r("div",{staticClass:"text-center"},[r("div",[r("v-btn",{staticClass:"ma-2 text-none",attrs:{color:"blue",href:"tel:+491786608638"}},[e._v(" Mobilephone: michzuerch@gmail.com "),r("v-icon",{attrs:{right:""}},[e._v(" mdi-phone ")])],1),r("v-btn",{staticClass:"ma-2 text-none",attrs:{color:"red",href:"mailto:michzuerch@gmail.com"}},[e._v(" Email: michzuerch@gmail.com "),r("v-icon",{attrs:{right:""}},[e._v(" mdi-gmail ")])],1),r("v-btn",{staticClass:"ma-2 text-none",attrs:{color:"green",href:"skype:michzuerch?call"}},[e._v(" Skype: michzuerch "),r("v-icon",{attrs:{right:""}},[e._v(" mdi-skype ")])],1)],1)]),r("v-card",{staticClass:"mt-3",attrs:{elevation:"24",color:"grey darken-2"}},[r("v-card-title",{staticClass:"text--primary"},[e._v(" Postadresse ")]),r("v-card-text",[e._v(" Athleticsfood Grenzpaket"),r("br"),e._v(" Michael Zürcher (124144)"),r("br"),e._v(" Freiheitstr. 49"),r("br"),e._v(" D-78224 Singen"),r("br")])],1)],1)],1)},a=[],n={},s=n,o=(r("89f4"),r("2877")),c=r("6544"),l=r.n(c),d=r("8336"),u=r("b0af"),h=r("99d9"),f=r("132d"),g=Object(o["a"])(s,i,a,!1,null,"759a49a0",null);t["default"]=g.exports;l()(g,{VBtn:d["a"],VCard:u["a"],VCardText:h["b"],VCardTitle:h["c"],VIcon:f["a"]})}}]);
//# sourceMappingURL=chunk-ccfa8ec8.0ed606c8.js.map