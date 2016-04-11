$(document).ready(function(){


	function odsylacz(){

		$('.menu').find('a').on('click', function(){

			var height = $('nav').innerHeight();
		    var href = $(this).attr('href');

	 		$('html, body').animate({
	            scrollTop: $(href).offset().top - height
	        }, 1000);

			return false;
		})
	}

	odsylacz();

	function hamburger(){
		$('.hamburger').on('click', function(){
			if(window.matchMedia('min-width: 455px')){
				$('.hamburger .menu').toggle();
			}

		})
	}
	
	hamburger();

	function gallery(){
		var tab1 = $('.clicableBox').children().eq(0);
		var tab2 = $('.clicableBox').children().eq(1);
		var tab3 = $('.clicableBox').children().eq(2);
		var picture = $('.tabsBox').children().eq(2);

		tab2.on('click', function(){
			tab2.css('background-color', '#ff8b38');
			tab1.css('background-color', '#333333');
			tab3.css('background-color', '#333333');
			picture.removeClass();
			picture.addClass('tabsPicture2');
		})

		tab3.on('click', function(){
			tab3.css('background-color', '#ff8b38');
			tab1.css('background-color', '#333333');
			tab2.css('background-color', '#333333');
			picture.removeClass();
			picture.addClass('tabsPicture3');

		})

		tab1.on('click', function(){
			tab1.css('background-color', '#ff8b38');
			tab2.css('background-color', '#333333');
			tab3.css('background-color', '#333333');
			picture.removeClass();
			picture.addClass('tabsPicture');
		})

	}	

	gallery();


	function stickyMenu(){

	var navigation = $('nav');
	var top = $('nav').position().top;
	var height = $('nav').innerHeight();


	function setSticky() {
		var windowPosition = $(window).scrollTop();
		top = navigation.position().top;
		height = navigation.innerHeight();

		if(windowPosition > top){
			navigation.css('height', height);
			navigation.addClass('sticky');
		}
		else if(windowPosition <= top){
			navigation.removeClass('sticky');
			navigation.css('height', 'auto');
		}
	}

	$(window).on('scroll', function(){
		setSticky();
		
	});

	$(window).on('resize', function(){
		height = navigation.innerHeight();
	})

	}

	stickyMenu();


	function formularz(){

		var form = $('form');
		var name = $('#name');
		var email = $('#email');
		var subject = $('#subject');
		var message = $('#message');
		var errorName = $('#errorName');
		var errorEmail = $('#errorEmail');
		var errorSubject = $('#errorSubject');
		var errorMessage = $('#errorMessage');

	$("#submit").on('click', function(event){

		var newName = name.val();
		var newEmail = email.val();
		var newSubmit = subject.val();
		var newMessage = message.val();

        console.log(newMessage);

       		if(newName.length <= 2){
               errorName.html("Name should be longer then 2 letters");
                event.preventDefault();
            }

            if(newEmail.indexOf('@') === -1){
                errorEmail.html("Wrong email adress");
                event.preventDefault();
            }

            if(newEmail.indexOf('.') === -1){
                errorEmail.html("Wrong email adress");
                event.preventDefault();
            }

            if(newSubmit.length == " "){
            	errorSubject.html("Your message should have subject");
            	message.css("padding-bottom", "28.5%");
            	event.preventDefault();
            }

            if(newMessage.length < 50){
                errorMessage.html("Message should be longer then 50 letters");
                event.preventDefault();
            }

        event.preventDefault();
	})

	}

	formularz();

	function getStarted(){

		var form = $('.login');
		var name = $('#name2');
		var email = $('#email2');
		var password = $('#password2');
		var errorName = $('#errorName2');
		var errorEmail = $('#errorEmail2');
		var errorPassword = $('#errorPassword2');
		var button = $('.login').find('button');

	button.on('click', function(event){

		var newName = name.val();
		var newEmail = email.val();
		var newPassword = password.val();


       		if(newName.length <= 2){
               errorName.html("Name should be longer then 2 letters");
                event.preventDefault();
            }

            if(newEmail.indexOf('@') === -1){
                errorEmail.html("Wrong email adress");
                event.preventDefault();
            }

            if(newEmail.indexOf('.') === -1){
                errorEmail.html("Wrong email adress");
                event.preventDefault();
            }

            if(newPassword.length < 7){
            	errorPassword.html("Password should be longer then 7 signs");
            	event.preventDefault();
            }

        event.preventDefault();
	})

	}

	getStarted();



});