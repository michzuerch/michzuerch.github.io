"use strict";

import "./styles.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "hover.css/css/hover-min.css";

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the "main-nav" element
        var $target = document.getElementById('main-nav');

        // Toggle the class on "main-nav"
        $target.classList.toggle('hidden');
      });
    });
  }
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    nav: true,
    autoHeight: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      960: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  /* mouse wheel navigation */
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });

  /*keyboard navigation*/
  $(document.documentElement).keyup(function (event) {
    if (event.keyCode == 37) {
      /*left key*/
      owl.trigger("prev.owl.carousel", [700]);
    } else if (event.keyCode == 39) {
      /*right key*/
      owl.trigger("next.owl.carousel", [700]);
    }
  });

});
