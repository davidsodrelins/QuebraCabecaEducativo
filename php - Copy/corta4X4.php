<?php
require ('../lib/WideImage.php');

$local = "C:\Users\DS\Pictures\arie 3.jpg";

$tamanho = 600; //EM PIXELS 600px
$image = WideImage::load($local); // Carrega a imagem a ser manipulada
$resized = $image->resize($tamanho, $tamanho, 'fill'); //ajusta para o tamanho exato solicitado
$imagemAjustada = "temp.jpg";

$resized->saveToFile("../img/" .$imagemAjustada); // Salva a imagem em um arquivo (novo ou não)
$image = WideImage::load("../img/" . $imagemAjustada); // Carrega a imagem dimensionada

$pedaco = $image->crop(0, 0, 150, 150); //OK
$pedaco->saveToFile('../temp/pedaco1.jpg');

$pedaco = $image->crop(150, 0, 150, 150); //OK
$pedaco->saveToFile('../temp/pedaco2.jpg');

$pedaco = $image->crop(300, 0, 150, 150); //OK
$pedaco->saveToFile('../temp/pedaco3.jpg');

$pedaco = $image->crop(450, 0, 450, 150); //OK
$pedaco->saveToFile('../temp/pedaco4.jpg');

$pedaco = $image->crop(0, 150, 150, 150); //OK
$pedaco->saveToFile('../temp/pedaco5.jpg');

$pedaco = $image->crop(150, 150, 150, 150); //ok
$pedaco->saveToFile('../temp/pedaco6.jpg');

$pedaco = $image->crop(300, 150, 150, 150); //ok
$pedaco->saveToFile('../temp/pedaco7.jpg');

$pedaco = $image->crop(450, 150, 450, 150); //OK
$pedaco->saveToFile('../temp/pedaco8.jpg');


$pedaco = $image->crop(0, 300, 150, 150);
$pedaco->saveToFile('../temp/pedaco9.jpg');


$pedaco = $image->crop(150, 300, 150, 150);
$pedaco->saveToFile('../temp/pedaco10.jpg');

$pedaco = $image->crop(300, 300, 150, 150);
$pedaco->saveToFile('../temp/pedaco11.jpg');

$pedaco = $image->crop(450, 300, 150, 150);
$pedaco->saveToFile('../temp/pedaco12.jpg');


$pedaco = $image->crop(0, 450, 150, 150);
$pedaco->saveToFile('../temp/pedaco13.jpg');

$pedaco = $image->crop(150, 450, 150, 150);
$pedaco->saveToFile('../temp/pedaco14.jpg');

$pedaco = $image->crop(300, 450, 150, 150);
$pedaco->saveToFile('../temp/pedaco15.jpg');

$pedaco = $image->crop(450, 450, 450, 450);
$pedaco->saveToFile('../temp/pedaco16.jpg');






?>
