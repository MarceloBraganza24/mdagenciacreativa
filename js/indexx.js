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
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo: oculta el header
        
        header.style.top = '-18vh';
        header.style.backgroundColor = "#fdd100";
        header.style.boxShadow = "4px 4px 10px black, -4px -4px 10px black";
        header.style.borderBottomLeftRadius = "30%";
        headerMobile.style.top = '-14vh';
        headerMobile.style.backgroundColor = "#fdd100";
        headerMobile.style.boxShadow = "4px 4px 10px black, -4px -4px 10px black";
        headerMobile.style.borderBottomLeftRadius = "30%";
    } else {
        // Scroll hacia arriba: muestra el header
        header.style.top = '0';
        headerMobile.style.top = '0';
      }
      
      if (window.scrollY === 0) {
        /* document.getElementById('logoConFondo').style.display = 'block'
        document.getElementById('logoSinFondo').style.display = 'none' */

        headerMobile.style.top = '0';

        btnHomeHeader.style.color = 'white';
        btnAboutHeader.style.color = 'white';
        btnServicesHeader.style.color = 'white';
        btnContactHeader.style.color = 'white';
      
        const linea1 = document.getElementById('linea1');
        const linea2 = document.getElementById('linea2');
        const linea3= document.getElementById('linea3');
        linea1.style.backgroundColor = 'white';
        linea2.style.backgroundColor = 'white';
        linea3.style.backgroundColor = 'white';

        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        headerMobile.style.backgroundColor = "transparent";
        headerMobile.style.boxShadow = "none";
  
      } else {
        btnHomeHeader.style.color = 'black';
        btnAboutHeader.style.color = 'black';
        btnServicesHeader.style.color = 'black';
        btnContactHeader.style.color = 'black';

        const linea1 = document.getElementById('linea1');
        const linea2 = document.getElementById('linea2');
        const linea3= document.getElementById('linea3');
        linea1.style.backgroundColor = 'black';
        linea2.style.backgroundColor = 'black';
        linea3.style.backgroundColor = 'black';
      }
  
      lastScrollY = currentScrollY;
    });
});

document.getElementById('logoWhatsapp').addEventListener('click', function () {
  window.open("https://wa.me/5492926457583", "_blank");
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

document.addEventListener('DOMContentLoaded', () => {
  const hmenu = document.getElementById('hmenu');
  const menuOptionsContainer = document.getElementById('menuOptionsContainer');

  // Variable para rastrear si el div está activo
  let isActive = false;

  // Evento para mostrar/ocultar el div al presionar el botón
  hmenu.addEventListener('click', () => {
    isActive = !isActive;
    if (isActive) {
      menuOptionsContainer.classList.add('active');
    } else {
      menuOptionsContainer.classList.remove('active');
    }
  });

  // Evento para ocultar el div al hacer scroll
  window.addEventListener('scroll', () => {
    if (isActive) {
      menuOptionsContainer.classList.remove('active');
      isActive = false; // Actualiza el estado
    }
  });
});