(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{216:function(t,e,n){"use strict";n.r(e);n(194),n(213),n(63),n(193),n(196);var o=n(214),s=n.n(o),i=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",n=e.length,o="",s=0;s<t;s++)o+=e.charAt(Math.floor(Math.random()*n));return o},r=n(66);s.a.use(r.a);var d={props:{code:{type:String,default:""}},data:function(){return{html:"",js:"",css:"",component:null,id:i()}},watch:{code:function(){this.destroyCode(),this.renderCode()}},mounted:function(){this.renderCode()},methods:{getSource:function(t,e){var n=new RegExp("<".concat(e,"[^>]*>")),o=t.match(n);return o?(o=o[0],t.slice(t.indexOf(o)+o.length,t.lastIndexOf("</".concat(e,">")))):""},splitCode:function(){var t=decodeURIComponent(this.code),e=this.getSource(t,"script").replace(/export default/,"return ");e||(e="return {}");var n=this.getSource(t,"style"),o='<div id="app">'+this.getSource(t,"template")+"</div>";this.js=e,this.css=n,this.html=o},renderCode:function(){if(this.splitCode(),""!==this.html&&""!==this.js){var t=new Function(this.js)();t.template=this.html;var e=s.a.extend(t);if(this.component=(new e).$mount(),this.$refs.display.appendChild(this.component.$el),""!==this.css){var n=document.createElement("style");n.type="text/css",n.id=this.id,n.innerHTML=this.css,document.getElementsByTagName("head")[0].appendChild(n)}}},destroyCode:function(){var t=document.getElementById(this.id);t&&t.parentNode.removeChild(t),this.component&&(this.$refs.display.removeChild(this.component.$el),this.component.$destroy(),this.component=null)}},beforeDestroy:function(){this.destroyCode()}},c=n(2),h=Object(c.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"display"})},[],!1,null,null,null);e.default=h.exports}}]);