<?php
$data=$_POST['query'];
$path ='C:\Users\sanjay_godiya\Desktop\userQueries.txt';
$fp = fopen($path, "a+") or die("Unable to open file!");
fwrite($fp, $data);
fwrite($fp, "\n");
fclose($fp);
?>