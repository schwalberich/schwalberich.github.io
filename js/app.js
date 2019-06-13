$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('select').formSelect();

  $('.tabs').click(function(){
    $('html, body').animate({
      scrollTop: $('#drinksTabs').offset().top -70
    }, 500);
  });
});
