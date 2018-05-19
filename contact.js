$(document).ready(function(){   
    $("#quotename").focusin(function(){
    		$( "#name-label" ).animate({
    			color:"#01c7f8",
    			fontSize:"10px"
    	});
	});
    $("#quotename").focusout(function(){
    		$( "#name-label" ).animate({
    			color:"#000",
    			fontSize:"15px"
    	});
	});
	$("#quotemail").focusin(function(){
    		$( "#mail-label" ).animate({
    			color:"#01c7f8",
    			fontSize:"10px"
    	});
	});
    $("#quotemail").focusout(function(){
    		$( "#mail-label" ).animate({
    			color:"#000",
    			fontSize:"15px"
    	});
	});
	$("#quotephone").focusin(function(){
    		$( "#phone-label" ).animate({
    			color:"#01c7f8",
    			fontSize:"10px"
    	});
	});
    $("#quotephone").focusout(function(){
    		$( "#phone-label" ).animate({
    			color:"#000",
    			fontSize:"15px"
    	});
	});
	$("#quotearea").focusin(function(){
    		$( "#area-label" ).animate({
    			color:"#01c7f8",
    			fontSize:"10px"
    	});
	});
    $("#quotearea").focusout(function(){
    		$( "#area-label" ).animate({
    			color:"#000",
    			fontSize:"15px"
    	});
	});
	$("#quotedesc").focusin(function(){
    		$( "#desc-label" ).animate({
    			color:"#01c7f8",
    			fontSize:"10px"
    	});
	});
    $("#quotedesc").focusout(function(){
    		$( "#desc-label" ).animate({
    			color:"#000",
    			fontSize:"15px"
    	});
	});
	$("#quotesubmit").click(function(){
		var quoteName  = $("#quotename").val();
  		var quoteMail = $("#quotemail").val();
   		var quotePhone = $("#quotephone").val();
   		var quoteArea = $("#quotearea").val();
   		var quoteDesc = $("#quotedesc").val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var str = quotePhone.length;
		if(quoteName==""){
			document.getElementById("quotename").style.borderBottom="2px solid red";
            document.getElementById("name-right").style.display="none";
            document.getElementById("quotename").style.marginBottom="15px";
		}
		else{
			document.getElementById("name-right").style.display="block";
            document.getElementById("quotename").style.marginBottom="0px";
            document.getElementById("quotename").style.borderBottom="1px solid #9e9e9e";
		}
		if (reg.test(quoteMail) == false){	
			document.getElementById("quotemail").style.borderBottom="2px solid red";
            document.getElementById("mail-right").style.display="none";
            document.getElementById("quotemail").style.marginBottom="15px";
		}
		else{
            document.getElementById("mail-right").style.display="block";
            document.getElementById("quotemail").style.marginBottom="0px";
            document.getElementById("quotemail").style.borderBottom="1px solid #9e9e9e";
		}
		if(str!="10"){	
			document.getElementById("quotephone").style.borderBottom="2px solid red";
            document.getElementById("phone-right").style.display="none";
            document.getElementById("quotephone").style.marginBottom="15px";
		}
		else{
			document.getElementById("quotephone").style.borderBottom="2px solid #9e9e9e";
            document.getElementById("phone-right").style.display="block";
            document.getElementById("quotephone").style.marginBottom="0px";
		}
	});
});