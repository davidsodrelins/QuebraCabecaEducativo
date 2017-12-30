window.onload = function () {

	var salvar_serieJs = document.getElementById("salvar_serie");
	salvar_serieJs.onclick = function () {
        salvarSerie();
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


function salvarSerie() {
    var xmlreq = CriaRequest();

    var serie = document.getElementById("serie");

    xmlreq.open("GET", "php/cadastra_serie.php?serie=" + serie.value, true);

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {
                var resposta = xmlreq.responseText;
                if (resposta == 1) {
                    alert("serie cadastrada com sucesso." );
                    window.location.href = ("CADASTRA_SERIE.html");
                }else
					alert("erro ao cadastrar");
            }
        }
    };
    xmlreq.send(null);
}
