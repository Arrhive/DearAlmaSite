(function($) {
	
	$._util = {
		api: {},
		image: {}
	};

	$._util.inicializer = function(a)
	{

	setTimeout(function () {
		$._util.api.removeButtonInstaFeed();
	}, 1500);

		$._util.image.resizeBackground();

	}

	$._util.api.removeButtonInstaFeed = function()
	{
		$("#instagram a:last").remove();
	}

	$._util.image.resizeBackground = function()
	{
		// var height = window.screen.availHeight;
		var width = window.screen.availWidth;
		
		if(width < 980){
			$("#two").attr("data-bg","shaping-surf-section-mob.jpg");
			$("#three").attr("data-bg","skate-clothes-section-mob.jpeg")

		}

	}



	$._util.inicializer($);

})(jQuery);