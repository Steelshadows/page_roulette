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
            $data["id"] = $db_connection->getLastId();
            return ["success"=>$success,"msg"=>"inserted_page_successfully","html"=>create_page_view_html([$data])];
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
function create_page_view_html($data){
    ob_start();
        foreach($data as $item){
    ?>
        <div class="row p-3">                          
            
            <div class="row">
                <label class="col-3">id:</label>
                <label id="id-<?=$item["id"]?>"class="col-9"><?=$item["id"]?></label>
            </div>
                
            <div class="row">
                <label class="col-3">url:</label>
                <label id="url-<?=$item["id"]?>"class="col-9"><?=$item["url"]?></label>
            </div>
                
            <div class="row">
                <label class="col-3">duration:</label>
                <label id="duration-<?=$item["id"]?>"class="col-9"><?=$item["duration"]?></label>
            </div>
                
            <div class="row">
                <label class="col-3">pageInfo:</label>
                <label id="pageInfo-<?=$item["id"]?>"class="col-9"><?=$item["pageInfo"]?></label>
            </div>
                
            <div class="row">
                <label class="col-3">date:</label>
                <label id="date-<?=$item["id"]?>"class="col-9">Now</label>
            </div>
            <div class="row">
                <label class="col-3">status:</label>
                <label id="status-<?=$item["id"]?>"class="col-9"><?=$item["status"]?></label>
            </div>
            <div class="row">
                <button class="col-3 m-2" onclick="editFramePage(<?=$item['id']?>)">edit</button>
                <button class="col-3 m-2" onclick="previewFramePage(<?=$item['id']?>)">preview</button>
            </div>
        </div>
    <?php
    }
    return ob_get_clean();
}