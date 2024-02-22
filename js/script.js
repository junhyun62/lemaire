$(document).ready(function(){
    // 햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });




    // 풀페이지 설정해오기 / 섹션4,5,푸터는 정상스크롤값 설정 / 상단이동버튼 보이게 해줘야함 / 풀페이지 부분에는 계속해서 풀페이지 상단영역으로 이동하게 된다 이것을 제거해주기        
    new fullpage('#wrap', {

    anchors : ['anchor1','anchor2','anchor3','anchor4'],

    scrollBar: true,

    normalScrollElements: '.sec-4,.sec-5,.footer',

    fitToSection : false,

    scrollingSpeed:1000,

    responsiveWidth: 1800,
    responsiveHegiht: 890,
});

    // sub-menu
    // 마우스 올리면 카테고리에 맞는탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');
        
        //서브메뉴 박스도 보이게 처리
        $('.sub-menu-box').addClass('active');

        //헤더 색상 변경
        $('.header-area,.header-logo svg').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area,.header-logo svg').removeClass('active');
    });


    var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop:true,
    speed: 500,
    autoplay:{
        delay:1500,
    }
      },
    );

$(window).scroll(function(){
    const sct = $(window).scrollTop();
    if(sct >= 300){
        $('.top-btn').fadeIn()
    }else{
        $('.top-btn').fadeOut()
    };
});

$('.top-btn').click(function(){
    $('html,body').animate({
        scrollTop : 0
    },500);
})

});