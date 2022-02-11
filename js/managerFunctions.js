var edits;
function editFramePage(id){
    console.log(id);
    $(".url_editor").removeClass("d-none");
    $(".preview_box").addClass("d-none");

    $id = $("#id-"+id).html();
    $url = $("#url-"+id).html();
    $duration = $("#duration-"+id).html();
    $pageInfo = $("#pageInfo-"+id).html();
    $date = $("#date-"+id).html();
    $status = $("#status-"+id).html();

    $("#edit_id").html($id);
    $("#edit_url").val($url);
    $("#edit_duration").val($duration);
    $("#edit_pageInfo").val($pageInfo);
    $("#edit_date").html($date);

    if($status == "active"){
        $("#status_radio_active").prop("checked",true)
    }else{
        $("#status_radio_hidden").prop("checked",true)
    }
}
function submitEditFramePage(){
    edits = {
        'id': $("#edit_id").html(),
        'url': $("#edit_url").val(),
        'duration': $("#edit_duration").val(),
        'pageInfo': $("#edit_pageInfo").val(),
        'status': (($("#status_radio_active").prop("checked"))?"active":"hidden")
    }
    console.log(edits);
    doRequest("php/action.php?action=submitPage",edits,(res)=>{
        $data = JSON.parse(res);
        console.log($data)
        $(".all_urls").html($(".all_urls").html()+$data["html"])

        $("#url-"+edits["id"]).html(edits["url"]);
        $("#duration-"+edits["id"]).html(edits["duration"]);
        $("#pageInfo-"+edits["id"]).html(edits["pageInfo"]);
        $("#status-"+edits["id"]).html(edits["status"]);

        // $("#edit_id").html($data["id"]);
        // $("#edit_url").val($data["url"]);
        // $("#edit_duration").val($data["duration"]);
        // $("#edit_pageInfo").val($data["pageInfo"]);
    })
}
function newFramePage(){
    $(".preview_box").addClass("d-none");
    $(".url_editor").removeClass("d-none");
    $("#edit_id").html("new");
    $("#edit_url").val("");
    $("#edit_duration").val("");
    $("#edit_pageInfo").val("");
    $("#edit_date").html("");
}
function previewFramePage(id){
    $(".url_editor").addClass("d-none");
    $(".preview_box").removeClass("d-none");
    $("#preview_frame").attr('src',$("#url-"+id).html());    
}