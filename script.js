
document.getElementById('mude').addEventListener('change', mudar)

const senha = document.querySelector('.pass')

function mudar() {
    console.log('OK')
    let tipo = senha.getAttribute('type')
    if (tipo == 'password') {
        senha.setAttribute('type', 'text')
        senha.style = "background: url('assets/eye.svg') no-repeat right;"
    }
    else if (tipo == 'text') {
        senha.setAttribute('type', 'password')
        senha.style = "background: url('assets/eye-abr.svg') no-repeat right;"
    }
}


function gerarCores() {
    let codigos = '0123456789ABCDEF'
    let cor = '#'
    for (var i = 0; i < 6; i++) {
        cor += codigos[Math.floor(Math.random() * 16)];
    }
    return cor
}

function mudarCores() {
    var obrigado = document.querySelector('.thank')
    obrigado.style = `color: ${gerarCores()};`
}