window.onload = function () {

	var salvar_professorJs = document.getElementById("salvar_professor");
	salvar_professorJs.onclick = function () {
        salvarProfessor();
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


function salvarProfessor() {
    var xmlreq = CriaRequest();

    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var cpf = document.getElementById("cpf");

    xmlreq.open("GET", "php/cadastra_professor.php?nome=" + nome.value +"&senha="+senha.value+"&cpf="+cpf.value, true);
    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {
                var resposta = xmlreq.responseText;

                if (resposta == 0) {
                    alert("Professor cadastrado com sucesso");
                    window.location.href = ("cadastra_professor.html");
                }
				if (resposta == 1) {
                    alert("Professor já possui cadastro");
                    window.location.href = ("cadastra_professor.html");
                }
            }
        }
    };
    xmlreq.send(null);
}
