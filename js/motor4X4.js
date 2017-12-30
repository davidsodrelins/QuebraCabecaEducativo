//desenvolvido por David Sodré Lins
//davidsodre_ba@hotmail.com - 12/2017
//uso livre
window.onload = function() {
		
		var carregarImagemJs = document.getElementById("carregar_imagem");
			carregarImagemJs.onclick = function () {
			carregarImagem();
		};
				
		var sequencia = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];
		sequencia = embaralhar(sequencia);
		tabuleiro = '<table>   <tr>      <td id="c01" onclick="celulaClicada(1)"><input type="image" src="./temp/pedaco' + sequencia[0] + '.jpg" id="b1"  /></td>      <td id="c02" onclick="celulaClicada(2)"><input type="image" src="./temp/pedaco' + sequencia[1] + '.jpg" id="b2"  /></td>      <td id="c03" onclick="celulaClicada(3)"><input type="image" src="./temp/pedaco' + sequencia[2] + '.jpg" id="b3"  /></td>      <td id="c04" onclick="celulaClicada(4)"><input type="image" src="./temp/pedaco' + sequencia[3] + '.jpg" id="b4"  /></td>   </tr>   <tr>      <td id="c05" onclick="celulaClicada(5)"><input type="image" src="./temp/pedaco' + sequencia[4] + '.jpg" id="b5"  /></td>      <td id="c06" onclick="celulaClicada(6)"><input type="image" src="./temp/pedaco' + sequencia[5] + '.jpg" id="b6" /></td>      <td id="c07" onclick="celulaClicada(7)"><input type="image" src="./temp/pedaco' + sequencia[6] + '.jpg" id="b7" /></td>      <td id="c08" onclick="celulaClicada(8)"><input type="image" src="./temp/pedaco' + sequencia[7] + '.jpg" id="b8" /></td>   </tr>   <tr>      <td id="c09" onclick="celulaClicada(9)"><input type="image" src="./temp/pedaco' + sequencia[8] + '.jpg" id="b9"  /></td>      <td id="c10" onclick="celulaClicada(10)"><input type="image" src="./temp/pedaco' + sequencia[9] + '.jpg" id="b10" /></td>      <td id="c11" onclick="celulaClicada(11)"><input type="image" src="./temp/pedaco' + sequencia[10] + '.jpg" id="b11" /></td>      <td id="c12" onclick="celulaClicada(12)"><input type="image" src="./temp/pedaco' + sequencia[11] + '.jpg" id="b12" /></td>   </tr>   <tr>      <td id="c13" onclick="celulaClicada(13)"><input type="image" src="./temp/pedaco' + sequencia[12] + '.jpg" id="b13"  /></td>      <td id="c14" onclick="celulaClicada(14)"><input type="image" src="./temp/pedaco' + sequencia[13] + '.jpg" id="b14" /></td>      <td id="c15" onclick="celulaClicada(15)"><input type="image" src="./temp/pedaco' + sequencia[14] + '.jpg" id="b15" /></td>      <td id="c16" onclick="celulaClicada(16)"><input type="image" src="./temp/pedaco' + sequencia[15] + '.jpg" id="b16" /></td>   </tr></table>';
		legenda =   '<input type="image" src="./img/temp.jpg"  width=300 high=300 />';
		document.getElementById("puzzle").innerHTML = tabuleiro;
		document.getElementById("legend").innerHTML = legenda;

		inicio();

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

	var local = document.getElementById("local");

    xmlreq.open("GET", "php/corta4x4.php?local=" + local.value, true);

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {
			   alert("Bom jogo!");
               window.location.href = ("index.html");
            }
        }
    };
    xmlreq.send(null);
}





function celula(n) { //retorna o ID da célula clicada
    if(n<10){
		return 'td#c0' + n;
	}else{
		return 'td#c' + n;
	}
}
function troca(a, b) { // a = celula que foi clicada e b = local pra onde a celula clicada pode ir (trocar)
    if (document.querySelector(b).innerHTML == '') {
        document.querySelector(b).innerHTML = document.querySelector(a).innerHTML;
        document.querySelector(a).innerHTML = '';
		checaVitoria();
    }
}

function checaVitoria() {
    //verificar se o numero da imagem é igual ao id da td
    //exemplo: pedaco1 e c1, c1 significa celula 1
    //contador = 0
    //pega pedaco e c e compara os seus numeros no final
    //se forem iguais, ex: pedaco1 e c1, 1=1 então contador++ faz isso de 1 até 15, se for diferente pára
    //quando o contador for igual a 8 significa que o cara montou tudo certinho
    //aparece a imagem numero 16
    //mostra a pergunta sobre a figura
	var contador = 0;
	var img;
	var numImg;
	var celId; 
	var numCelId;
	
	for(var i=1; i<=15; i++){
			if(i<10){
				img = document.getElementById("c0"+i).innerHTML;
				numImg = img.substring(40, 38);		
				celId = document.getElementById("c0"+i).id;
				numCelId = celId.substring(1, 3);
			}else{
				img = document.getElementById("c"+i).innerHTML;
				numImg = img.substring(40, 38);
				celId = document.getElementById("c"+i).id;
				numCelId = celId.substring(1, 3);
			}
			if(numCelId === numImg){
				
				contador++;
			}
		}
		if(contador == 15){
			document.querySelector(celula(16)).innerHTML = '<input type="image" src="./temp/pedaco16.jpg" id="b16" />';
			alert('muito bem!');
		}  
}


function celulaClicada(numero) {
    switch (numero) {
        case 1: //clicou na primeira celula (1,1) 
            troca(celula(1), celula(2)) // A primeira célula só pode movimentar para a célula 2 ou para a 4
            troca(celula(1), celula(5)) //celula(1) -> celula(2) ou celula(1) -> celula(4) 
            break

        case 2:
            troca(celula(2), celula(1))
            troca(celula(2), celula(3))
            troca(celula(2), celula(6))
            break

        case 3:
            troca(celula(3), celula(2))
            troca(celula(3), celula(4))
            troca(celula(3), celula(7))

            break

        case 4:
            troca(celula(4), celula(3))
            troca(celula(4), celula(8))
            break

        case 5:
            troca(celula(5), celula(1))
            troca(celula(5), celula(6))
            troca(celula(5), celula(9))
            break

        case 6:
            troca(celula(6), celula(2))

            troca(celula(6), celula(5))
            troca(celula(6), celula(7))
            troca(celula(6), celula(10))
            break

        case 7:
            troca(celula(7), celula(3))
            troca(celula(7), celula(6))
            troca(celula(7), celula(8))
            troca(celula(7), celula(11))
            break

        case 8:
            troca(celula(8), celula(4))
            troca(celula(8), celula(7))
            troca(celula(8), celula(12))
            break

        case 9:
            troca(celula(9), celula(5))
            troca(celula(9), celula(10))
            troca(celula(9), celula(13))
            break
        case 10:
            troca(celula(10), celula(6))
            troca(celula(10), celula(9))
            troca(celula(10), celula(11))
            troca(celula(10), celula(14))
            break
        case 11:
            troca(celula(11), celula(7))
            troca(celula(11), celula(10))
            troca(celula(11), celula(12))
            troca(celula(11), celula(15))
            break
        case 12:
            troca(celula(12), celula(8))
            troca(celula(12), celula(11))
            troca(celula(12), celula(16))
            break
        case 13:
            troca(celula(13), celula(9))
            troca(celula(13), celula(14))
            break
        case 14:
            troca(celula(14), celula(10))
            troca(celula(14), celula(13))
            troca(celula(14), celula(15))
            break
        case 15:
            troca(celula(15), celula(11))
            troca(celula(15), celula(14))
            troca(celula(15), celula(16))
            break
        case 16:
            troca(celula(16), celula(12))
            troca(celula(16), celula(15))
            break
    }
}

function inicio() {
    document.querySelector(celula(16)).innerHTML = ''
}

function embaralhar(array) {
    for (var i = array.length; i > 1; i--) {
        var r = Math.floor(Math.random() * i);
        var temp = array[r];
        array[r] = array[i - 1];
        array[i - 1] = temp;
    }
    return array;
}



