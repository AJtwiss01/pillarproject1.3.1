function showFeed(e){"use strict";if("ok"===e.status){for(var a=0;a<e.items.length;++a)var t=e.items[0].link,n=e.items[0].title.toString().substr(0,186),s=e.items[0].pubDate.toString().substr(0,17),r=s.split(" ");for(var o=0;o<r.length;++o){var i=r[2],l="";switch(i){case"Jan":l="January";break;case"Feb":l="February";break;case"Mar":l="March";break;case"Apr":l="April";break;case"May":l="May";break;case"Jun":l="June";break;case"Jul":l="July";break;case"Aug":l="August";break;case"Sep":l="September";break;case"Oct":l="October";break;case"Nov":l="November";break;case"Dec":l="December"}var c=[r[0],r[1],l,r[3]],d=c.join(" ")}var u='<a href="'+t+'" class="webinar-link"><h5 class="webinar-title">'+n+'</h5> <p class="small"><i class="fa fa-calendar-o"></i><span class="date">'+d+"</span></p></a>",p='<a class="link-underlined anim-icon" href="'+t+'"><span class="link-text">Visit Our Blog <i class="fa fa-angle-right" aria-hidden="true"></i></span></a>';wp_title.innerHTML=u,wp_link.innerHTML=p}}function css(e,a){return window.getComputedStyle(e,null).getPropertyValue(a)}$(document).ready(function(){$("#hours-graph").on("mouseenter",".dark-background, .blue-gradiant",function(){var e=$(this).attr("id");$(e).stop();var a=$("#"+e+"Tip"),t=$("#"+e+"Tip");a.hide(),t.attr("class","show animated hinge--Tip fadeInDown--Tip")}).on("mouseleave",".dark-background, .blue-gradiant",function(){var e=$(this).attr("id");$(e).stop();var a=$("#"+e+"Tip");a.attr("class","show animated hinge--Tip--out fadeOut")}),$(".jump-to-section").on("click",function(e){e.preventDefault();var a=this.hash,t=$(a);$("html, body").stop().animate({scrollTop:t.offset().top},900,"swing")})});var wp_title=document.getElementById("wps-feed"),wp_link=document.getElementById("wps-link");window.onload=function(){var e=document.createElement("span");if(e.className="fa",e.style.display="none",document.body.insertBefore(e,document.body.firstChild),"FontAwesome"!==css(e,"font-family")){console.log("not loaded");var a=document.createElement("link");a.rel="stylesheet",a.href="bower_components/font-awesome/font-awesome.min.css",$("head").append(a)}else console.log("loaded");document.body.removeChild(e)};