
3function favSubmitted() {
	$("#fav").click(function(evant){
		event.preventDefault();
		var favName= $("#favName").val();
		var favLang= $("#favLang").val();
		var favUrl= $("#favUrl").val();
		getAjax(favName,favLang,favUrl);
		event.stopPropagation();
	})
}

function getAjax(favName,favLang,favUrl){
	var url="./js/favproject.json"

	$.ajax({
		url: url,
		dataType: "json",
		success: function(response){
			$("#favresult").html('');
			$("#favresult").show();
			$("#favresult").fadeIn("slow",showFavResult(response));
		}
	})

}

function showFavResult(response) {
	$.each(response,function(index,repo) {
		var linkName= $('<a>').attr('href',repo.fav_url)
		                      .text(repo.name)
		                      .attr('id','fav_name')
		                      .attr('target','_blank')
	    var fav_language= $('<h5>').text(repo.language)
	                               .attr('id','fav_lang')
    $("#favresult").append(linkName,fav_language)

	})
}