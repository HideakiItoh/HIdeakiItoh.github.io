$(function(){
    var ID = Math.ceil( Math.random()*10 );
    $.getJSON("json/" + ID +".json", function(data){
        
        var httpRequest = $.get("img/" + ID + ".jpg");
        var status = httpRequest;
        
        if(status==200){
            var storeImage = ID + ".jpg";
        } else {
            var storeImage = "NoImage.png";
        }
        
        var html = '';
        html += '<div class="col-xs-12 col-sm-6">';
        html += '<a href="detail.html?id=' + data[0].details + '"><img class="col-xs-12 img-responsive" src="img/' + storeImage + '" alt="商品の画像"></a></div>';
        html += '<div class="col-xs-12 col-sm-6 today"><div class="col-xs-12 today_title">' + data[0].store + '</div>';
        html += '<div class="col-xs-12 text">' + data[0].product + '</br>';
        html += data[0].details + '</div>';
        html += '<div class="col-xs-12 text text-righ">' + data[0].price + '</div></div>';
        $('#today_products').after(html);
    });
    
    ID = 10;
    for(var step = 0; step < 5; step++){
        data = "";
        httpRequest = "";
        status = "";
        
        $.getJSON("json/" + ID +".json", function(data){
            var httpRequest = $.get("img/" + ID + ".jpg");
            var status = httpRequest;
        
            if(status==200){
                var storeImage = ID + ".jpg";
            } else {
                var storeImage = "NoImage.png";
            }
        
            var html = '';
            html += '<div class="item"><div class="card item_sub"><div class="card-body">';
            html += '<a href="detail.html?id=' + data[0].id + '"><img class="card-img-top" src="img/' + storeImage + '" alt="商品の画像"></a>';
            html += '<div class="store_name">' + data[0].store + '</div>';
            html += '<div class="text">' + data[0].product + '</div>';
            html += '<div class="text">' + data[0].details + '</div>';
            html += '<div class="text text-right">' + data[0].price + '</div>';
            $('#new_item_card').append(html);
        });
        ID--;
    }
    
});