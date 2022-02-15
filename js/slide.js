// JavaScript Document
$(document).ready(function(){
	var stt = 0;
	starImg = $("img.slider:first").attr("stt");
	endImg = $("img.slider:last").attr("stt");
	$("img.slider").each(function() {
        if($(this).is(':visible'))
			stt = $(this).attr("stt");
    });
	$("#next").click(function(){
		if(stt == endImg){
			stt = -1;
		}
		next = ++stt;
		$("img.slider").hide();
		$("img.slider").eq(next).show();
	});
	$("#prev").click(function(){
		if(stt==0){
			stt=endImg;
			prev = stt++;
		}
		prev = --stt;
		$("images.slider").hide();
		$("images.slider").eq(prev).show();
	});
	setInterval(function(){
		$("#next").click()
	},2000);
});