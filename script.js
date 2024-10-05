// Função para destacar o link do cabeçalho correspondente à seção ativa
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animação ao rolar para a seção
window.addEventListener('scroll', function() {
    const animatables = document.querySelectorAll('[data-animate]');

    animatables.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < window.innerHeight - 100) {
            element.classList.add('animated');
        }
    });
});




// Array com 10 frases para citação do dia
const quotes = [
    '"As coisas do mundo não nos satisfazem, pois fomos feitos para o infinito." - Santa Teresa d\'Ávila',
    '"O que fazemos é apenas uma gota no oceano, mas sem ela o oceano seria menor." - Santa Teresa de Calcutá',
    '"Quem não vive para servir, não serve para viver." - São José de Anchieta',
    '"Muitos preferem a escuridão à luz, pois a luz revela suas falhas." - Santo Agostinho',
    '"A paz começa com um sorriso." - Santa Teresa de Calcutá',
    '"A medida do amor é amar sem medida." - Santo Agostinho',
    '"É necessário obedecer a Deus antes que aos homens." - São Pedro',
    '"Muitos querem mudar o mundo, mas poucos querem mudar a si mesmos." - São Francisco de Assis',
    '"O sofrimento é o caminho certo para a vitória." - Santa Teresa de Lisieux',
    '"Não há liberdade onde o egoísmo reina." - São Maximiliano Kolbe'
];

// Seleciona uma frase aleatória
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

// Insere a frase no elemento com o id "daily-quote"
document.getElementById('daily-quote').textContent = randomQuote;

// Função para destacar o link do cabeçalho correspondente à seção ativa
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animação ao rolar para a seção
window.addEventListener('scroll', function() {
    const animatables = document.querySelectorAll('[data-animate]');

    animatables.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < window.innerHeight - 100) {
            element.classList.add('animated');
        }
    });
});
