



function sortear_numero(){
    var x = Math.floor(Math.random() * 6) +1  ;
    console.log(x)
    document.getElementById("dado").classList.add("animar")
    document.getElementById("dado").classList.add("aparecer")
    document.getElementById("sortear").style.display = "none"
    document.getElementById("numero_dado").innerHTML = "?"
    setTimeout(function(){
        if(x == 1){
            document.getElementById("dado").src = "imagens/1.png"
        }else if(x==2){
            document.getElementById("dado").src = "imagens/2.png"
        }else if(x==3){
            document.getElementById("dado").src = "imagens/3.png"
        }else if(x==4){
            document.getElementById("dado").src = "imagens/4.png"
        }else if(x==5){
            document.getElementById("dado").src = "imagens/5.png"
        }else if(x==6){
            document.getElementById("dado").src = "imagens/6.png"
    }
    document.getElementById("numero_dado").innerHTML = x
    document.getElementById("dado").classList.remove("animar")
    document.getElementById("dado").classList.remove("aparecer")
    document.getElementById("sortear").style.display = "block"
    }, 1750)
    
}
