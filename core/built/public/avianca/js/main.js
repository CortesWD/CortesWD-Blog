$(document).on("ready", function () {

	//Variables VIdeo

	var skipVideo = $("#skipVid");
	// var video     = $("#video");

	//skip video intro
	// $(skipVideo).click(function() {
	// 	video.addClass('animated fadeOut');
	// 		$(video).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
	// 		$(video).css("display", "none");
	// 		$("#videoBoeing").remove();
	// 	});
		
	// });

	// setTimeout(function() {
	// 	video.addClass('animated fadeOut');
	// 		$(video).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
	// 		$(video).css("display", "none");
	// 		$("#videoBoeing").remove();
	// 	});
		
	// }, 12000);
	
	//Variables Menu PPal (Izquierda arriba)
	var btnMenu         = $("#menuAction");
	var design          = $("#design");
	var entre           = $("#entre");
	var menu            = $("#ppal");
	var tech            = $("#tech");
	var home            = $("#home");
	var video           = $("#verVid")
	var titleContenedor = $(".title-section");

	//Contenedores de info

	var designContent = $(".Design");
	var tecnoContent = $(".Tecno");
	var entreContent = $(".Entre");

	//Mostrar video
	$(video).click(function() {
		// video.removeClass('flipOutX');
		// video.addClass('flipInX');

		//cargamos content
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');

		$(cargador).attr('src',"http://www.youtube.com/embed/cWGk5GovoKw?rel=0&autoplay=1");

		$(menu).css("display", "none");
		design.removeClass('fadeInDown');
		tech.removeClass('fadeInDown');
		entre.removeClass('fadeInDown');
	});


	//funcion para mostrar los botones del menu

	$(btnMenu).on("click", function () {
		// $(video).fadeOut(100);
		$(menu).fadeToggle();

		$(design).addClass('animated fadeInDown');
		$(tech).addClass('animated fadeInDown');
		$(entre).addClass('animated fadeInDown');
		$(video).addClass('animated fadeInDown');

		$(design).removeClass('fadeOutUp');
		$(tech).removeClass('fadeOutUp');
		$(entre).removeClass('fadeOutUp');
		$(video).removeClass('fadeOutUp');

		// if( $(designContent).hasClass("activado") || $(tecnoContent).hasClass('activado') || $(entreContent).hasClass("activado") )
		// {
		// 	$(video).css("display", "block");
		// 	$(video).addClass('animated fadeInDown');
		// }
		// else
		// {
		// 	$(video).fadeOut();
		// }
	});



	//Funcion para cargar contenido de diseño y confort

	$(design).on("click", function () {


		//Mostramos btn home
		$(home).fadeIn();

		//Quitamos animacion anterior
		$(designContent).removeClass('fadeOutLeft');

		//Prendemos Boton
		$(entre).removeClass("active");
		$(tech).removeClass("active");
		$(this).addClass('active');

		//sacamos los demás contenidos
		$(".home").addClass('animated fadeOutLeft');
		$(".home").fadeOut();
		$(".tecno").fadeOut();
		$(".entretenimiento").fadeOut();

		$(tecnoContent).removeClass('activado fadeInRight');
		$(tecnoContent).addClass('animated fadeOutLeft');
		$(tecnoContent).fadeOut();

		$(entreContent).removeClass('activado fadeInRight');
		$(entreContent).addClass('animated fadeOutLeft');
		$(entreContent).fadeOut();

		//Cargamos el contenido actual

		$(designContent).addClass('block animated fadeInRight');

		$(designContent).addClass("activado");
		$(titleContenedor).fadeIn();
		$(".confort").fadeIn();

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		//Dejamos el split en la mitad y ocultamos sub menus

		$(navegacion).removeClass('nav-ejecutiva');
		$(navegacion).removeClass('nav-economica');

		$(zonaIzq).removeClass('active');
		$(zonaIzq).removeClass('unactive');
		$(zonaDer).removeClass('unactive');
		$(zonaDer).removeClass('active');

		$(subMenuContenedor).fadeOut();

		//Quitamos el fadeoutleft para evitar saltos
	});

	//Funcion para cargar contenido de Tecnologia

	$(entre).on("click", function () {

		//Mostramos btn home
		$(home).fadeIn();

		//Prendemos Boton
		$(design).removeClass("active");
		$(tech).removeClass("active");
		$(this).addClass('active');

		//Quitamos animacion anterior
		$(entreContent).removeClass('fadeOutLeft');

		//Sacamos los otros contenidos//

		$(designContent).removeClass('fadeInRight activado');
		$(designContent).addClass('animated fadeOutLeft');
		$(designContent).fadeOut();

		$(tecnoContent).removeClass('fadeInRight activado');
		$(tecnoContent).addClass('animated fadeOutLeft');
		$(tecnoContent).fadeOut();

		$(".confort").fadeOut();
		$(".tecno").fadeOut();
		$(".home").addClass('animated fadeOutLeft');
		$(".home").fadeOut();

		//Mostramos el contenido seleccionado
		$(entreContent).addClass('block animated fadeInRight');
		$(entreContent).addClass("activado");
		$(titleContenedor).fadeIn();
		$(".entretenimiento").fadeIn();

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		//Dejamos el split en la mitad y ocultamos sub menus

		$(navegacion).removeClass('nav-ejecutiva');
		$(navegacion).removeClass('nav-economica');

		$(zonaIzq).removeClass('active');
		$(zonaIzq).removeClass('unactive');
		$(zonaDer).removeClass('unactive');
		$(zonaDer).removeClass('active');

		$(subMenuContenedor).fadeOut();

	});

	//Funcion para cargar contenido de Entretenimiento

	$(tech).on("click", function () {

		//Mostramos btn home
		$(home).fadeIn();


		//Prendemos Boton
		$(design).removeClass("active");
		$(entre).removeClass("active");
		$(this).addClass('active');

		//quitamos animacion anterior
		$(tecnoContent).removeClass('fadeOutLeft');

		//Sacamos los otros contenidos//

		$(designContent).removeClass('fadeInRight activado');
		$(designContent).addClass('animated fadeOutLeft');
		$(designContent).fadeOut();

		$(entreContent).removeClass('fadeInRight activado');
		$(entreContent).addClass('animated fadeOutLeft');
		$(entreContent).fadeOut();

		$(".confort").fadeOut();
		$(".entretenimiento").fadeOut();
		$(".home").addClass('animated fadeOutLeft');
		$(".home").fadeOut();

		//Mostramos el contenido seleccionado
		$(tecnoContent).addClass('block animated fadeInRight');
		$(tecnoContent).addClass("activado");
		$(titleContenedor).fadeIn();
		$(".tecno").fadeIn();

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		//Dejamos el split en la mitad y ocultamos sub menus

		$(navegacion).removeClass('nav-ejecutiva');
		$(navegacion).removeClass('nav-economica');

		$(zonaIzq).removeClass('active');
		$(zonaIzq).removeClass('unactive');
		$(zonaDer).removeClass('unactive');
		$(zonaDer).removeClass('active');

		$(subMenuContenedor).fadeOut();

	});
	

	//Funcion para mostrar Home
	$(home).on("click", function () {


		//Ocultamos btn home
		$(this).fadeOut();


		//Apagamos los botones
		$(design).removeClass("active");
		$(entre).removeClass("active");
		$(tech).addClass('active');

		//Sacamos los otros contenidos//

		$(designContent).fadeOut();
		$(entreContent).fadeOut();
		$(tecnoContent).fadeOut();

		$(designContent).removeClass('block fadeInRight fadeOutLeft activado');
		$(entreContent).removeClass('block fadeInRight fadeOutLeft activado');
		$(tecnoContent).removeClass('block fadeInRight fadeOutLeft activado');

		$(".confort").fadeOut();
		$(".entretenimiento").fadeOut();
		$(".tecno").fadeOut();
		$(titleContenedor).fadeOut();

		//Mostramos el Home
		$(".home").removeClass('fadeOutLeft');
		$(".home").fadeIn();
		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		//Dejamos el split en la mitad y ocultamos sub menus

		$(navegacion).removeClass('nav-ejecutiva');
		$(navegacion).removeClass('nav-economica');

		$(zonaIzq).removeClass('active');
		$(zonaIzq).removeClass('unactive');
		$(zonaDer).removeClass('unactive');
		$(zonaDer).removeClass('active');

		$(subMenuContenedor).fadeOut();

	});
	


	//Secciones derecha e izquierda

	var ejecutiva = $(".btnEjecutiva");
	var economica = $(".btnEcono");
	var zonaIzq   = $(".izquierda");
	var zonaDer   = $(".derecha");


	//Funcion hover de menu clases

	$(zonaIzq).hover(function() {
		//Mouse Entra
		$(ejecutiva).addClass('activo');
	}, function() {
		//Mouse Sale
		$(ejecutiva).removeClass('activo');
	});

	$(zonaDer).hover(function() {
		//Mouse Entra
		$(economica).addClass('activo');
	}, function() {
		//Mouse Sale
		$(economica).removeClass('activo');
	});

	//contenedor imagen izquierda & derecha 
	// var imgEco = $("#DisenoDer");
	// var imgExe = $("#DisenoIzq");

	var navegacion        = $(".navegacion");
	var subMenuContenedor = $(".navegacion-contenido");

	//:::::::::Clase Ejecutiva:::::::::::::::

	//Submenus ejecutivos

	var MenuDisenoExe = $(".menuConfort");
	var MenuTecnoExe  = $(".menuTecno");
	var MenuEntreExe  = $(".menuEntre");


	//Mostramos submenu para diseño ejecutivo
	function MostrarDisenoExe () {
		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		//Ajuste de ancho del div

		$(navegacion).addClass('nav-ejecutiva');
		$(navegacion).removeClass('nav-economica');

		$(zonaIzq).addClass('active');
		$(zonaDer).addClass('unactive');

		$(zonaIzq).removeClass('unactive');
		$(zonaDer).removeClass('active');

		//Ocultamos el otro submenu
		$(MenuDisenoEco).addClass('animated bounceOutRight');
		$(MenuDisenoEco).removeClass('bounceInRight');
		$(MenuDisenoEco).css("display", "none");

		//Mostramos el submenu de la sección

		$(subMenuContenedor).fadeIn();

		$(MenuDisenoExe).css("display", "block");

		$(MenuDisenoExe).removeClass('bounceOutLeft');
		$(MenuDisenoExe).addClass('animated bounceInLeft');

	};


	//Mostramos submenu para diseño tecnología
	function MostrarTecnoExe () {

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		$(navegacion).addClass('nav-ejecutiva');

		$(zonaIzq).addClass('active');
		$(zonaDer).addClass('unactive');

		$(subMenuContenedor).fadeIn();

		//Ocultamos el otro submenu
		$(MenuTecnoEco).addClass('animated bounceOutRight');
		$(MenuTecnoEco).removeClass('bounceInRight');
		$(MenuTecnoEco).css("display", "none");

		//Mostramos el submenu de la sección

		$(MenuTecnoExe).css("display", "block");
		$(MenuTecnoExe).removeClass('bounceOutLeft');
		$(MenuTecnoExe).addClass('animated bounceInLeft');

	};

	//Mostramos submenu para Entretenimiento

	function MostrarEntreExe () {

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);

		$(navegacion).addClass('nav-ejecutiva');

		$(zonaIzq).addClass('active');
		$(zonaDer).addClass('unactive');

		$(subMenuContenedor).fadeIn();

		//Ocultamos el otro submenu
		$(MenuEntreEco).addClass('animated bounceOutRight');
		$(MenuEntreEco).removeClass('bounceInRight');
		$(MenuEntreEco).css("display", "none");

		//Mostramos el submenu de la sección

		$(MenuEntreExe).css("display", "block");
		$(MenuEntreExe).removeClass('bounceOutLeft');
		$(MenuEntreExe).addClass('animated bounceInLeft');

	};

	//Disparamos accion para mostrar submenu Ejecutivo

	$(ejecutiva).on("click", MostrarDisenoExe);
	$(zonaIzq).on("click", MostrarDisenoExe);

	$(ejecutiva).on("click", MostrarTecnoExe);
	$(zonaIzq).on("click", MostrarTecnoExe);


	$(ejecutiva).on("click", MostrarEntreExe);
	$(zonaIzq).on("click", MostrarEntreExe);



	//:::::::::Clase Económica:::::::::::::::

	//Submenus Economico

	var MenuDisenoEco = $(".menuDisenoEco");
	var MenuTecnoEco  = $(".menuTecnoEco");
	var MenuEntreEco  = $(".menuEntreEco");

	//Mostramos submenu para diseño Diseño
	
	function MostrarDisenoEco () {

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);


			//Ajuste de ancho del div

			$(navegacion).addClass('nav-economica');
			$(navegacion).removeClass('nav-ejecutiva');

			$(zonaDer).addClass('active');
			$(zonaDer).removeClass("unactive");

			$(zonaIzq).addClass('unactive');
			$(zonaIzq).removeClass('active');


			//Ocultamos Menu Anterior

			$(MenuDisenoExe).css("display", "none");

			$(MenuDisenoExe).addClass('animated bounceOutLeft');


			//Mostramos el submenu de la sección

			$(subMenuContenedor).fadeIn();

			$(MenuDisenoEco).css("display", "block");

			$(MenuDisenoEco).removeClass('bounceOutRight');

			$(MenuDisenoEco).addClass('animated bounceInRight');

	};

//Mostramos submenu para Tecnología
	
	function MostrarTecnoEco () {

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);


			//Ajuste de ancho del div

			$(navegacion).addClass('nav-economica');
			$(navegacion).removeClass('nav-ejecutiva');

			$(zonaDer).addClass('active');
			$(zonaDer).removeClass("unactive");

			$(zonaIzq).addClass('unactive');
			$(zonaIzq).removeClass('active');


			//Ocultamos Menu Anterior

			$(MenuTecnoExe).css("display", "none");

			$(MenuTecnoExe).removeClass('bounceInLeft');

			$(MenuTecnoExe).addClass('animated bounceOutLeft');


			//Mostramos el submenu de la sección

			$(subMenuContenedor).fadeIn();

			$(MenuTecnoEco).css("display", "block");

			$(MenuTecnoEco).removeClass('bounceOutRight');

			$(MenuTecnoEco).addClass('animated bounceInRight');

	};

	//Mostramos submenu para Entretenimiento
	
	function MostrarEntreEco () {

		//Recogemos el menu

		$(design).removeClass('fadeInDown');
		$(tech).removeClass('fadeInDown');
		$(entre).removeClass('fadeInDown');
		$(video).removeClass('fadeInDown');

		$(design).addClass('fadeOutUp');
		$(tech).addClass('fadeOutUp');
		$(entre).addClass('fadeOutUp');
		$(video).addClass('fadeOutUp');

		$(menu).fadeOut(1000);


			//Ajuste de ancho del div

			$(navegacion).addClass('nav-economica');
			$(navegacion).removeClass('nav-ejecutiva');

			$(zonaDer).addClass('active');
			$(zonaDer).removeClass("unactive");

			$(zonaIzq).addClass('unactive');
			$(zonaIzq).removeClass('active');


			//Ocultamos Menu Anterior

			$(MenuEntreExe).css("display", "none");

			$(MenuEntreExe).removeClass('bounceInLeft');

			$(MenuEntreExe).addClass('animated bounceOutLeft');


			//Mostramos el submenu de la sección

			$(subMenuContenedor).fadeIn();

			$(MenuEntreEco).css("display", "block");

			$(MenuEntreEco).removeClass('bounceOutRight');

			$(MenuEntreEco).addClass('animated bounceInRight');

	};

	//Disparamos accion para mostrar submenu Economico

	$(economica).on("click", MostrarDisenoEco);
	$(zonaDer).on("click", MostrarDisenoEco);

	$(economica).on("click", MostrarTecnoEco);
	$(zonaDer).on("click", MostrarTecnoEco);

	$(economica).on("click", MostrarEntreEco);
	$(zonaDer).on("click", MostrarEntreEco);


	//Contenido Lightbox

	var contenedor = $("#overlay");

	var cargador = $("#content");

	//:::::::::Contenido Diseño y Confort:::::::::::::::

	//:::::::::::::::::Ejecutivo::::::::::::::::::::::::

	//Botones//
	var btnSillasEx   = $(".sillasEx");
	var btnPasillosEx = $(".pasillosEx");
	var btnBathEx     = $(".bathEx");
	var btnLigthEx    = $(".ligthEx");

	//contenedores de los sliders//
	// var slidePasillosEx = $(".slidePasillosExe");
	// var slideSillasEx = $(".slideSillasExe");

	//mostramos contenido de sillas
	function SillasExe () {

		//Ocultamos los otros contenidos
		// $(slidePasillosEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);

		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/sillas-ejecutivo.html');
		// function cargaStuff () {
			
		// };
	};

	//mostramos contenido de pasillos ejecutivo
	function PasillosExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/pasillos-ejecutivo.html');
		
	};

	//Mostramos contenido de baños ejecutivo
	function BathsExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/bano-ejecutivo.html');
		
	};

	//Mostramos contenido de luces ejecutivo
	function LightExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/light-ejecutivo.html');
		
	};

	//Disparamos accion con botones

	$(btnSillasEx).click(SillasExe);
	$(btnPasillosEx).click(PasillosExe);
	$(btnBathEx).click(BathsExe);
	$(btnLigthEx).click(LightExe);

	//:::::::::::::::::Economico::::::::::::::::::::::::

	//Botones//
	var btnSillasEco   = $(".sillasEco");
	var btnPasillosEco = $(".pasillosEco");
	var btnBathEco     = $(".bathEco");
	var btnLigthEco    = $(".ligthEco");

	//mostramos contenido de sillas
	function SillasEco () {

		//Ocultamos los otros contenidos
		// $(slidePasillosEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);

		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/sillas-economico.html');
		// function cargaStuff () {
			
		// };
	};

	//mostramos contenido de pasillos ejecutivo
	function PasillosEco () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/pasillos-economico.html');
		
	};

	//Mostramos contenido de baños ejecutivo
	function BathsEco () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/bano-ejecutivo.html');
		
	};

	//Mostramos contenido de luces ejecutivo
	function LightEco () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/light-economico.html');
		
	};

	//Disparamos accion con botones

	$(btnSillasEco).click(SillasEco);
	$(btnPasillosEco).click(PasillosEco);
	$(btnBathEco).click(BathsEco);
	$(btnLigthEco).click(LightEco);

	//::::::::::::Contenido Tecnologia::::::::::::::::::

	//:::::::::::::::::Ejecutivo::::::::::::::::::::::::

	//Botones//
	var btnscreenEx  = $(".screenEx");
	var btnventanaEx = $(".ventanaEx");
	var btnventEx    = $(".ventEx");

	//Mostramos contenido de pantallas ejecutivo
	function ScreenExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/tecnoscreen-ejecutivo.html');
		
	};

	//Mostramos contenido de Ventanas ejecutivo
	function ventanaExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/ventanas-ejecutivo.html');
		
	};

	//Mostramos contenido de Ventilación
	function ventiExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/ventilacion-ejecutivo.html');
		
	};


	//Disparamos acciones con los botones

	$(btnscreenEx).click(ScreenExe);
	$(btnventanaEx).click(ventanaExe);
	$(btnventEx).click(ventiExe);


	//:::::::::::::::::Economico::::::::::::::::::::::::

	// Botones
	var btnScreenEco  = $(".screenEco");
	var btnVentanaEco = $(".ventanaEco");
	var btnVentEco    = $(".ventEco");

	//Mostramos contenido de pantallas economico
	function ScreenEco () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/tecnoscreen-economico.html');
		
	};

	//Disparamos acciones con los botones

	$(btnScreenEco).click(ScreenEco);
	$(btnVentanaEco).click(ventanaExe);
	$(btnVentEco).click(ventiExe);

	//:::::::::::Contenido Entretenimiento::::::::::::::

	//:::::::::::::::::Ejecutivo::::::::::::::::::::::::

	//Botones//
	var btnonBoardEx  = $(".onBoardEx");
	var btnautoEx = $(".autoEx");

	//Mostramos contenido de entretenimiento a bordo
	function onBoardExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/on-board-ejecutivo.html');
		
	};

	//Mostramos contenido de entretenimiento a bordo
	function autoExe () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/autoservicio-ejecutivo.html');
		
	};
	//Disparamos acciones con los botones

	$(btnonBoardEx).click(onBoardExe);
	$(btnautoEx).click(autoExe);

	//:::::::::::::::::Economico::::::::::::::::::::::::

	//Botones//
	var btnonBoardEco = $(".onBoardEco");
	var btnventEco    = $(".ventEco");

	//Mostramos contenido de entretenimiento a bordo
	function onBoardEco () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/on-board-economico.html');
		
	};

	function ventiEco () {

		//Ocultamos los otros contenidos
		// $(slideSillasEx).fadeOut();

		//Mostramos el overlay
		$(contenedor).css("display", "block");
		$(contenedor).removeClass('fadeOut');
		$(contenedor).addClass('animated fadeIn');
		// $(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', cargaStuff);
		//Cargamos el contenido actual
		$(cargador).attr('src', 'partials/ventilacion-economico.html');
		
	};

	//Disparamos acciones con los botones

	$(btnonBoardEco).click(onBoardEco);
	$(btnventEco).click(ventiEco);


	//::::::::Funciones Generales Lightbox::::::::::::

	var closeBtn = $(".close");
	$(closeBtn).click(function() {
		$(contenedor).removeClass('fadeIn');
		$(contenedor).addClass('fadeOut');
		$(contenedor).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(contenedor).css("display", "none");
			$(cargador).attr('src'," ");
			$(".Title").removeClass("fadeInLeft");
		});

	});

//Fin Boeing 787
});