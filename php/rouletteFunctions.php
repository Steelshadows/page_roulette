<?php
function submitPage($data){

    $db_connection = new db_connection();

    $id = $data["id"];
    $url = $data["url"];
    $duration = $data["duration"];
    $pageInfo = $data["pageInfo"];
    $status = $data["status"];

    if($id == "new"){
        $success = $db_connection->Query(
            "INSERT INTO `pages` (`url`, `duration`, `pageInfo`, `status`, `date`) VALUES (?, ?, ?, ?, current_timestamp())",
            [$url,$duration,$pageInfo,$status]
        );
        if($success == true){
            return ["success"=>$success,"msg"=>"inserted_page_successfully"];
        }else{
            return ["success"=>$success,"error"=>"error_inserting_new_page"];
        }
    }else{
        $success = $db_connection->Query(
            "UPDATE `pages` SET `url`=?,`duration`=?,`pageInfo`=?,`status`=? WHERE `id` = ?",
            [$url,$duration,$pageInfo,$status,$id]
        );
        if($success == true){
            return ["success"=>$success,"msg"=>"edited_page_successfully"];
        }else{
            return ["success"=>$success,"error"=>"error_editing_new_page"];
        }
    }
}