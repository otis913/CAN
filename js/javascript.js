// 漢堡選單
$(document).ready(function () {
  $(".burger").click(function () {
    $(this).next().stop(true).slideToggle("normal");
  });
});

// 選單:開始訓練
$(document).ready(function () {
  $(".tran-btn").click(function () {
    $(this).next().slideToggle(500).css({
      display: "flex",
      flexDirection: "column",
    });
  });
});

// 首頁酷炫招式
// $(document).ready(function () {

//  $('.nav-master-ul li').mouseenter(function(){
//     $(this).css({
//       filter:'saturate(1)',
//       flexGrow:'2',
//     });
//     $('.nav-master-ul li').not(this).css({
//       filter:'saturate(0)',
//       flexGrow:'1',
//     });
//   })
// $('.onearms').mouseenter(function(){
//   $(this).css({
//     filter:'saturate(1)',
//     flexGrow:'2',
//   });
//   $(this).children().css({
//       display: 'block',
//       width: '100%',
//       height: '100%',
//       lineHeight: '200px',
//       fontSize: '40px',
//       fontWeight: 'bold',
//       color: '#f2f2f2',
//       textShadow: '3px 3px 3px #595959',
//     });
// });

// $('.onearms').mouseleave(function(){
//   $(this).css({
//     filter:'saturate(0)',
//     flexGrow:'1',
//   });
// })

// $('.planche').mouseenter(function(){
//   $(this).css({
//     filter:'saturate(1)',
//     flexGrow:'2',
//   });
// })
// $('.planche').mouseleave(function(){
//   $(this).css({
//     filter:'saturate(0)',
//     flexGrow:'1',
//   });
// })
// $('.muscleup').mouseenter(function(){
//   $(this).css({
//     filter:'saturate(1)',
//     flexGrow:'2',
//   });
// })
// $('.muscleup').mouseleave(function(){
//   $(this).css({
//     filter:'saturate(0)',
//     flexGrow:'1',
//   });
// })
// $('.humanflag').mouseenter(function(){
//   $(this).css({
//     filter:'saturate(1)',
//     flexGrow:'2',
//   });
// })
// $('.humanflag').mouseleave(function(){
//   $(this).css({
//     filter:'saturate(0)',
//     flexGrow:'1',
//   });
// })
// $('.frontlever').mouseenter(function(){
//   $(this).css({
//     filter:'saturate(1)',
//     flexGrow:'2',
//   });
// })
// $('.frontlever').mouseleave(function(){
//   $(this).css({
//     filter:'saturate(0)',
//     flexGrow:'1',
//   });
// })
// $('.handstand').mouseenter(function(){
//   $(this).css({
//     filter:'saturate(1)',
//     flexGrow:'2',
//   });
// })
// $('.handstand').mouseleave(function(){
//   $(this).css({
//     filter:'saturate(0)',
//     flexGrow:'1',
//   });
// })

// ---------------

// $('.masterLi').mouseleave(function(){
//    $(this).children().css({
//     display: 'none',
//     });
//   })

// $('.planchA').mouseenter(function(){
//   $(this).css({
//     display: 'block',
//     width: '100%',
//     height: '100%',
//     lineHeight: '200px',
//     fontSize: '40px',
//     fontWeight: 'bold',
//     color: '#f2f2f2',
//     textShadow: '3px 3px 3px #595959',
//   });
// });
// $('.planchA').mouseleave(function(){
//    $('this').css({
//     display: 'none',
//     });
//   })

// $('.muscleupA').mouseenter(function(){
//   $(this).css({
//     display: 'block',
//     width: '100%',
//     height: '100%',
//     lineHeight: '200px',
//     fontSize: '40px',
//     fontWeight: 'bold',
//     color: '#f2f2f2',
//     textShadow: '3px 3px 3px #595959',
//   });
// });
// $('.muscleupA').mouseleave(function(){
//    $('this').css({
//     display: 'none',
//     });
//   })

// $('.humanflagA').mouseenter(function(){
//   $(this).css({
//     display: 'block',
//     width: '100%',
//     height: '100%',
//     lineHeight: '200px',
//     fontSize: '40px',
//     fontWeight: 'bold',
//     color: '#f2f2f2',
//     textShadow: '3px 3px 3px #595959',
//   });
// });
// $('.humanflagA').mouseleave(function(){
//    $('this').css({
//     display: 'none',
//     });
//   })

// $('.frontleverA').mouseenter(function(){
//   $(this).css({
//     display: 'block',
//     width: '100%',
//     height: '100%',
//     lineHeight: '200px',
//     fontSize: '40px',
//     fontWeight: 'bold',
//     color: '#f2f2f2',
//     textShadow: '3px 3px 3px #595959',
//   });
// });
// $('.frontleverA').mouseleave(function(){
//    $('this').css({
//     display: 'none',
//     });
//   })
// $('.handstandA').mouseenter(function(){
//   $(this).css({
//     display: 'block',
//     width: '100%',
//     height: '100%',
//     lineHeight: '200px',
//     fontSize: '40px',
//     fontWeight: 'bold',
//     color: '#f2f2f2',
//     textShadow: '3px 3px 3px #595959',
//   });
// });
// $('.handstandA').mouseleave(function(){
//    $('this').css({
//     display: 'none',
//     });
//   })

// });

//常見問題
$(document).ready(function () {
  $(".qa-title").click(function () {
    $(this).next().slideToggle(800);
  });
});

// // 首頁scoll效果
// var controller = new ScrollMagic.Controller();
// // ------------calisthenics介紹
// var introUl = TweenMax.to('.slider-pic', 1.5,{
//   opacity:1
// })
// new ScrollMagic.Scene({
//   triggerElement:'.introduction'
// }).setTween(introUl).addTo(controller)

// var introMain = TweenMax.to('.introd-main', 1.5,{
//   opacity:1
// })
// new ScrollMagic.Scene({
//   triggerElement:'.introduction'
// }).setTween(introMain).addTo(controller)

// RWD部分

// var introRwdPic = TweenMax.to(".introd-pic", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".introduction",
// })
//   .setTween(introRwdPic)
//   .addTo(controller);

// // ---------------現代街頭健身
// var strworkText = TweenMax.to(".str-workout-main-text", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".str-workout-main",
//   offset: 200,
// })
//   .setTween(strworkText)
//   .addTo(controller);

// // -------------blog,training
// var blogNav = TweenMax.to(".nav-blog", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".nav-blog-novtrain",
// })
//   .setTween(blogNav)
//   .addTo(controller);

// var novtrainNav = TweenMax.to(".nav-novtrain", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".nav-blog-novtrain",
// })
//   .setTween(novtrainNav)
//   .addTo(controller);

// // ---------酷炫招式
// var navMaster = TweenMax.to(".nav-master-ul", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".nav-master",
// })
//   .setTween(navMaster)
//   .addTo(controller);

// // 商品區
// var productUl = TweenMax.to(".product-ul", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".product",
// })
//   .setTween(productUl)
//   .addTo(controller);

// // 神人區
// var godmanUl = TweenMax.to(".godmanUl", 1.5, {
//   opacity: 1,
// });
// new ScrollMagic.Scene({
//   triggerElement: ".godman",
// })
//   .setTween(godmanUl)
//   .addTo(controller);
