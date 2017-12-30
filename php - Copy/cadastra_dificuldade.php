<?php
include("data.php");

$dificuldade = $_GET['dificuldade'];


$busca = @mysqli_query($_SG['link'], "SELECT descricao FROM nivel_dificuldade WHERE descricao = '$dificuldade'");
$query1 = @mysqli_num_rows($busca);


if ($query1 == 0){
       @mysqli_query($_SG['link'], "INSERT INTO nivel_dificuldade (descricao) VALUES ('$dificuldade')");
    echo 1;
} else{
    echo 0;
}
