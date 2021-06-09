// MAIN SECTION new Swiper('CSS 선택자', {'옵션'})
let swiper = new Swiper(".mainSwiper", {
    slidesPerView: 1, // 한번에 보이는 슬라이드 수
    spaceBetween: 30, // 슬라이드 사이 간격
    loop: true, //Infinite loop
    autoplay: {
        delay: 4000, //시간설정
      },
    effect : "fade", //fade효과
    navigation: {
      nextEl: ".slide_right",
      prevEl: ".slide_left",
    },
  });

// MENU SECTION new Swiper
var swiper2 = new Swiper(".swiper-container.menuSlide", {
  autoplay: {
      delay: 2000, //시간설정
      disableOnInteraction: false //스와이프 후 자동 재생
  },
  loop: true, //슬라이드 반복 여부
  slidesPerView: "auto", // 한번에 보이는 슬라이드 수
  speed: 500,
});

// COMMUNICATION SECTION new Swiper
var swiper3= new Swiper(".swiper-container.communication_slide", {
  autoplay: {
      delay: 1000, //시간설정
      disableOnInteraction: false //스와이프 후 자동 재생
  },
  loop: false, //슬라이드 반복 여부
  slidesPerView: "auto", // 한번에 보이는 슬라이드 수
  speed: 500
});

// scroll to top 버튼 선택자
const $scrollToTop= document.querySelector('.goTop');

$scrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
  });


 

