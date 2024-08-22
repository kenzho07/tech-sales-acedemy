
$(".accordion-toggle-panel").click(function () {
    // Toggle aria-expanded for accordion
    $(this).attr('aria-expanded', function (i, attr) {
        return attr === 'true' ? 'false' : 'true';
    });

    $([document.documentElement, document.body]).animate({
        scrollTop: $(this).offset().top - $('#navigation').outerHeight()
    }, 1000);

// accordion when one panel is open the others are closed

document.querySelectorAll('.aria-expanded').forEach((header) => {
    header.addEventListener('click', () => {
      // Get all headers and contents
      const allHeaders = document.querySelectorAll('.aria-expanded');
      const allContents = document.querySelectorAll('.aria-controls');
  
      // Remove 'active' class from all headers and hide all contents
      allHeaders.forEach((hdr) => hdr.classList.remove('active'));
      allContents.forEach((cnt) => cnt.style.display = 'none');
  
      // Add 'active' class to the clicked header
      header.classList.add('active');
  
      // Show the content of the clicked header
      const content = header.nextElementSibling;
      content.style.display = 'block';
    });
  });

// Set width of child element to the width of the header to
// avoid text resizing during expansion
let accordionWidth = $(this).width();
    $(".accordion-body-text").width(accordionWidth);

    // Scroll body of element to center of screen after it has expanded
    var element = this;
    setTimeout(function () {
        element.parentElement.nextElementSibling.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);


// Show or Hide accordion panel body
    $($(this).data("target")).toggle(300);

    
});

// Prevent text from sticking out of accordion on window resize
$(window).resize(function () {
    $(".accordion-body-text").removeAttr("style");
});

//remove scrolling from accordion

