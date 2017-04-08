var current_url='https://api.github.com/users/shadiKhaled/repos?sort=updated&per_page=5'
$(document).ready(function(){
	$('#result').hide();
	$("#favresult").hide();
	bindCurrentClickEvent();
	favSubmitted();
})

function bindCurrentClickEvent (){
	$('#btnCurrent').click(getCurrentRepositories)
}
function getCurrentRepositories(e){
	$('#result').html('')
	$('#result').show();
	$.get(current_url,function(repos){
		showCurrentRepositories(repos)
	})

}
function showCurrentRepositories(repos){
	repos.forEach(function(repo){
		var date= new Date(repo.updated_at)
		$('#result').append(`<div><a href='${repo.html_url}' id='fav_name' target='_blank'>${repo.name}</a> <h5 id='lan'>Languge: ${repo.language}</h5><p>Updated at: ${formatDate(date)}</p></div>`)
	})
}
function formatDate(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
// ----------------------------------------------------------------------------
function favSubmitted() {
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