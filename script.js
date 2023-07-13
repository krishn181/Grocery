let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    
    shopping.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.toggle('active');
}

let shopping = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shopping.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
        searchForm.classList.remove('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');

}

var swiper = new Swiper(".product-slider",{
loop:true,
    spaceBetween: 20,
    autoplay: {
        // delay: 4000,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,
        },

    },
})


var swiper = new Swiper(".review-slider",{
    loop:true,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction:false,
        },
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 2,
    
            },
            1024: {
                slidesPerView: 3,
            },
    
        },
    })