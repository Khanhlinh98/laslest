$('.customer__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/left.svg"></i></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/right.svg"></i></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:false,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
    
});
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const activeMenu = "is-show";
  toggle.addEventListener("click",function() {
  menu.classList.add(activeMenu);
  });

  // window.addEventListener("click", function(e){   
  //   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
  //    menu.classList.remove(activeMenu);
  //   }
  // });