$(function() {
	$(".exitlink").css("cursor","pointer");
	$(".exitlink").click(function() {
		var destination = $(this).attr('rel');
		var r = confirm("By selecting okay, you will be leaving Langley Federal Credit Union's website and entering a website hosted by another party. Although your financial institution has approved this as a reliable partner site, please be advised that you will no longer be subject to, or under the protection of, the privacy and security policies of your financial institution's website. We encourage you to read and evaluate the privacy and security policies on the site you are entering, which may be different from those of your financial institution's.\n \nThe websites identified and linked on this page are provided solely for your convenience, and the contents of this page do not constitute any endorsement, referral or recommendation of any type whatsoever by Langley Federal Credit Union. Nor shall the contents of this page be construed to create a partnership, joint venture or any other relationship between Langley Federal Credit Union and any other person, natural or legal. The financial institution does not represent either the third party or the member if the two enter into a transaction.\n \n LANGLEY FEDERAL CREDIT UNION DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE, VALIDITY, ACCURACY OR RELIABILITY OF, OR THE RESULTS OF THE USE OF, OR OTHERWISE RESPECTING, THE INFORMATION ON THIS PAGE OR ANY SITES LINKED TO THIS PAGE INCLUDING, BUT NOT LIMITED TO, INFORMATION CONCERNING OR PROVIDED BY THIRD PARTIES WHICH IS REACHABLE FROM THE SITE.\n \n");
		if (r == true){window.location.assign(destination)}
	});
	$(".hbutton")
	.mouseover(function() { 
		var src = $(this).attr("src").match(/[^\.]+/) + "-over.png";
		$(this).attr("src", src);
	})
	.mouseout(function() {
		var src = $(this).attr("src").replace("-over.png", ".png");
		$(this).attr("src", src);
	});
	$('.popup-youtube, .popup-vimeo, .popup-gmaps, .iframe-modal').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
	$('.dropdown-toggle').hover(function() {
	   //$('#header .header-nav-main nav > ul > li.dropdown.open > .dropdown-menu, #header .header-nav-main nav > ul > li.dropdown:hover > .dropdown-menu').css( "display", "block" );
    });
	$('.reportsize').click(function() {
		var width = $(document).width();
	  	alert(width);
    });
	$('.lens-more').click(function() {
		$('.lens-more-info').css("display", "block");
    });
	$(function() {
		$(".trackEvent").click(function() {
			var category = "Undefined";
			var title = $(this).data("title");
			var category = $(this).data("category");
			ga("send", "event", {
				eventCategory: category,
				eventAction: "click",
				eventLabel: title,
				transport: "beacon"
			});
		});
	});
	$(document).ready(function(){
		$(".screenReaderPriorityText").trigger("click");
	});
	$('.scroll-to-top').attr('title','Click to scroll to the top of the page.');
});