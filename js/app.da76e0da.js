(function(e){function t(t){for(var i,r,l=t[0],o=t[1],c=t[2],g=0,d=[];g<l.length;g++)r=l[g],n[r]&&d.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("db4d");var i=a("2b0e"),n=a("bb71");a("da64");i["a"].use(n["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:"",id:"inspire"}},[a("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[e._v("Shows")]),a("v-list",e._l(e.items2,function(t){return a("v-list-tile",{key:t.text,attrs:{avatar:""},on:{click:function(a){e.switchShow(t)}}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"../../../assets/"+t.picture+".png",alt:""}})]),a("v-list-tile-title",{domProps:{textContent:e._s(t.displayText)}})],1)})),a("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[e._v("Language Select")]),a("v-menu",[a("v-btn",{attrs:{slot:"activator",color:"red",dark:""},slot:"activator"},[e._v(e._s(e.selectedLanguage))]),a("v-list",e._l(e.languages,function(t){return t!=e.selectedLanguage?a("v-list-tile",{key:t,on:{click:function(a){e.switchLanguage(t)}}},[a("v-list-tile-title",[e._v(e._s(t))])],1):e._e()}))],1),a("v-list-tile",{staticClass:"mt-3",on:{click:e.sync}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"grey darken-1"}},[e._v("history")])],1),a("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[e._v("Sync Now")])],1),a("v-list-tile",{attrs:{href:"mailto:theappmaker@live.com?subject=Hungama%20Shows%20Review"},on:{click:function(e){}}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"grey darken-1"}},[e._v("email")])],1),a("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[e._v("Feedback To Developer")])],1),a("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[e._v("Try these")]),e._l(e.items,function(t){return a("v-list-tile",{key:t.text,attrs:{href:t.link},on:{click:function(e){}}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"promos/"+t.picture+".png",alt:""}})]),a("v-list-tile-content",[a("v-list-tile-title",[e._v("\n            "+e._s(t.text)+"\n          ")])],1)],1)})],2)],1),a("v-toolbar",{attrs:{color:"red",dense:"",fixed:"","clipped-left":"",app:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"mr-5 align-center"},[a("span",{staticClass:"title"},[e._v(e._s(e.selectedShow.displayText)+" "+e._s(e.LanguageAlert?"in Hindi":"in "+this.selectedLanguage))])]),a("v-spacer")],1),a("v-content",[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"justify-left":"","align-left":""}},[[a("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.selected.items,function(t){return a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:"","padding-left-3":""}},[a("v-card",[t.etag?a("v-img",{attrs:{src:t.snippet.thumbnails.high.url,height:"200px",width:"250px"},on:{click:function(e){t.etag=!t.etag}}}):e._e(),t.etag?e._e():a("iframe",{staticStyle:{width:"100%",height:"100%",float:"none",clear:"both",margin:"2px auto"},attrs:{height:"200px",src:"https://www.youtube.com/embed/"+t.id.videoId+"?autoplay=1&rel=0&showinfo=0",frameborder:"0",allowfullscreen:""}})],1)],1)}),a("v-btn",{attrs:{flat:"",color:"Primary"},on:{click:e.loadMore}},[e._v("Load More!")])],2)]],2)],1)],1)],1)},r=[],l=a("bc3a"),o=a.n(l);function c(e,t){localStorage.setItem(e,JSON.stringify(t))}var u={name:"Youtube",methods:{switchShow:function(e){var t=this;this.selectedShow=e;e.text;var a=this.selectedLanguage;-1==e.languages.indexOf(a)?(a="Hindi",this.LanguageAlert=!0):this.LanguageAlert=!1,this.currentLanguage=a,e=e.text.replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+"),null==this.stored[e]?o.a.get("https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q="+e+"+full+episodes+in+"+this.currentLanguage+"&key=AIzaSyD0qqnH0XQqwZDlHrZg35xpNNhKyoqD3Pk").then(function(a){t.selected=a.data,t.stored[e]=a.data}):this.selected=this.stored[e],this.drawer=!1,this.saveToLocal(),window.history.pushState("","","/"+this.currentLanguage+"/"+this.selectedShow.displayText)},switchLanguage:function(e){this.selectedLanguage=e;var t=this.selectedShow,a=this.selectedLanguage;-1==t.languages.indexOf(a)?(a="Hindi",this.LanguageAlert=!0):this.LanguageAlert=!1,this.currentLanguage=a,this.sync(),window.history.pushState("","","/"+this.currentLanguage+"/"+this.selectedShow.displayText)},sync:function(){var e=this,t=this.selectedShow.text;t=t.replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+"),this.selected=o.a.get("https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q="+t+"+full+episodes+in+"+this.currentLanguage+"&key=AIzaSyD0qqnH0XQqwZDlHrZg35xpNNhKyoqD3Pk").then(function(a){e.selected=a.data,e.stored[t]=a.data}),this.saveToLocal()},saveToLocal:function(){c("stored_data",this.stored),c("selectedShow",this.selected),localStorage.setItem("selectedLanguage",this.selectedLanguage)},loadMore:function(){var e=this,t=this.selectedShow.text;t=t.replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+"),o.a.get("https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&pageToken="+this.selected.nextPageToken+"&q="+t+"+full+episodes+in+"+this.currentLanguage+"&key=AIzaSyD0qqnH0XQqwZDlHrZg35xpNNhKyoqD3Pk").then(function(a){e.selected.items=e.selected.items.concat(a.data.items),e.stored[t]=e.selected,e.selected.nextPageToken=a.data.nextPageToken,e.saveToLocal()})}},data:function(){return{drawer:!1,isPlaying:!1,LanguageAlert:!1,items:[{picture:"cartoonsApp",text:"CartoonsApp",link:"ms-windows-store://pdp/?ProductId=9NBLGGH4VF87"},{picture:"CN90s",text:"Cartoon Network 90s",link:"ms-windows-store://pdp/?ProductId=9WZDNCRDFWCW"}],items2:[{picture:"Doraemon",text:"Doraemon",displayText:"Doraemon",languages:["Telugu","Tamil","English","Hindi"]},{picture:"Hagimaru",text:"Hagemaru",displayText:"Hagemaru",languages:["Hindi"]},{picture:"Kiteratsu",text:"kiteretsu",displayText:"kiteretsu",languages:["Hindi"]},{picture:"Kochikame",text:"Kochekame",displayText:"Kochekame",languages:["Hindi"]},{picture:"MightyRaju",text:"Mighty Raju",displayText:"Mighty Raju",languages:["Hindi"]},{picture:"NinjaBoy",text:"Ninja boy Rantaro",displayText:"Ninja boy Rantaro",languages:["Hindi"]},{picture:"Oswald",text:"Oswald",displayText:"Oswald",languages:["English","Hindi"]},{picture:"Shinchan",text:"Shinchan",displayText:"Shinchan",languages:["Telugu","Tamil","English","Hindi"]},{picture:"Perman",text:"Perman",displayText:"Perman",languages:["Telugu","Tamil","Hindi"]}],selectedLanguage:"Hindi",currentLanguage:"Hindi",languages:["Telugu","Tamil","English","Hindi"],selectedShow:"",selected:{},stored:{}}},props:{source:String},mounted:function(){null!=localStorage.getItem("stored_data")&&(this.stored=JSON.parse(localStorage.getItem("stored_data"))),null!=localStorage.getItem("selectedShow")&&(this.selected=JSON.parse(localStorage.getItem("selectedShow"))),null!=localStorage.getItem("selectedLanguage")&&(this.selectedLanguage=localStorage.getItem("selectedLanguage"),this.currentLanguage=this.selectedLanguage),this.selectedShow=this.items2[0],this.sync(),window.history.pushState("","","/"+this.currentLanguage+"/"+this.selectedShow.displayText)}},g=u,d=a("2877"),p=a("6544"),h=a.n(p),v=a("7496"),f=a("8336"),m=a("b0af"),y=a("a523"),x=a("549c"),w=a("0e8f"),b=a("132d"),k=a("adda"),S=a("a722"),T=a("8860"),L=a("ba95"),_=a("40fe"),V=a("c954"),C=a("5d23"),A=a("e449"),H=a("f774"),O=a("9910"),P=a("e0c7"),j=a("71d9"),I=a("706c"),D=a("2a7f"),N=Object(d["a"])(g,s,r,!1,null,null,null);N.options.__file="googleYoutube.vue";var M=N.exports;h()(N,{VApp:v["a"],VBtn:f["a"],VCard:m["a"],VContainer:y["a"],VContent:x["a"],VFlex:w["a"],VIcon:b["a"],VImg:k["a"],VLayout:S["a"],VList:T["a"],VListTile:L["a"],VListTileAction:_["a"],VListTileAvatar:V["a"],VListTileContent:C["a"],VListTileTitle:C["b"],VMenu:A["a"],VNavigationDrawer:H["a"],VSpacer:O["a"],VSubheader:P["a"],VToolbar:j["a"],VToolbarSideIcon:I["a"],VToolbarTitle:D["a"]}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(M)}}).$mount("#app")}});
//# sourceMappingURL=app.da76e0da.js.map