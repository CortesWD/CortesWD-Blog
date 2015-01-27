$(document).on("ready", function () {

	//Animación primer copy
	$(".Title").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

			$(".copy").css("display", "block");
			
			$(".copy").addClass('fadeInDown');
				 
		});
	//Slide 2
	$(".txtOne").css("display", "block");
	$(".txtOne").addClass('fadeInLeft');
	$(".txtOne").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

			$(".imgOne").css("display", "block");
			
			$(".imgOne").addClass('zoomIn');
				 
		});

	//Slide 3

	$(".txt2").css("display", "block");
	$(".txt2").addClass('fadeInLeft');
	$(".txt2").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

			$(".img2").css("display", "block");
			
			$(".img2").addClass('zoomIn');
				 
		});


	//slide 4

	$(".txt3").css("display", "block");
	$(".txt3").addClass('fadeInLeft');
	$(".txt3").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

			$(".img3").css("display", "block");
			
			$(".img3").addClass('zoomIn');
				 
		});

	//Slide 5

	$(".txt4").css("display", "block");
	$(".txt4").addClass('fadeInLeft');
	$(".txt4").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

			$(".img4").css("display", "block");
			
			$(".img4").addClass('zoomIn');
				 
		});

	//slide 6

	//Lectura
	$(".lineOne").css("display", "block");
	$(".lineOne").addClass('fadeInLeft');

	//encadenamos la siguente
	$(".lineOne").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

			$(".txtlOne").css("display", "block");
			$(".txtlOne").addClass('fadeInLeft');

			$(".txtlOne").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

				//Sillas

				$(".line2").css("display", "block");
				$(".line2").addClass('fadeInLeft');
				
				//Encadenamos siguiente
				$(".line2").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

						$(".txtl2").css("display", "block");
						
						$(".txtl2").addClass('fadeInLeft');

						//encadenamos siguiente
						$(".txtl2").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function function_name (argument) {
							//Mesa
							$(".line3").css("display", "block");
							$(".line3").addClass('fadeInLeft');
							$(".line3").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

									$(".txtl3").css("display", "block");
									
									$(".txtl3").addClass('fadeInLeft');

									//encadenamos siguiente

									$(".txtl3").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function function_name (argument) {
										//Compartimiento

										$(".line4").css("display", "block");
										$(".line4").addClass('fadeInLeft');

										//Encadenamos el ultimo
										$(".line4").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

												$(".txtl4").css("display", "block");
												
												$(".txtl4").addClass('fadeInLeft');
													 
											});
									});
									
									//termina 4to	 
								});

							//termina tercero
						});

					//Termina segundo
							 
					});
		

			//termina primero
			});
		


	});


	




});