// JavaScript Document
	
		
		var cntnum=document.getElementById("countnum1"); 
		var waternum=document.getElementById("waternum1");
		var percent=cntnum.innerText;
		var interval1;
		interval1=setInterval(function(){ 
		  percent++; 
		  cntnum.innerHTML = percent; 
		  waternum.style.transform='translate(0'+','+(100-percent)+'%)';
		  if(percent==60){
		    clearInterval(interval1);
		  }
		},60);



		
	

 $(document).ready(function () {
    $('#navmenu li a').click(function(e) {

        $('#navmenu li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
});