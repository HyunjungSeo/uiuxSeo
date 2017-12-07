  
  (function($){
    $('#menuBtn').on('click',function(){
      	$('#menuBox').toggleClass('fixed')}

 );})(this.jQuery);

 (function($){
var banner = $('#mainBox');
var bannerUl = banner.children('ul');
var bannerLast = bannerUl.children('li');

bannerLast.last().prependTo(bannerUl);
bannerUl.css({marginLeft:'-100%'});
banner.css({overflow:'hidden'});

$('#leftBtn').on('click', function(event){
    event.preventDefault(); //?

    bannerUl.stop(true, false).animate({marginLeft:0}, function(){
        bannerLast = bannerUl.children('li').last();
        bannerLast.prependTo(bannerUl);
        bannerUl.css({marginLeft:'-100%'});
    })
}) // leftBtn 클릭

$('#rightBtn').on('click', function(event){
    event.preventDefault(); //?

    bannerUl.stop(true, false).animate({marginLeft:'-200%'}, function(){
        bannerLast = bannerUl.children('li').first();
        bannerLast.appendTo(bannerUl);
        bannerUl.css({marginLeft:'-100%'});
    })
}) // rightBtn 클릭


})(this.jQuery);