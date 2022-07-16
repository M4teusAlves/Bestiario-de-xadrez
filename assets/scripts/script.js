
let  i = 0
let button = document.getElementsByTagName("button")
function openBook(){
    
    document.getElementById("title").style.display = "none"
    document.getElementById("book").style.backgroundImage = `url(./assets/imagens/fundo.gif)`
    setTimeout(page,1900)
}

function page(){ 
    let flag = 0
    document.getElementById("book").style.backgroundImage = `url(./assets/imagens/pagina.gif)`
    document.getElementsByTagName("section")[i].style.display = "flex"
    if(i!==0){
        button[0].style.display = "block"
        flag++
    }

    if(i!==document.getElementsByTagName("section").length - 1){
        button[1].style.display = "block"
        flag++
    }

    if(flag<2){
        button[0].style.marginRight = "97%"
    }
    
}

function nextPage(){
    document.getElementsByTagName("section")[i].style.display = "none"
    document.getElementById("book").style.backgroundImage = `url(./assets/imagens/nextpage.gif)`
    button[0].style.display = "none"
    button[1].style.display = "none"
    i++
    setTimeout(page,600)
}

function backPage(){
    document.getElementsByTagName("section")[i].style.display = "none"
    document.getElementById("book").style.backgroundImage = `url(./assets/imagens/backpage.gif)`
    button[0].style.display = "none"
    button[1].style.display = "none"
    i--
    setTimeout(page,600)

}
