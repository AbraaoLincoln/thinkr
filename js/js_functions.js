
function write(){
    let text = "Um lugar para fazer sua ideia se tornar realidade."
    let i = 0

    const type = () => {
        if(i < text.length){
            document.getElementById("p-slogan").innerHTML += text.charAt(i)
            i++
            setTimeout(type, 75)
        }else{
            document.getElementById("btn-projetos").style.display = "inline"
            setTimeout(fadinBtnProjetos, 100)        
        }
    }

    const fadinBtnProjetos = () => {
        document.getElementById("btn-projetos").style.transform = "scale(1)"
    }

    type()
}

window.onload = write()