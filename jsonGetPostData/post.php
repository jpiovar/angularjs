<?php



$data = file_get_contents("php://input");
$postData = json_decode($data,true);

var_dump($postData);
/*
echo($postData['id']);
echo($postData['name']);
echo($postData['age']);
echo($postData['quantity']);
echo($postData['price']);
*/

$fp = fopen('r.json','w');
fwrite($fp,json_encode($postData));
fclose($fp);


?>
