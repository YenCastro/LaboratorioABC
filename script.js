
let letrasVistas = 0;

function voltear(card) {
    card.classList.toggle('volteada');

    if (!card.dataset.visto) {
        card.dataset.visto = "true";
        letrasVistas++;
        const contadorElemento = document.getElementById('contador') || document.getElementById('contador-letras');
        if (contadorElemento) {
            contadorElemento.textContent = letrasVistas;
        }
    }
}

function filtrar(tipo) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (tipo === 'todas') {
            card.classList.remove('oculto');
        } else if (tipo === 'vocales') {
            if (card.dataset.tipo === 'vocal') {
                card.classList.remove('oculto');
            } else {
                card.classList.add('oculto');
            }
        }
    });
}
