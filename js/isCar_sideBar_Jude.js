
jQuery(function(){
	console.log('1');
	jQuery("#sideBar_Jude .panel-heading a").bind("click",function(){
		console.log('1');
		var a_click = parseInt(jQuery(this).parent().parent().siblings().data('index'));
		var other_day = jQuery(this).parent().parent().parent().siblings().find('h4').find('a');
		if(a_click==1){			
			jQuery(this).toggleClass('light_image');
			other_day.removeClass('light_image');
		}else if(a_click==2){
			jQuery(this).toggleClass('light_image');
			other_day.removeClass('light_image');
		}else if(a_click==3){
			jQuery(this).toggleClass('light_image');
			other_day.removeClass('light_image');
		}else if(a_click==4){
			jQuery(this).toggleClass('light_image');
			other_day.removeClass('light_image');
		}else{
			jQuery(this).toggleClass('light_image');
			other_day.removeClass('light_image');
		}
		jQuery(".panel-body a").removeClass('change_image');
	})
	jQuery("#sideBar_Jude .panel-body a").on("click",function(){
		jQuery(".panel-body a").removeClass('change_image');
		jQuery(this).toggleClass('change_image');
	})
	
})
