

function openBook(){
    
    document.getElementById("title").style.display = "none"
    document.getElementById("book").style.backgroundImage = `url(./assets/imagens/fundo.gif)`
    setTimeout(page,1900)
}

function page(){
    document.getElementById("book").style.backgroundImage = `url(./assets/imagens/pagina.gif)`
}
