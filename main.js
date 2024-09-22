$(document).ready(function () {
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Show specific section based on navigation
    window.showSection = function(event, sectionId) {
        event.preventDefault();
        $('.content').hide();
        $('#' + sectionId).show();
        $('.nav-link').removeClass('active');
        $(event.currentTarget).addClass('active');
    };

    // Handle Contact Form Submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        $('#contactModal').modal('hide');
        $(this)[0].reset();
    });
});



$(document).ready(function() {
    $('#loadhow').click(function() {
        $('#howSection').load('how.html', function() {
            $(this).fadeIn(); 
        });
    });
}
);


$(document).ready(function() {
    $('#loadabout').click(function() {
        $('#aboutSection').load('about.html', function() {
            $(this).fadeIn(); 
        });
    });
});


$(document).ready(function() {
    $('#loadFaq').click(function() {
        $('#faqSection').load('faq.html', function() {
            $(this).fadeIn(); 
        });
    });
});


$(document).ready(function() {
    $('#loadprivacy').click(function() {
        $('#privacySection').load('privacypolicy.html', function() {
            $(this).fadeIn(); 
        });
    });
} );


$(document).ready(function() {
    $('#loadterms').click(function() {
        $('#termsSection').load('terms.html', function() {
            $(this).fadeIn(); 
        });
    });
} );


$(document).ready(function() {
    $('#loadcontact').click(function() {
        $('#contactSection').load('contact.html', function() {
            $(this).fadeIn(); 
        });
    });
} );