$(function(){
    var pair=location.search.substring(1).split('&');
    var kv = pair[0].split('=');
    var ID = kv[1];

    $.getJSON("json/" + ID +".json", function(data){
        
        var httpRequest = $.get("img/" + ID + ".jpg");
        var httpRequest2 = $.get("img/" + ID + "_2.jpg");
        var status = httpRequest;
        var status2 = httpRequest2;
        
        if(status==200){
            var storeImage = ID + ".jpg";
        } else {
            var storeImage = "NoImage.png";
        }
        
        if(status2==200){
            var storeImage2 = ID + "_2.jpg";
        } else {
            var storeImage2 = "NoImage.png";
        }
        
        var html = '';
        html += '<div class="col-xs-5 col-sm-6"></div><div class="col-xs-7 col-sm-6 detail_info">定休日/' + data[0].holiday + '</div>';
        html += '<div class="col-xs-5 col-sm-6"></div><div class="col-xs-7 col-sm-6 detail_info">営業時間/' + data[0].hours + data[0].last +'</div>';
        html += '<div class="col-xs-12 detail_img"><img class="col-sm-6 img-responsive main" src="img/' + storeImage + '" alt="商品の画像">';
        html += '<div class="main_name"><p>' + data[0].product + '</p>';
        html += '<p class="text-right">' + data[0].price + '</p></div>';
        html += '<img class="col-sm-6 img-responsive img_2" src="img/' + storeImage2 + '" alt="商品の画像2"></div> ';
        html += '<div class="col-xs-12 text">' + data[0].product + '<br>';
        html += data[0].details + '</div>';
        html += '<div class="col-xs-12 text text-righ">' + data[0].price + '</div></div>';
        html += '<div class="col-xs-12"><iframe class="ggmap" src="' + data[0].gm + '" frameborder="0" style="border:0" allowfullscreen></iframe></div>';
        
        $('#title_store').append(data[0].store);
        $('#store_products').prepend(html);
    });
    
});