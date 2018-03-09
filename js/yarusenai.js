$(function(){
        
        $.getJSON("json/data.json", function(data){
            
            for(var i in data){
                if(data[i].feel=="yarusenai"){
                    var data2 = data[i].gekikara;
                    var data3 = data[i].manpuku;
                    
                    for(var j in data2){
                        var ID = data2[j].id;
                        
                        var httpRequest = $.get("img/" + ID + ".jpg");
                        var status = httpRequest;
                        
                        if(status==200){
                            var storeImage = ID + ".jpg";
                        } else {
                            var storeImage = "NoImage.png";
                        }
                        
                        $.getJSON("json/" + ID +".json", function(contents){
                            var html = '';
                            html += '<div class="item"><div class="card item_sub"><div class="card-body">';
                            html += '<a href="detail.html?id=' + contents[0].id + '"><img class="card-img-top" src="img/' + storeImage + '" alt="商品の画像"></a>';
                            html += '<div class="store_name">' + contents[0].store + '</div>';
                            html += '<div class="text">' + contents[0].product + '</div>';
                            html += '<div class="text">' + contents[0].details + '</div>';
                            html += '<div class="text text-right">' + contents[0].price + '</div>';
                            $('#gekikara').append(html);
                        });
                    }
                    
                    for(var j in data3){
                        var ID = data3[j].id;
                        
                        var httpRequest = $.get("img/" + ID + ".jpg");
                        var status = httpRequest;
                        
                        if(status==200){
                            var storeImage = ID + ".jpg";
                        } else {
                            var storeImage = "NoImage.png";
                        }
                        
                        $.getJSON("json/" + ID +".json", function(contents){
                            var html = '';
                            html += '<div class="item"><div class="card item_sub"><div class="card-body">';
                            html += '<a href="detail.html?id=' + contents[0].id + '"><img class="card-img-top" src="img/' + storeImage + '" alt="商品の画像"></a>';
                            html += '<div class="store_name">' + contents[0].store + '</div>';
                            html += '<div class="text">' + contents[0].product + '</div>';
                            html += '<div class="text">' + contents[0].details + '</div>';
                            html += '<div class="text text-right">' + contents[0].price + '</div>';
                            $('#manpuku').append(html);
                        });
                    }
                }
            }
        });
});