jQuery(function($) {
var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
//alert($('a').length);
$('a').each(function() {
    if (this.href === path) {
        $(this).addClass('active');
    }
    //alert(this.href);
});
});