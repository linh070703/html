// 追従(CookiePolicy)の表示
jQuery(function($) {
	
	if ( $('#cookiePolicy').length > 0 ) {
		var cookiePolicy = $('#cookiePolicy');  
		cookiePolicy.hide();
		if(localStorage.getItem('cookieUse') === null) {

			// スクロール時の表示・非表示
			$(window).on("scroll", dispAgree);

			// 同意ボタンクリック
			$('#cookie_agree').on("click", function() {
				$(window).off("scroll", dispAgree);
				localStorage.setItem('cookieUse', 'agree');
				cookiePolicy.hide();
			})
		}

		//スクロールが100に達したらクッキー同意を表示
		function dispAgree() {
			if ($(this).scrollTop() > 100) {
				cookiePolicy.fadeIn();
			} else {
				cookiePolicy.fadeOut();
			}
		}
	}

	
});

// ページ内アンカーリンクのスクロールエフェクト
// ヘッダーが固定の場合はheaderHightにヘッダーの高さを設定(PC/SP要設定)
jQuery(function($) {
    var headerHeight = 0; // ヘッダー追従でない場合
	// var headerHeight = $('header').innerHeight(); // ヘッダー追従の場合
    $('a[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if ( target.length > 0 ) {
            var position = target.offset().top - headerHeight;
            $("html, body").animate({scrollTop:position}, 550, "swing");
            return false;
        }
    });
})

// ブログサムネイル 中心でトリミング
jQuery(function($) {
    if ( $('.obj_image').length > 0 ) {
        objectFitImages('.obj_image');
    }
});


// ページトップボタンの表示
jQuery(function($) {
	
	if ( $('#pageup').length > 0 ) {
		var topBtn = $('#pageup');    
		topBtn.css("display", "none");
		//スクロールが100に達したらボタン表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
		//スクロールしてトップ
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	}
});


// ヘッダーの固定エフェクト
// jQuery(function($) {
// 	var $header = $('header');
// 	$(window).scroll(function() {
// 		if ($(window).scrollTop() > 50) {
// 			$header.addClass('fixed');
// 		} else {
// 			$header.removeClass('fixed');
// 		}
// 	});
// });



// レスポンシブ画像切り替え imgにclass「js-image-switch」
jQuery(function($) {
	
	if ( $('.js-image-switch').length > 0 ) {
		
		var $elem = $('.js-image-switch');
		var sp = '_sp.';
		var pc = '_pc.';
		// 画像を切り替えるウィンドウサイズ
		var replaceWidth = 768;

		function imageSwitch() {
			var windowWidth = parseInt($(window).width());
			$elem.each(function() {
				var $this = $(this);
				if(windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));
				} else {
					$this.attr('src', $this.attr('src').replace(pc, sp));
				}
			});
		}
		imageSwitch();

		var resizeTimer;
		$(window).on('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				imageSwitch();
			}, 200);
		});
	}
});


// アコーディオンの起動
jQuery(function($) {
	
	
	if ( $('dl.accordion dt').length > 0 ) {
		
		$("dl.accordion dt").click(function(){
			$(this).next("dd").slideToggle();
			$(this).toggleClass("open");
		});
	}
});

// ドロワーメニュー
jQuery(function($) {
    if ($('#toggle').length > 0) {
		$('#toggle').click(function () {
			$(this).toggleClass('toggle_active');
			$('#drawer_layer').fadeToggle();
			$('body').toggleClass('drawer_open');
			
			if ($(this).hasClass('toggle_active')) {
				$('nav').addClass('is_open');
				$('nav').removeClass('is_close');
			} else {
				$('nav').removeClass('is_open');
				$('nav').addClass('is_close');
			}
		});
		
		$('#drawer_layer').click(function () {
			$(this).fadeOut();
			$('#toggle').removeClass('toggle_active');
			$('body').removeClass('drawer_open');
			$('nav').removeClass('is_open');
			$('nav').addClass('is_close');
		});
		
		// エリア内リンク用
		$('nav a').on('click', function(){
			// if (window.innerWidth <= 768) {
			if ($('#toggle:visible').length > 0) {
				$('#toggle').click();
			}
		});
	}
    
});


// facebookプラグインリサイズ処理
jQuery(function($) {
	
	if ( $('#pageplugin').length > 0 ) {

		var windowWidth = $(window).width();
		var htmlStr = $('#pageplugin').html();
		var timer = null;
		$(window).on('resize',function() {
			var resizedWidth = $(window).width();
			if(windowWidth != resizedWidth && resizedWidth < 500) {
				clearTimeout(timer);
				timer = setTimeout(function() {
					$('#pageplugin').html(htmlStr);
					window.FB.XFBML.parse();
			   		//window.FB.XFBML.parse()で再レンダリングします。
					var windowWidth = $(window).width();
				}, 500);
			}
		});
	}
});