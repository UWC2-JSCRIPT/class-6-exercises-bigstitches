$(document).ready( function () {
  /**
  * Adds new list item to <ul> and a listener event to the new <a> of class 'delete'
  */
  const addListItem = function(event) {
    event.preventDefault();
    const $text = $('input').val();

    // create all the elements, list/span/a 
    const $list = $('<li>');
    const $span = $('<span>');
    $span.text($text);
    const $a = $('<a>');
    $a.attr('class', 'delete').text('Delete');

    // bundle the elements for style
    $list.append($span);
    $list.append($a);

    // add a listener to the new 'delete' class <a>
    $a.click( function () {$(this).parent().remove();})
    // add a listener to the new <li>
    $list.on('click', function(event) { $(this).toggleClass('done');})

    // put on the ul of class today-list
    $(".today-list").append($list);

  };

  /**
  * Delete element when delete link clicked
  */
  $(".delete").click( function () {
    //console.log($(this));
    //console.log($(this).parent());
    $(this).parent().remove();
  })

  // event listener to add items
  $(".add-item").click(addListItem);

  /**
  * Toggles "done" class on <li> element
  */
  $('li').on('click', function(event) {
    $(this).toggleClass('done');
  })
});

