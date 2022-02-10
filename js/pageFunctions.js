function random_index(old_index){
    new_index = Math.floor(Math.random() * urls.length);
    //console.log({"old":old_index,"new":new_index});
    if(old_index == new_index) return random_index(new_index);
    if(old_index != new_index) return new_index
};
//load page handles all class and content manipulations for this site
function load_page($index,arg){
    if($index >= urls.length)$index = 0;
    if($index < 0)$index = 0;
    if(typeof arg["target"] == 'undefined')arg["target"] = 0;
    if(arg["target"] == 0){
        $("#rouletteFrame0").removeClass('d-none') //shows the selected iframe
        setTimeout(function (){ //waits the duration set in the array + 5 seconds for the fade out
        $("#rouletteFrame0").addClass('fade_out')//fades out selected iframe
        $("#rouletteFrame0").removeClass('fade_in')//removes the fade in class so it can be applied again in the next run
            setTimeout(function (){ //waits 5 seconds until the fade out is done
                $("#rouletteFrame1").removeClass('d-none') //shows the next iframe
                $("#rouletteFrame1").removeClass('fade_out')//removes the fade out class so it can be applied again in the next run
                $("#rouletteFrame1").addClass('fade_in')//fades the next iframe in
                $("#rouletteFrame0").addClass('d-none')//hides the previous iframe
            }, 5000);
        }, parseInt(urls[$index]["duration"])+5000);
    }
    if(arg["target"] == 1){
        $("#rouletteFrame1").removeClass('d-none') //shows the selected iframe
        setTimeout(function (){ //waits the duration set in the array + 5 seconds for the fade out
        $("#rouletteFrame1").addClass('fade_out')//fades out selected iframe
        $("#rouletteFrame1").removeClass('fade_in')//removes the fade in class so it can be applied again in the next run
            setTimeout(function (){ //waits 5 seconds until the fade out is done
                $("#rouletteFrame0").removeClass('d-none') //shows the next iframe
                $("#rouletteFrame0").removeClass('fade_out')//removes the fade out class so it can be applied again in the next run
                $("#rouletteFrame0").addClass('fade_in')//fades the next iframe in
                $("#rouletteFrame1").addClass('d-none')//hides the previous iframe
            }, 5000);
        }, parseInt(urls[$index]["duration"])+5000);
    }
    console.log(urls[$index]);
    $("#rouletteFrame"+arg["target"]).attr('src',urls[$index]["url"]) // changes the url/content of the selected iframe
    if(typeof urls[$index]["pageInfo"] != 'undefined' && urls[$index]["pageInfo"] != ""){
        $("#infoBox").addClass("infoBox");
        $("#infoBox").html(urls[$index]["pageInfo"]);
    }else{
        $("#infoBox").removeClass("infoBox");
        $("#infoBox").html("");
    }
    setTimeout(function (){
        if(arg["target"]){
            arg["target"]--;
        }
        else {
            arg["target"]++;
        }
        if(arg.shuffle == 1){
            load_page(random_index($index),arg);
        }else{
            $index++
            load_page($index,arg);
        }
    }, parseInt(urls[$index]["duration"])+10000);
}