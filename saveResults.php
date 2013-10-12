<?php
include_once "sqlstart.php";
$rawdata = file_get_contents('php://input');
date_default_timezone_set('UTC');
$ts_int = date("YmdHis",$tmpdate);
$inpmap=json_decode($rawdata,true);
$ts=$inpmap["ts"];
$datatype=$inpmap["datatype"];
$data=json_encode($inpmap["data"]);
echo $ts;
$myins= mysql_query("INSERT INTO  DevelopmentHist ( ts ,datatype, data) VALUES ('$ts', '$datatype',  '$data');");
mysql_close($con);
echo $myins; 
?>

