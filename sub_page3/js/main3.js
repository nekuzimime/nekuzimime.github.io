window.onscroll=function(){myFunction()()};var header=document.getElementById("nav-bar");var sticky=header.offsetTop;function myFunction(){if(window.pageYOffset>sticky){header.classList.add("sticky");header.classList.remove("navbar-up")}else{header.classList.add("navbar-up");header.classList.remove("sticky")}}const navSlide=()=>{const burger=document.querySelector('.burger');const nav=document.querySelector('.nav-box');const navLinks=document.querySelectorAll('.nav-box li');burger.addEventListener('click',()=>{nav.classList.toggle('nav-active');navLinks.forEach((link,index)=>{if(link.style.animation){link.style.animation=''}else{link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.3}s`}});burger.classList.toggle('toggle')})}
navSlide();