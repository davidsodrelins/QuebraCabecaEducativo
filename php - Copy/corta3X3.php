<?php
require ('./lib/WideImage.php');


$local = "https://imgc.allpostersimages.com/img/print/posters/thor-hulk-captain-america-hawkeye-and-iron-man-from-the-avengers-age-of-ultron_a-G-13760548-13198933.jpg";

$tamanho = 600;
$image = WideImage::load($local); // Carrega a imagem a ser manipulada
$resized = $image->resize($tamanho, $tamanho, 'fill'); //ajusta para o tamanho exato solicitado
$imagemAjustada = "temp.jpg";

$resized->saveToFile($imagemAjustada); // Salva a imagem em um arquivo (novo ou não)
$image = WideImage::load("C:/xampp/htdocs/TrabalhoQB/" . $imagemAjustada); // Carrega a imagem dimensionada

$pedaco = $image->crop(0, 0, 200, 200);
$pedaco->saveToFile('pedaco1.jpg');
$pedaco = $image->crop(200, 0, 200, 200);
$pedaco->saveToFile('pedaco2.jpg');
$pedaco = $image->crop(400, 0, 600, 200);
$pedaco->saveToFile('pedaco3.jpg');
$pedaco = $image->crop(0, 200, 200, 200);
$pedaco->saveToFile('pedaco4.jpg');
$pedaco = $image->crop(200, 200, 200, 200);
$pedaco->saveToFile('pedaco5.jpg');
$pedaco = $image->crop(400, 200, 200, 200);
$pedaco->saveToFile('pedaco6.jpg');
$pedaco = $image->crop(0, 400, 200, 600);
$pedaco->saveToFile('pedaco7.jpg');
$pedaco = $image->crop(200, 400, 200, 600);
$pedaco->saveToFile('pedaco8.jpg');
$pedaco = $image->crop(400, 400, 600, 600);
$pedaco->saveToFile('pedaco9.jpg');
?>
