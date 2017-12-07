
  // (function($){
  //  var headOffset = $('#headBox').offset().top
  //  var winScroll = $('window').on('scroll',function(){
  //   $(this).scrollTop()
  //  })

  // if(headOffset<=winScroll){
  //   console.log();
  // }
  // })(this.jQuery);

    (function($){
      var headBox = $('#headBox');
      var headOffset = headBox.offset().top;
      console.log(headOffset);
      
      $(window).on('scroll',function(){
      var winScroll = $(this).scrollTop();
      // console.log(winScroll);

      if(headOffset<=winScroll){
        headBox.addClass('fixed');}
        else{
          headBox.removeClass('fixed')
         };
        });
 var move = $('#gnb>ul>li>a>span');
 var ban = $('#bannerBox');
   
   // move.prependTo(ban); 
   ban.prepend(move);
   // 괄호 안에 들어가는 변수명은 ' '로 감싸면 태그명이 된다.


    })(this.jQuery);