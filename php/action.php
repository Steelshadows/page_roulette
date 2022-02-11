<?php 
session_start();
//header("Content-Type: application/json");
//requires the DB class
require_once('class/DB_class.php');

//function includes
include_once('rouletteFunctions.php');
 
//get data and fire function
if(isset($_GET["action"])){
    $data = json_decode(stripslashes(file_get_contents("php://input")),true);
    //var_dump(stripslashes(file_get_contents("php://input")));
    $funcName = $_GET["action"];    
    echo json_encode($funcName($data));
}