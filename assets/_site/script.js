//Open Modal Function
function openModal(){
	var modal = document.getElementById("modal");
	modal.style.visibility = "visible"
	modal.style.opacity = 1
	document.body.style.overflow = "hidden";
}

//Close Modal Function
function closeModal(){
	var modal = document.getElementById("modal");
	modal.style.visibility = "hidden"
	modal.style.opacity = 0
	document.body.removeAttribute("style");
}

// Showing and Hiding mobile nav Overlay
$('#open-close-nav').click( function(){
	if ($("#open-close-nav").hasClass('is-active')){
		$("#open-close-nav").removeClass('is-active');
		$('body').css("overflow", "initial");
		$(".menu").removeClass("open");
	} else {
		$("#open-close-nav").addClass('is-active');
		$('body').css("overflow", "hidden");
		$(".menu").addClass("open");
	}
});

//Close nav when link is clicked
$('a').click(function(){
	$("#open-close-nav").removeClass('is-active');
	$(".menu").removeClass("open");
	$('body').css("overflow", "initial");
})

// Nav Dropwdowns
$(".nav-item").click(function(){
	if ($(this).hasClass("open")){
		$(this).removeClass("open");
	} else {
		$(this).addClass("open");
	}
})

// This validates form fields
$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

//Submits form to API Gateway
$("#contact-form").submit(function(e) {
  $(".form-submit").text("Submitting...");
	e.preventDefault();
  var url = 'https://ycwfh8vkck.execute-api.us-east-1.amazonaws.com/prod/test'
	var data = JSON.stringify({
	  "name": $("input[name='name']").val(),
	  "email": $("input[name='email']").val(),
	  "message": $("textarea[name='message']").val()
	})
  $.ajax({
    type: 'POST',
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    data: data,
    success: function (data) {
      $(".form-submit").text("Success!");
      $(".form-submit").css("background-color", "#14B8B2");
      $(".form-submit").css("color", "#fff");
      $("input[name='name']").val("");
      $("input[name='email']").val("");
      $("textarea[name='message']").val("");
      $('form').removeClass('submitted');
      $("input[name='name']").attr("disabled", "disabled");
      $("input[name='email']").attr("disabled", "disabled");
      $("textarea[name='message']").attr("disabled", "disabled");
      $(".form-submit").attr("disabled", "disabled");
    },
    error: function (data) {
      console.log("Error" + data)
    }
  })
});