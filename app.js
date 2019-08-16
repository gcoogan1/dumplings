var menuApi = new MenusApi("ke09z8icq4xu8uiiccighy1bw");
menuApi.loadMenusForLocation("humptys-dumplings" , "singleplatform-menu" );

$(document).ready(() => {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  4000);
});