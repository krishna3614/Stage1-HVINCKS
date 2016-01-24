var lowtohigh;
var hightolow;

function searchterm()
	{
		$('.center_container').empty();
		$('.search_header').empty();
		$('.filters').empty();
		$('.center_container').append('<img class="loading2" src="loading_cart.gif">');
		var search = document.getElementById('main_search').value;
		var header = '<p class="min_search_head">Search Results for <strong>'+search+'</strong> are being displayed</p>';
		$('.search_header').append(header);
		var flipch = 0;
		var ebaych = 0;
		//var term = search.replace(" ","+");
		var term = encodeURI(search);
		console.log(term);
		flipkart(term,function(flipt){
			ebay(term, function(ebayt){
			var results = flipt.concat(ebayt);
			$(".center_container").empty();
			if(results.length>0)
			{
			$('.filter_container').append('<div class="filters"><input type="radio" name="sorts" value="Low" onclick="low();">Price Low to High<input type="radio" name="sorts" value="High" onclick="high();">Price High to Low</div>');
			for(var i=0;i<results.length;i++)
			{
			var product = '<div class="container"><a class="redirect" href='+results[i].permalink+' target="_blank"><ul class="product" type="none"><li class="pimage"><img src='+results[i].imageurl+'></li><li class="pname">'+results[i].title+'</li><li class="pprice">&#8377; '+results[i].price+'</li><li class="psite"><img src="'+results[i].website+'"></li></ul></a></div>';
			
			$(".center_container").append(product);	
			}
			lowtohigh = results.slice();
			lowtohigh.sort(function(a,b){return parseFloat(a.price) - parseFloat(b.price);});
			hightolow = results.slice();
			hightolow.sort(function(a,b){return parseFloat(b.price) - parseFloat(a.price);});
			}
			else
			{
				$('.search_header').empty();
				$(".center_container").append("No search results can be found");
			}
			});
		});
		//var shimplymin = shimply(term);
		
	}
	
function low()
{
	$(".center_container").empty();
	for(var i=0;i<lowtohigh.length;i++)
			{
			console.log("done sorting");
			var product = '<div class="container"><a class="redirect" href='+lowtohigh[i].permalink+' target="_blank"><ul class="product" type="none"><li class="pimage"><img src='+lowtohigh[i].imageurl+'></li><li class="pname">'+lowtohigh[i].title+'</li><li class="pprice">&#8377; '+lowtohigh[i].price+'</li><li class="psite"><img src="'+lowtohigh[i].website+'"></li></ul></a></div>';
			
			$(".center_container").append(product);	
			}
}

function high()
{
	$(".center_container").empty();
	for(var i=0;i<hightolow.length;i++)
			{
			console.log("done sorting");
			var product = '<div class="container"><a class="redirect" href='+hightolow[i].permalink+' target="_blank"><ul class="product" type="none"><li class="pimage"><img src='+hightolow[i].imageurl+'></li><li class="pname">'+hightolow[i].title+'</li><li class="pprice">&#8377; '+hightolow[i].price+'</li><li class="psite"><img src="'+hightolow[i].website+'"></li></ul></a></div>';
			
			$(".center_container").append(product);	
			}
}
