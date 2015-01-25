//elementos gráficos

if (!Modernizr.rgba) {

    $(document).ready(function(){
	 	$(".menu button").addClass('bgWhite');
	 	$(".title-section").addClass('bgWhiteTitle');
	 	$(".mask").addClass('bgMask');
	 	$(".close").addClass('ieClose').html(" ");
	 	$(this).find(".gradient").addClass('bgMask');

	 	//Funcion Cerrar ventanas para IE

	 	var youtube =
	 		{
	 			width: '960px',
	 			height: '680px',
	 			left: '0',
	 			top: '10%'
	 		}

	 	$(".close").click(function() {
	 		$("#overlay").fadeOut();
	 		$("#content").attr('src'," ");
	 	});

	 	$("#verVid").click(function() {

	 		$("#content").attr('src',"partials/videoIE.html");
	 		$("#content").css(youtube);

	 		$("#ppal").css("display", "none");
	 	});

	 	$(".verVid").click(function() {

	 		$("#content").attr('src',"partials/videoIE.html");
	 		
	 		$("#content").css(youtube);

	 		$("#ppal").css("display", "none");
	 	});


	 });
};


//Animaciones

if(!Modernizr.cssanimations)
{
	$(".Sillas .copy").fadeIn(2000);
	$("#Ventanas .copy").fadeIn(2000);
	$("#Ventanas .copy2").fadeIn(2000);
	$("#Light .copy").fadeIn(2000);

	//Textos de slide de sillas

	$(".txtOne").fadeIn(2000);
	$(".txt2").fadeIn(2000);
	$(".txt3").fadeIn(2000);
	$(".txt4").fadeIn(2000);


	//imagenes

	$(".imgOne").fadeIn(2000);
	$(".img2").fadeIn(2000);
	$(".img3").fadeIn(2000);
	$(".img4").fadeIn(2000);

	//slide texto-linea
	var escondido =
	{
		"display": "block",
		"opacity": "0",
		"left": "-=10%"
	}

	//Lineas
	$(".lineOne").css(escondido);
	$(".line2").css(escondido);
	$(".line3").css(escondido);
	$(".line4").css(escondido);

	//textos
	$(".txtlOne").css(escondido);
	$(".txtl2").css(escondido);
	$(".txtl3").css(escondido);
	$(".txtl4").css(escondido);

	var muevelo = 0;

	function animados () {
		muevelo = 1;
		if ( muevelo == 1) {


			$(".lineOne").animate({
				opacity: "1",
				left: "432px"},
				200, function() {

				/* stuff to do after animation is complete */
				$(".txtlOne").animate({
				opacity: "1",
				left: "619px"},
				1000, function () {
					/* stuff to do after animation is complete */
					$(".line2").animate({
						opacity: "1",
						left: "431px"},
						2000, function() {

						/* stuff to do after animation is complete */
						$(".txtl2").animate({
						opacity: "1",
						left: "580px"},
						1000, function () {
							/* stuff to do after animation is complete */
							$(".line3").animate({
								opacity: "1",
								left: "450px"},
								2000, function() {

								/* stuff to do after animation is complete */
								$(".txtl3").animate({
								opacity: "1",
								left: "490px"},
								1000, function () {
								/* stuff to do after animation is complete */			
									$(".line4").animate({
										opacity: "1",
										left: "380px"},
										2000, function() {

										/* stuff to do after animation is complete */
										$(".txtl4").animate({
										opacity: "1",
										left: "528px"},
										1000);

									});
								});

							});
						});

					});
				});

			});


		};
	}

	animados();



};
