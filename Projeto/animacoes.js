window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const observador1 = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        } else {
            entrada.target.classList.remove('mostrar');
        }
    });
});
const escondidos = document.querySelectorAll('.margem');
escondidos.forEach((el) => observador1.observe(el));