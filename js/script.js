$(document).ready(function() {

  var $boxes = $('.masonry-image');
  $boxes.hide();
  
  var $container = $('#grid');
  $container.imagesLoaded( function() {
    $boxes.fadeIn();

    $container.masonry({
        itemSelector : '.masonry-image',
        columnwidth: 0
    });    
  });
});