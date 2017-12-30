window.onload = function () {

	var salvar_dificuldadeJs = document.getElementById("salvar_dificuldade");
	salvar_dificuldadeJs.onclick = function () {
        salvarDificuldade();
    };
	
};

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


function salvarDificuldade() {
    var xmlreq = CriaRequest();

    var dificuldade = document.getElementById("dificuldade");

    xmlreq.open("GET", "php/cadastra_dificuldade.php?dificuldade=" + dificuldade.value, true);

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {
                var resposta = xmlreq.responseText;
                if (resposta == 1) {
                    alert("Dificuldade cadastrada com sucesso." );
                    window.location.href = ("index.html");
                }else
					alert("erro ao cadastrar");
            }
        }
    };
    xmlreq.send(null);
}
