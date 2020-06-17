/* aula 6- jogo do dado.*/ 

var sorteio = Math.floor(Math.random() * 6 + 1);
switch(sorteio) {
    case 1: 
        document.getElementById("face").src = "imagem/face1.png";
        break;
case 2: 
        document.getElementById("face").src = "imagem/face2.png";
        break;
case 3: 
        document.getElementById("face").src = "imagem/face3.png";
        break;
case 4: 
        document.getElementById("face").src = "imagem/face4.png";
        break;
case 5: 
        document.getElementById("face").src = "imagem/face5.png";
        break;
case 6: 
        document.getElementById("face").src = "imagem/face6.png";
        break;
        default:
            //caso contrário
            break;

}
