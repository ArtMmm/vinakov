"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menulink = document.querySelectorAll('.menu-link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menulink.forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });
});


    
