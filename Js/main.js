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
				autoHeight: true,
				mouseDrag: false,
				touchDrag: true
			},
			576: {
				items: 2,
				mouseDrag: true,
				touchDrag: true
			},
			992: {
				items: 3,
				mouseDrag: true,
				touchDrag: true
			},
			1500: {
				items: 4,
				mouseDrag: false
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
	
	$("#submit-btn").on('submit', function(e){
		e.preventDefault();
		var client_name = $("#name-input").val();
		var client_email = $("#email-input").val();
		var client_phone = $("#phone-input").val();
		var date = $("#date-input").val();
		
		$.ajax({
			url: "https://raw.githubusercontent.com/unDan/unDan.github.io/master/Js/index.php",
			type: "post",
			dataType: "json",
			data: {
				'name': client_name,
				'email': client_email,
				'phone': client_phone,
				'date': date
			},
			success: function(data){
				$('.serever-message').html(data.result);
			}			
		});
	});
	//$('form.main-form').sendMail();
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
