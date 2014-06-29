webshims.register("jmebase",function(a,b,c,d,e){"use strict";var f={},g={},h=Array.prototype.slice,i=0,j=a.extend({selector:".mediaplayer"},b.cfg.mediaelement.jme),k=j.selector;b.cfg.mediaelement.jme=j,a.extend(a.jme,{pluginsClasses:[],pluginsSel:"",plugins:{},props:f,fns:g,data:function(b,c,d){var f=a(b).data("jme")||a.data(b,"jme",{});return d===e?c?f[c]:f:void(f[c]=d)},runPlugin:function(b){i&&a(document.querySelectorAll(k)).each(function(){var c=this.querySelectorAll(b);c.length&&a(this).jmeFn("addControls",c)})},registerPlugin:function(b,c){this.plugins[b]=c,c.nodeName||(c.nodeName=""),c.className||(c.className=b),this.pluginsClasses.push("."+c.className),this.pluginsSel=this.pluginsClasses.join(", "),j[b]=a.extend(c.options||{},j[b]),j[b]&&j[b].text?c.text=j[b].text:j.i18n&&j.i18n[b]&&(c.text=j.i18n[b]),this.runPlugin("."+c.className)},defineMethod:function(a,b){g[a]=b},defineProp:function(b,c){c||(c={}),c.set||(c.set=c.readonly?function(){throw b+" is readonly"}:a.noop),c.get||(c.get=function(c){return a.jme.data(c,b)}),f[b]=c},prop:function(b,c,d){if(!f[c])return a.prop(b,c,d);if(d===e)return f[c].get(b);var g=f[c].set(b,d);g===e&&(g=d),"noDataSet"!=g&&a.jme.data(b,c,g)}}),a.fn.jmeProp=function(b,c){return a.access(this,a.jme.prop,b,c,arguments.length>1)},a.fn.jmeFn=function(b){var c,d=h.call(arguments,1);return this.each(function(){return c=(g[b]||a.prop(this,b)).apply(this,d),c!==e?!1:void 0}),c!==e?c:this};var l={emptied:1,pause:1},m={canplay:1,canplaythrough:1};a.jme.initJME=function(b,c){i+=a(b.querySelectorAll(k)).add(c.filter(k)).jmePlayer().length},a.jme.getDOMList=function(b){var c=[];return b||(b=[]),"string"==typeof b&&(b=b.split(" ")),a.each(b,function(a,b){b&&(b=document.getElementById(b),b&&c.push(b))}),c},a.jme.getButtonText=function(b,c){var d,e,f=function(f){e!==f&&(e=f,b.removeClass(c[f?0:1]).addClass(c[f]),d&&(b.prop("checked",!!f),(b.data("checkboxradio")||{refresh:a.noop}).refresh()))};return b.is('[type="checkbox"], [type="radio"]')?(b.prop("checked",function(){return this.defaultChecked}),d=!0):b.is("a")&&b.on("click",function(a){a.preventDefault()}),f},a.fn.jmePlayer=function(b){return this.each(function(){b&&a.jme.data(this,a.extend(!0,{},b));var c,d,e,f,g,h,i=a("audio, video",this).eq(0),k=a(this),n=a.jme.data(this),o=a.jme.data(i[0]);k.addClass(i.prop("nodeName").toLowerCase()+"player"),o.player=k,o.media=i,n.media||(e=function(){i.off("canplay",d),clearTimeout(f)},d=function(){var a=i.prop("paused")?"idle":"playing";k.attr("data-state",a)},c=function(b){var c,j,n=b.type;e(),m[n]&&"waiting"!=g||h&&"emptied"==n||("ended"==n||a.prop(this,"ended")?n="ended":"waiting"==n?a.prop(this,"readyState")>2?n="":(f=setTimeout(function(){i.prop("readyState")>2&&d()},9),i.on("canPlay",d)):l[n]?n="idle":(c=a.prop(this,"readyState"),j=a.prop(this,"paused"),n=!j&&3>c?"waiting":!j&&c>2?"playing":"idle"),"idle"==n&&k._seekpause&&(n=!1),n&&(g=n,k.attr("data-state",n)))},n.media=i,n.player=k,i.on("ended emptied play",function(){var a,b=function(){h=!1},c=function(){e(),i.jmeFn("pause"),j.noReload||!i.prop("ended")||!i.prop("paused")||i.prop("autoplay")||i.prop("loop")||i.hasClass("no-reload")||(h=!0,i.jmeFn("load"),k.attr("data-state","ended"),setTimeout(b))};return function(b){clearTimeout(a),"ended"!=b.type||j.noReload||i.prop("autoplay")||i.prop("loop")||i.hasClass("no-reload")||(a=setTimeout(c))}}()).on("emptied waiting canplay canplaythrough playing ended pause mediaerror",c).on("volumechange updateJMEState",function(){var b=a.prop(this,"volume");k[!b||a.prop(this,"muted")?"addClass":"removeClass"]("state-muted"),b=.01>b?"no":.36>b?"low":.7>b?"medium":"high",k.attr("data-volume",b)}),a.jme.pluginsSel&&k.jmeFn("addControls",a(k[0].querySelectorAll(a.jme.pluginsSel))),c&&i.on("updateJMEState",c).triggerHandler("updateJMEState"))})},a.jme.defineProp("isPlaying",{get:function(b){return!a.prop(b,"ended")&&!a.prop(b,"paused")&&a.prop(b,"readyState")>1&&!a.data(b,"mediaerror")},readonly:!0}),a.jme.defineProp("player",{readonly:!0}),a.jme.defineProp("media",{readonly:!0}),a.jme.defineProp("srces",{get:function(b){var c,d=a.jme.data(b),e=d.media.prop("src");return e?[{src:e}]:c=a.map(a("source",d.media).get(),function(b){var c={src:a.prop(b,"src")},d=a.attr(b,"media");return d&&(c.media=d),d=a.attr(b,"type"),d&&(c.type=d),c})},set:function(b,c){var d=a.jme.data(b),e=function(b,c){"string"==typeof c&&(c={src:c}),a(document.createElement("source")).attr(c).appendTo(d.media)};return d.media.removeAttr("src").find("source").remove(),a.isArray(c)?a.each(c,e):e(0,c),d.media.jmeFn("load"),"noDataSet"}}),a.jme.defineMethod("togglePlay",function(){a(this).jmeFn(f.isPlaying.get(this)?"pause":"play")}),a.jme.defineMethod("addControls",function(b){var c=a.jme.data(this)||{};if(c.media){var d=a.jme.data(c.player[0],"controlElements")||a([]);b=a(b),a.jme.pluginsSel&&(b=b.find(a.jme.pluginsSel).add(b.filter(a.jme.pluginsSel))),b.length&&(a.each(a.jme.plugins,function(d,e){var f,g,h,i,j=b.filter("."+e.className);for(h=0;h<j.length;h++)if(f=a(j[h]),g=a.jme.data(j[h]),g.player=c.player,g.media=c.media,!g._rendered){if(g._rendered=!0,e.options)for(i in e.options)i in g||(g[i]=e.options[i]);e._create(f,c.media,c.player,g)}}),a.jme.data(c.player[0],"controlElements",d.add(b)),c.player.triggerHandler("controlsadded"))}}),b.ready("DOM mediaelement",function(){b.isReady("jme",!0),b.addReady(a.jme.initJME),b.isReady("jme-base",!0),b.cfg.debug!==!1&&document.getElementsByTagName("video").length&&!document.querySelector(k)&&b.warn("found video element but video wasn't wrapped inside a ."+k+" element. Will not add control UI")})}),webshims.ready("jme-base DOM",function(){"use strict";function a(a){this._data=a,this.lists={},this.on("showcontrolschange",this._updateControlsClass)}function b(a,c,d){this.list=a||[],this.playlists=c,this.media=c._data.media,this.player=c._data.player,this.options=h.extend(!0,{},b.defaults,d),this.options.itemTmpl=this.options.itemTmpl.trim(),this.deferred=h.Deferred(),this._selectedIndex=-1,this._selectedItem=null,this.$rendered=null,this._detectListType(),this.autoplay(this.options.autoplay),this.deferred.done(function(){this._addEvents(this),"auto"!=this.options.defaultSelected||this.media.jmeProp("srces").length||(this.options.defaultSelected=0),this.list[this.options.defaultSelected]&&this.selectedIndex(this.options.defaultSelected),this._fire("addlist")})}function c(a){return a.description=a.description||a.content,a.srces=[],(a.mediaGroups||[]).forEach(function(b){(b.contents||[]).forEach(function(b){b.src=b.src||b.url,a.srces.push(b)})}),a}function d(){return{src:h.attr(this,"href"),srclang:h.attr(this,"lang"),label:h.attr(this,"data-label")}}function e(){return{src:h.attr(this,"url")||h.attr(this,"href"),type:h.attr(this,"type")}}function f(){return 1==this.nodeType}var g=window.webshims,h=g.$,i=h.jme,j=0,k='<button class="{%class%}" type="button" aria-label="{%text%}"></button>';h.extend(a.prototype,{on:function(){h.fn.on.apply(h(this),arguments)},off:function(){h.fn.off.apply(h(this),arguments)},_getListId:function(a){var b;return b="string"==typeof a?a:a.id},_updateControlsClass:function(){this._data.player[this.getShowcontrolsList()?"addClass":"removeClass"]("has-playlist")},add:function(a,c){return a=new b(a,this,c),a.id||(j++,a.id="list-"+j),this.lists[a.id]=a,a.options.showcontrols&&this._data.player.addClass("has-playlist"),a},remove:function(a){var b=this._getListId(a);this.lists[b]&&(this.lists[b]._remove(),delete this.lists[b]),this.getShowcontrolsList()||this._data.player.removeClass("has-playlist")},getAutoplayList:function(){var a=null;return h.each(this.lists,function(b,c){return c.options.autoplay?(a=c,!1):void 0}),a},getShowcontrolsList:function(){var a=null;return h.each(this.lists,function(b,c){return c.options.showcontrols?(a=c,!1):void 0}),a}}),b.getText=function(a){return a.attr("content")||(a.text()||"").trim()},b.getUrl=function(a){return a.attr("content")||a.attr("url")||a.attr("href")||a.attr("src")||(a.text()||"").trim()},b.defaults={loop:!1,autoplay:!1,defaultSelected:"auto",addItemEvents:!0,showcontrols:!0,ajax:{},itemTmpl:'<li class="list-item"><% if(typeof poster == "string" && poster) {%><img src="<%=poster%>" /><% }%><h3><%=title%></h3><% if(typeof description == "string" && description) {%><div class="item-description"><%=description%></div><% }%></li>',renderer:function(a,b){return h.jme.tmpl(b,a)},mapDom:function(a){return{title:b.getText(h('[itemprop="name"], h1, h2, h3, h4, h5, h6, a',a)),srces:h('[itemprop="contentUrl"], a[type^="video"], a[type^="audio"]',a).map(function(){var c,d={src:b.getUrl(h(this))};return c="a"==this.nodeName.toLowerCase()?h.prop(this,"type"):b.getText(h('[itemprop="encodingFormat"]',a)),c&&(d.type=c),c=h.attr(this,"data-media"),c&&(d.media=c),d}).get(),tracks:h('a[type="text/vtt"]').map(d).get(),poster:b.getUrl(h('[itemprop="thumbnailUrl"], a[type^="image"], img',a))||null,description:b.getText(h('[itemprop="description"], .item-description, p',a))||null}},mapUrl:function(a,f){h.ajax(h.extend(a,{success:function(a){var g;h.isArray(a)?g=a:a.responseData&&a.responseData.feed?(a=a.responseData.feed,g=(a.entries||[]).map(c)):(g=[],h("item",a).each(function(){var a=h("enclosure, media\\:content",this).filter('[type^="video"], [type^="audio"]').map(e).get();a.length&&g.push({title:h("title",this).html(),srces:a,publishedDate:h("pubDate",this).html()||null,description:h("description",this).text()||null,poster:b.getUrl(h('itunes\\:image, media\\:thumbnail, enclosure[type^="image"], media\\:content[type^="image"]',this))||null,author:h("itunes\\:author",this).html()||null,duration:h("itunes\\:duration",this).html()||null,tracks:h("media\\:subTitle",this).map(d).get()||null})})),g!=a&&(g.fullData=a),f(g)}}))}},h.extend(b.prototype,{on:function(){h.fn.on.apply(h(this),arguments)},off:function(){h.fn.off.apply(h(this),arguments)},_detectListType:function(){var a;return"string"==typeof this.list?void this._createListFromUrl():(this.list.nodeName||this.list.length>0&&this.list[0].nodeName?this._createListFromDom():this.list.responseData&&this.list.responseData.feed&&(a=this.list.responseData.feed,this.list=(a.entries||[]).map(c),this.list.fullData=a),void this.deferred.resolveWith(this))},_createListFromUrl:function(){var a=this;this.options.ajax.url=this.list,this.options.mapUrl(this.options.ajax,function(b){a.list=b,a.deferred.resolveWith(a)})},_createListFromDom:function(){var a=this;this.$rendered=h(this.list).eq(0),this.list=[],this.$rendered&&(this._addDomList(),this.list=this.$rendered.children().map(function(){return a._createItemFromDom(this)}).get())},_createItemFromDom:function(a){var b=this.options.mapDom(a);return this._addItemData(b,a),b},_fire:function(a,b){var a=h.Event(a);h(this).triggerHandler(a,b),h(this.playlists).triggerHandler(a,h.merge([{list:this}],b||[])),this.$rendered&&this.$rendered.triggerHandler(a,b)},_addDomList:function(){this.$rendered.attr({"data-autoplay":this.options.autoplay,"data-loop":this.options.loop}).addClass("media-playlist").data("playlist",this)},_addItemData:function(a,b){var c=this;a.$item=h(b).data("itemData",a),a==this._selectedItem&&a.$item.addClass("selected-item"),this.options.addItemEvents&&a.$item.on("click.playlist",function(b){return c.options.addItemEvents?(c.playItem(a,b),!1):void 0})},_addEvents:function(a){var b=a.options,c=function(c){b.autoplay&&a.playNext(c)};this.media.on("ended",c),this._remove=function(){a.media.off("ended",c),a.autoplay(!1),a.$rendered&&a.$rendered.remove(),a._fire("removelist")}},_remove:function(){this._fire("removelist")},render:function(a){this.$rendered?a(this.$rendered,this.player,this):this.deferred.done(function(){var b,c=this,d=[];if(!this.$rendered){switch(h.each(this.list,function(a,b){var e=h(h.parseHTML(c.options.renderer(b,c.options.itemTmpl))).filter(f)[0];c._addItemData(b,e),d.push(e)}),b=(d[0]&&d[0].nodeName||"").toLowerCase()){case"li":this.$rendered=h.parseHTML("<ul />");break;case"option":this.$rendered=h.parseHTML("<select />");break;default:this.$rendered=h.parseHTML("<div />")}this.$rendered=h(this.$rendered).html(d),this._addDomList()}a(this.$rendered,this.player,this)})},_loadItem:function(a){var b=this.media;b.attr("poster",a.poster||""),h("track",b).remove(),h.each(a.tracks||[],function(a,c){h("<track />").attr(c).appendTo(b)}),a.srces||(a.srces=a),b.jmeProp("srces",a.srces)},_getItem:function(a){return a&&(a.nodeName||a.jquery||"string"==typeof a)&&(a=h(a).data("itemData")),a},playItem:function(a,b){var c;this.selectedItem(a,b),a&&(c=this.media.play(),setTimeout(function(){c.play()},9))},selectedIndex:function(a,b){return arguments.length?void this.selectedItem(this.list[a],b):this._selectedIndex},selectedItem:function(a,b){var c,d;return arguments.length?(d=-1,a=this._getItem(a),a&&h.each(this.list,function(b){return a==this?(d=b,!1):void 0}),d>=0&&this._loadItem(this.list[d]),d!=this._selectedIndex&&(c=this._selectedItem||null,c&&c.$item&&c.$item.removeClass("selected-item"),this._selectedItem=this.list[d]||null,this._selectedIndex=d,this._selectedItem&&this._selectedItem.$item&&this._selectedItem.$item.addClass("selected-item"),c!==this._selectedItem&&this._fire("itemchange",[{oldItem:c,from:b||null}])),void 0):this._selectedItem},playNext:function(){var a=this.getNext();a&&this.playItem(a)},playPrev:function(){var a=this.getPrev();a&&this.playItem(a)},getNext:function(){var a=this._selectedIndex+1;return this.list[a]||(this.options.loop?this.list[0]:null)},getPrev:function(){var a=this._selectedIndex-1;return this.list[a]||(this.options.loop?this.list[this.list.length-1]:null)}}),[{name:"autoplay",fn:"getAutoplayList"},{name:"showcontrols",fn:"getShowcontrolsList"},{name:"loop"}].forEach(function(a){b.prototype[a.name]=function(b){var c;return arguments.length?(b=!!b,b&&a.fn&&(c=this.playlists[a.fn](),c&&c!=this&&c[a.name](!1)),this.options[a.name]!=b&&(this.options[a.name]=b,this.$rendered&&this.$rendered.attr("data-"+a.name,b),this._fire(a.name+"change")),void 0):this.options[a.name]}}),i.defineProp("playlists",{writable:!1,get:function(b){var c=h.jme.data(b);return b!=c.player[0]?null:(c.playlists||(c.playlists=new a(c)),c.playlists)}}),i.defineMethod("addPlaylist",function(a,b){var c=h.jme.prop(this,"playlists");return c&&c.add?c.add(a,b):null}),[{name:"playlist-prev",text:"previous",get:"getPrev",play:"playPrev"},{name:"playlist-next",text:"next",get:"getNext",play:"playNext"}].forEach(function(a){h.jme.registerPlugin(a.name,{structure:k,text:a.text,_create:function(b,c,d){function e(){var c=g[a.get]();b.prop(c?{disabled:!1,title:c.title}:{disabled:!0,title:""})}function f(){var a=h.getShowcontrolsList();a!=g&&(g&&g.off("itemchange",e),g=a,g&&(g.on("itemchange",e),e()))}var g,h=d.jmeProp("playlists");b.on("click",function(){g&&g[a.play]()}),h.on({"addlist removelist showcontrolschange":f}),f()}})}),function(){var a={};h.jme.tmpl=function(b,c){return a[b]||(a[b]=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+b.replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"',$1,'").split("<%").join("');").split("%>").join("p.push('")+"');}return p.join('');")),c?a[b](c):a[b]}}(),h.jme.Playlist=b,g.isReady("playlist",!0)});