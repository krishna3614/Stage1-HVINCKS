function ebay(search, callback)
{

		var url = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=hvincks9a-5d9d-48cc-9752-1877a215304&GLOBAL-ID=EBAY-IN&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords="+search+"&paginationInput.entriesPerPage=10";
		var itemlist = [];
		var webimage = "ebay.png";
		$.getJSON(url, function (data) {
		if (data.findItemsByKeywordsResponse[0].searchResult[0].hasOwnProperty('item'))
		$.each(data.findItemsByKeywordsResponse[0].searchResult[0].item, function(list, info){
			var iid = info.itemId;
			var ititle = info.title;
			var iprice = info.sellingStatus[0].currentPrice[0].__value__;
			var iimageurl = info.galleryURL;
			var ipermalink = info.viewItemURL;
			
			itemlist.push({itemid:iid, title:ititle, price:iprice, imageurl:iimageurl, permalink:ipermalink, website:webimage});
		});
		console.log("Ebay done");
		callback(itemlist);
		});
}