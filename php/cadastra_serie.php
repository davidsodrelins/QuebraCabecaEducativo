<?php
include("data.php");

$serie = $_GET['serie'];


$busca = @mysqli_query($_SG['link'], "SELECT descricao FROM serie WHERE descricao = '$serie'");
$query1 = @mysqli_num_rows($busca);


if ($query1 == 0){
       @mysqli_query($_SG['link'], "INSERT INTO serie (descricao) VALUES ('$serie')");
    echo 1;
} else{
    echo 0;
}
