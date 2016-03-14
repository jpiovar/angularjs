<?php



$data = file_get_contents("php://input");
$postData = json_decode($data);

echo($postData->id);
echo($postData->name);
echo($postData->age);
echo($postData->quantity);
echo($postData->price);






?>
