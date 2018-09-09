$(document).ready(function() {
	// 返回
	$("#back").bind("click", function(){
		window.history.go(-1);
	});

	// 给页面标题 .header h1 添加 letter-spacing 
	var h1Len = $(".header h1").text().length;
	switch(h1Len) {
		case 1: {
            $(".header h1").css({
                letterSpacing: 0,
                paddingLeft: 0
            });
            break;
		}
		case 2: {
            $(".header h1").css({
                letterSpacing: "0.7rem",
                paddingLeft: "0.7rem"
            });
            break;
		}
		case 3: {
            $(".header h1").css({
                letterSpacing: "0.4rem",
                paddingLeft: "0.4rem"
            });
            break;
		}
		default: {
            $(".header h1").css({
                fontSize: "0.8rem",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            });
		}
	}

	// 菜单	
	$("#menu").click(function(e){
		$("#navList").slideToggle();
        $(document).on("click", function () {
            $("#navList").slideUp();
        });
        e.stopPropagation();
	});
    $("#navList").on("click", function (e) {
        e.stopPropagation();
    });

    // 传媒页面设置服务列表的宽和高
	$("#mediaServiceList li a i").css("lineHeight", parseFloat($("#mediaServiceList li figure").height()) + "px");

	// 如果无人机列表图片没有文字说明，将背景去掉
	var $uavInfo = $(".uav-info");
	var uavInfoLen = $uavInfo.length;
	for (var i = 0; i < uavInfoLen; i++) {
		if ( $($uavInfo[i]).find("p").text().length == 0 ) {
			$($uavInfo[i]).css("display","none");
		}
	}
	// 设定图片的高度
	$("#uavList li").height($("#uavList li").width() * 3 / 4);

	// 视频布局方式
    $("#viewtype button").click(function () {
        $(this).addClass("active");
        $(this).siblings("button").removeClass("active");
        if ($(this).hasClass("list-button")){
            if ($("#videoList").hasClass("view")) {
                $("#videoList").removeClass("view");
            }
        } else {
            $("#videoList").addClass("view");
        }
    });
});
