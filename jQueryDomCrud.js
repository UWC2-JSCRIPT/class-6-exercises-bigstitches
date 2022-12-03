/*
Add the jQuery script tag to your document.
*/

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

//1. Wrap your JS code in the jQuery document.ready method
$(document).ready( function () {
    
    // 2. Access (read) the data-color attribute of the <img>, log to the console.
    console.log($('img').attr('data-color'));
    console.log($('img').data('color'));
    
    
    // 3. Update the third <li> item ("Turbocharged"), set the class name to "highlight"
    const $listItems = $('li');
    $listItems[2].className = 'highlight';
    console.log($listItems[2].className);

    
    // 4. Create a new <a> element containing the text "Buy Now!" with an id of "cta" after the last <p>
    $a = $('<a>');
    $a.text('Buy Now!');
    $a.attr('id', 'cta');
    
    //console.log($a);
    //$('h1').prepend($a);
    //$('p').append($a); // last element within
    $('p').after($a);

    //5. Remove (delete) the last paragraph ("Available for purchase now...")
    $('p').remove();

    // 6. Create a listener on the "Buy Now!" link that responds to a click event.  
    // When clicked, the the "Buy Now!" link should be removed and replaced with text that says "Added to cart"
    $( "#cta" ).click(function() {
        $a.attr('id', 'atc');
        $a.text('Added to Cart');      
    });
    

})

