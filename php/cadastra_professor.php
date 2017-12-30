<?php
include("data.php");

$nome = $_GET['nome'];
$senha =  md5($_GET['senha']);
$cpf = $_GET['cpf'];

$busca = @mysqli_query($_SG['link'], "SELECT * FROM professor WHERE cpf = '$cpf'");
$query1 = @mysqli_num_rows($busca);


if ($query1 == 0){
       @mysqli_query($_SG['link'], "INSERT INTO professor (nome,senha,cpf) VALUES ('$nome','$senha','$cpf')");
    echo 0;
} if($query1 == 1){
    echo 1;
}
