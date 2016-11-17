$(function(){
				var navFlag = true;
	$(".nav-button").on('click', function() {
				

				// 左边菜单栏动画
				$(".nav-list").toggleClass("nav-list-show");
				$(".section .fp-tableCell").find(".content").toggleClass("zhezhao-translate");
				//菜单列表动画
				if (navFlag == true) {

					// 第一次点击出现遮罩层
	                $(".nav-zhezhao").fadeTo(1000,0.9);


	                //第一次点击菜单按钮变关闭按钮
	                $(".nav-button i").fadeOut(500, function() {
	                	$(".nav-button i").toggleClass("baise");
	                	$(".nav-button i").removeClass('icon-caidan01');
	                	$(".nav-button i").addClass('icon-chenghao1');
	                	$(".nav-button i").fadeIn(500);
	                });

	                

	                //点击按钮让所有li都向右移500px
					$(".main-nav .nav-list li").css("padding-left","500px")
					
	                $(".main-nav .nav-list li:eq(0)").animate({
	                    "padding-left":"0px",
	                },1000);
	                $(".main-nav .nav-list li:eq(1)").animate({
	                    "padding-left":"0px",
	                },1050);
	                $(".main-nav .nav-list li:eq(2)").animate({
	                    "padding-left":"0px",
	                },1100);
	                $(".main-nav .nav-list li:eq(3)").animate({
	                    "padding-left":"0px",
	                },1150);
	                $(".main-nav .nav-list li:eq(4)").animate({
	                    "padding-left":"0px",
	                },1200);
	                $(".main-nav .nav-list li:eq(5)").animate({
	                    "padding-left":"0px",
	                },1250);
	                $(".main-nav .nav-list li:eq(6)").animate({
	                    "padding-left":"0px",
	                },1300);
	                $(".main-nav .nav-list li:eq(7)").animate({
	                    "padding-left":"0px",
	                },1350);
					$(".main-nav .nav-list li:eq(8)").animate({
						"padding-left":"0px",
					},1300);
					$(".main-nav .nav-list li:eq(9)").animate({
						"padding-left":"0px",
					},1250);


	                navFlag = false;
	                return navFlag;
				}else {
					// 第二次点击关闭遮罩层
					$(".nav-zhezhao").fadeOut(1000);


	                //第二次点击关闭按钮变菜单按钮
	                $(".nav-button i").fadeOut(500, function() {
	                	$(".nav-button i").toggleClass("baise");
	                	$(".nav-button i").removeClass('icon-chenghao1');
	                	$(".nav-button i").addClass('icon-caidan01');
	                	$(".nav-button i").fadeIn(500);
	                });



	                navFlag = true;
	                return navFlag;
				};




	});
})