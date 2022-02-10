function editFramePage(id){
    console.log(id);
    $(".url_editor").removeClass("d-none");
    
    $id = $("#id-"+id).html();
    $url = $("#url-"+id).html();
    $duration = $("#duration-"+id).html();
    $pageInfo = $("#pageInfo-"+id).html();
    $date = $("#date-"+id).html();
    $status = $("#status-"+id).html();

    $("#edit_id").html($id);
    $("#edit_url").attr("value",$url);
    $("#edit_duration").attr("value",$duration);
    $("#edit_pageInfo").text($pageInfo);
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
        'url': $("#edit_url").attr("value"),
        'duration': $("#edit_duration").attr("value"),
        'pageInfo': $("#edit_pageInfo").text(),
        'status': (($("#status_radio_active").prop("checked",true))?"active":"hidden")
    }
    console.log(edits);
}
function newFramePage(){
    $(".url_editor").removeClass("d-none");
    $("#edit_id").html("new");
    $("#edit_url").attr("value","");
    $("#edit_duration").attr("value","");
    $("#edit_pageInfo").text("");
    $("#edit_date").html("");
}
function hideFramePage(id){
    console.log(id);
}
function showFramePage(id){
    console.log(id);
}
function previewFramePage(id){
    console.log(id);
}