const btnHomeHeader = document.getElementById('btnHomeHeader');
const btnHomeHeaderMobile = document.getElementById('btnHomeHeaderMobile');
const btnHomeFooter = document.getElementById('btnHomeFooter');

const btnAboutHeader = document.getElementById('btnAboutHeader');
const btnAboutHeaderMobile = document.getElementById('btnAboutHeaderMobile');
const btnAboutFooter = document.getElementById('btnAboutFooter');
const aboutSection = document.getElementById('aboutSection');

const btnServicesHeader = document.getElementById('btnServicesHeader');
const btnServicesHeaderMobile = document.getElementById('btnServicesHeaderMobile');
const btnServicesFooter = document.getElementById('btnServicesFooter');
const servicesSection = document.getElementById('servicesSection');

const btnContactHeader = document.getElementById('btnContactHeader');
const btnContactHeaderMobile = document.getElementById('btnContactHeaderMobile');
const btnContactFooter = document.getElementById('btnContactFooter');
const contactSection = document.getElementById('contactSection');

btnAboutHeader.addEventListener('click', () => {
    aboutSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
btnAboutHeaderMobile.addEventListener('click', () => {
    aboutSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
btnAboutFooter.addEventListener('click', () => {
    aboutSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});

btnHomeHeader.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
});
btnHomeFooter.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
});
btnHomeHeaderMobile.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
    //document.getElementById('menuOptionsContainer').style.display = 'none';
});
btnServicesHeader.addEventListener('click', () => {
    servicesSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
btnServicesHeaderMobile.addEventListener('click', () => {
    servicesSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
btnServicesFooter.addEventListener('click', () => {
    servicesSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
btnContactHeader.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
  });
btnContactHeaderMobile.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
btnContactFooter.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('headerMD');
    const menuOptions = document.getElementById('menuOptions');
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo: oculta el header
        //header.style.transform = 'translateY(-100%)';
        
        header.style.top = '-18vh';
        header.style.backgroundColor = "#fdd100";
        header.style.boxShadow = "4px 4px 10px black, -4px -4px 10px black";
        header.style.borderBottomLeftRadius = "30%";
        //box-shadow: 4px 4px 10px black, -4px -4px 10px black;
        //border-bottom-left-radius: 30%;
        headerMobile.style.top = '-12vh';
        headerMobile.style.backgroundColor = "#fdd100";
    } else {
        // Scroll hacia arriba: muestra el header
        //header.style.transform = 'translateY(0)';
        header.style.top = '0';
        headerMobile.style.top = '0';
    }
    
    if (window.scrollY === 0) {
        
        //menuOptions.style.display = "none";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        //header.menuContainer.style.color = "white";
        headerMobile.style.backgroundColor = "transparent";
        headerMobile.style.boxShadow = "none";
        //document.getElementById('btnHomeHeaderMobile').style.backgroundColor = 'white'
  
      }
  
      lastScrollY = currentScrollY;
    });
});

// Selecciona los elementos que quieres animar
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Configura el observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reinicia la animación eliminando y volviendo a agregar la clase
      const animationType = entry.target.dataset.animation;
      entry.target.classList.remove(animationType); // Elimina la clase
      void entry.target.offsetWidth; // Fuerza un reflow para reiniciar la animación
      entry.target.classList.add(animationType); // Vuelve a agregar la clase
    }
  });
}, {
  threshold: 0.1, // 10% del elemento visible para activar la animación
});

// Asocia el observador a cada elemento
elementsToAnimate.forEach(element => observer.observe(element));
