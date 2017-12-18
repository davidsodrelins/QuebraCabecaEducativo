
//desenvolvido por David Sodré Lins
//davidsodre_ba@hotmail.com - 12/2017
//uso livre
function celula(n) { //retorna o ID da célula clicada
		return 'td#c'+ n;	
}

function troca(a, b) { // a = celula que foi clicada e b = local pra onde a celula clicada pode ir (trocar)

	if(document.querySelector(b).innerHTML==''){
		document.querySelector(b).innerHTML = document.querySelector(a).innerHTML;
		document.querySelector(a).innerHTML = '';
	}
}

function checaVitoria() {
    //verificar se o numero da imagem é igual ao id da td
    //exemplo: pedaco1 e c1, c1 significa celula 1
    //contador = 0
    //pega pedaco e c e compara os seus numeros no final
    //se forem iguais, ex: pedaco1 e c1, 1=1 então contador++ faz isso de 1 até 9, se for diferente pára
    //quando o contador for igual a 8 significa que o cara montou tudo certinho
    //aparece a imagem numero 9
    //mostra a pergunta sobre a imagem
	document.querySelector(celula(9)).innerHTML = '<input type="image" src="pedaco9.jpg" id="b9" />';
	alert('muito bem!');
}


function celulaClicada(numero) {
    switch (numero) {
        case 1: //clicou na primeira celula (1,1) 
            troca(celula(1), celula(2)) // A primeira célula só pode movimentar para a célula 2 ou para a 4
            troca(celula(1), celula(4)) //celula(1) -> celula(2) ou celula(1) -> celula(4) 
            break

        case 2:
            troca(celula(2), celula(1))
            troca(celula(2), celula(3))
            troca(celula(2), celula(5))
            break

        case 3:
            troca(celula(3), celula(2))
            troca(celula(3), celula(6))
            break

        case 4:
            troca(celula(4), celula(1))
            troca(celula(4), celula(5))
            troca(celula(4), celula(7))
            break

        case 5:
            troca(celula(5), celula(4))
            troca(celula(5), celula(2))
            troca(celula(5), celula(6))
            troca(celula(5), celula(8))
            break

        case 6:
		
			troca(celula(6), celula(3))
            troca(celula(6), celula(5))
            troca(celula(6), celula(9))
            break

        case 7:
            troca(celula(7), celula(4))
            troca(celula(7), celula(8))
            break

        case 8:
            troca(celula(8), celula(7))
            troca(celula(8), celula(5))
            troca(celula(8), celula(9))
            break

        case 9:
		    troca(celula(9), celula(8))
            troca(celula(9), celula(6))
            break
    }
}

function inicio (){
	document.querySelector(celula(9)).innerHTML = ''
}

function embaralhar(array) {
  for(var i = array.length; i > 1; i--) {
    var r = Math.floor(Math.random() * i);
    var temp = array[r];
    array[r] = array[i-1];
    array[i-1] = temp;
  }
  return array;
}
function CriaRequest() {
    try {
        request = new XMLHttpRequest();
    } catch (IEAtual) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (IEAntigo) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (falha) {
                request = false;
            }
        }
    }
    if (!request)
        alert("Seu Navegador não suporta Ajax!");
    else
        return request;
}

function carregarImagem() {
    var xmlreq = CriaRequest();

    xmlreq.open("GET", "corta4x4.php", true);

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {
               alert("Se a imagem não aparecer, pressione F5 ou atualize a página.");
            }
        }
    };
    xmlreq.send(null);
}

window.onload = function() {
		carregarImagem();

	var sequencia = [1,2,3,4,5,6,7,8];
	sequencia = embaralhar(sequencia);
    tabuleiro = '<table>   <tr>      <td id="c1" onclick="celulaClicada(1)"><input type="image" src="pedaco'+sequencia[0]+'.jpg" id="b1"  /></td>      <td id="c2" onclick="celulaClicada(2)"><input type="image" src="pedaco'+sequencia[1]+'.jpg" id="b2"  /></td>      <td id="c3" onclick="celulaClicada(3)"><input type="image" src="pedaco'+sequencia[2]+'.jpg" id="b3"  /></td>   </tr>   <tr>      <td id="c4" onclick="celulaClicada(4)"><input type="image" src="pedaco'+sequencia[3]+'.jpg" id="b4"  /></td>      <td id="c5" onclick="celulaClicada(5)"><input type="image" src="pedaco'+sequencia[4]+'.jpg" id="b5"  /></td>      <td id="c6" onclick="celulaClicada(6)"><input type="image" src="pedaco'+sequencia[5]+'.jpg" id="b6" /></td>   </tr>   <tr>      <td id="c7" onclick="celulaClicada(7)"><input type="image" src="pedaco'+sequencia[6]+'.jpg" id="b7" /></td>      <td id="c8" onclick="celulaClicada(8)"><input type="image" src="pedaco'+sequencia[7]+'.jpg" id="b8" /></td>      <td id="c9" onclick="celulaClicada(9)"><input type="image" src="pedaco9.jpg" id="b9" /></td>    </tr></table>';
    document.getElementById("puzzle").innerHTML = tabuleiro;
    inicio();
}