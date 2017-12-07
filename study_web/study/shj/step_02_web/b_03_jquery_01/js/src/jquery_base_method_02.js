(function($){

	var gnbBtn = $('.gnb_btn');
	var gnbUl = $('#gnb').children('ul');

	gnbBtn.on('click', function(evt){
		evt.preventDefault();
		// gnbUl.toggle();
		// gnbUl.slideToggle();
		gnbUl.fadeToggle();
	});
 

 var hide = $('.btn').children('li:nth-child(1)');
 var show = $('.btn').children('li:nth-child(2)');
 var fadeout = $('.btn').children('li:nth-child(3)');
 var fadein = $('.btn').children('li:nth-child(4)');
 var slidehide = $('.btn').children('li:nth-child(5)');
 var slideshow = $('.btn').children('li:nth-child(6)');
 var addClass = $('.btn').children('li:nth-child(7)'); 
 var removeClass = $('.btn').children('li:nth-child(8)');
 var quickToggle = $('.btn').children('li:nth-child(9)');
 var quickfade = $('.btn').children('li:nth-child(10)');
 var slide = $('.btn').children('li:nth-child(11)');
 var clas = $('.btn').children('li:nth-child(12)');

 var view01 = $('.view').children('li:nth-child(1)');
 var view02 = $('.view').children('li:nth-child(2)');
 var view03 = $('.view').children('li:nth-child(3)');
 var view04 = $('.view').children('li:nth-child(4)');
 var view05 = $('.view').children('li:nth-child(5)');
 var view06 = $('.view').children('li:nth-child(6)');
 var view07 = $('.view').children('li:nth-child(7)');
 var view08 = $('.view').children('li').eq(7);

 hide.on('click',function(){
 	view01.hide();});
 show.on('click',function(){
 	view01.show();});

 fadeout.on('click',function(){
    view02.fadeOut();});
 fadein.on('click',function(){
    view02.fadeIn();});

 slidehide.on('click',function(){
    view03.slideUp();});
 slideshow.on('click',function(){
    view03.slideDown();});

 addClass.on('click',function(){
 	view04.addClass('forth');});
  removeClass.on('click',function(){
 	view04.removeClass('forth');});

 quickToggle.on('click',function(){
    view05.toggle();});

 quickfade.on('click',function(){
    view06.fadeToggle();});

 slide.on('click',function(){
    view07.slideToggle();});

 clas.on('click',function(){
    view08.toggleClass('eight');});

// -----------------------------------------------------

$('.btn').children('li').on('click',function(evt){
	evt.preventDefault();

 var i = $(this).index();
// console.log(i);
});
// -----------------------------------------------------

// var tabContentLi = $('.tab_content').children('li');
//  $('.tabs').children('li').on('click',function(evt){
// 	evt.preventDefault();
// 	var t = $(this).index();
// // console.log(t);
// 	$('.tabs').children('li').removeClass('select');
// 	$('.tabs').children('li').eq(t).addClass('select');

 
// tabContentLi.removeClass('select');
// tabContentLi.eq(t).addClass('select');
// });
// ------->내가한거

// ------------------------------------------
var tab = $('.tabs');
var tabLi = tab.children('li');
var tabContent = $('.tab_content');
var tabContentLi = tabContent.children('li');

tabLi.on('click',function(evt){
	evt.preventDefault();
	var myBtn = $(this).index();
	console.log(myBtn);
//tab메뉴 버튼에서 지정한 class이름 select를 일단 삭제
	tabLi.removeClass('select');
	//선택된 몇번째? 확인 후 li에 class이름 select를 지정
	tabLi.eq(myBtn).addClass('select');
//해당하는 탭메뉴의 내용이 순서에 맞게 나오게 만들어라.
tabContentLi.removeClass('select');
tabContentLi.eq(myBtn).addClass('select');

});
// --------> 선생님이 하신거






})(this.jQuery);