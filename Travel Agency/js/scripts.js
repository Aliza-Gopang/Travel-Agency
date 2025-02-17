/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
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

    //  Activate Bootstrap scrollspy on the main nav element
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

});







function openPopup(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    document.getElementById('overlay').style.display = 'none';
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {

    // Open the pop-up
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function closePopup() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        document.getElementById('overlay').style.display = 'none';
    }

    function handleBookingForm(formId, ticketPrefix, successMessageId, modalId, ticketIdElement) {
        let form = document.getElementById(formId);
        if (!form) return; // Prevent errors if the form doesn't exist

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            // Generate a random ticket ID
            let ticketID = ticketPrefix + "-" + Math.floor(Math.random() * 1000000);

            // Display success message with Ticket ID
            document.getElementById(ticketIdElement).innerText = ticketID;
            document.getElementById(successMessageId).style.display = "block";

            // Reset form fields
            this.reset();

            // Hide message and close modal after 5 seconds
            setTimeout(() => {
                document.getElementById(successMessageId).style.display = "none";

                // Close Bootstrap modal properly
                let bookingModal = bootstrap.Modal.getInstance(document.getElementById(modalId));
                if (bookingModal) {
                    bookingModal.hide();
                }
            }, 5000);
        });
    }

    // Attach event listeners to booking forms
    handleBookingForm("bookingForm", "TKT", "successMessage", "bookingFormModal", "ticketID");
    handleBookingForm("usaBookingForm", "USA-TKT", "usaSuccessMessage", "usaBookingFormModal", "usaTicketID");
    handleBookingForm("canadaBookingForm", "CAN-TKT", "canadaSuccessMessage", "canadaBookingFormModal", "canadaTicketID");
    handleBookingForm("switzerlandBookingForm", "SWL-TKT", "switzerlandSuccessMessage", "switzerlandBookingFormModal", "switzerlandTicketID");
    handleBookingForm("italyBookingForm", "ITT", "italySuccessMessage", "italyBookingFormModal", "italyTicketID");
    handleBookingForm("malaysiaBookingForm", "MLS", "malaysiaSuccessMessage", "malaysiaBookingFormModal", "malaysiaTicketID");
});
