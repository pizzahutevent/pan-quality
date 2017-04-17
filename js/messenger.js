'use strict';
/* jshint devel:true, latedef:false,unused: false  */
/*global app, $ */
// alert($('html').attr('class'));
if($('html.ios').length || $('html.android').length){
	setTimeout(function () { 
		if($('html.ios').length){
			location.href = "https://itunes.apple.com/tw/app/messenger/id454638411?mt=8"; 
		}else{
			location.href = "https://play.google.com/store/apps/details?id=com.facebook.orca&hl=zh_TW"; 
		}

	}, 250);
	if($('html.ios').length){
		location.href = "fb-messenger://user-thread/263705449348";
	}else{
		location.href = "fb-messenger://user/263705449348";
	}
}else{
	if($('html.desktop').length){
		location.href = "https://www.facebook.com/messages/t/263705449348";
	}else{
		location.href = 'https://m.facebook.com/messages/compose/?ids=263705449348';
	}
}
//# sourceMappingURL=messenger.js.map
