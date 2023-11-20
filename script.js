
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