(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1e5e668"],{"0d77":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"","text-center":""}},[i("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[i("v-carousel",{attrs:{cycle:t.cycle,interval:t.interval}},t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1),i("v-list",{attrs:{"two-line":""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:"img/Avatar2018.jpg"}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Michael Zürcher")]),i("v-list-item-subtitle",[t._v("Programmierer und IT-Experte")])],1)],1)],1)],1)],1)},n=[],r={data(){return{cycle:!0,interval:1e4,items:[{src:"img/gallery/Portrait1-cut.jpg"},{src:"img/gallery/Portrait2-cut.jpg"},{src:"img/gallery/Portrait3-cut.jpg"},{src:"img/gallery/Car1-cut.jpg"},{src:"img/gallery/Car2-cut.jpg"},{src:"img/gallery/Car3-cut.jpg"}]}}},o=r,a=(i("2383"),i("0c7c")),l=i("6544"),h=i.n(l),c=i("b0af"),u=(i("63b7"),i("13b3"),i("afdd")),d=i("9d26"),v=i("604c"),m=i("c3f0"),g=v["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:m["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$vuetify.icons.next"},prevIcon:{type:[Boolean,String],default:"$vuetify.icons.prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,noHeightReset:!1,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...v["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?"-reverse":"";return`v-window-${t}${e}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>{return this.internalValue===this.getValue(t,e)})},internalReverse(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},t)},genIcon(t,e,i){return this.$createElement("div",{staticClass:`v-window__${t}`},[this.$createElement(u["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},on:{click:()=>{this.changedByDelimiters=!0,i()}}},[this.$createElement(d["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),p=i("37c6"),w=v["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return v["a"].options.computed.classes.call(this)}},methods:{genData:v["a"].options.methods.genData}}),f=i("80d2"),y=i("d9bd"),T=g.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data(){return{internalHeight:this.height,noHeightReset:!0,slideTimeout:void 0}},computed:{classes(){return{...g.options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(y["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:g.options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const t=this.$createElement(u["a"],{staticClass:"v-carousel__controls__item",props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(d["a"],{props:{size:18}},this.delimiterIcon)]);e.push(t)}return this.$createElement(w,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(p["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=g.options.render.call(this,t);return e.data.style=`height: ${Object(f["e"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),I=i("9d65"),C=i("4e82"),x=i("58df");const $=Object(x["a"])(I["a"],Object(C["a"])("windowGroup","v-window-item","v-window"));var b=$.extend().extend().extend({name:"v-window-item",directives:{Touch:m["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0!==this.windowGroup.transitionCount||this.windowGroup.noHeightReset||(this.windowGroup.internalHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.internalHeight=Object(f["e"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.internalHeight=Object(f["e"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}}),B=i("adda"),V=i("1c87");const A=Object(x["a"])(b,V["a"]);var E=A.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(B["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners},[this.$slots.default,this.$createElement("template",{slot:"placeholder"},this.$slots.placeholder)])]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.showLazyContent(this.genDefaultSlot()))},onBeforeEnter(){},onEnter(){},onAfterEnter(){},onEnterCancelled(){}}}),D=i("a523"),_=i("8860"),j=i("da13"),G=i("8270"),H=i("5d23"),P=Object(a["a"])(o,s,n,!1,null,"4b02fda3",null);e["default"]=P.exports;h()(P,{VCard:c["a"],VCarousel:T,VCarouselItem:E,VContainer:D["a"],VImg:B["a"],VList:_["a"],VListItem:j["a"],VListItemAvatar:G["a"],VListItemContent:H["a"],VListItemSubtitle:H["b"],VListItemTitle:H["c"]})},"13b3":function(t,e,i){},2383:function(t,e,i){"use strict";var s=i("40ae"),n=i.n(s);n.a},"40ae":function(t,e,i){},"63b7":function(t,e,i){},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-d1e5e668.6db5a242.js.map