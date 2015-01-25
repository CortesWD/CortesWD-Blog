/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'a787\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home': '&#xe60b;',
		'icon-snacks': '&#xe613;',
		'icon-bath': '&#xe600;',
		'icon-confort': '&#xe601;',
		'icon-entretenimiento': '&#xe602;',
		'icon-left-over': '&#xe603;',
		'icon-light': '&#xe604;',
		'icon-menu': '&#xe605;',
		'icon-on-board': '&#xe606;',
		'icon-pasillos': '&#xe607;',
		'icon-right-over': '&#xe608;',
		'icon-screen': '&#xe609;',
		'icon-sillas': '&#xe60a;',
		'icon-tech': '&#xe60c;',
		'icon-tv': '&#xe60d;',
		'icon-ventana': '&#xe60e;',
		'icon-ventilacion': '&#xe60f;',
		'icon-close': '&#xe610;',
		'icon-left': '&#xe611;',
		'icon-right': '&#xe612;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
