$(document).ready(function(){
	$('.carousel').slick({
		centerMode: true,
		centerPadding: '10px',
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
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});