﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//togglefunction(navbar)
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});



//for clients curosel(services)
$(document).ready(function () {
    $("#owl-demo1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: false
    });
});


//for our work portfolio section
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const filterValue = filter.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


//for testimonal curosel
$(document).ready(function () {
    $("#owl-demo2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        animateOut: 'fadeOut'
    });
});



// Scroll-to-Top Functionality
document.addEventListener("DOMContentLoaded", function () {
    const toTopButton = document.getElementById("toTop");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            toTopButton.style.display = "block"; 
        } else {
            toTopButton.style.display = "none"; 
        }
    });
    // Smooth scroll to top on click
    toTopButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    });
});


//for countrycode
document.getElementById('country-code').addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex].text;
    document.getElementById('contact-number').placeholder = selectedOption;
});









