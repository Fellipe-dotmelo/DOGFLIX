$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function leiaMais() {
    const tresPontos = document.getElementById('tresPontos');
    const mostrarMais = document.getElementById('mostrarMais');
    const botao = document.querySelectorAll('.botao');

    if (tresPontos.style.display === 'none') {
        tresPontos.style.display = 'inline';
        mostrarMais.style.display = 'none';
        botao.innerHTML = 'INFORMAÇÕES';
    } else {
        tresPontos.style.display = 'none';
        mostrarMais.style.display = 'inline';
        botao.innerHTML = 'INFORMAÇÕES';
        tresPontos.innerHTML = '<p>A fantástica história de uma turma de cães muito atrapalhada</p>'
    }
}