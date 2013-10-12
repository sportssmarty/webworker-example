<?php
  $con = mysql_connect("","","");
  if (!$con) {
  die('Could not connect: ' . mysql_error());
  }
  mysql_select_db("dbbf", $con);   
?>
