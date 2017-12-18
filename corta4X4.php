<?php
require ('./lib/WideImage.php');


$local = "https://imgc.allpostersimages.com/img/print/posters/thor-hulk-captain-america-hawkeye-and-iron-man-from-the-avengers-age-of-ultron_a-G-13760548-13198933.jpg";

$tamanho = 600; //EM PIXELS 600px
$image = WideImage::load($local); // Carrega a imagem a ser manipulada
$resized = $image->resize($tamanho, $tamanho, 'fill'); //ajusta para o tamanho exato solicitado
$imagemAjustada = "temp.jpg";

$resized->saveToFile($imagemAjustada); // Salva a imagem em um arquivo (novo ou não)
$image = WideImage::load("./" . $imagemAjustada); // Carrega a imagem dimensionada

$pedaco = $image->crop(0, 0, 150, 150); //OK
$pedaco->saveToFile('pedaco1.jpg');

$pedaco = $image->crop(150, 0, 150, 150); //OK
$pedaco->saveToFile('pedaco2.jpg');

$pedaco = $image->crop(300, 0, 150, 150); //OK
$pedaco->saveToFile('pedaco3.jpg');

$pedaco = $image->crop(450, 0, 450, 150); //OK
$pedaco->saveToFile('pedaco4.jpg');

$pedaco = $image->crop(0, 150, 150, 150); //OK
$pedaco->saveToFile('pedaco5.jpg');

$pedaco = $image->crop(150, 150, 150, 150); //ok
$pedaco->saveToFile('pedaco6.jpg');

$pedaco = $image->crop(300, 150, 150, 150); //ok
$pedaco->saveToFile('pedaco7.jpg');

$pedaco = $image->crop(450, 150, 450, 150); //OK
$pedaco->saveToFile('pedaco8.jpg');


$pedaco = $image->crop(0, 300, 150, 150);
$pedaco->saveToFile('pedaco9.jpg');


$pedaco = $image->crop(150, 300, 150, 150);
$pedaco->saveToFile('pedaco10.jpg');

$pedaco = $image->crop(300, 300, 150, 150);
$pedaco->saveToFile('pedaco11.jpg');

$pedaco = $image->crop(450, 300, 150, 150);
$pedaco->saveToFile('pedaco12.jpg');


$pedaco = $image->crop(0, 450, 150, 150);
$pedaco->saveToFile('pedaco13.jpg');

$pedaco = $image->crop(150, 450, 150, 150);
$pedaco->saveToFile('pedaco14.jpg');

$pedaco = $image->crop(300, 450, 150, 150);
$pedaco->saveToFile('pedaco15.jpg');

$pedaco = $image->crop(450, 450, 450, 450);
$pedaco->saveToFile('pedaco16.jpg');






?>
