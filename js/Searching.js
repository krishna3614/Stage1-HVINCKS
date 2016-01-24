function searchterm()
	{
		$('.center_container').empty();
		$('.min_element').empty();
		$('.search_header').empty();
		var search = document.getElementById('main_search').value;
		var header = '<p class="min_search_head">Search Results for <strong>'+search+'</strong> are being displayed</p>';
		$('.search_header').append(header);
		var term = search.replace(" ","+");
		flipkart(term, function(flipmin){
			var ebaymin = ebay(term);
		//var shimplymin = shimply(term);
		var item = flipmin;
		var product = '<div class="container"><ul class="product" type="none"><li class="pimage"><img src='+item.imageurl+'></li><li class="pname">'+item.title+'</li><li class="pprice">&#8377; '+item.price+'</li><li class="psite"><a href='+item.permalink+'><img src="flipkart_logo.png"></a></li></ul></div></div>';
		$(".min_element").append(product);
		$(".min_element").append('<div class="min_search_text" style="float: right;padding-right: 30%;padding-top: 10%;font-size: 20;"><i class="fa fa-hand-o-left"><i> This is the Most relevant and Best priced product we found for you.</i></i></div>');
		});
		
		
	}