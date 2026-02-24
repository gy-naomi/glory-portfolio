/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({        elements: '#portfolio a.portfolio-box'    });

    const projectModal = document.getElementById('projectModal');

    if (projectModal) {
    projectModal.addEventListener('show.bs.modal', function (event) {

        const button = event.relatedTarget;

        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        const tools = button.getAttribute('data-tools');
        const image = button.getAttribute('data-image');
        const link = button.getAttribute('data-link');
        const buttonText = button.getAttribute('data-button');

        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalTools').textContent = tools;
        document.getElementById('modalImage').src = image;

        const modalButton = document.getElementById('modalButton');
        modalButton.href = link;
        modalButton.textContent = buttonText;

    });
    }

    // =====================
// Portfolio Filtering
// =====================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {

    // Remove active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.dataset.category === filterValue) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

  });
});


});
