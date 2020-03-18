$(document).ready(function(){
	
	$(".phone-input").inputmask({
		mask: "+7 (999) 999-99-99", 
		greedy: false,
		placeholder: " "
	});	
	
	$(".phone-input-pp1").inputmask({
		mask: "+7 (999) 999-99-99", 
		greedy: false,
		placeholder: " "
	});	
	
	$(".phone-input-pp2").inputmask({
		mask: "+7 (999) 999-99-99", 
		greedy: false,
		placeholder: " "
	});	

	$(".country-selector-pp1 option").on('click', function(){
		var phone = $(".phone-input-pp1");
		var country = $(this).val();
		switch (country) {
			case "ru":
				phone.inputmask({
					mask: "+7 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "ua":			
				phone.inputmask({
					mask: "+380 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "by":
				phone.inputmask({
					mask: "+375 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break; 
			case "kz":
				phone.inputmask({
					mask: "+7 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "am":
				phone.inputmask({
					mask: "+374 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break; 
			case "az":
				phone.inputmask({
					mask: "+\\9\\94 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "ge":
				phone.inputmask({
					mask: "+\\9\\95 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "kg":
				phone.inputmask({
					mask: "+\\9\\96 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "es":
				phone.inputmask({
					mask: "+372 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "tj":
				phone.inputmask({
					mask: "+\\9\\92 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "tm":
				phone.inputmask({
					mask: "+\\9\\93 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "uz":
				phone.inputmask({
					mask: "+\\9\\98 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "md":
				phone.inputmask({
					mask: "+373 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
		}
	});
	
	$(".country-selector-pp2 option").on('click', function(){
		var phone = $(".phone-input-pp2");
		var country = $(this).val();
		switch (country) {
			case "ru":
				phone.inputmask({
					mask: "+7 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "ua":			
				phone.inputmask({
					mask: "+380 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "by":
				phone.inputmask({
					mask: "+375 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break; 
			case "kz":
				phone.inputmask({
					mask: "+7 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "am":
				phone.inputmask({
					mask: "+374 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break; 
			case "az":
				phone.inputmask({
					mask: "+\\9\\94 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "ge":
				phone.inputmask({
					mask: "+\\9\\95 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "kg":
				phone.inputmask({
					mask: "+\\9\\96 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "es":
				phone.inputmask({
					mask: "+372 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "tj":
				phone.inputmask({
					mask: "+\\9\\92 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "tm":
				phone.inputmask({
					mask: "+\\9\\93 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "uz":
				phone.inputmask({
					mask: "+\\9\\98 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "md":
				phone.inputmask({
					mask: "+373 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
		}
	});
	
	$(".country-selector option").on('click', function(){
		var phone = $(".phone-input");
		var country = $(this).val();
		switch (country) {
			case "ru":
				phone.inputmask({
					mask: "+7 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "ua":			
				phone.inputmask({
					mask: "+380 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "by":
				phone.inputmask({
					mask: "+375 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break; 
			case "kz":
				phone.inputmask({
					mask: "+7 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "am":
				phone.inputmask({
					mask: "+374 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break; 
			case "az":
				phone.inputmask({
					mask: "+\\9\\94 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "ge":
				phone.inputmask({
					mask: "+\\9\\95 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "kg":
				phone.inputmask({
					mask: "+\\9\\96 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "es":
				phone.inputmask({
					mask: "+372 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "tj":
				phone.inputmask({
					mask: "+\\9\\92 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "tm":
				phone.inputmask({
					mask: "+\\9\\93 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "uz":
				phone.inputmask({
					mask: "+\\9\\98 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
			case "md":
				phone.inputmask({
					mask: "+373 (999) 999-99-99", 
					greedy: false,
					placeholder: " "
				});
				break;
		}
	}); 
})
