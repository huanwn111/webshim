var swfmini=function(){function e(){if(!C){try{var e=T.getElementsByTagName("body")[0].appendChild(d("span"));e.parentNode.removeChild(e)}catch(t){return}C=!0;for(var i=N.length,n=0;i>n;n++)N[n]()}}function t(e){C?e():N[N.length]=e}function i(){}function n(){E&&r()}function r(){var e=T.getElementsByTagName("body")[0],t=d(m);t.setAttribute("type",b);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=h){var r=i.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),_.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function a(e){var t=null,i=c(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=h)t=i;else{var n=i.getElementsByTagName(m)[0];n&&(t=n)}return t}function o(e,t,i){var n,r=c(i);if(_.wk&&312>_.wk)return n;if(r)if(typeof e.id==h&&(e.id=i),_.ie&&_.win){var a="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?a+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(a+=" "+o+'="'+e[o]+'"'));var l="";for(var u in t)t[u]!=Object.prototype[u]&&(l+='<param name="'+u+'" value="'+t[u]+'" />');r.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>",k[k.length]=e.id,n=c(e.id)}else{var p=d(m);p.setAttribute("type",b);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?p.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&p.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(p,v,t[v]);r.parentNode.replaceChild(p,r),n=p}return n}function s(e,t,i){var n=d("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function l(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(_.ie&&_.win?(t.style.display="none",function(){4==t.readyState?u(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function u(e){var t=c(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(i){}return t}function d(e){return T.createElement(e)}function p(e){var t=_.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function f(e,t){if(S){var i,n=t?"visible":"hidden";C&&i&&c(e)&&(c(e).style.visibility=n)}}var h="undefined",m="object",v=window.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,x=navigator,E=!1,N=[n],k=[],A=[],C=!1,S=!0,_=function(){var e=typeof T.getElementById!=h&&typeof T.getElementsByTagName!=h&&typeof T.createElement!=h,t=x.userAgent.toLowerCase(),i=x.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(t),r=i?/mac/.test(i):/mac/.test(t),a=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof x.plugins!=h&&typeof x.plugins[g]==m)l=x.plugins[g].description,!l||typeof x.mimeTypes!=h&&x.mimeTypes[b]&&!x.mimeTypes[b].enabledPlugin||(E=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=h)try{var u=new ActiveXObject(y);u&&(l=u.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(c){}return{w3:e,pv:s,wk:a,ie:o,win:n,mac:r}}();return function(){_.ie&&_.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=A.length,t=0;e>t;t++)A[t][0].detachEvent(A[t][1],A[t][2]);for(var i=k.length,n=0;i>n;n++)l(k[n]);for(var r in _)_[r]=null;_=null;for(var a in swfmini)swfmini[a]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return _.w3?a(e):void 0},embedSWF:function(e,i,n,r,a,s,l,u,c,d){var v={success:!1,id:i};_.w3&&!(_.wk&&312>_.wk)&&e&&i&&n&&r&&a?(f(i,!1),t(function(){n+="",r+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=n,t.height=r;var g={};if(u&&typeof u===m)for(var y in u)g[y]=u[y];if(l&&typeof l===m)for(var b in l)typeof g.flashvars!=h?g.flashvars+="&"+b+"="+l[b]:g.flashvars=b+"="+l[b];if(p(a)){var w=o(t,g,i);t.id==i&&f(i,!0),v.success=!0,v.ref=w}else f(i,!0);d&&d(v)})):d&&d(v)},switchOffAutoHideShow:function(){S=!1},ua:_,getFlashPlayerVersion:function(){return{major:_.pv[0],minor:_.pv[1],release:_.pv[2]}},hasFlashPlayerVersion:p,createSWF:function(e,t,i){return _.w3?o(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){_.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();webshims.register("filereader",function(e,t){"use strict";(function(){var i=swfmini,n=e.Callbacks("once unique memory"),r=0,a=null;if(window.FileReader)return e.fn.fileReader=function(){return this},void 0;e.fn.fileReader=function(t){if(this.length){t=e.extend(e.fn.fileReader.defaults,t);var i=this;n.add(function(){return o(i,t)}),e.isFunction(t.callback)&&n.add(t.callback),FileAPIProxy.ready||FileAPIProxy.init(t)}return this},e.fn.fileReader.defaults={id:"fileReaderSWFObject",multiple:null,accept:null,label:null,extensions:null,filereader:"files/filereader.swf",expressInstall:null,debugMode:!1,callback:!1};var o=function(t,i){return t.each(function(t,n){n=e(n);var o,s,l,u=n.attr("id");u||(u="flashFileInput"+r,n.attr("id",u),r++),o=n.prop("multiple"),s=n.data("swfaccept")||n.prop("accept")||i.accept,l=n.jProp("labels").map(function(){return e(this).text()}).get().join(" ")||n.data("swflabel")||i.label,FileAPIProxy.inputs[u]=n,FileAPIProxy.swfObject.add(u,o,s,l,i.extensions),n.css("z-index",0).mouseover(function(e){u!==a&&(e=e||window.event,a=u,FileAPIProxy.swfObject.mouseover(u),FileAPIProxy.container.height(n.outerHeight()).width(n.outerWidth()).css(n.offset()))}).click(function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1})})};window.FileAPIProxy={ready:!1,_inititalized:!1,init:function(t){var r=this;this.debugMode=t.debugMode,this.container||(this.container=e("<div>").attr("id",t.id).wrap("<div>").parent().css({position:"fixed",width:"1px",height:"1px",display:"inline-block",background:"transparent","z-index":99999}).on("mouseover mouseout mousedown mouseup",function(t){a&&e("#"+a).trigger(t.type)}).appendTo("body"),i.embedSWF(t.filereader,t.id,"100%","100%","10",t.expressInstall,{debugMode:t.debugMode?!0:""},{wmode:"transparent",allowScriptAccess:"sameDomain"},{},function(t){r.swfObject=t.ref,e(r.swfObject).css({display:"block",outline:0}).attr("tabindex",0),r.ready=t.success&&"function"==typeof t.ref.add,r.ready&&n.fire()}))},swfObject:null,container:null,inputs:{},readers:{},onFileInputEvent:function(e){if(this.debugMode&&console.info("FileInput Event ",e.type,e),e.target in this.inputs){var i=this.inputs[e.target];e.target=i[0],"change"===e.type&&t.data(e.target,"fileList",new FileList(e.files)),i.trigger(e)}window.focus()},onFileReaderEvent:function(e){if(this.debugMode&&console.info("FileReader Event ",e.type,e,e.target in this.readers),e.target in this.readers){var t=this.readers[e.target];e.target=t,t._handleFlashEvent.call(t,e)}},onFileReaderError:function(e){this.debugMode&&console.log(e)},onSWFReady:function(){return this.container.css({position:"absolute"}),this.ready="function"==typeof this.swfObject.add,this.ready&&n.fire(),!0}},window.FileReader=function(){this.EMPTY=0,this.LOADING=1,this.DONE=2,this.readyState=0,this.result=null,this.error=null,this.onloadstart=null,this.onprogress=null,this.onload=null,this.onabort=null,this.onerror=null,this.onloadend=null,this._callbacks={loadstart:e.Callbacks("unique"),progress:e.Callbacks("unique"),abort:e.Callbacks("unique"),error:e.Callbacks("unique"),load:e.Callbacks("unique"),loadend:e.Callbacks("unique")},this._id=null},window.FileReader.prototype={readAsBinaryString:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsBinaryString")},readAsText:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsText")},readAsDataURL:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsDataURL")},readAsArrayBuffer:function(){throw"Whoops FileReader.readAsArrayBuffer is unimplemented"},abort:function(){this.result=null,this.readyState!==this.EMPTY&&this.readyState!==this.DONE&&FileAPIProxy.swfObject.abort(this._id)},addEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].add(t)},removeEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].remove(t)},dispatchEvent:function(t){if(t.target=this,t.type in this._callbacks){var i=this["on"+t.type];e.isFunction(i)&&i(t),this._callbacks[t.type].fire(t)}return!0},_register:function(e){this._id=e.input+"."+e.name,FileAPIProxy.readers[this._id]=this},_start:function(e){if(this._register(e),this.readyState===this.LOADING)throw{type:"InvalidStateError",code:11,message:"The object is in an invalid state."}},_handleFlashEvent:function(e){switch(e.type){case"loadstart":this.readyState=this.LOADING;break;case"loadend":this.readyState=this.DONE;break;case"load":this.readyState=this.DONE,this.result=FileAPIProxy.swfObject.result(this._id);break;case"error":this.result=null,this.error={name:"NotReadableError",message:"The File cannot be read!"}}this.dispatchEvent(new FileReaderEvent(e))}},window.FileReaderEvent=function(e){this.initEvent(e)},window.FileReaderEvent.prototype={initEvent:function(t){e.extend(this,{type:null,target:null,currentTarget:null,eventPhase:2,bubbles:!1,cancelable:!1,defaultPrevented:!1,isTrusted:!1,timeStamp:(new Date).getTime()},t)},stopPropagation:function(){},stopImmediatePropagation:function(){},preventDefault:function(){}},window.FileList=function(e){if(e){for(var t=0;e.length>t;t++)this[t]=e[t];this.length=e.length}else this.length=0},window.FileList.prototype={item:function(e){return e in this?this[e]:null}}})(),t.defineNodeNameProperty("input","files",{prop:{writeable:!1,get:function(){return"file"!=this.type?null:(e(this).is(".ws-filereader")||t.error("please add the 'ws-filereader' class to your input[type='file'] to implement files-property"),t.data(this,"fileList")||t.data(this,"fileList",new FileList))}}}),t.defineNodeNamesBooleanProperty("input","multiple"),e.fn.fileReader.defaults.filereader=t.cfg.basePath+"swf/filereader.swf";var i=["DOM"];t.modules["form-core"].loaded&&i.push("forms"),t.ready(i,function(){t.addReady(function(t){e('input[type="file"].ws-filereader',t).fileReader()})})});