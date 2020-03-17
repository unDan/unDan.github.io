	function maskPhone() {
      var country = $('#country option:selected').val();
	  var phone = $("#phone");
      switch (country) {
        case "ru":
          phone.mask("+7(999) 999-99-99");
          break;
        case "ua":
          phone.mask("+380(999) 999-99-99");
          break;
        case "by":
          phone.mask("+375(999) 999-99-99");
          break; 
		case "kz":
          phone.mask("+7(999) 999-99-99");
          break;
		case "ar":
          phone.mask("+374(999) 999-99-99");
          break; 
		case "az":
          phone.mask("+994(999) 999-99-99");
          break;
		case "gr":
          phone.mask("+995(999) 999-99-99");
          break;
		case "kg":
          phone.mask("+996(999) 999-99-99");
          break;
		case "es":
          phone.mask("+372(999) 999-99-99");
          break;
		case "ta":
          phone.mask("+992(999) 999-99-99");
          break;
		case "tu":
          phone.mask("+993(999) 999-99-99");
          break;
		case "uz":
          phone.mask("+998(999) 999-99-99");
          break;
		case "mo":
          phone.mask("+373(999) 999-99-99");
          break;
      }    
    }
	
    maskPhone();
    $('#country').change(function() {
      maskPhone();
    });
