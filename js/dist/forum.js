module.exports=function(t){var o={};function a(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=o,a.d=function(t,o,n){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)a.d(n,i,function(o){return t[o]}.bind(null,i));return n},a.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="",a(a.s=15)}([function(t,o){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,o){t.exports=flarum.core.compat["common/utils/classList"]},function(t,o){t.exports=flarum.core.compat["common/helpers/icon"]},,function(t,o){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,o){t.exports=flarum.core.compat["common/components/Badge"]},function(t,o){t.exports=flarum.core.compat["common/Model"]},function(t,o){t.exports=flarum.core.compat["common/models/User"]},function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["forum/components/UserCard"]},function(t,o){t.exports=flarum.core.compat["common/components/Modal"]},function(t,o){t.exports=flarum.core.compat["common/components/Button"]},function(t,o){t.exports=flarum.core.compat["common/Component"]},function(t,o){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,o){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,o,a){"use strict";a.r(o);var n=a(6),i=a.n(n),e=a(7),r=a.n(e),s=a(8),c=a(9),f=a.n(c),l=a(5),u=a.n(l),p=a(4),b=a.n(p),d=a(1),h=a.n(d);function v(t,o){return(v=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function g(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,v(t,o)}var y=a(10),x=a.n(y),w=a(11),k=a.n(w),B=a(0),S=a.n(B),N=a(12),j=a.n(N),C=a(13),O=a.n(C);var F=a(14),_=a.n(F),E=a(2),M=a.n(E),U=function(t){function o(){return t.apply(this,arguments)||this}g(o,t),o.initAttrs=function(o){t.initAttrs.call(this,o),o.className="icondropdown",o.buttonClassName="Button Button--icon",o.menuClassName="social-dropdown-menu"};var a=o.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.icons={social:["fas fa-envelope","fas fa-globe","fab fa-amazon","fab fa-angellist","fab fa-apple","fab fa-behance","fab fa-bitbucket","fab fa-codepen","fab fa-connectdevelop","fab fa-dashcube","fab fa-delicious","fab fa-deviantart","fab fa-digg","fab fa-discord","fab fa-dribbble","fab fa-dropbox","fab fa-drupal","fab fa-facebook","fab fa-flickr","fab fa-foursquare","fab fa-get-pocket","fab fa-git","fab fa-github","fab fa-github-alt","fab fa-google","fab fa-google-plus","fab fa-google-wallet","fab fa-hacker-news","fab fa-instagram","fab fa-ioxhost","fab fa-joomla","fab fa-jsfiddle","fab fa-lastfm","fab fa-leanpub","fab fa-linkedin","fab fa-mastodon","fab fa-medium","fab fa-odnoklassniki","fab fa-opencart","fab fa-pagelines","fab fa-paypal","fab fa-pied-piper-alt","fab fa-pinterest-p","fab fa-playstation","fab fa-qq","fab fa-reddit","fab fa-renren","fab fa-sellsy","fas fa-share-alt","fab fa-shirtsinbulk","fab fa-simplybuilt","fab fa-skyatlas","fab fa-skype","fab fa-slack","fab fa-slideshare","fab fa-soundcloud","fab fa-spotify","fab fa-stack-exchange","fab fa-stack-overflow","fab fa-steam","fab fa-stumbleupon","fab fa-telegram","fab fa-tencent-weibo","fab fa-trello","fab fa-tripadvisor","fab fa-tumblr","fab fa-twitch","fab fa-twitter","fab fa-viacoin","fab fa-vimeo","fab fa-vine","fab fa-vk","fab fa-weibo","fab fa-weixin","fab fa-whatsapp","fab fa-wordpress","fab fa-xbox","fab fa-xing","fab fa-y-combinator","fab fa-yandex","fab fa-yandex-international","fab fa-yelp","fab fa-youtube"]}},a.view=function(o){return o.children=this.items().toArray(),t.prototype.view.call(this,o)},a.getButtonContent=function(){var t=this;return[/^favicon(-\w+)?$/.test(this.attrs.selection())?[m("img",{className:h()(["icondropdown-activeIcon","favicon-grey"===this.attrs.selection()?"social-greyscale-button":"social-button"]),alt:"",src:this.attrs.favicon(),onerror:function(){t.attrs.favicon("none"),t.select(t.icons.social[0])}})]:M()(this.attrs.selection(),{className:"icondropdown-activeIcon fa-fw"}),this.attrs.caretIcon?M()(this.attrs.caretIcon,{className:"Button-caret"}):""]},a.items=function(){var t=this,o=new b.a;return"none"!==this.attrs.favicon()&&(o.add("favicon",m("div",{onclick:function(){return t.select("favicon")},role:"button",className:h()(["iconpicker-item","favicon"===this.attrs.selection()&&"iconpicker-item--highlighted"]),title:app.translator.trans("fof-socialprofile.forum.edit.favicon")},m("img",{className:"iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),102),o.add("favicon-grey",m("div",{onclick:function(){return t.select("favicon-grey")},role:"button",className:h()(["iconpicker-item","iconpicker-item--invertColors","favicon-grey"===this.attrs.selection()&&"iconpicker-item--highlighted"]),title:app.translator.trans("fof-socialprofile.forum.edit.grey_favicon")},m("img",{className:"social-greyscale-button iconpicker-image-"+this.attrs.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.attrs.favicon()})),101)),this.icons.social.forEach((function(a){o.add(a.replace(/ /,"-"),m("div",{onclick:function(){return t.select(a)},className:h()(["iconpicker-item",t.attrs.selection()===a&&"iconpicker-item--highlighted"]),role:"button",title:"."+a},M()(a,{className:"social-icon fa-fw"})),100)})),o},a.select=function(t){this.attrs.selection(t)},o}(_.a),I=function(t){function o(){return t.apply(this,arguments)||this}g(o,t);var a=o.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.button=this.attrs.button},a.view=function(t){return m("div",{className:"Form-group form-group-social",id:"socialgroup-"+this.button.index()},m("input",{type:"text",className:"FormControl SocialFormControl SocialFormControl-title",placeholder:app.translator.trans("fof-socialprofile.forum.edit.title"),tabIndex:2*(this.button.index()+1)-1,bidi:this.button.title}),U.component({selection:this.button.icon,favicon:this.button.favicon,index:this.button.index}),m("input",{type:"text",className:"FormControl SocialFormControl SocialFormControl-url",placeholder:app.translator.trans("fof-socialprofile.forum.edit.url"),tabIndex:2*(this.button.index()+1),value:this.button.url(),onchange:O()("value",this.onUrlChange.bind(this))}),m("input",{type:"hidden",className:"SocialFormControl SocialFormControl-icon",id:"icon"+this.button.index()+"-icon",bidi:this.button.icon}),m("input",{type:"hidden",className:"SocialFormControl SocialFormControl-favicon",id:"icon"+this.button.index()+"-favicon",bidi:this.button.favicon}))},a.onUrlChange=function(t){var o=this;this.button.url(t),clearTimeout(this.waitUntilFinished),"fas fa-circle-notch fa-spin"!==this.button.icon()&&(this.button.icon("fas fa-circle-notch fa-spin"),this.button.favicon("none")),this.waitUntilFinished=setTimeout((function(){if(function(t){var o;try{o=new URL(t)}catch(t){return!1}return["http:","https:"].includes(o.protocol)}(o.button.url())){var t=function(t){var o;try{o=new URL(t)}catch(t){return null}return["http:","https:"].includes(o.protocol)?o.origin:null}(o.button.url())+"/favicon.ico";o.button.favicon(t),o.button.icon("favicon"),m.redraw()}else o.button.icon("fas fa-globe"),o.button.favicon("none"),m.redraw()}),1e3)},o}(j.a),P=function(t){function o(){return t.apply(this,arguments)||this}g(o,t);var a=o.prototype;return a.oninit=function(o){var a=this;t.prototype.oninit.call(this,o),this.buttons=[];var n=this.attrs.user.socialButtons();n.length?n.forEach((function(t,o){""!==t.title&&a.createButtonObject(o,t)})):this.createButtonObject(0)},a.className=function(){return"SocialButtonsModal Modal--small"},a.title=function(){return app.translator.trans("fof-socialprofile.forum.edit.headtitle")},a.content=function(){var t=this.buttons.some((function(t){return"fas fa-circle-notch fa-spin"===t.icon()}));return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.buttons.map((function(t){return I.component({button:t})})),m("div",{className:"Form-group",id:"submit-button-group"},m("div",{className:"Button Button--primary EditSocialButtons-add",onclick:this.addSocialButton.bind(this)},M()("fas fa-fw fa-plus")),m("div",{className:"Button Button--primary EditSocialButtons-del",onclick:this.delSocialButton.bind(this)},M()("fas fa-fw fa-minus")),k.a.component({type:"submit",style:"float: right;",className:"Button Button--primary EditSocialButtons-save",loading:this.loading,disabled:t,title:t?app.translator.trans("fof-socialprofile.forum.edit.save_disabled_fetching_favicons"):null},app.translator.trans("fof-socialprofile.forum.edit.submit")))))},a.data=function(){var t=[];return this.buttons.forEach((function(o,a){""!==o.title()&&(t[a]={},t[a].title=o.title(),t[a].url=o.url(),t[a].icon=o.icon(),t[a].favicon=o.favicon())})),{socialButtons:JSON.stringify(t)}},a.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.attrs.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch((function(){o.loading=!1,m.redraw()}))},a.addSocialButton=function(){var t=this;this.createButtonObject(this.buttons.length),m.redraw(),$("document").ready((function(){$("#socialgroup-"+(t.buttons.length-1)).slideDown()}))},a.delSocialButton=function(){var t=this,o=this.buttons.length-1;$("#socialgroup-"+o).slideUp("normal",(function(){t.buttons.splice(o,1),m.redraw()}))},a.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=S()(t),this.buttons[t].favicon=S()("none"),this.buttons[t].title=S()(""),this.buttons[t].url=S()(""),this.buttons[t].icon=S()("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=S()(t),this.buttons[t].favicon=S()(o.favicon),this.buttons[t].title=S()(o.title),this.buttons[t].url=S()(o.url),this.buttons[t].icon=S()(o.icon))},o}(x.a);app.initializers.add("fof/socialprofile",(function(){r.a.prototype.socialButtons=i.a.attribute("socialButtons",(function(t){return JSON.parse(t||"[]")})),Object(s.extend)(f.a.prototype,"infoItems",(function(t){var o=this,a=this.attrs.user;if(a.attribute("canViewSocialProfile")){this.canEdit=a.attribute("canEditSocialProfile"),this.buttons=this.attrs.user.socialButtons();var n=new b.a;this.buttons.length?(this.buttons.forEach((function(t,o){if(""!==t.title&&""!==t.icon&&""!==t.url){var a,i="",e=h()(((a={})["social-button "+t.icon+"-"+o+" social-icon-"+o]=!0,a["social-greyscale-button"]="favicon-grey"===t.icon,a));"favicon"!==t.icon&&"favicon-grey"!==t.icon||(i='\n                            background-image: url("'+t.favicon+'");\n                            background-size: 60%;\n                            background-position: center;\n                            background-repeat: no-repeat;\n                        '),n.add("social-icon-"+o,u.a.component({className:e,type:"social",icon:t.icon,label:t.title,style:i,onclick:function(){window.open(t.url,"_blank")}}))}})),this.canEdit&&n.add("settings social-button",u.a.component({type:"social social-settings",icon:"fas fa-cog",label:app.translator.trans("fof-socialprofile.forum.edit.edit"),onclick:function(){app.modal.show(P,{user:o.attrs.user})}}),-1)):this.canEdit&&n.add("settings social-button",u.a.component({type:"social null-social-settings",icon:"fas fa-plus",label:app.translator.trans("fof-socialprofile.forum.edit.add"),onclick:function(){app.modal.show(P,{user:o.attrs.user})}}),-1),n.toArray().length>0&&(t.has("lastSeen")&&t.replace("lastSeen",t.lastSeen,50),t.has("joined")&&t.replace("joined",t.joined,40),t.add("fofsocialprofile",n.toArray(),20))}}))}))}]);
//# sourceMappingURL=forum.js.map