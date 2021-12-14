(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog~item"],{"160f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"styled-description",class:{compact:t.compact},domProps:{innerHTML:t._s(t.markup(t.description))}})},s=[],a=i("e7d1"),r={name:"Description",props:{description:{type:String,default:""},compact:{type:Boolean,default:!1},allowHTML:{type:Boolean,default:!1}},methods:{markup:function(t){if("string"!==typeof t)return"";var e=new a["Parser"],i=new a["HtmlRenderer"]({safe:!this.allowHTML,smart:!0}),n=e.parse(t);return i.render(n)}}},c=r,o=(i("1719"),i("2877")),l=Object(o["a"])(c,n,s,!1,null,null,null);e["a"]=l.exports},1719:function(t,e,i){"use strict";i("e7a4")},"191c":function(t,e,i){},2056:function(t,e,i){"use strict";i("fe5a")},"4d1d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"assets mb-4"},[i("h2",[t._v(t._s(t.title))]),i("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.assets,(function(e,n){return i("Asset",{key:n,attrs:{asset:e,expand:t.expand,context:t.context,shown:t.shown.includes(n),id:String(n)},on:{show:t.show}})})),1)])},s=[],a=(i("4de4"),i("d3b7"),i("07ac"),i("caad"),i("2532"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",{staticClass:"asset",attrs:{"no-body":""}},[i("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"p-2 d-flex",attrs:{block:"",variant:"asset",squared:""}},[t._v(" "+t._s(t.asset.title||t.id)+" "),Array.isArray(t.asset.roles)?i("div",{staticClass:"badges ml-1 mr-2"},[t._l(t.asset.roles,(function(e){return i("b-badge",{key:e,staticClass:"role ml-1 mb-1",attrs:{variant:"data"===e?"primary":"secondary"}},[t._v(t._s(e))])})),t.shown?i("b-badge",{staticClass:"shown ml-1 mb-1",attrs:{variant:"success",title:"This is the asset currently shown"}},[i("b-icon-eye")],1):t._e()],2):t._e(),i("span",{staticClass:"ml-auto",attrs:{"aria-hidden":"true"}},[t.expanded?i("b-icon-chevron-down"):i("b-icon-chevron-up")],1)])],1),i("b-collapse",{attrs:{id:t.id,role:"tabpanel"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[i("b-card-body",[t.href?i("b-button-group",{staticClass:"actions"},[i("b-button",{attrs:{href:t.href,target:"_blank",variant:"outline-primary"}},[t._v(" Download "+t._s(t.fileFormat)+" "),t.from&&!t.isBrowsable?[t._v(" from "+t._s(t.from)+" ")]:t._e()],2),t.canShow&&t.shown?i("b-button",{staticClass:"inactive",attrs:{pressed:!0,variant:"outline-primary"}},[i("b-icon-check"),t._v(" Currently shown ")],1):t.canShow?i("b-button",{attrs:{variant:"outline-primary"},on:{click:t.show}},[i("b-icon-eye"),t._v(" Show ")],1):t._e()],1):i("b-card-title",[t._v(t._s(t.fileFormat))]),t.asset.description?i("b-card-text",{staticClass:"mt-4"},[i("Description",{attrs:{description:t.asset.description,compact:!0}})],1):t._e(),i("Metadata",{staticClass:"mt-4",attrs:{data:t.asset,context:t.context,ignoreFields:t.ignore,title:"",type:"Asset"}})],1)],1)],1)}),r=[],c=i("5530"),o=(i("ac1f"),i("466d"),i("5843")),l=i("7386"),u=i("6057");const b={COG:["image/tiff; application=geotiff; profile=cloud-optimized","image/vnd.stac.geotiff; cloud-optimized=true"],GEOTIFF:["application/geotiff","image/tiff; application=geotiff;","image/tiff; application=geotiff; profile=cloud-optimized","image/vnd.stac.geotiff; cloud-optimized=true"],JPG:["image/jpeg","image/jpg"],PNG:["image/png"]};var d=i("2f62"),f=i("160f"),h=i("9a30"),p=i("2a32"),v=i("025e"),m={name:"Asset",components:{BCollapse:o["a"],BIconCheck:l["e"],BIconChevronDown:l["f"],BIconChevronUp:l["g"],BIconEye:l["k"],Description:f["a"],Metadata:h["a"]},props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:null},expand:{type:Boolean,default:null},shown:{type:Boolean,default:!1}},data:function(){return{expanded:!1,ignore:["href","title","description","type","roles"]}},created:function(){"boolean"===typeof this.expand?this.expanded=this.expand:this.expanded=Array.isArray(this.asset.roles)&&this.asset.roles.includes("data")},watch:{shown:function(t,e){t&&!e&&(this.expanded=!0)}},computed:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["url"])),{},{isThumbnail:function(){return Array.isArray(this.asset.roles)&&this.asset.roles.includes("thumbnail")},canShow:function(){if("string"!==typeof this.asset.type)return!1;if(!this.isBrowsable)return!1;for(var t in b)if(b[t].includes(this.asset.type))return!0;return!1},fileFormat:function(){return this.asset.type?u["Formatters"].formatMediaType(this.asset.type):null},protocol:function(){if("string"===typeof this.href&&this.href){var t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowsable:function(){return"http"===this.protocol||"https"===this.protocol},href:function(){var t;return t=this.context instanceof p["a"]?this.context.getAbsoluteUrl():this.url,v["a"].toAbsolute(this.asset.href,t)},from:function(){switch(this.protocol){case"s3":return"Amazon S3";case"gcs":return"Google Cloud";case"ftp":return"FTP server";default:return""}}}),methods:{show:function(){this.$emit("show",this.asset,this.id,this.isThumbnail)}}},O=m,j=(i("2056"),i("2877")),g=Object(j["a"])(O,a,r,!1,null,null,null),y=g.exports,w={name:"Assets",components:{Asset:y},props:{assets:{type:Object,required:!0},shown:{type:Array,default:function(){return[]}},context:{type:Object,default:null},definition:{type:Boolean,default:!1}},computed:{title:function(){return this.definition?"Assets in Items":"Assets"},expand:function(){return!this.definition&&(1===v["a"].size(this.assets)||!(Object.values(this.assets).filter((function(t){return Array.isArray(t.roles)&&t.roles.includes("data")})).length>3)&&null)}},methods:{show:function(t,e,i){this.$emit("showAsset",t,e,i)}}},T=w,k=Object(j["a"])(T,n,s,!1,null,null,null);e["a"]=k.exports},"4e92":function(t,e,i){"use strict";i("191c")},5843:function(t,e,i){"use strict";i.d(e,"a",(function(){return H}));var n,s=i("2b0e"),a=i("c637"),r="show",c=i("e863"),o=i("0056"),l=i("a723"),u=i("9b76"),b=i("906c"),d=i("6b77"),f=i("58f2"),h=i("d82f"),p=i("cf75"),v=i("90ef"),m=i("602d"),O=i("8c18"),j=i("b42e"),g=function(t){Object(b["D"])(t,"height",0),Object(b["z"])((function(){Object(b["v"])(t),Object(b["D"])(t,"height","".concat(t.scrollHeight,"px"))}))},y=function(t){Object(b["y"])(t,"height")},w=function(t){Object(b["D"])(t,"height","auto"),Object(b["D"])(t,"display","block"),Object(b["D"])(t,"height","".concat(Object(b["i"])(t).height,"px")),Object(b["v"])(t),Object(b["D"])(t,"height",0)},T=function(t){Object(b["y"])(t,"height")},k={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},x={enter:g,afterEnter:y,leave:w,afterLeave:T},_={appear:Object(p["c"])(l["f"],!1)},C=s["a"].extend({name:a["r"],functional:!0,props:_,render:function(t,e){var i=e.props,n=e.data,s=e.children;return t("transition",Object(j["a"])(n,{props:k,on:x},{props:i}),s)}});function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function P(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?A(Object(i),!0).forEach((function(e){$(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var S=Object(d["d"])(a["q"],"toggle"),D=Object(d["d"])(a["q"],"request-state"),I=Object(d["e"])(a["q"],"accordion"),E=Object(d["e"])(a["q"],"state"),B=Object(d["e"])(a["q"],"sync-state"),z=Object(f["a"])("visible",{type:l["f"],defaultValue:!1}),N=z.mixin,L=z.props,q=z.prop,M=z.event,F=Object(p["d"])(Object(h["l"])(P(P(P({},v["b"]),L),{},{accordion:Object(p["c"])(l["q"]),appear:Object(p["c"])(l["f"],!1),isNav:Object(p["c"])(l["f"],!1),tag:Object(p["c"])(l["q"],"div")})),a["q"]),H=s["a"].extend({name:a["q"],mixins:[v["a"],N,O["a"],m["a"]],props:F,data:function(){return{show:this[q],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(n={},$(n,q,(function(t){t!==this.show&&(this.show=t)})),$(n,"show",(function(t,e){t!==e&&this.emitState()})),n),created:function(){this.show=this[q]},mounted:function(){var t=this;this.show=this[q],this.listenOnRoot(S,this.handleToggleEvt),this.listenOnRoot(I,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(D,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&c["g"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(d["c"])(t,window,"resize",this.handleResize,o["Q"]),Object(d["c"])(t,window,"orientationchange",this.handleResize,o["Q"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(o["L"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(o["M"])},onLeave:function(){this.transitioning=!0,this.$emit(o["t"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(o["s"])},emitState:function(){var t=this.show,e=this.accordion,i=this.safeId();this.$emit(M,t),this.emitOnRoot(E,i,t),e&&t&&this.emitOnRoot(I,i,e)},emitSync:function(){this.emitOnRoot(B,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(b["o"])(t,r);Object(b["x"])(t,r);var i="block"===Object(b["k"])(t).display;return e&&Object(b["b"])(t,r),i},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(b["k"])(this.$el).display&&(!Object(b["u"])(e,".nav-link,.dropdown-item")&&!Object(b["e"])(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvt:function(t,e){var i=this.accordion,n=this.show;if(i&&i===e){var s=t===this.safeId();(s&&!n||!s&&n)&&this.toggle()}},handleResize:function(){this.show="block"===Object(b["k"])(this.$el).display}},render:function(t){var e=this.appear,i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u["e"],this.slotScope));return t(C,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}})},"5b03":function(t,e,i){},"5b32":function(t,e,i){"use strict";i("5b03")},6190:function(t,e,i){"use strict";i.d(e,"a",(function(){return y}));var n,s,a=i("2b0e"),r=i("c637"),c=i("0056"),o=i("a723"),l=i("9b76"),u=i("d82f"),b=i("cf75"),d=i("90ef"),f=i("8c18"),h=i("ce2a");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O="active",j=c["U"]+O,g=Object(b["d"])(Object(u["l"])(v(v({},d["b"]),{},(n={},m(n,O,Object(b["c"])(o["f"],!1)),m(n,"buttonId",Object(b["c"])(o["q"])),m(n,"disabled",Object(b["c"])(o["f"],!1)),m(n,"lazy",Object(b["c"])(o["f"],!1)),m(n,"noBody",Object(b["c"])(o["f"],!1)),m(n,"tag",Object(b["c"])(o["q"],"div")),m(n,"title",Object(b["c"])(o["q"])),m(n,"titleItemClass",Object(b["c"])(o["d"])),m(n,"titleLinkAttributes",Object(b["c"])(o["m"])),m(n,"titleLinkClass",Object(b["c"])(o["d"])),n))),r["X"]),y=a["a"].extend({name:r["X"],mixins:[d["a"],f["a"]],inject:{bvTabs:{default:function(){return{}}}},props:g,data:function(){return{localActive:this[O]&&!this.disabled}},computed:{_isTab:function(){return!0},tabClasses:function(){var t=this.localActive,e=this.disabled;return[{active:t,disabled:e,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(s={},m(s,O,(function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit(j,this.localActive))})),m(s,"disabled",(function(t,e){if(t!==e){var i=this.bvTabs.firstTab;t&&this.localActive&&i&&(this.localActive=!1,i())}})),m(s,"localActive",(function(t){this.$emit(j,t)})),s),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(l["w"])&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return!(!t||this.disabled)&&t(this)},deactivate:function(){var t=this.bvTabs.deactivateTab;return!(!t||!this.localActive)&&t(this)}},render:function(t){var e=this.localActive,i=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:e}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":e?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[e||!this.computedLazy?this.normalizeSlot():t()]);return t(h["a"],{props:{mode:"out-in",noFade:this.computedNoFade}},[i])}})},"6d40":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("d82f");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}var c=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));Object(n["a"])(this,t.Defaults,this.constructor.Defaults,i,{type:e}),Object(n["d"])(this,{type:Object(n["k"])(),cancelable:Object(n["k"])(),nativeEvent:Object(n["k"])(),target:Object(n["k"])(),relatedTarget:Object(n["k"])(),vueTarget:Object(n["k"])(),componentId:Object(n["k"])()});var a=!1;this.preventDefault=function(){this.cancelable&&(a=!0)},Object(n["e"])(this,"defaultPrevented",{enumerable:!0,get:function(){return a}})}return r(t,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),t}()},"81d3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"links mb-4"},[t.title?i("h2",[t._v(t._s(t.title))]):t._e(),i("ul",t._l(t.links,(function(t,e){return i("li",{key:e},[i("StacLink",{attrs:{link:t}})],1)})),0)])},s=[],a=i("b701"),r={name:"Links",components:{StacLink:a["a"]},props:{title:{type:String,default:null},links:{type:Array,default:function(){return[]}}}},c=r,o=i("2877"),l=Object(o["a"])(c,n,s,!1,null,null,null);e["a"]=l.exports},"9a30":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{directives:[{name:"show",rawName:"v-show",value:t.formattedData.length>0,expression:"formattedData.length > 0"}],staticClass:"metadata"},[t.formattedData.length>0&&t.title?i("h2",[t._v(t._s(t.title))]):t._e(),t.formattedData.length>0?i("b-card-group",{class:"count-"+t.formattedData.length,attrs:{columns:""}},t._l(t.formattedData,(function(e){return i("b-card",{key:e.extension,staticClass:"metadata-card"},[i("b-card-title",[e.extension?i("div",{domProps:{innerHTML:t._s(e.label)}}):[t._v(t._s(t.commmonMetadataTitle))]],2),t._l(e.properties,(function(e,n){return i("b-row",{key:n},[i("b-col",{staticClass:"label",attrs:{md:"5",title:n},domProps:{innerHTML:t._s(e.label)}}),i("b-col",{staticClass:"value",attrs:{md:"7"},domProps:{innerHTML:t._s(e.formatted)}})],1)}))],2)})),1):t._e()],1)},s=[],a=(i("2ca0"),i("caad"),i("2532"),i("d3b7"),i("159b"),i("c740"),i("4e82"),i("6057")),r=i.n(a),c={name:"Metadata",props:{data:{type:Object,required:!0},type:{type:String,required:!0},context:{type:Object,default:null},ignoreFields:{type:Array,default:function(){return[]}},title:{type:String,default:"Metadata"},commmonMetadataTitle:{type:String,default:"General"}},computed:{formattedData:function(){var t=this,e=function(e){return!e.startsWith("_")&&!t.ignoreFields.includes(e)};switch(this.type){case"Asset":return r.a.formatAsset(this.data,this.context,e);case"Link":return r.a.formatLink(this.data,this.context,e);case"Item":return r.a.formatItemProperties(this.data,e);case"Collection":case"Catalog":var i=r.a.formatCollection(this.data,e),n=r.a.formatSummaries(this.data,e);return n.forEach((function(t){var e=i.findIndex((function(e){return t.extension===e.extension}));-1!==e?Object.assign(i[e].properties,t.properties):i.push(t)})),i.sort((function(t,e){return t.label.localeCompare(e.label)}));default:return[]}}}},o=c,l=(i("4e92"),i("2877")),u=Object(l["a"])(o,n,s,!1,null,null,null);e["a"]=u.exports},a100:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"previews"},t._l(t.thumbnails,(function(t){return i("a",{key:t.href,attrs:{href:t.href}},[i("img",{staticClass:"thumbnail",attrs:{src:t.href}})])})),0)},s=[],a={name:"Thumbnails",props:{thumbnails:{type:Array}}},r=a,c=(i("5b32"),i("2877")),o=Object(c["a"])(r,n,s,!1,null,null,null);e["a"]=o.exports},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,a=i("44d2"),r="findIndex",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},e7a4:function(t,e,i){},e977:function(t,e,i){"use strict";var n=i("5530"),s=(i("caad"),i("2532"),i("d81d"),i("025e")),a=i("2f62");e["a"]={data:function(){return{shownAssetsOnMap:[],shownBandsOnMap:[],tab:null,selectedAsset:null,selectedAssetKey:null}},computed:Object(n["a"])(Object(n["a"])({},Object(a["b"])(["thumbnails","hasAssets","assets"])),{},{shownAssets:function(){if(0===this.tab)return this.shownAssetsOnMap;if(1===this.tab||null===this.tab&&this.thumbnails.length>0){var t=[];for(var e in this.assets){var i=this.assets[e];this.thumbnails.includes(i)&&t.push(e)}return t}return[]}}),methods:{showAsset:function(t,e,i){i?this.tab=1:(this.tab=0,this.selectedAsset=t,this.selectedAssetKey=e),this.$refs.tabs&&s["a"].scrollTo(this.$refs.tabs.$el)},mapChanged:function(t){s["a"].isObject(t)?(s["a"].size(t.assets)>0&&(this.selectedAssetKey?this.shownAssetsOnMap=[this.selectedAssetKey]:this.shownAssetsOnMap=t.assets.map((function(t){return t.key}))),s["a"].size(t.bands)>0&&(this.shownBandsOnMap=t.bands)):(this.shownBandsOnMap=[],this.shownAssetsOnMap=[])}}}},f902:function(t,e,i){"use strict";i.d(e,"a",(function(){return X}));var n=i("2b0e"),s=i("2f79"),a=i("c637"),r=i("e863"),c=i("0056"),o=i("9bfa"),l=i("a723"),u=i("9b76"),b=i("2326"),d=i("6d40"),f=i("906c"),h=i("6b77"),p=i("6c06"),v=i("7b1e"),m=i("3c21"),O=i("a8c8"),j=i("58f2"),g=i("3a58"),y=i("d82f"),w=i("686b");function T(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function k(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?T(Object(i),!0).forEach((function(e){x(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var _=function(t,e,i){if(t=t?t.$el||t:null,!Object(f["r"])(t))return null;if(Object(w["b"])("observeDom"))return null;var n=new f["a"]((function(t){for(var i=!1,n=0;n<t.length&&!i;n++){var s=t[n],a=s.type,r=s.target;("characterData"===a&&r.nodeType===Node.TEXT_NODE||"attributes"===a||"childList"===a&&(s.addedNodes.length>0||s.removedNodes.length>0))&&(i=!0)}i&&e()}));return n.observe(t,k({childList:!0,subtree:!0},i)),n},C=i("cf75"),A=i("8515"),P=i("90ef"),$=i("8c18"),S=i("aa59"),D=i("b42e");function I(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var E,B=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},z=Object(C["d"])({align:Object(C["c"])(l["q"]),cardHeader:Object(C["c"])(l["f"],!1),fill:Object(C["c"])(l["f"],!1),justified:Object(C["c"])(l["f"],!1),pills:Object(C["c"])(l["f"],!1),small:Object(C["c"])(l["f"],!1),tabs:Object(C["c"])(l["f"],!1),tag:Object(C["c"])(l["q"],"ul"),vertical:Object(C["c"])(l["f"],!1)},a["P"]),N=n["a"].extend({name:a["P"],functional:!0,props:z,render:function(t,e){var i,n=e.props,s=e.data,a=e.children,r=n.tabs,c=n.pills,o=n.vertical,l=n.align,u=n.cardHeader;return t(n.tag,Object(D["a"])(s,{staticClass:"nav",class:(i={"nav-tabs":r,"nav-pills":c&&!r,"card-header-tabs":!o&&u&&r,"card-header-pills":!o&&u&&c&&!r,"flex-column":o,"nav-fill":!o&&n.fill,"nav-justified":!o&&n.justified},I(i,B(l),!o&&l),I(i,"small",n.small),i)}),a)}});function L(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function q(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?L(Object(i),!0).forEach((function(e){M(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):L(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function M(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var F=Object(j["a"])("value",{type:l["j"]}),H=F.mixin,R=F.props,K=F.prop,W=F.event,G=function(t){return!t.disabled},U=n["a"].extend({name:a["db"],inject:{bvTabs:{default:function(){return{}}}},props:{controls:Object(C["c"])(l["q"]),id:Object(C["c"])(l["q"]),noKeyNav:Object(C["c"])(l["f"],!1),posInSet:Object(C["c"])(l["j"]),setSize:Object(C["c"])(l["j"]),tab:Object(C["c"])(),tabIndex:Object(C["c"])(l["j"])},methods:{focus:function(){Object(f["d"])(this.$refs.link)},handleEvt:function(t){if(!this.tab.disabled){var e=t.type,i=t.keyCode,n=t.shiftKey;"click"===e||"keydown"===e&&i===o["j"]?(Object(h["f"])(t),this.$emit(c["e"],t)):"keydown"!==e||this.noKeyNav||(-1!==[o["k"],o["h"],o["g"]].indexOf(i)?(Object(h["f"])(t),n||i===o["g"]?this.$emit(c["o"],t):this.$emit(c["A"],t)):-1!==[o["c"],o["i"],o["d"]].indexOf(i)&&(Object(h["f"])(t),n||i===o["d"]?this.$emit(c["v"],t):this.$emit(c["y"],t)))}}},render:function(t){var e=this.id,i=this.tabIndex,n=this.setSize,s=this.posInSet,a=this.controls,r=this.handleEvt,c=this.tab,o=c.title,l=c.localActive,b=c.disabled,d=c.titleItemClass,f=c.titleLinkClass,h=c.titleLinkAttributes,p=t(S["a"],{staticClass:"nav-link",class:[{active:l&&!b,disabled:b},f,l?this.bvTabs.activeNavItemClass:null],props:{disabled:b},attrs:q(q({},h),{},{id:e,role:"tab",tabindex:i,"aria-selected":l&&!b?"true":"false","aria-setsize":n,"aria-posinset":s,"aria-controls":a}),on:{click:r,keydown:r},ref:"link"},[this.tab.normalizeSlot(u["w"])||o]);return t("li",{staticClass:"nav-item",class:[d],attrs:{role:"presentation"}},[p])}}),V=Object(y["i"])(z,["tabs","isNavBar","cardHeader"]),J=Object(C["d"])(Object(y["l"])(q(q(q(q({},P["b"]),R),V),{},{activeNavItemClass:Object(C["c"])(l["d"]),activeTabClass:Object(C["c"])(l["d"]),card:Object(C["c"])(l["f"],!1),contentClass:Object(C["c"])(l["d"]),end:Object(C["c"])(l["f"],!1),lazy:Object(C["c"])(l["f"],!1),navClass:Object(C["c"])(l["d"]),navWrapperClass:Object(C["c"])(l["d"]),noFade:Object(C["c"])(l["f"],!1),noKeyNav:Object(C["c"])(l["f"],!1),noNavStyle:Object(C["c"])(l["f"],!1),tag:Object(C["c"])(l["q"],"div")})),a["cb"]),X=n["a"].extend({name:a["cb"],mixins:[P["a"],H,$["a"]],provide:function(){return{bvTabs:this}},props:J,data:function(){return{currentTab:Object(g["b"])(this[K],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(E={},M(E,K,(function(t,e){if(t!==e){t=Object(g["b"])(t,-1),e=Object(g["b"])(e,0);var i=this.tabs[t];i&&!i.disabled?this.activateTab(i):t<e?this.previousTab():this.nextTab()}})),M(E,"currentTab",(function(t){var e=-1;this.tabs.forEach((function(i,n){n!==t||i.disabled?i.localActive=!1:(i.localActive=!0,e=n)})),this.$emit(W,e)})),M(E,"tabs",(function(t,e){var i=this;Object(m["a"])(t.map((function(t){return t[s["a"]]})),e.map((function(t){return t[s["a"]]})))||this.$nextTick((function(){i.$emit(c["d"],t.slice(),e.slice())}))})),M(E,"registeredTabs",(function(){this.updateTabs()})),E),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){Object(b["a"])(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,e){var i=function(){t.$nextTick((function(){Object(f["z"])((function(){t.updateTabs()}))}))};this.$_observer=_(this.$refs.content,i,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs.filter((function(t){return 0===t.$children.filter((function(t){return t._isTab})).length})),e=[];if(r["g"]&&t.length>0){var i=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=Object(f["B"])(i,this.$el).map((function(t){return t.id})).filter(p["a"])}return Object(A["a"])(t,(function(t,i){return e.indexOf(t.safeId())-e.indexOf(i.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var i=this.currentTab;i>=t.length?e=t.indexOf(t.slice().reverse().find(G)):t[i]&&!t[i].disabled&&(e=i)}e<0&&(e=t.indexOf(t.find(G))),t.forEach((function(t,i){t.localActive=i===e})),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=this.currentTab,i=this.tabs,n=!1;if(t){var s=i.indexOf(t);if(s!==e&&s>-1&&!t.disabled){var a=new d["a"](c["a"],{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(a.type,s,e,a),a.defaultPrevented||(this.currentTab=s,n=!0)}}return n||this[K]===e||this.$emit(W,e),n},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(G))},focusButton:function(t){var e=this;this.$nextTick((function(){Object(f["d"])(e.getButtonForTab(t))}))},emitTabClick:function(t,e){Object(v["d"])(e)&&t&&t.$emit&&!t.disabled&&t.$emit(c["e"],e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(G);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=Object(O["a"])(this.currentTab,0),i=this.tabs.slice(0,e).reverse().find(G);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},nextTab:function(t){var e=Object(O["a"])(this.currentTab,-1),i=this.tabs.slice(e+1).find(G);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(G);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,i=this.align,n=this.card,a=this.end,r=this.fill,o=this.firstTab,l=this.justified,b=this.lastTab,d=this.nextTab,f=this.noKeyNav,h=this.noNavStyle,p=this.pills,v=this.previousTab,m=this.small,O=this.tabs,j=this.vertical,g=O.find((function(t){return t.localActive&&!t.disabled})),y=O.find((function(t){return!t.disabled})),w=O.map((function(i,n){var a,r=i.safeId,l=null;return f||(l=-1,(i===g||!g&&i===y)&&(l=null)),t(U,{props:{controls:r?r():null,id:i.controlledBy||(r?r("_BV_tab_button_"):null),noKeyNav:f,posInSet:n+1,setSize:O.length,tab:i,tabIndex:l},on:(a={},M(a,c["e"],(function(t){e.clickTab(i,t)})),M(a,c["o"],o),M(a,c["A"],v),M(a,c["y"],d),M(a,c["v"],b),a),key:i[s["a"]]||n,ref:"buttons",refInFor:!0})})),T=t(N,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:r,justified:l,align:i,tabs:!h&&!p,pills:!h&&p,vertical:j,small:m,cardHeader:n&&!j},ref:"nav"},[this.normalizeSlot(u["u"])||t(),w,this.normalizeSlot(u["t"])||t()]);T=t("div",{class:[{"card-header":n&&!j&&!a,"card-footer":n&&!j&&a,"col-auto":j},this.navWrapperClass],key:"bv-tabs-nav"},[T]);var k=this.normalizeSlot()||[],x=t();0===k.length&&(x=t("div",{class:["tab-pane","active",{"card-body":n}],key:"bv-empty-tab"},this.normalizeSlot(u["h"])));var _=t("div",{staticClass:"tab-content",class:[{col:j},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[k,x]);return t(this.tag,{staticClass:"tabs",class:{row:j,"no-gutters":j&&n},attrs:{id:this.safeId()}},[a?_:t(),T,a?t():_])}})},fe5a:function(t,e,i){}}]);
//# sourceMappingURL=catalog~item.ed491df9.js.map