// トップスライダーの起動 
jQuery(function($) {

	if ( $('#slider').length > 0 ) {

		// カルーセルスライダーの設定
		var options = {
			autoplay: true,
			arrows: true,
			infinite: true,
			autoplaySpeed: 4000,	//　スライダー表示時間
			speed: 1000,			// スライド変化時間
			dots: true,
			// pauseOnFocus: false,		// スライダーにフォーカスしたらオートプレイを停止
			// pauseOnHover: false,		// スライダーにマウスオーバーでオートプレイを停止
			// pauseOnDotsHover: false,	// ドットナビゲーションにフォーカスしたらオートプレイを停止
		}

		// フェードスライダーの設定
		/* ★★★ フェードスライダーの時はこちらのoptionsを使用する ★★★
		var options = {
			autoplay: true,
			arrows: true,
			infinite: true,
			autoplaySpeed: 4000,	//　スライダー表示時間
			speed: 2000,			// スライド変化時間
			dots: true,
			fade: true,
			pauseOnFocus: false,		// スライダーにフォーカスしたらオートプレイを停止
			pauseOnHover: false,		// スライダーにマウスオーバーでオートプレイを停止
			pauseOnDotsHover: false,	// ドットナビゲーションにフォーカスしたらオートプレイを停止
		}
		*/

		$('#slider').slick(options);
	}
});
