"use strict";define(function(){function t(){this.init()}return t.prototype={constructor:t,init:function(){this.goto_top=document.getElementById("goto_top"),this.totop=document.getElementById("btn_top"),this.target=0,this.btn_top=document.getElementById("btn_top")},GoTop:function(){var o=this;o.totop.onclick=function(){clearInterval(t);var t=setInterval(function(){o.target=document.body.scrollTop||document.documentElement.scrollTop,o.target-=Math.ceil(o.target/10),window.scrollTo(0,o.target),0==o.target&&clearInterval(t)},10)}},GoTopPosition1:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.goto_top.style.top=653<t?(this.goto_top.style.position="fixed","50px"):(this.goto_top.style.position="absolute","653px")},GoTopPosition2:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.goto_top.style.height=353<t?(this.goto_top.style.position="fixed",this.goto_top.style.top="50px",this.btn_top.style.display="inline-block","277px"):(this.goto_top.style.position="absolute",this.goto_top.style.top="353px",this.btn_top.style.display="none","242px")}},new t});