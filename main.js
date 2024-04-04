// Abre e Fecha o menu quando clicar no icone: menu e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}



// Quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
    }



// Mudar o header da pagina quando der o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    }
    else{
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})



//TESTIMONIALS CAROUSEL SLIDER SWIPER

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });



// ScrollReveal: Mostrar elementos quando dar scroll na página
const scrollreveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollreveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    {interval: 100 }
)



// Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
})