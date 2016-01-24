function flipkart(search, callback)
{
	var url = "https://affiliate-api.flipkart.net/affiliate/search/json?query="+search+"&resultCount=20";
   var webimage = "flipkart_logo.png";
   jQuery.support.cors = true;
   $.ajaxSetup({
	headers : {
		'Access-Control-Allow-Origin' : '*',
    'Fk-Affiliate-Id' : 'sampath9d',
    'Fk-Affiliate-Token' : '4d10fab490a14e9ba5c1e7426afa6143'
	}
	});
	var minitem = {title:" ", price:100000, imageurl:" ", permalink:" "};
	var itemlist = [];
	$.getJSON(url, function (data) {
		var item = {title:" ", price:0, imageurl:" ", permalink:" "};
		$.each(data.productInfoList, function(list, info){
			item.title = info.productBaseInfo.productAttributes.title;
			item.price = info.productBaseInfo.productAttributes.sellingPrice.amount;
			item.imageurl = info.productBaseInfo.productAttributes.imageUrls.unknown;
			item.permalink = info.productBaseInfo.productAttributes.productUrl;
			var product = '<div class="container"><ul class="product" type="none"><li class="pimage"><img src='+item.imageurl+'></li><li class="pname">'+item.title+'</li><li class="pprice">&#8377; '+item.price+'</li><li class="psite"><a href='+item.permalink+'><img src="flipkart_logo.png"></a></li></ul></div></div>';
			itemlist.push(product);
			if(minitem.price>item.price)
			{
				
				minitem.title = item.title;
				minitem.price = item.price;
				minitem.imageurl = item.imageurl;
				minitem.permalink = item.permalink;
				//document.write(minitem.price);
			};
		});
		$(".center_container").append(itemlist);
		callback(minitem);
	});
	
}