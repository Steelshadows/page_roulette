<?php
    require_once('php/class/DB_class.php');
    $db_connection = new db_connection();

    $urls_db = $db_connection->fetchAllQuery("SELECT * FROM `pages` WHERE 1");
    
    $urls = [
        [
            "url"=>"https://www.bing.com/images/search?q=waterfalls",
            "duration"=>10000,
            "pageInfo"=>"watervallen"
        ],
        [
            "url"=>"https://www.bing.com/videos/search?q=Home",
            "duration"=>10000,
            "pageInfo"=>"house"
        ],
        [
            "url"=>"https://www.bing.com/videos/search?q=DIY%20Crafts",
            "duration"=>10000
        ],
    ]
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page roulette</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="js/pageFunctions.js"></script>
    <script>
        urls = <?=json_encode($urls_db)?>;
        setTimeout(function (){
            load_page(random_index(9),{"shuffle":1,"target":0});
        }, 2500);
    </script>
    <div class="row">
        <div class="col">
            <iframe id="rouletteFrame0" class="vw-100 vh-100 p-0 m-0 center" scrolling="no"></iframe>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <iframe id="rouletteFrame1" class="vw-100 vh-100 p-0 m-0 center d-none" scrolling="no"></iframe>
        </div>
    </div>
    <div id="infoBox" class="infoBox p-2">
    </div>
</body>
</html>