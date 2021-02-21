$(document).ready(function() {
//*********	Page Loader	***********//

	$(window).ready(function() {
		$("#loader").fadeOut(500);
	});

//	**********************************************




	
//********	Smooth Anchor Scroll	*********//

	$( "a" ).click(function(e) {
		
		if( this.hash !== "" ) {
			e.preventDefault();
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top
				}, 1000, function(){
					window.location.hash = hash;
					});
			}
	});
	
//	***********************************************



	
//*********	Navigation Menu Section	*********//

	$("nav button").click(function() {
		$("#nav-menu").removeClass ("height-inc");
		$("#line-one").toggleClass("clickOne");
		$("#line-two").toggleClass("clickTwo");
		
		$("#nav-menu").toggleClass("slide");
		$("#nav-menu #pages ol").removeClass("sub-nav-menu");
		$("#pages i.icon-rotate").css("transform", "rotate(0deg)");
	});
	
	$("#pages i").click(function() {
		if(window.innerWidth < 900) {
			$(this).toggleClass("icon-rotate");
			$("#nav-menu").toggleClass ("height-inc");
			$("#nav-menu #pages ol").toggleClass("sub-nav-menu");
		}
	});
	
	
	
	
	var navMenu = $("nav"),
		   pos = 500,
		   button = $("nav button"),
		   line = $("nav button .line"),
		   anchor = $("#nav-menu ul li a"),
		   arrow = $("#arrow-up");
	
	$(window).scroll(function() {
		var windowScroll = $(window).scrollTop();
		var win = window.innerWidth;
		
		if(windowScroll > pos) {
			navMenu.css({
				"position": "fixed",
				"top": 0,
				"left": 0,
				"background-color": "#373737"
			});
			button.css("background-color", "#fff");
			line.css("background-color", "#373737");
			arrow.fadeIn().addClass("move-up");
			
			if(win >= 900) {
				anchor.css("color", "#fff");
			}
		}
		else {
			navMenu.css({
				"position": "absolute",
				"top": 0,
				"left": 0,
				"background-color": "#fff"
			});
			button.css("background-color", "#373737");
			line.css("background-color", "#F1F1F0");
			arrow.fadeOut().removeClass("move-up");
			
			if(win >= 900) {
				anchor.css("color", "#373737");
			}
		}
		
	});

//	********************************************************************







//	***************	Notification Section	******************//

	$("#notification-email button").on("click", function() {
		var input = $("form input[type= 'email']").text();
		if(input == "") {
			$("#alert").html("type in an email address");
		}
		else if (input !== "") {
			$("#alert").html("");
		}	
	});

	$("#notification-email").on("submit", function(e) {
		e.preventDefault();

		var promise = submitEmail();

		promise.done(function(data) {
			alert("your email has been submitted");
		});

		promise.fail(function() {
			alert("Thank your for subscribing with us");
		});


		function submitEmail() {
			return $.ajax({
				url: "email.php",
				type: "post"
			});
		}

	});
	
	




//	****************	About Section	*******************//

	$(" #about-us-sec-container #button").click(function() {
		$("#about-us-sec-content").toggleClass("lg-screen");
		$(" #about-us-sec-container #button span:first-child").toggleClass("text-one");
		$(" #about-us-sec-container #button span:last-child").toggleClass("text-two");
		
	});


//*************About Section Slide Show
	
	var cakeArray = [],
		   cake = $("#display-img"),
		   play = $("#play"),
		   pause = $("#pause"),
		   intervalID;
	
	 $("#display-gallery img").each(function() {
		cakeArray.push($(this).attr("src"));
	});
	var arrayLength = cakeArray.length;

	function cakeSlideShow() {
		
		var displayCake = cake.attr("src");
		var displayCakeIndex = $.inArray(displayCake, cakeArray);
		
		if (displayCakeIndex == (arrayLength - 1)) {
			displayCakeIndex = -1;
		}
		cake.attr("src", cakeArray[(displayCakeIndex + 1)]);
	}
	
	play.on("click", function() {
		$(this).fadeOut("100");
		pause.fadeIn("slow");
		intervalID = setInterval(cakeSlideShow, 2000);
	});
	pause.on("click", function() {
		$(this).fadeOut("100");
		play.fadeIn("slow");
		clearInterval(intervalID);
	});
//	********************************************************************
	
	
	
	
//*********	Gallery Section	*********//

	var allCakes = $(".sponge, .cream, .chocolate, .popular, .dessert, .butter"),
		  spongeOnly = $(".all, .cream, .chocolate, .popular, .dessert, .butter"),
		  creamOnly = $(".all, .sponge, .chocolate, .popular, .dessert, .butter"),
		  dessertOnly = $(".all, .cream, .chocolate, .popular, .butter, .sponge"),
		  chocolateOnly = $(".all, .cream, .sponge, .popular, .dessert, .butter"),
		  popularOnly = $(".all, .cream, .chocolate, .sponge, .dessert, .butter"),
		  butterOnly = $(".all, .cream, .chocolate, .popular, .dessert, .sponge");
		
	$("#all-cakes").click(function() {
		$(".all").fadeIn(100);
	});
	
	$("#sponge").click(function() {
		spongeOnly.fadeOut(100);
		$(".sponge").fadeIn(100);
	});
	
	$("#cream").click(function() {
		creamOnly.fadeOut(100);
		$(".cream").fadeIn(100);
	});
	
	$("#dessert").click(function() {
		dessertOnly.fadeOut(100);
		$(".dessert").fadeIn(100);
	});
	
	$("#chocolate").click(function() {
		chocolateOnly.fadeOut(100);
		$(".chocolate").fadeIn(100);
	});
	
	$("#popular").click(function() {
		popularOnly.fadeOut(100);
		$(".popular").fadeIn(100);
	});
	
	$("#butter").click(function() {
		butterOnly.fadeOut(100);
		$(".butter").fadeIn(100);
	});
//	********************************************************************
	
	
	
	

//*********	Contact Section	*********//
	
	$("#contact-form").submit(function(e) {
		e.preventDefault();
		
		$("#pop-up").fadeIn(function() {
			$("#contact, #nav-menu").css("opacity", 0);
			$(":input").attr("disabled", "disabled");
			}); 
		});
	
	$("#close-popup").click(function() {
		$("#pop-up").fadeOut(function() {
			$("#contact, #nav-menu").css("opacity", 1);
			$(":input").removeAttr("disabled");
		});
		$("form .input-style").val("");

		});
		
/***********************************************************************/




/*********	Services	*********/

	$("a[href= 'service.html']").click(function(e) {
		e.preventDefault();
		alert("page is currently offline");
	});

});