/* window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) { // Si se hace scroll más de 50px
    header.style.top = '-16vh';
    header.style.backgroundColor = "rgba(169, 169, 169, 1)";
    header.style.boxShadow = "4px 4px 10px black, -4px -4px 10px black";
    header.style.borderTopRightRadius = "30%";
    header.style.borderBottomLeftRadius = "30%";
    header.style.transition = "all 0.2s ease-in-out";
    } else {
        header.style.top = '0';
}
}); */

let lastScrollTop = 0;
const header = document.getElementById("header");
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {
        header.style.top = '-20vh';
        header.style.backgroundColor = "rgba(169, 169, 169, 0.9)";
        header.style.boxShadow = "4px 4px 10px black, -4px -4px 10px black";
        header.style.borderTopRightRadius = "30%";
        header.style.borderBottomLeftRadius = "30%";
        header.style.transition = "all 0.2s ease-in-out";
      //headerMobile.style.top = '-10vh';
      //document.getElementById('menuOptionsContainer').style.display = 'none';
    } else {
      header.style.top = '0';
      //headerMobile.style.top = '0';
    }

    if (window.scrollY === 0) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Ajusta la velocidad
});
  
