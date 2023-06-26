
//Top 버튼
const toTop = document.querySelector(".goTop");
const section1 = document.querySelector(".section1");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > section1.offsetTop) {
    toTop.style.height = "40px";
  } else {
    toTop.style.height = "0";
  }
});

toTop.addEventListener("click", function (e) {
  e.preventDefault();
  toTop.style = "opacity: 1";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//gnb 메뉴 오픈
const gnbBtn = document.querySelector(".gnb");
const gnbMenu = document.querySelector(".gnb_open");
const gnbClose = document.querySelector(".gnb_close");
const body = document.querySelector('body');

gnbBtn.addEventListener("click", function () {
  gnbMenu.classList.add("active");
  body.style.overflow = 'hidden';
});
gnbClose.addEventListener("click", function () {
  gnbMenu.classList.remove("active");
  body.style.overflow = 'auto';
});

//gnb 서브 메뉴 오픈
const SubBtn = $(".sub_btn"); //gnb메뉴의 각 li
const SubMenus = $(".gnb_sub_hidden"); //submenu
const Btn = $('.gnb_sub');

SubBtn.click(function(){
  const OpenMenu = $(this).find('.gnb_sub_hidden'); //서브 메뉴
  const OpenBtn = $(this).find('.gnb_sub');  //서브 메뉴 버튼 모양

  if(OpenMenu.hasClass('sub_on')){ //***클릭한 것에 클라스가 있는 경우
    OpenMenu.removeClass('sub_on'); //서브 메뉴 안보이게
    OpenBtn.removeClass('active');  //서브 메뉴 버튼 원래대로
    
  }else{                           //***클릭한 것에 클라스가 없는 경우
    SubMenus.removeClass('sub_on'); //서브메뉴 전체 안보이게 클라스 삭제
    Btn.removeClass('active');      //서브메뉴 버튼 전체 원래대로

    OpenMenu.addClass('sub_on');    //클릭한 것만 서브메뉴 보이게 
    OpenBtn.addClass('active');     //클릭한 것만 버튼 모양 다르게
  }
})




/*
const SubBtn = document.querySelectorAll(".sub_btn"); //gnb메뉴의 각 li
const SubMenus = document.querySelectorAll(".gnb_sub_hidden"); //submenu

SubBtn.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    SubMenus[i].classList.toggle("sub_on");
  });
});
*/


//메인 배너 슬라이드
const playStopBtn = document.querySelector(".swiper-playStop");
const swiper = new Swiper(".slide_banner", {
  effect: "fade",
  loop: true,
  speed: 300,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

playStopBtn.addEventListener("click", function () {
  playStopBtn.classList.toggle("stop");
  if (playStopBtn.classList.contains("stop")) {
    swiper.autoplay.stop();
  } else {
    swiper.autoplay.start();
  }
});

//section1 슬라이드
new Swiper(".rec_wrap", {
  loop: true,
  speed: 500,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

//section5 슬라이드
new Swiper(".section5_list", {
  loop: true,
  slidesPerView: 2,
});

//footer toggle 버튼
const toggleBtn = document.querySelector(".footer_toggle"); //푸터 토글 버튼
const footerInfo = document.querySelector(".footer_util"); //푸터 토글 클릭 시 펼쳐짐

toggleBtn.onclick = function () {
  footerInfo.classList.toggle("toggle_on");
  if (footerInfo.classList.contains("toggle_on")) {
    toggleBtn.classList.remove("toggle_rotate");
  } else {
    toggleBtn.classList.add("toggle_rotate");
  }
};

/*
//언어선택
const Ellang_btn = document.querySelector('.lang_btn');
const lang_list = document.querySelector('.lang_list');
const rotate = document.querySelector('.rotate');

Ellang_btn.addEventListener('click', function(){
  if(!lang_list.classList.contains('on')){
    lang_list.classList.add('on');
    Ellang_btn.classList.add('rotate');
  } else{
    lang_list.classList.remove('on');
    Ellang_btn.classList.remove('rotate');
  }
})

//헤더 스타일 변경
const header = document.querySelector('header');
const nav = document.querySelector('.header_nav');

header.onmouseover = function(){
  header.classList.add('onmouse')
}
header.onmouseout = function(){
  header.classList.remove('onmouse')
}


//헤더 높이 
nav.onmouseover = function(){
  header.style.height = '205px'; 
}
nav.onmouseout = function(){
  header.style.height = '160px'; 
}


//서브메뉴 
$('.nav_menu').mouseover(function(){
  $(this).find('.nav_sub').stop().fadeIn(300);
})
$('.nav_menu').mouseleave(function(){
  $(this).find('.nav_sub').stop().fadeOut(300);
})


//메인배너 슬라이드
const swiper = new Swiper(".slide_banner", {
  effect: "fade",
  loop: true,
  speed: 300,
  autoplay:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});



//설화수 추천 슬라이드
new Swiper(".rec_wrap", {
	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 20, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
	loopFillGroupWithBlank : true,
  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loop : true,
  autoplay: true,
  speed:500,
	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev',
	},
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

//메인 배너 슬라이드 재생, 정지
const playStopBtn = document.querySelector('.swiper-playStop');

playStopBtn.addEventListener('click',function(){
  playStopBtn.classList.toggle('stop');
  if(playStopBtn.classList.contains('stop')){
    swiper.autoplay.stop()
  } else {
    swiper.autoplay.start()
  }
})

//Top 버튼
const toTop = document.querySelector('.goTop');
const section2 = document.querySelector('.section2');

window.addEventListener('scroll', function(){
  if(this.window.scrollY > section2.offsetTop){
    toTop.style.height = "60px";
  } else {
    toTop.style.height = "0";
  }
})


/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    toTop.style.display = "inline-block";
  } else {
    toTop.style.display = "none";
  }
}
*/
