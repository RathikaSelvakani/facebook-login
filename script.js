$(document).ready(function(){
$("#check").validate({
	rules:{
		firstname: {
			required:true,
			minlength:5,
		},
		surname: {
			required:true,
			minlength:5,
		},
		mobile: {
			required:true,
		},
		password: {
			required:true,
			minlength:8,
		},
		/*day: {
			required:true,
			
		},
		month: {
			required:true,
		},
		year: {
			required:true,
		},
		gender: {
			required:true,
		}
       }*/
})

});