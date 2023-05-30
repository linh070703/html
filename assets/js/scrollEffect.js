
// スクロールエフェクト

/** スクロールエフェクト */
/** .init の要素出現時にinitを削除する */
/** init削除で起動するエフェクトはCSSで要定義 */
jQuery(function($) {
	var ww = $(window).width();
	var wh = $(window).height();
	var elms = [];

	// 起動位置（画面下から●px来たら）の設定
	var d_0 = 0;
	var d_50 = 50;
	var d_100 = 100;
	var d_200 = 200;
	if (ww < 569) {
		d_50 = 30;
		d_100 = 50;
		d_200 = 100;
	}

	// 初期設定
	init();


	$(window).on("resize", function() {
		if ($(window).width !== ww || $(window).width > 768 ) {
			ww = $(window).width();
			wh = $(window).height();
			if (ww < 569) {
				d_50 = 30;
				d_100 = 50;
				d_200 = 100;
			} else {
				d_50 = 50;
				d_100 = 100;
				d_200 = 200;
			}
			reset();
		}

	});


	// 初期設定
	function init() {


		if($('.init').length > 0) {
			$('.init').each(function() {
				var up = d_100;
				if ($(this).hasClass("d_200")) {
					up = d_200;
				} else if ($(this).hasClass("d_50")) {
					up = d_50;
				} else if ($(this).hasClass("d_0")) {
					up = d_0;
				}
				elms.push({done: false, position: $(this).offset().top, elm: $(this), up: up});
			});
		}

	}

	// 設定のリセット
	function reset() {

		if($('.init').length > 0) {
			for (var i=0; i < elms.length; i++) {
				if (elms[i].done == false) {
					var up = d_100;
					if (elms[i].elm.hasClass("d_200")) {
						up = d_200;
					} else if (elms[i].elm.hasClass("d_50")) {
						up = d_50;
					} else if (elms[i].elm.hasClass("d_0")) {
						up = d_0;
					}
					elms[i].position = elms[i].elm.offset().top;
					elms[i].up = up;
				}
			}
		}

	}

	// スクロールエフェクトの起動
	$(window).on("scroll", function() {

		scroll = $(window).scrollTop();

		if($('.init').length > 0) {
			for(var i=0; i < elms.length; i++) {
				if((scroll > (elms[i].position - wh + elms[i].up)) && elms[i].done == false ) {
					elms[i].elm.removeClass("init");
					elms[i].done = true;
					reset();
				}
			}

		}

	});

});



/**
 * 1pxスクロールさせる
 */
function scrollPx() {
	var scroll = jQuery(window).scrollTop();
	window.scrollTo(0, scroll + 1);
}

// ロード時に1pxスクロールさせる
jQuery(window).on("load", function() {
	scrollPx();
})
