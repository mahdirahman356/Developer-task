var swiper = new Swiper(".crad-slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });


let menuList = document.getElementById('menuList')
  menuList.style.maxHeight = '0px'

  const opneMenu = () => {
       if(menuList.style.maxHeight = '0px'){
          menuList.style.maxHeight = '844px'
       }
       else{
        menuList.style.maxHeight = '0px'
       }
  }

  const closeMenu = () => {
     if(menuList.style.maxHeight = '844px'){
        menuList.style.maxHeight = '0px'
     }else{
        menuList.style.maxHeight = '844px'
     }
  }
