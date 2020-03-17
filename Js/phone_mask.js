$(document).ready(function(){

	var phone_input = ".phone-input";
	for(let i=0; i<=2; i++)
	{
		if(i>0)
		{
			phone_input = `.phone-input-pp${i}`;
		}
		
		$(phone_input).inputmask({
			mask: "+7 (999) 999-99-99", 
			greedy: false,
			placeholder: " "
		});	
	}
	
	/*var country_input = ".country-selector";
	var country_selected = ".country-selector option:selected";
	phone_input = ".phone-input";
	
	for(let i=0; i<=2; i++)
	{
		if(i>0)
		{
			country_input = `.country-selector-pp${i}`;
			phone_input = `.phone-input-pp${i}`;
			country_selected = `.country-selector-pp${i} option:selected`;
		}
		
		$(country_input).on('click', function(){
			var phone = $(phone_input);
			var country = $(country_selected).val();
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
	}*/

	$(".country-selector-pp1").on('click', function(){
		var phone = $(".phone-input-pp1");
		var country = $('.country-selector-pp1 option:selected').val();
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
	
	$(".country-selector-pp2").on('click', function(){
		var phone = $(".phone-input-pp2");
		var country = $('.country-selector-pp2 option:selected').val();
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
	
	$(".country-selector").on('click', function(){
		var phone = $(".phone-input");
		var country = $('.country-selector option:selected').val();
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