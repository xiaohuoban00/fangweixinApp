window.app={
	serverUrl:'http://192.168.31.182:8888',
	isNotNull:function(str){
		if(str!=null&&str!=""&&str!=undefined){
			return true;
		}
		return false;
	},
	showToast:function(msg,type){
		plus.nativeUI.toast(msg,{icon:"image/"+type+".png",verticalAlign:"center"})
	},
	setUserGlobalInfo:function(user){
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo",userInfoStr);
	},
	getUserGlobalInfo:function(){
		return JSON.parse(plus.storage.getItem("userInfo"));
	},
	userLogout:function(){
		plus.storage.removeItem("userInfo");
	}
}