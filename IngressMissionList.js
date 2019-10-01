// ==UserScript==
// @name         IngressMissionList
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       aysav
// @match        https://mission-author-dot-betaspike.appspot.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @updateURL    https://raw.githubusercontent.com/aysav/IngressMissionList/master/IngressMissionList.js
// @downloadURL  https://raw.githubusercontent.com/aysav/IngressMissionList/master/IngressMissionList.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    var viewBtn = true;

    if (viewBtn){
      var maindiv = $(".navbar-header");
      var btnlist = [
                     {
                         caption: "All",
                         func_id: "btn-mis-all",
                         func: function (){$(".missions-list>div").show();}
                     },
                     {
                         caption: "Published",
                         func_id: "btn-mis-pub",
                         func: function (){$(".missions-list>div").hide();$(".mission-list-item-published").show();}
                     },
                     {
                         caption: "Submitted",
                         func_id: "btn-mis-sub",
                         func: function (){$(".missions-list>div").hide();$(".mission-list-item-submitted").show();}
                     },
                     {
                         caption: "Draft",
                         func_id: "btn-mis-draft",
                         func: function (){$(".missions-list>div").hide();$(".mission-list-item-draft").show();}
                     },
                     {
                         caption: "Withdraw Draft",
                         func_id: "btn-mis-Withdraw",
                         func: function (){$(".missions-list>div").hide();$(".mission-list-item-submitted_and_published").show();}
                     }
                   ];

      btnlist.forEach(function(el) {
          var b = $("<button class='yellow  btn-show' style='margin-top:5px;' func_id='" + el.func_id +"'>" + el.caption + "</button>");
          maindiv.append(b);
      });

      $('.btn-show').click(function (){
        $('.btn-show').removeClass("green").addClass("yellow");
        $(this).addClass("green").removeClass("yellow");
        var f = $(this).attr("func_id");

        var obj = btnlist.filter(el => el.func_id == f);
        if (obj.length){
          obj[0].func();
        }
      });
   }
})();
