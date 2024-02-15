/* Forma menos usual de adicionar eventos aos botoes
compartilhar.onclick = function() {
    código
}
*/
const URL_INSTAGRAM = "https://www.instagram.com/jose_vitormoraes/"

let compartilhar = document.getElementById("compartilharPerfilButton")

/* Forma mais comum de adicionar eventos aos botoes */
compartilhar.addEventListener('click', compartilharPerfilFunction)

async function compartilharPerfilFunction() {
    let shareData = {
        title: "Instagram Jornada de Programador",
        text: "Conheça a Jornada de Programador",
        url: URL_INSTAGRAM
    }

    try {
        await navigator.share(shareData)
    } catch (err) {
        console.log(err)
        if (!(err instanceof DOMException && err.name === "AbortError")) {
            window.open(URL_INSTAGRAM)
        }
    }
}

function copiarLink() {

    navigator.clipboard.writeText(URL_INSTAGRAM)
    // Mudar o texto do botão 
    let copiarLinkTexto = document.getElementById("copiarLink")
    copiarLinkTexto.innerHTML = "<strong>Link copiado!</strong>"
    // Adicionar animção no botão (feedback)
    let copiarlinkBtn = document.getElementById("copiarLinkBtn")
    copiarlinkBtn.classList.add('animate__animated', 'animate__pulse')
    // Remover animação e voltar para o texto original
    copiarlinkBtn.addEventListener('animationend', () => {
        copiarLinkTexto.innerText = "Copiar link"
        copiarlinkBtn.classList.remove('animate__pulse')
    })
}