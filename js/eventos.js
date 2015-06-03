var inicio = function()
{
	
	var mostrarhtml = function()
	{
		$("#section2").show("slow");
		$("#section3").hide("fast");
		$("#section4").hide("fast");
		$("#section5").hide("fast");
		$("#section6").hide("fast");

	}
	var mostrarcss = function()
	{
		$("#section3").show("slow");
		$("#section2").hide("fast");
		$("#section4").hide("fast");
		$("#section5").hide("fast");
		$("#section6").hide("fast");

	}
	var mostrarjs = function()
	{
		$("#section4").show("slow");
		$("#section2").hide("fast");
		$("#section3").hide("fast");
		$("#section5").hide("fast");
		$("#section6").hide("fast");

	}
	var mostrarphp = function()
	{
		$("#section5").show("slow");
		$("#section2").hide("fast");
		$("#section3").hide("fast");
		$("#section4").hide("fast");
		$("#section6").hide("fast");

	}
	var mostrardatos = function()
	{
		$("#section6").show("slow");
		$("#section2").hide("fast");
		$("#section3").hide("fast");
		$("#section4").hide("fast");
		$("#section5").hide("fast");

	}

	$("#btn_html").on("click", mostrarhtml);
	$("#btn_css").on("click", mostrarcss);
	$("#btn_js").on("click", mostrarjs);
	$("#btn_php").on("click", mostrarphp);
	$("#btn_datos").on("click", mostrardatos);
}
$(document).on("ready",inicio);
