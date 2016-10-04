jQuery(function(){
	jQuery("#sideBar_Jude .panel-heading a").on("click",function(){
		var btn_this = jQuery(this);
		var btn_body = btn_this.parents('div.panel-heading').siblings();
		var btn_body_a = btn_this.parents('div.panel-heading').siblings().find('a');
		var num_get = parseInt(btn_this.parents('div.panel-heading').siblings().data('index'));
		var other_day = btn_this.parents('div.panel').siblings().find('a');
		var other_day_body = btn_this.parents('div.panel').siblings().find('div.panel-collapse');
		if(num_get==1){			
			btn_this.toggleClass('light_image');	
			other_day.removeClass('light_image');
			smooth();
		}else if(num_get==2){
			btn_this.toggleClass('light_image');
			other_day.removeClass('light_image');
			smooth();
		}else if(num_get==3){
			btn_this.toggleClass('light_image');
			other_day.removeClass('light_image');
			smooth();
		}else if(num_get==4){
			btn_this.toggleClass('light_image');
			other_day.removeClass('light_image');
			smooth();
		}else if(num_get==5){
			btn_this.toggleClass('light_image');
			other_day.removeClass('light_image');
			smooth();
		}
		jQuery(".panel-body a").removeClass('change_image');
		function smooth(){
		if(btn_this.hasClass('light_image')){
			btn_body.addClass('in');
			btn_body.animate({'height':btn_body_a.length *36});
			other_day_body.animate({'height':0},function(){
				other_day_body.removeClass('in');
			});
		}else{
			btn_body.animate({'height':0},function(){
				btn_body.removeClass('in');
			});
		}
	}
	})
	jQuery("#sideBar_Jude .panel-body a").on("click",function(){
		jQuery(".panel-body a").removeClass('change_image');
		jQuery(this).toggleClass('change_image');
	})
})
