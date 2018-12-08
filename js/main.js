$(document).ready(function(){
	$('.carousel').slick({
		centerMode: true,
		centerPadding: '30px',
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/l-arrow-blk@2x.png'>",
		nextArrow:"<img class='a-right control-c next slick-next' src='img/r-arrow-blk@2x.png'>",
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 940,
				settings: {
					centerPadding: '0px',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.main-products').slick({
		centerMode: true,
		centerPadding: '0px',
		prevArrow:"<img class='a-left control-c prev slick-prev' src='img/l-arrow@2x.png'>",
		nextArrow:"<img class='a-right control-c next slick-next' src='img/r-arrow@2x.png'>",
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	$('#email-submit').click(function(event) {
		$('#email-submit').val('Code Sent!')
	})
});