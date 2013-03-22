// By: Aron Maeng
// Note: num works until 26^2.
	function num2alpha(num) {
		var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		num = parseInt(num);
		if (num == 0) {
			return "";
		} else if (num <= 26) {
			return alpha[num-1];
		} else if (num%26 == 0) {
			return alpha[num/26-2].alpha[25];
		} else {
			return alpha[num/26-1].num2alpha(num%26);
		}
	}

// By: Aron Maeng
	function xy2numy (x,y,maxCol) {
		x = parseInt(x);
		y = parseInt(y);
		return (x+(y-1)*maxCol);
	}

// By: Aron Maeng
	function xy2numx (x,y,maxRow) {
		x = parseInt(x);
		y = parseInt(y);
		return (y+(x-1)*maxRow);
	}

// By: John Jung
// do not allow enter key to do anything for selected field
	function removeEnterKey(inputType) {
		$(inputType).keypress(function(e){
		    if ( e.which == 13 ) {
		    	return false;
		    	e.preventDefault();
		    }
		});
	};

// By: John Jung
// fade all but this attribute in this class
	function fadeAllBut(thisAttr, thisClass) {
		$('.'+thisClass).fadeTo(100, 0.2);
		$("#"+thisAttr).fadeTo(100, 1);
	};
// By: John Jung
// toggle forms
	function toggleForm(formName) {
		$('#'+formName+'Toggle').click(function() {
			$('#'+formName).toggleClass('hide');
			$('#'+formName+'Toggle span').toggleClass('icon-plus icon-minus');
			$(this).toggleClass('btn-info');
		});
	}

