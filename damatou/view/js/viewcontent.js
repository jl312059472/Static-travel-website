$(document).ready(function(){
	var winmedia=$("#winmedia").attr("style");
	var realplay=$("#realplay").attr("style");
	var flash=$("#flash").attr("style");

	var blockmedia=winmedia.substr(9);
	
	if(blockmedia=='none')
		$("#winmedia").hide();

	var blockrealplay=realplay.substr(9);
	if(blockrealplay=='none')
		$("#realplay").hide();

	var blockflash=flash.substr(9);
	if(blockflash=='none')
		$("#flash").hide();
});