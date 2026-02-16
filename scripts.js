/*padrao = https://api.mymemory.translated.net//get?q=
traduzir = Hello Word!
idioma = &langpair=BR|en
*/

let inputTexto = document.querySelector(".input-texto")
const textoTraduzido = document.querySelector(".traducao")
const idiomaSelecionado = document.querySelector(".idioma")

async function traduzir() {
    let texto = encodeURIComponent(inputTexto.value)

    let idiomaDestino = idiomaSelecionado.value

    let endereco =
        `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-BR|${idiomaDestino}`


    let resposta = await fetch(endereco)
    let dados = await resposta.json()

    textoTraduzido.innerText = dados.responseData.translatedText
}

function capturarAudio() {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition()
    recognition.lang = "pt-BR"

    recognition.start()

    recognition.onresult = (event) => {
        const textoFalado = event.results[0][0].transcript
        inputTexto.value = textoFalado
        setTimeout(() => {
            traduzir()
        }, 300)
    }
}

