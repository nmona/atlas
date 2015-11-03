// load typekit
try{ Typekit.load({ async: true }); }catch(e){}

$(function(){
  var grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true
  });

  grid.imagesLoaded().progress(function(){
    grid.masonry('layout');
  });
});
