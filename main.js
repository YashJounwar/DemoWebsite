let toggle = document.querySelector("#header .toggle-button")
let colllapse = document.querySelectorAll("header .colllapse")

toggle.addEventListener('click',function(){
    colllapse.forEach(col=>col.classList.toggle("colllapse-toggle"))
})

//    with masonry 
new Masonry("#posts .grid",{
    itemselector: 'grid-item',
    gutter: 20
});

// swiper library initialization
new Swiper('.swiper',{
    direction:'horizontal',
    loop:true,
    slidesPerView:5,
    autoplay:{
    delay:3000
    }
    // responsive breakpoints
    ,breakpoints:{
        '@0':{
            slidesPerView:2,
        },
        // 888px
        '@1.00':{
            slidesPerView:3,
        },
        // 1110px
        '@1.25':{
            slidesPerView:4,
        },
        // 1330px
        '@1.50':{
            slidesPerView:5,
        },
    }
});

// stickey navigation

window.onscroll = function(){myFunction()};
//get the current value
let navbar =  document.getElementById("header")

//gert the navbar position)
let stickey = navbar.offsetTop;

//stickey function
function myFunction(){
    if(window.pageYOffset >= stickey){
        navbar.classList.add("stickey")
    }else{
        navbar.classList.remove("stickey");
    }
}