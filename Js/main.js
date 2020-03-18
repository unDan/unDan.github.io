$(document).ready(function(){
	
	var catalog_owl = $("#catalog_carousel");
	catalog_owl.owlCarousel({
		loop: false,
		margin: 30,
		nav: false,
		dots: true,
		responsive:{
			0: {
				items: 1,
				autoHeight: true
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
	
	var sale_owl = $("#sale_carousel");
	sale_owl.owlCarousel({
		loop: true,
		dots: true,
		autoPlay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 600,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			}
		}
	});
	
	AOS.init();
	
	sale_owl.trigger('play.owl.autoplay', [5000]);
	
	$(".shipping-btn").on('click', function(){
		blockScroll();
		$("#free_shipping_popup").css('display', "block");		
	});
	
	$(".discount-btn").on('click', function(){
		blockScroll();
		$("#discount_popup").css('display', "block");
	});
	
	
	$(".popup-close").on('click', function(){
		$(this).parent().css('display', "none");
		unblockScroll();
	});
	
	$(".submit-btn").on('click', function(){
		var client_name = $(".name-input").val();
		var client_email = $(".email-input").val();
		var client_phone = $(".phone-input").val();
		var date = $("#date-input").val();
		
		$.ajax({
			type: "POST",
			url: "../php/ajax_index.php",
			data: {
				'name': client_name,
				'email': client_email,
				'phone': client_phone,
				'date': date
			},
			dataType: "json",
		});
	});
	
	
	$(".name-input").inputmask({
		mask: "a{1,50}",
		greedy: false,
		placeholder: " "
	});
	
	$(".email-input").inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		greedy: false,
		placeholder: " ",
		onBeforePaste: function (pastedValue, opts) {
		  pastedValue = pastedValue.toLowerCase();
		  return pastedValue.replace("mailto:", "");
		},
		definitions: {
		  '*': {
			validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
			casing: "lower"
		  }
		}
	});
	
	var date_input = $("#date-input");
	date_input.flatpickr({
		defaultDate: "today",
		minDate: "today",
		maxDate: new Date().fp_incr(180),
		theme: "material_blue",
		altInput: true,
		altFormat: "F j, Y",
		dateFormat: "Y-m-d",
		position: "below",
		"locale": "ru"
	});
})

function blockScroll(){
	var bd = $('body');
	bd.css('overflowY', "hidden");
	bd.parent().css('overflowY', "hidden");

}

function unblockScroll(){
	var bd = $('body');
	bd.css('overflowY', "auto");
	bd.parent().css('overflowY', "auto");
}
