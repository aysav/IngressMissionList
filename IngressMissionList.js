// ==UserScript==
// @name         IngressMissionList
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       aysav
// @match        https://mission-author-dot-betaspike.appspot.com/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @updateURL    https://raw.githubusercontent.com/aysav/IngressMissionList/master/IngressMissionList.js
// @downloadURL  https://raw.githubusercontent.com/aysav/IngressMissionList/master/IngressMissionList.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    var maindiv = $(".navbar-header");
    var btnlist = [
                     {caption: "All", func: "btn-mis-all"},
                     {caption: "Published", func: "btn-mis-pub"},
                     {caption: "Submitted", func: "btn-mis-sub"},
                     {caption: "Draft", func: "btn-mis-draft"}
                  ];

    btnlist.forEach(function(el) {
        var b = $("<button class='yellow  btn-show' style='margin-top:5px;' func='" + el.func +"'>" + el.caption + "</button>");
        //maindiv.prepend(b);
        maindiv.after(b);
    });

    $('.btn-show').click(function (){
        $('.btn-show').removeClass("green").addClass("yellow");
        $(this).addClass("green").removeClass("yellow");

        var f = $(this).attr("func");

        switch(f){
            case "btn-mis-all":
                $(".missions-list>div").show();
                break;
            case "btn-mis-pub":
                $(".missions-list>div").hide();
                $(".mission-list-item-published").show();
                break;
            case "btn-mis-sub":
                $(".missions-list>div").hide();
                $(".mission-list-item-submitted").show();
                break;
            case "btn-mis-draft":
                $(".missions-list>div").hide();
                $(".mission-list-item-draft").show();
                break;
        }
    });
})();
