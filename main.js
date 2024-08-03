var typed = new Typed(".text", {
    strings: ["Experienced Full Stack Developer", "PMP Certified"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


document.getElementById("hireMe")?.addEventListener('click', ()=>{
    window.location = "mailto:varshu1112@gmail.com"
});

document.getElementsByClassName("navbar")[0].classList.add('hide-nav');

document.getElementsByClassName("header")[0].addEventListener('click',()=>{
    let _navbar = document.getElementsByClassName("navbar");
    if(_navbar && !Array.from(_navbar[0]?.classList).includes('hide-nav')) {
        _navbar[0].classList.add('hide-nav');
    } else {
        _navbar[0].classList.remove('hide-nav')
    }
})