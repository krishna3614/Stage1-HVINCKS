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

	$.getJSON(url, function (data) {
		var itemlist = [];
		$.each(data.productInfoList, function(list, info){
			var id = info.productBaseInfo.productIdentifier.productId;
			var titl = info.productBaseInfo.productAttributes.title;
			var pric = info.productBaseInfo.productAttributes.sellingPrice.amount;
			var imageur = info.productBaseInfo.productAttributes.imageUrls.unknown;
			var permalin = info.productBaseInfo.productAttributes.productUrl;
			itemlist.push({title:titl, price:pric, imageurl:imageur, permalink:permalin, website:webimage});
		});
	console.log("flipkart done");
	callback(itemlist);	
	});
}