function calculateGrade(){
	let mark = document.getElementById("grade").value;
    
	    if (mark >79 && mark <=100) {
	       document.getElementById("result").innerText = `Your grade is A.`
	    }
	    else if (mark<=79 && mark >=60) {
		document.getElementById("result").innerText = `Your grade is B.`
	     }
	    else if ( mark<=59 && mark >=49) {
		document.getElementById("result").innerText = `Your grade is C`
	    }
	    else if (mark<=49 && mark >=40) {
		document.getElementById("result").innerText = `Your grade is D.`
	    }
	    else{
		document.getElementById("result").innerText = `Your grade is F.`
	    }
    }