const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu")
const nav = document.querySelector("nav")

openMenu.addEventListener("click", function(){
    nav.style.display = "block";
});
closeMenu.addEventListener("click", function(){
    nav.style.display = "none";
});

/*global $ */ 
$(function(){
    'use strict';
});